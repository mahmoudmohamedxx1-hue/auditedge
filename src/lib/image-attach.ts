import type { AiImageAttachment } from "@/hooks/use-ai-chat"

/** Client-side image intake shared by the full AI tutor and the quick-ask
 *  popup: validates type/size, then downscales to a vision-model payload
 *  (max 1024px) plus a small thumbnail (max 160px) persisted with the
 *  conversation history.
 *
 *  Returns `{ ok: true, attachment }` or `{ ok: false, reason }` so callers
 *  can toast the right bilingual message. */
export async function prepareImage(
  file: File
): Promise<
  | { ok: true; attachment: AiImageAttachment }
  | { ok: false; reason: "type" | "size" | "decode" }
> {
  if (!/^image\/(png|jpe?g|webp|gif)$/i.test(file.type)) return { ok: false, reason: "type" }
  if (file.size > 12 * 1024 * 1024) return { ok: false, reason: "size" }

  const img = await new Promise<HTMLImageElement | null>((resolve) => {
    const url = URL.createObjectURL(file)
    const el = new Image()
    el.onload = () => {
      URL.revokeObjectURL(url)
      resolve(el)
    }
    el.onerror = () => {
      URL.revokeObjectURL(url)
      resolve(null)
    }
    el.src = url
  })
  if (!img) return { ok: false, reason: "decode" }

  const draw = (source: HTMLImageElement, max: number, quality: number) => {
    const scale = Math.min(1, max / Math.max(source.width, source.height))
    const w = Math.max(1, Math.round(source.width * scale))
    const h = Math.max(1, Math.round(source.height * scale))
    const canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h
    canvas.getContext("2d")?.drawImage(source, 0, 0, w, h)
    return canvas.toDataURL("image/jpeg", quality)
  }

  return {
    ok: true,
    attachment: { dataUrl: draw(img, 1024, 0.85), thumb: draw(img, 160, 0.7) },
  }
}
