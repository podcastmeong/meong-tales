// ============================================================================
// Meong Tales — main app wiring
// ----------------------------------------------------------------------------
// Flow:
//   1. initHybrid() — tries to load Firebase AI Logic (live mode).
//      Placeholder config or load failure -> DEMO (template) mode, honest label.
//   2. "Warm up" button (user gesture) -> warmDeviceModel() — downloads
//      Gemini Nano on-device model if available (Chrome desktop 139+).
//   3. "Buat Cerita" -> suggestFigure(theme) [on-device quick task in live
//      mode, keyword match in demo] -> buildLiveStory() or
//      buildTemplateStory() -> render 5 pages + dialogue + route badge.
//   4. "Dengarkan" -> playDialogue() with locked Oyen/Momo voices.
// ============================================================================

import { FIGURES, getFigure } from "./content-bank.js?v=5";
import { initHybrid, warmDeviceModel, getStatus, routeLabel, ROUTES } from "./hybrid-router.js?v=5";
import { buildTemplateStory, buildLiveStory, quickMoral, suggestFigure } from "./story-engine.js?v=5";
import { playDialogue, stopSpeaking, isTTSAvailable } from "./tts.js?v=5";

const $ = (sel) => document.querySelector(sel);

const state = {
  lang: "id",
  age: 7,
  figureId: "nuh",
  story: null,
  live: false,
  busy: false,
  lastLiveError: null,
};

const UI_TEXT = {
  id: {
    tagline: "Cerita anak Islami dari satu kalimat — dibuat Oyen & Momo.",
    themeLabel: "Tema cerita (satu kalimat)",
    themePh: "Contoh: Oyen belajar sabar saat menunggu ikan",
    figureLabel: "Tokoh cerita",
    ageLabel: "Usia anak",
    langLabel: "Bahasa",
    make: "Buat Cerita",
    listen: "Dengarkan (Oyen & Momo)",
    stop: "Berhenti",
    warm: "Siapkan Model On-Device",
    warming: "Mengunduh model on-device…",
    moral: "Pelajaran",
    sources: "Sumber",
    dialogue: "Podcast Mini — Oyen & Momo",
    liveNote: "Mode AI AKTIF — cerita dibuat model hybrid (on-device + cloud). Periksa sebelum dibacakan ke anak.",
    liveFailNote: "Mode live GAGAL — cerita ini dari template terverifikasi, bukan output AI. Coba lagi atau periksa koneksi.",
    demoNote: "Mode DEMO — cerita dari bank konten terverifikasi (bukan output AI). Pasang konfigurasi Firebase untuk mengaktifkan mode AI.",
    needTheme: "Tulis dulu temanya, ya.",
    generating: "Membuat cerita…",
    route: "Jalur inferensi",
    latency: "Waktu",
    figureMatch: "Tokoh yang cocok",
    ttsMissing: "Browser ini tidak mendukung pembacaan suara (Web Speech API).",
    age46: "4–6 tahun",
    age79: "7–9 tahun",
    age1012: "10–12 tahun",
    oyenCap: "Oyen · suara tinggi",
    momoCap: "Momo · suara rendah",
  },
  en: {
    tagline: "Islamic bedtime stories from one sentence — told by Oyen & Momo.",
    themeLabel: "Story theme (one sentence)",
    themePh: "Example: Oyen learns patience while waiting for fish",
    figureLabel: "Story figure",
    ageLabel: "Child's age",
    langLabel: "Language",
    make: "Make a Story",
    listen: "Listen (Oyen & Momo)",
    stop: "Stop",
    warm: "Warm Up On-Device Model",
    warming: "Downloading on-device model…",
    moral: "Lesson",
    sources: "Sources",
    dialogue: "Mini Podcast — Oyen & Momo",
    liveNote: "LIVE AI mode — the story was made by the hybrid models (on-device + cloud). Please verify before reading to children.",
    liveFailNote: "Live mode FAILED — this story is from the verified template, not AI output. Try again or check the connection.",
    demoNote: "DEMO mode — story from the verified content bank (not AI output). Add a Firebase config to enable AI mode.",
    needTheme: "Please write a theme first.",
    generating: "Making your story…",
    route: "Inference route",
    latency: "Time",
    figureMatch: "Matched figure",
    ttsMissing: "This browser does not support speech synthesis (Web Speech API).",
    age46: "Ages 4–6",
    age79: "Ages 7–9",
    age1012: "Ages 10–12",
    oyenCap: "Oyen · high voice",
    momoCap: "Momo · low voice",
  },
};

function t(key) {
  return UI_TEXT[state.lang][key];
}

function renderFigureOptions() {
  const sel = $("#figure");
  sel.innerHTML = "";
  for (const f of FIGURES) {
    const opt = document.createElement("option");
    opt.value = f.id;
    opt.textContent = f.name[state.lang];
    sel.appendChild(opt);
  }
  sel.value = state.figureId;
}

function renderStatus() {
  const st = getStatus();
  const badge = $("#mode-badge");
  if (state.live) {
    badge.textContent = "LIVE · Firebase AI Logic (hybrid)";
    badge.className = "badge live";
    $("#mode-note").textContent = state.lastLiveError ? t("liveFailNote") : t("liveNote");
  } else {
    badge.textContent = "DEMO · Template (verified content)";
    badge.className = "badge demo";
    $("#mode-note").textContent = t("demoNote");
  }
  $("#device-status").textContent = st.deviceModelReady
    ? "On-device model: READY"
    : st.liveReady
      ? "On-device model: not warmed up yet"
      : "On-device model: unavailable (demo mode)";
  $("#warm-btn").disabled = !state.live;
}

function renderStory(story) {
  state.story = story;
  const L = state.lang;
  $("#story-title").textContent = story.title;
  $("#story-meta").textContent = `${getFigure(story.figureId).name[L]} · ${story.theme}`;
  $("#route-badge").textContent = routeLabel(story.route);
  $("#route-badge").className = "badge " + (story.route === ROUTES.TEMPLATE ? "demo" : story.route === ROUTES.ON_DEVICE ? "device" : "cloud");
  $("#latency").textContent = `${t("latency")}: ${story.ms} ms`;

  const pagesEl = $("#pages");
  pagesEl.innerHTML = "";
  story.pages.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "page-card";
    const h = document.createElement("h3");
    h.textContent = `${i + 1}. ${p.heading}`;
    const para = document.createElement("p");
    para.textContent = p.text;
    card.appendChild(h);
    card.appendChild(para);
    pagesEl.appendChild(card);
  });

  $("#moral-text").textContent = story.moral;
  $("#sources-text").textContent = story.sources;

  const dlgEl = $("#dialogue");
  dlgEl.innerHTML = "";
  story.dialogue.forEach((line, i) => {
    const row = document.createElement("div");
    row.className = "dlg-line";
    row.dataset.index = i;
    const who = document.createElement("strong");
    who.textContent = line.speaker === "oyen" ? "Oyen 🐱" : "Momo 🐱";
    const txt = document.createElement("span");
    txt.textContent = line.text;
    row.appendChild(who);
    row.appendChild(txt);
    dlgEl.appendChild(row);
  });

  $("#story-section").hidden = false;
  $("#listen-btn").disabled = !isTTSAvailable();
  document.querySelectorAll(".avatar").forEach((el) => el.classList.remove("speaking"));
}

function setBusy(busy, label) {
  state.busy = busy;
  $("#make-btn").disabled = busy;
  $("#make-btn").textContent = busy ? (label || t("generating")) : t("make");
  // Jangan hapus pesan error live saat fallback: finally di onMakeStory
  // memanggil setBusy(false) setelah pesan ditulis — tanpa ini baris status
  // selalu kosong dan penyebab gagal live tidak pernah terlihat.
  $("#status-line").textContent = busy ? (label || t("generating")) : (state.lastLiveError || "");
}

async function onMakeStory() {
  if (state.busy) return;
  const theme = $("#theme").value.trim();
  if (!theme) {
    $("#status-line").textContent = t("needTheme");
    return;
  }
  stopSpeaking();
  setBusy(true);
  try {
    const figureId = $("#figure").value;
    const suggestion = suggestFigure(theme);
    $("#figure-match").textContent = `${t("figureMatch")}: ${suggestion.figure.name[state.lang]}`;

    if (state.live) {
      const res = await buildLiveStory({ figureId, theme, lang: state.lang, age: state.age });
      if (res.story) {
        state.lastLiveError = null;
        renderStory(res.story);
        renderStatus();
      } else {
        // Live failed or unparsable: honest fallback to verified template.
        state.lastLiveError = res.error || "Live failed — using verified template.";
        $("#status-line").textContent = state.lastLiveError;
        const fallback = buildTemplateStory({ figureId, theme, lang: state.lang });
        fallback.ms = res.ms; // show the real time the live attempt took
        renderStory(fallback);
        renderStatus();
      }
    } else {
      renderStory(buildTemplateStory({ figureId, theme, lang: state.lang }));
    }
  } finally {
    setBusy(false);
  }
}

async function onWarm() {
  if (!state.live) return;
  const btn = $("#warm-btn");
  btn.disabled = true;
  btn.textContent = t("warming");
  const res = await warmDeviceModel((p) => {
    $("#status-line").textContent = `Download progress: ${Math.round(p * 10000) / 100}%`;
  });
  $("#status-line").textContent = res.reason;
  btn.textContent = t("warm");
  btn.disabled = false;
  renderStatus();
}

function onListen() {
  if (!state.story) return;
  const btn = $("#listen-btn");
  if (btn.dataset.playing === "1") {
    stopSpeaking();
    btn.dataset.playing = "0";
    btn.textContent = t("listen");
    document.querySelectorAll(".dlg-line.active").forEach((el) => el.classList.remove("active"));
    return;
  }
  btn.dataset.playing = "1";
  btn.textContent = t("stop");
  playDialogue(
    state.story.dialogue,
    state.lang,
    (i) => {
      document.querySelectorAll(".dlg-line.active").forEach((el) => el.classList.remove("active"));
      const row = document.querySelector(`.dlg-line[data-index="${i}"]`);
      if (row) row.classList.add("active");
    },
    (err) => {
      btn.dataset.playing = "0";
      btn.textContent = t("listen");
      document.querySelectorAll(".dlg-line.active").forEach((el) => el.classList.remove("active"));
      if (err) $("#status-line").textContent = err;
    }
  );
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (UI_TEXT[state.lang][key]) el.textContent = UI_TEXT[state.lang][key];
  });
  $("#theme").placeholder = t("themePh");
  renderFigureOptions();
  renderStatus();
  if (state.story) renderStory(state.story);
}

async function init() {
  $("#lang").value = state.lang;
  $("#age").value = String(state.age);
  $("#figure").addEventListener("change", (e) => { state.figureId = e.target.value; });
  $("#lang").addEventListener("change", (e) => { state.lang = e.target.value; applyLang(); });
  $("#age").addEventListener("change", (e) => { state.age = parseInt(e.target.value, 10) || 7; });
  $("#theme").addEventListener("input", () => {
    const s = suggestFigure($("#theme").value);
    if ($("#theme").value.trim()) {
      $("#figure-match").textContent = `${t("figureMatch")}: ${s.figure.name[state.lang]}`;
      $("#figure").value = s.figure.id;
      state.figureId = s.figure.id;
    } else {
      $("#figure-match").textContent = "";
    }
  });
  $("#make-btn").addEventListener("click", onMakeStory);
  $("#warm-btn").addEventListener("click", onWarm);
  $("#listen-btn").addEventListener("click", onListen);

  applyLang();

  // Try live mode. Any failure -> honest demo mode (never a crash).
  try {
    const res = await initHybrid();
    state.live = !!res.live;
    if (!res.live && res.reason) $("#status-line").textContent = res.reason;
  } catch (err) {
    state.live = false;
    $("#status-line").textContent = `Live init failed: ${err && err.message ? err.message : String(err)} — demo mode.`;
  }
  renderStatus();

  // Default story on load so the page is never empty.
  renderStory(buildTemplateStory({ figureId: "nuh", theme: "Oyen belajar sabar", lang: state.lang }));
}

document.addEventListener("DOMContentLoaded", init);
