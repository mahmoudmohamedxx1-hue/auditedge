"use client"

/** Client-side audio helpers for the AI tutor's voice features. */

/** Convert a recorded audio Blob (webm/opus from MediaRecorder) to a
 *  16 kHz mono 16-bit PCM WAV, base64-encoded for the /api/ai/asr endpoint.
 *  16 kHz keeps the upload small while staying well above speech quality. */
export async function audioBlobToWavBase64(blob: Blob): Promise<string> {
  const arrayBuffer = await blob.arrayBuffer()

  const AC: typeof AudioContext =
    window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
  const decodeCtx = new AC()
  let decoded: AudioBuffer
  try {
    decoded = await decodeCtx.decodeAudioData(arrayBuffer.slice(0))
  } finally {
    void decodeCtx.close()
  }

  // resample to 16 kHz mono via OfflineAudioContext
  const targetRate = 16000
  const frames = Math.max(1, Math.ceil(decoded.duration * targetRate))
  let mono: Float32Array
  let monoRate = targetRate
  let usedFallback = false
  try {
    const OAC: typeof OfflineAudioContext =
      window.OfflineAudioContext ||
      (window as unknown as { webkitOfflineAudioContext: typeof OfflineAudioContext }).webkitOfflineAudioContext
    const offline = new OAC(1, frames, targetRate)
    const src = offline.createBufferSource()
    src.buffer = decoded
    src.connect(offline.destination)
    src.start()
    const rendered = await offline.startRendering()
    mono = rendered.getChannelData(0)
  } catch {
    // fallback: naive mixdown at native rate (still valid WAV for ASR)
    mono = mixToMono(decoded)
    monoRate = decoded.sampleRate
    usedFallback = true
  }

  return wavBase64FromFloat32(mono, usedFallback ? monoRate : targetRate)
}

function mixToMono(buffer: AudioBuffer): Float32Array {
  const out = new Float32Array(buffer.length)
  for (let ch = 0; ch < buffer.numberOfChannels; ch++) {
    const data = buffer.getChannelData(ch)
    for (let i = 0; i < data.length; i++) out[i] += data[i] / buffer.numberOfChannels
  }
  return out
}

function wavBase64FromFloat32(samples: Float32Array, sampleRate: number): string {
  const bytesPerSample = 2
  const dataSize = samples.length * bytesPerSample
  const buffer = new ArrayBuffer(44 + dataSize)
  const view = new DataView(buffer)

  const writeStr = (offset: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i))
  }

  writeStr(0, "RIFF")
  view.setUint32(4, 36 + dataSize, true)
  writeStr(8, "WAVE")
  writeStr(12, "fmt ")
  view.setUint32(16, 16, true) // fmt chunk size
  view.setUint16(20, 1, true) // PCM
  view.setUint16(22, 1, true) // mono
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * bytesPerSample, true) // byte rate
  view.setUint16(32, bytesPerSample, true) // block align
  view.setUint16(34, 16, true) // bits per sample
  writeStr(36, "data")
  view.setUint32(40, dataSize, true)

  let offset = 44
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]))
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true)
    offset += 2
  }

  // base64 in chunks (btoa chokes on very large strings)
  const bytes = new Uint8Array(buffer)
  let binary = ""
  const CHUNK = 0x8000
  for (let i = 0; i < bytes.length; i += CHUNK)
    binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK))
  return btoa(binary)
}

/** Strip markdown decorations so the TTS voice reads clean prose. */
export function stripMarkdown(md: string): string {
  return md
    // fenced code blocks → "code block" is not useful spoken; keep content out
    .replace(/```[\s\S]*?```/g, " ")
    // tables: keep cell text, drop pipes and separator rows
    .replace(/^\|[-\s|:]+\|$/gm, " ")
    .replace(/\|/g, " ")
    // images ![alt](url)
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    // links [text](url) → text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    // headers, bold, italics, inline code marks
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/`([^`]*)`/g, "$1")
    // blockquotes and list markers
    .replace(/^>\s?/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    // horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, " ")
    // collapse whitespace
    .replace(/\n{2,}/g, "\n")
    .replace(/[ \t]+/g, " ")
    .trim()
}

/** Split text into TTS-sized chunks (≤ 900 chars) at sentence boundaries.
 *  Understands Arabic punctuation (؟ …) as well as Latin. */
export function splitForTts(text: string, maxLen = 900): string[] {
  const sentences = text.match(/[^.!?؟…\n]+[.!?؟…]+|\n+|[^.!?؟…\n]+$/g) ?? [text]
  const chunks: string[] = []
  let current = ""
  for (const s of sentences) {
    const piece = s.trim()
    if (!piece) continue
    if (piece.length > maxLen) {
      // hard-split very long sentences at word boundaries
      if (current) {
        chunks.push(current.trim())
        current = ""
      }
      let rest = piece
      while (rest.length > maxLen) {
        let cut = rest.lastIndexOf(" ", maxLen)
        if (cut <= 0) cut = maxLen
        chunks.push(rest.slice(0, cut).trim())
        rest = rest.slice(cut)
      }
      current = rest
    } else if ((current + " " + piece).length <= maxLen) {
      current = current ? current + " " + piece : piece
    } else {
      if (current) chunks.push(current.trim())
      current = piece
    }
  }
  if (current.trim()) chunks.push(current.trim())
  return chunks.filter(Boolean)
}
