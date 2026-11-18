# Meong Tales — Cerita Anak Islami dari Satu Kalimat

**#BuildHybridAI 2026 submission (Web/Chrome) — by Podcast Meong**

One sentence becomes a 5-page Islamic bedtime story, told by Oyen (orange cat)
and Momo (grey cat). Parents type a theme — e.g. *"Oyen learns patience while
waiting for fish"* — and the app picks the matching prophet story, writes the
story, and reads it aloud as a mini podcast with two distinct voices.

## Why hybrid? (the judging point)

| Task | Route | Why |
|---|---|---|
| Theme → figure match, moral summary, Oyen & Momo dialogue lines | **On-device · Gemini Nano** (`PREFER_ON_DEVICE`) | Quick, private, free, offline. A child's theme is personal data — it should never have to leave the device for a one-sentence answer. |
| Full 5-page story | **Cloud · Gemini Flash** (`PREFER_IN_CLOUD`) | Long-form creative generation needs the bigger model + content-safety rules. |
| No Firebase config / both routes fail | **Demo · Template** (verified content bank) | The app still works fully offline — and labels itself honestly, never pretending to be AI output. |

Every generation shows a **route badge** (ON-DEVICE / CLOUD / DEMO) and latency,
so judges can see the hybrid routing working. The SDK falls back automatically
(on-device ⇄ cloud) per the Firebase AI Logic hybrid inference design.

## Run it (free, no account needed for demo mode)

```bash
# from this folder — any static server works (ES modules need http, not file://)
python3 -m http.server 8000
# open http://localhost:8000
```

Demo mode works immediately, offline, with the verified content bank
(6 prophets: Nuh, Ayub, Yunus, Yusuf, Musa, Ibrahim — morals and Quran
references copied from Podcast Meong's verified eBook drafts).

## Enable LIVE AI mode (Firebase AI Logic)

1. Create a Firebase project at https://console.firebase.google.com
   (free tier is enough for text inference within usage limits).
2. Console → **AI Services → AI Logic → Get started**; choose the
   **Gemini Developer API** provider (recommended, no cost to start).
   The guided workflow enforces **App Check** for AI Logic.
3. Edit `js/firebase-config.js` in place (it ships with placeholders) and
   paste your real web app config. Web API keys are public identifiers —
   protect the project with App Check enforcement + API-key restrictions
   (see the warning at the top of that file). Never paste a service-account
   key or any server secret anywhere in this repo.
4. App Check debug token (local dev, accepted by the contest):
   set `self.FIREBASE_APPCHECK_DEBUG_TOKEN = true` before the first load
   (e.g. in the browser console), copy the debug token printed in the
   console, and safelist it in the console under
   **Security → App Check → Apps → Manage debug tokens**.
5. On-device inference needs **Chrome desktop 139+** with the flag
   `chrome://flags/#prompt-api-for-gemini-nano-multimodal-input` set to
   **Enabled**, then restart Chrome. Click **"Siapkan Model On-Device"**
   in the app (user gesture required) to download Gemini Nano.
6. Reload — the badge switches to **LIVE · Firebase AI Logic (hybrid)**.

Firebase AI Logic SDK: v12.5.0+ (pinned in the import map in `index.html`).
Verify the pinned version against the Firebase release notes before submitting.

## Content safety (honesty rules)

- Islamic content uses ONLY figures, morals and sources from the verified
  content bank (`js/content-bank.js`, sourced from Podcast Meong's verified
  eBook drafts — Quran only, no hadith).
- The live system prompt forbids the model from inventing verse numbers,
  hadith, names, dates or numbers. If unsure, the model must leave it out.
- Live output is labelled "AI-generated — please verify before reading to
  children". Template output is labelled "verified content".

## Voices

Story read-aloud uses the browser's built-in **Web Speech API**
(`speechSynthesis`) — free, no key. Oyen = high pitch, faster;
Momo = low pitch, slower — mirroring Podcast Meong's locked TTS voices
(Oyen MAI_01 high, Momo MAI_03 low). Avatar mouths move with the speech
rhythm (puppet, not phoneme lip-sync — labelled as such in the UI).

## Files

```
index.html                  App shell + Firebase import map
styles.css                  Soft, warm, kid-friendly styling
js/
  app.js                    UI wiring
  hybrid-router.js          Firebase AI Logic: getAI/getGenerativeModel,
                            InferenceMode, initializeDeviceModel,
                            generateContent + route policy
  story-engine.js           Template story builder + live prompt builder
  content-bank.js           VERIFIED stories, morals, sources, dialogues
  tts.js                    Web Speech API dialogue player (locked voices)
  firebase-config.js        Placeholder config (demo mode) — edit in place to go live
  firebase-config.example.js  Reference copy of the placeholder config
assets/
  oyen-avatar.jpg           Oyen (orange cat) — locked face
  momo-avatar.jpg           Momo (grey cat) — locked face
```

## Tech used (for the submission form)

- Firebase AI Logic (hybrid inference: `PREFER_ON_DEVICE` + `PREFER_IN_CLOUD`)
- Firebase App Check (debug tokens for local dev)
- Web Speech API (free, in-browser TTS)
- Vanilla HTML/CSS/JS — no build step, no paid services

## License

Apache License 2.0 — see `LICENSE`.

## Status before submitting (see LAPORAN-BUILDHYBRIDAI.md)

- [x] App built, tested headless (0 console errors), demo mode works offline
- [ ] Firebase project + App Check debug token (needs Cipta's Firebase account)
- [ ] Live-mode end-to-end test on Chrome desktop 139+
- [ ] Demo video (<3 min, public YouTube) — script ready in NASKAH-VIDEO-DEMO.md
- [ ] Public GitHub repo + push (needs Cipta's decision)
- [ ] Devpost submission (needs Cipta's approval + Devpost account restored)
