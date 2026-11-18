# LAPORAN — Entri #BuildHybridAI 2026: Meong Tales

**Status: APLIKASI SELESAI + TERUJI (mode demo). BELUM SUBMIT — jangan daftar/kirim
ke Devpost sebelum Cipta menyetujui karya persisnya DAN akun Devpost pulih.**

Folder: `~/workspace/your_files/oyen-podcast/lomba-buildhybridai-2026/`

---

## 1. Aturan resmi yang terverifikasi

Sumber utama: https://firebasehybridaihackathon.devpost.com/
(dibuka 19 Nov 2026; URL `buildhybridai.devpost.com` dari tugas awal TIDAK
bisa dibuka — alamat resmi yang benar adalah `firebasehybridaihackathon.devpost.com`).
Dokumen pendukung: https://firebase.google.com/docs/ai-logic/hybrid-on-device-inference

| Hal | Isi (terverifikasi) |
|---|---|
| Hadiah | Total **$30.000**: Grand Prize $10.000, 1st Runner Up $7.000, 2nd Runner Up $4.000, Best iOS $3.000, Best Android $3.000, Best Web/Chrome $3.000 |
| Tenggat | **30 Nov 2026, 17:00 ET** (= 1 Des 2026, 05:00 WIB). Periode: 11–30 Nov 2026 |
| Yang dibuat | Aplikasi Gen AI memakai **Firebase AI Logic** + produk Firebase pendukung (AppCheck, RemoteConfig, Firestore, Authentication). App Check wajib; debug token diterima |
| Platform | Web (Chrome) Gemini Nano 4, Android Gemini Nano 4, iOS Apple Foundation Models — semua via Firebase AI Logic. Multi-platform dipertimbangkan kuat untuk Grand Prize; aplikasi satu platform yang luar biasa tetap bisa menang |
| Yang disubmit | Aplikasi demo yang jalan + repo publik (GitHub/GitLab) berlisensi open source (Apache lebih disukai) + video demo ≤3 menit di YouTube publik + deskripsi teks (cara memakai Firebase AI Logic, fitur, value proposition). Semua materi Bahasa Inggris. Proyek harus gratis |
| Syarat kode | Repo HARUS menunjukkan pemakaian Firebase AI Logic saat runtime — diimpor dan BENAR-BENAR DIPANGGIL, bukan sekadar disebut di README |
| Kriteria nilai | (1) Technological Implementation — seberapa baik memakai hybrid inference; (2) Design — pengalaman produk yang utuh; (3) Potential Impact — masalah nyata untuk audiens nyata; (4) Quality of the Idea — pemakaian Firebase AI Logic yang kreatif dan tidak biasa |
| AI diizinkan | Ya — lomba ini justru tentang membangun dengan AI. Proyek baru maupun aplikasi lama yang diperbarui signifikan boleh ikut |
| Biaya | Inferensi teks Firebase AI Logic gratis dalam batas pemakaian. Kuota Akun Google (untuk fitur lanjutan seperti image generation) bisa diminta — Sprint 3 (terakhir): minta s.d. 25 Nov 10:00 PT, akun dikirim 27 Nov |

**BELUM TERVERIFIKASI:** versi pasti Firebase JS SDK di CDN gstatic
(`12.5.0` dipakai di import map sesuai dokumen "SDK v12.5.0+" — verifikasi
ke release notes Firebase sebelum submit). Jadwal reset kuota gratis harian
Firebase AI Logic tidak dipublikasikan di halaman lomba.

---

## 2. Konsep yang dipilih: Meong Tales

**"Cerita Anak Islami dari Satu Kalimat"** — orang tua mengetik satu kalimat
tema (mis. *"Oyen belajar sabar saat menunggu ikan"*), aplikasi memilih kisah
nabi yang cocok, menulis cerita anak 5 halaman, lalu Oyen & Momo membacakannya
sebagai podcast mini dua suara.

**Alasan pilihan (dinilai dari kriteria lomba):**
- **Hybrid inference yang beralasan, bukan tempelan.** Tugas cepat & privat
  (cocokkan tema → tokoh, rangkum pelajaran, dialog Oyen & Momo) jalan
  **on-device (Gemini Nano, `PREFER_ON_DEVICE`)** — prompt anak tetap di
  perangkat, gratis, bisa offline. Cerita 5 halaman penuh jalan **cloud
  (Gemini Flash, `PREFER_IN_CLOUD`)** — butuh model besar + aturan keamanan
  konten. Setiap generasi menampilkan badge jalur + latensi, jadi juri bisa
  MELIHAT hybrid routing bekerja.
- **Dampak nyata untuk audiens nyata.** Orang tua butuh cerita sebelum tidur
  yang aman dan bernilai untuk anak; generator cerita yang ada cloud-only
  (biaya + data anak ke server) dan tidak memverifikasi konten agama.
- **Nyambung dengan kekuatan kami.** Kisah nabi + moral + sumber sudah
  terverifikasi dari draf eBook Podcast Meong; format dialog Oyen & Momo
  (2 baris bergantian) dan suara terkunci sudah jadi identitas kami.
- **Tidak biasa.** Hampir semua entri lomba memakai hybrid untuk
  ringkasan/terjemahan; memakai hybrid untuk *konten anak yang aman secara
  agama* dengan pemisahan tugas privat-vs-berat adalah sudut yang berbeda.

**Yang TIDAK dipilih dan kenapa:** aplikasi podcast generik (terlalu mirip
produk kami yang sudah ada, tidak menunjukkan hybrid), aplikasi kuis anak
(hybrid-nya lemah — semua tugas bisa on-device), aplikasi gambar AI
(butuh Kuota Akun Google + image generation — di luar jalur gratis).

---

## 3. Yang dibangun

```
index.html                  Shell aplikasi + import map Firebase SDK
styles.css                  Gaya lembut, hangat, ramah anak
js/
  app.js                    Wiring UI (tema, tokoh, usia, bahasa, dengarkan)
  hybrid-router.js          Firebase AI Logic: getAI, getGenerativeModel,
                            GoogleAIBackend, InferenceMode, initializeDeviceModel,
                            generateContent + kebijakan routing + fallback
  story-engine.js           Builder cerita template + prompt builder mode live
  content-bank.js           Bank konten TERVERIFIKASI: 6 nabi (Nuh, Ayub,
                            Yunus, Yusuf, Musa, Ibrahim) — cerita pendek,
                            pelajaran, sumber QS + dialog Oyen & Momo
  tts.js                    Web Speech API: Oyen pitch 1.6/rate 1.15 (tinggi),
                            Momo pitch 0.6/rate 0.9 (rendah) + puppet mulut
  firebase-config.js        Placeholder (mode demo) — edit untuk mode live
  firebase-config.example.js  Salinan referensi placeholder
assets/oyen-avatar.jpg, assets/momo-avatar.jpg   Wajah terkunci Oyen & Momo
README.md                   Cara jalan, arsitektur, cara aktifkan mode live
LICENSE                     Apache License 2.0 (lisensi yang disukai lomba)
NASKAH-VIDEO-DEMO.md        Naskah video demo 2,5 menit (teks saja)
.gitignore                  Node/dist + catatan keamanan kunci
```

**Cara menjalankan (gratis, tanpa akun):**
```bash
cd lomba-buildhybridai-2026
python3 -m http.server 8000
# buka http://localhost:8000
```
Mode demo langsung jalan offline. Mode live: buat proyek Firebase → aktifkan
AI Logic (Gemini Developer API) → edit `js/firebase-config.js` → App Check
debug token (lihat README.md) → Chrome desktop 139+ dengan flag
`chrome://flags/#prompt-api-for-gemini-nano-multimodal-input` → klik
"Siapkan Model On-Device".

---

## 4. Hasil uji (Chromium headless, Playwright)

**15/15 cek lolos, 0 console error, 0 request gagal** (desktop 1280×900 +
mobile 390×844, tanpa overflow horizontal). Yang dicek: badge mode DEMO,
cerita default 5 halaman, judul/moral/sumber/dialog 2 baris, avatar tampil,
pencocokan tokoh otomatis dari tema (Yunus), generate ulang, mode Bahasa
Inggris, klik "Dengarkan" tanpa crash, tombol warm-up nonaktif di mode demo.

**Cek konten semua tokoh (node, 6 nabi × 2 bahasa):** 5 halaman per cerita,
tidak ada halaman duplikat, tidak ada halaman kosong/pendek.

**Dua bug ditemukan & diperbaiki saat uji:**
1. Halaman 3 template mengulang teks halaman 2 (konstruktor halaman cacat).
   Perbaiki: halaman 3 = kalimat pertama paragraf klimaks, halaman 4 = sisanya.
2. Import dinamis `firebase-config.js` yang tidak ada menimbulkan 404 di
   console. Perbaiki: file config dikirim dengan nilai placeholder (praktik
   standar Firebase sample) + peringatan keamanan di header file & README.

**Catatan jujur (bukan bug, tapi batasan yang diketahui):**
- Dialog Oyen & Momo 13–20 kata per baris — sebagian di bawah target format
  Podcast Meong 17–25 kata (format itu untuk klip Flow 10 detik; baris
  read-aloud ini tetap wajar, tapi bisa diperpanjang bila mau).
- Badge jalur menampilkan rute **preferred** (yang diminta ke SDK), bukan
  rute eksekusi yang terbukti — SDK tidak mengekspos sisi mana yang mengeksekusi.
  UI menulis "(preferred)" dan README menjelaskan fallback otomatis SDK.
- Mode live BELUM teruji end-to-end (tidak ada proyek Firebase + kunci di
  mesin ini). Kode live mengikuti persis contoh resmi di dokumen Firebase.
- Suara TTS di browser sungguhan belum dites (headless tidak mengeluarkan suara).
- Mulut avatar = puppet mengikuti ritme bicara, BUKAN lip-sync fonem
  (ditulis jujur di UI, README, dan laporan ini).

---

## 5. Yang masih kurang sebelum bisa submit

| # | Yang kurang | Siapa / kapan |
|---|---|---|
| 1 | Proyek Firebase + App Check debug token | Cipta (akun Firebase-nya) — lihat README langkah 1–4 |
| 2 | Uji mode live end-to-end di Chrome desktop 139+ (badge LIVE, generasi on-device + cloud benar-benar jalan) | Setelah #1 |
| 3 | Video demo ≤3 menit, YouTube publik | Setelah #2; naskah sudah siap di NASKAH-VIDEO-DEMO.md |
| 4 | Repo GitHub publik + push (lihat langkah di bawah) | Cipta putuskan nama repo + akun GitHub |
| 5 | Persetujuan Cipta atas karya persisnya + akun Devpost pulih (saat ini ditangguhkan, banding terkirim 18 Nov) | Cipta |
| 6 | Submit di Devpost (form: URL aplikasi + repo + video + deskripsi Inggris) | Setelah #1–#5 — JANGAN sebelum itu |

**Perintah membuat repo (JANGAN dijalankan dulu — butuh keputusan Cipta):**
```bash
cd ~/workspace/your_files/oyen-podcast/lomba-buildhybridai-2026
gh repo create podcastmeong/meong-tales --public --description "Meong Tales — hybrid-AI Islamic bedtime stories for kids (Firebase AI Logic) — #BuildHybridAI 2026"
git init && git add . && git commit -m "Meong Tales — #BuildHybridAI 2026 submission (Web)"
git branch -M main && git remote add origin https://github.com/podcastmeong/meong-tales.git
git push -u origin main
# Lalu aktifkan GitHub Pages (Settings > Pages > Deploy from branch: main)
# agar URL aplikasi live tersedia untuk juri.
```

**Jadwal yang disarankan (tenggat 30 Nov 17:00 ET = 1 Des 05:00 WIB):**
- 19–20 Nov: Cipta putuskan repo + Firebase (langkah 1 & 4)
- 21–22 Nov: uji live + rekam video demo
- 24 Nov: submit (sisakan 6 hari buffer untuk masalah akun Devpost)
- 25 Nov 10:00 PT: batas terakhir minta Kuota Akun Google Sprint 3 (hanya bila butuh image generation — saat ini TIDAK butuh)

---

## 6. Kepatuhan terhadap batas tugas

- Tidak ada akun Devpost/Firebase baru yang dibuat; tidak ada pembayaran;
  tidak ada submit/daftar ke mana pun; tidak ada data/kunci yang dipakai
  (config masih placeholder). Semua harga/syarat di atas dibaca dari halaman
  resmi (URL tercantum); yang tidak terverifikasi ditandai BELUM TERVERIFIKASI.

## Perubahan 19 Nov 2026 — AVATAR DIKEMBALIKAN (perintah Cipta: "Pasang avatar lagi")
- Revert commit penghapusan avatar: `assets/oyen-avatar.jpg` + `assets/momo-avatar.jpg` kembali, blok `.avatars` di `index.html` kembali, aturan CSS avatar kembali, puppet mulut di `js/tts.js` aktif lagi.
- Cerita + suara TETAP terpasang (tidak pernah dihapus — Cipta: "Tetap pasang cerita Dan suara").
- Status akhir: avatar ADA, cerita ADA, suara ADA.

## Verifikasi versi SDK 19 Nov 2026 (sebelum submit)
- Pin CDN `12.5.0` TERVERIFIKASI ADA (hybrid inference ditambahkan di SDK 12.1.0, Agt 2025; dokumen resmi menulis "v12.5.0+"). Tidak perlu diganti untuk lomba.
- Versi terbaru saat dicek: Firebase JS SDK 13.4.0 (16 Nov 2026). v13.0.0 (7 Okt 2026) membawa breaking changes AI Logic (model hybrid in-cloud default jadi gemini-3.5-flash-lite; VertexAIBackend dihapus) — kode aplikasi ini tidak memakai API yang dihapus (hanya getAI, GoogleAIBackend, getGenerativeModel, InferenceMode, initializeDeviceModel, generateContent), tapi upgrade TIDAK dilakukan sebelum submit tanpa uji live penuh.
- Model yang dipakai aplikasi: "gemini-2.0-flash" (quick + story). Masih didukung Gemini Developer API.
