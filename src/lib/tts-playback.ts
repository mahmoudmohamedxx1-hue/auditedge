/** App-wide "one TTS playback at a time" registry.
 *
 *  Shared by every SpeakButton and the voice-picker's preview button, so
 *  starting a new playback (answer read-aloud or a voice sample) stops
 *  whichever one is currently playing — regardless of which component
 *  started it. Owner symbols let each participant know if it is still
 *  the active one. */

let currentStop: (() => void) | null = null
let currentOwner: symbol | null = null

/** Take over playback: stops the previous owner, registers `stop` as the
 *  active one. Every claimant MUST eventually release (or be stopped). */
export function claimTts(owner: symbol, stop: () => void): void {
  currentStop?.()
  currentStop = stop
  currentOwner = owner
}

/** Release the claim after playback ends naturally or errors out. */
export function releaseTts(owner: symbol): void {
  if (currentOwner === owner) {
    currentStop = null
    currentOwner = null
  }
}

/** Stop this owner's playback if it is the active one (e.g. its stop button). */
export function stopTtsFor(owner: symbol): void {
  if (currentOwner === owner) {
    currentStop?.()
    currentStop = null
    currentOwner = null
  }
}

/** Stop whatever is playing, whoever started it. */
export function stopAllTts(): void {
  currentStop?.()
  currentStop = null
  currentOwner = null
}

/** The currently-playing owner (for "am I the active one?" checks). */
export function ttsOwner(): symbol | null {
  return currentOwner
}
