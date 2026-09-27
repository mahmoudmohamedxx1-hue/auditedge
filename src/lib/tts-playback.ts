/** App-wide "one TTS playback at a time" registry.
 *
 *  Shared by every SpeakButton and the voice-picker's preview button, so
 *  starting a new playback (answer read-aloud or a voice sample) stops
 *  whichever one is currently playing — regardless of which component
 *  started it. Owner symbols let each participant know if it is still
 *  the active one.
 *
 *  v21: the registry also tracks the ACTIVE AUDIO ELEMENT so any surface
 *  can pause/resume the current playback globally (commute-study control),
 *  not just stop it. */

let currentStop: (() => void) | null = null
let currentOwner: symbol | null = null
let currentAudio: HTMLAudioElement | null = null
let paused = false

/** Take over playback: stops the previous owner, registers `stop` as the
 *  active one. Every claimant MUST eventually release (or be stopped). */
export function claimTts(owner: symbol, stop: () => void): void {
  currentStop?.()
  currentStop = stop
  currentOwner = owner
  currentAudio = null
  paused = false
}

/** v21: the active queue registers its playing <audio> so pause/resume can
 *  reach it from anywhere. Pass null when a chunk ends. */
export function registerTtsAudio(audio: HTMLAudioElement | null): void {
  currentAudio = audio
  if (!audio) paused = false
}

/** v21: pause the current playback (holds the chunk open — the queue waits). */
export function pauseTts(): void {
  if (currentAudio && !paused) {
    paused = true
    currentAudio.pause()
  }
}

/** v21: resume a paused playback. */
export function resumeTts(): void {
  if (currentAudio && paused) {
    paused = false
    void currentAudio.play().catch(() => {})
  }
}

/** v21: toggle pause/resume on the current playback. */
export function toggleTtsPause(): void {
  if (paused) resumeTts()
  else pauseTts()
}

/** v21: is the current playback user-paused? */
export function isTtsPaused(): boolean {
  return paused
}

/** Release the claim after playback ends naturally or errors out. */
export function releaseTts(owner: symbol): void {
  if (currentOwner === owner) {
    currentStop = null
    currentOwner = null
    currentAudio = null
    paused = false
  }
}

/** Stop this owner's playback if it is the active one (e.g. its stop button). */
export function stopTtsFor(owner: symbol): void {
  if (currentOwner === owner) {
    currentStop?.()
    currentStop = null
    currentOwner = null
    currentAudio = null
    paused = false
  }
}

/** Stop whatever is playing, whoever started it. */
export function stopAllTts(): void {
  currentStop?.()
  currentStop = null
  currentOwner = null
  currentAudio = null
  paused = false
}

/** The currently-playing owner (for "am I the active one?" checks). */
export function ttsOwner(): symbol | null {
  return currentOwner
}
