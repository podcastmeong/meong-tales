# Naskah Video Demo — Meong Tales (<3 menit, Bahasa Inggris + subtitle)

**Target durasi: 2 menit 30 detik. Bahasa: Inggris (sesuai aturan lomba —
semua materi submit harus Bahasa Inggris atau bersubtitle Inggris).
Rekam layar aplikasi + narasi. JANGAN buat videonya dulu — naskah ini saja,
video dibuat setelah Cipta menyetujui.**

---

## 0:00–0:15 — Hook (tampilkan judul + dua kucing)
**Visual:** Halaman utama Meong Tales, kursor di kolom tema.
**Narasi:** "Parents want bedtime stories that teach good values — but writing
one every night is hard. And children's prompts should stay private.
Meong Tales turns one sentence into a full bedtime story — on-device first."

## 0:15–0:45 — Buat cerita (tampilkan hybrid routing)
**Visual:** Ketik tema: *"Oyen learns patience while waiting for fish"*.
Klik "Make a Story". Sorot badge jalur: **ON-DEVICE (preferred) · Gemini Nano**
untuk pencocokan tema → lalu **CLOUD (preferred) · Gemini Flash** untuk cerita
5 halaman. Tunjukkan halaman cerita + pelajaran + sumber.
**Narasi:** "Quick, private tasks run on-device with Gemini Nano through
Firebase AI Logic — the child's theme never leaves the device. The full
five-page story goes to Gemini Flash in the cloud. Every step shows its
route and latency."

## 0:45–1:15 — Podcast mini (Oyen & Momo bicara)
**Visual:** Klik "Listen". Oyen berbicara (suara tinggi), lalu Momo (suara
rendah). Sorot dialog 2 baris.
**Narasi:** "Then Oyen and Momo read it aloud as a mini podcast — two distinct
voices, high and low. The story teaches patience, from the story of Prophet
Job — with verified sources, never invented verses."

## 1:15–1:45 — Kenapa hybrid? (diagram sederhana di layar)
**Visual:** Tampilkan bagian 'Bagaimana hybrid-nya bekerja?' + alur:
Tema → Nano (on-device) → Flash (cloud) → Cerita + Podcast.
**Narasi:** "This is why hybrid matters: privacy and zero cost for the quick
tasks, the bigger model only where it earns its place. And when there is no
Firebase config, the app still works fully offline from a verified content
bank — honestly labelled as demo, never pretending to be AI."

## 1:45–2:15 — Arsitektur & kode (tampilkan repo)
**Visual:** Buka repo GitHub: tunjukkan `js/hybrid-router.js` —
`getAI`, `getGenerativeModel`, `InferenceMode.PREFER_ON_DEVICE`,
`initializeDeviceModel`, `generateContent`. Tunjukkan lisensi Apache 2.0.
**Narasi:** "The code calls Firebase AI Logic at runtime — real SDK calls,
not a README mention. Open source under Apache 2.0, free to use."

## 2:15–2:30 — Penutup
**Visual:** Kembali ke halaman utama; cerita selesai; logo Podcast Meong.
**Narasi:** "Meong Tales — one sentence, one story, one lesson. Built for
#BuildHybridAI 2026 by Podcast Meong. Thank you!"

---

**Checklist teknis video (sebelum rekam):**
- [ ] Rekam di Chrome desktop 139+ (agar badge LIVE terlihat) — bila belum
      ada konfigurasi Firebase, rekam mode DEMO dan katakan jujur di narasi.
- [ ] Resolusi minimal 720p, suara narasi jelas, subtitle Inggris bila
      narasi Bahasa Indonesia.
- [ ] Durasi akhir ≤ 3 menit (hanya 3 menit pertama dinilai).
- [ ] Upload ke YouTube sebagai video PUBLIK; tautan dimasukkan ke form Devpost.
