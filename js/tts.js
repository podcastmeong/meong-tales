// ============================================================================
// Meong Tales — Dialogue Player (Oyen & Momo read the story aloud)
// ----------------------------------------------------------------------------
// Uses the browser's built-in Web Speech API (speechSynthesis) — free, no
// key, no network. Two DISTINCT voices, mirroring Podcast Meong's locked
// voices (Oyen = high, fast; Momo = low, slow):
//   Oyen: highest-pitch voice available, pitch 1.6, rate 1.15
//   Momo: lowest-pitch voice available, pitch 0.6, rate 0.9
// The avatar "speaks" while audio plays: the puppet mouth opens/closes with
// the speech rhythm (estimated from utterance timing, since the Web Speech
// API exposes no audio stream). This is a puppet, NOT phoneme lip-sync —
// the UI says so honestly.
// ============================================================================

const VOICE_LOCK = {
  oyen: { pitch: 1.6, rate: 1.15, label: "Oyen · high" },
  momo: { pitch: 0.6, rate: 0.9, label: "Momo · low" },
};

let voices = [];
let currentUtterance = null;
let puppetTimer = null;
let speaking = false;

function loadVoices() {
  voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
}
if (typeof window !== "undefined" && window.speechSynthesis) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function pickVoice(speaker, lang) {
  const wantLang = lang === "en" ? "en" : "id";
  const pool = voices.filter((v) => (v.lang || "").toLowerCase().startsWith(wantLang));
  const list = pool.length ? pool : voices;
  if (!list.length) return null;
  // Prefer a voice whose name hints at the character's register.
  const female = list.filter((v) => /female|zira|samantha|google us english/i.test(v.name));
  const base = female.length ? female : list;
  // Oyen takes the "brighter" (first) voice, Momo the "deeper" (last) one.
  return speaker === "oyen" ? base[0] : base[base.length - 1];
}

export function isTTSAvailable() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  speaking = false;
  stopPuppet();
  document.querySelectorAll(".avatar.speaking").forEach((el) => el.classList.remove("speaking"));
}

/** Start/stop the puppet mouth animation for a given speaker element. */
function startPuppet(speaker) {
  stopPuppet();
  const el = document.querySelector(`.avatar[data-speaker="${speaker}"] .mouth`);
  if (!el) return;
  let open = false;
  puppetTimer = window.setInterval(() => {
    open = !open;
    el.setAttribute("data-open", open ? "1" : "0");
    el.style.transform = open ? "scaleY(1)" : "scaleY(0.15)";
  }, 160);
}

function stopPuppet() {
  if (puppetTimer) { window.clearInterval(puppetTimer); puppetTimer = null; }
  document.querySelectorAll(".avatar .mouth").forEach((m) => {
    m.setAttribute("data-open", "0");
    m.style.transform = "scaleY(0.15)";
  });
}

/**
 * Play a dialogue: [{speaker: "oyen"|"momo", text}] one line at a time.
 * onLine(i) fires when line i starts; onDone() fires at the end.
 * Returns a stop() function.
 */
export function playDialogue(lines, lang, onLine, onDone) {
  stopSpeaking();
  if (!isTTSAvailable() || !lines || !lines.length) {
    if (typeof onDone === "function") onDone("Speech synthesis is not available in this browser.");
    return () => {};
  }
  speaking = true;
  let idx = 0;

  function speakNext() {
    if (!speaking || idx >= lines.length) {
      speaking = false;
      stopPuppet();
      if (typeof onDone === "function") onDone(null);
      return;
    }
    const line = lines[idx];
    const lock = VOICE_LOCK[line.speaker];
    const utt = new window.SpeechSynthesisUtterance(line.text);
    utt.lang = lang === "en" ? "en-US" : "id-ID";
    utt.pitch = lock.pitch;
    utt.rate = lock.rate;
    const voice = pickVoice(line.speaker, lang);
    if (voice) utt.voice = voice;
    currentUtterance = utt;

    document.querySelectorAll(".avatar.speaking").forEach((el) => el.classList.remove("speaking"));
    const avatarEl = document.querySelector(`.avatar[data-speaker="${line.speaker}"]`);
    if (avatarEl) avatarEl.classList.add("speaking");
    startPuppet(line.speaker);
    if (typeof onLine === "function") onLine(idx);

    utt.onend = () => { idx += 1; speakNext(); };
    utt.onerror = () => { idx += 1; speakNext(); };
    window.speechSynthesis.speak(utt);
  }

  speakNext();
  return () => stopSpeaking();
}

export { VOICE_LOCK };
