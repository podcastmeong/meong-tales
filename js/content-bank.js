// ============================================================================
// Meong Tales — Content Bank (VERIFIED, template/demo mode)
// ----------------------------------------------------------------------------
// Every story below is a SHORT retelling for children, drawn from the
// verified Podcast Meong eBook drafts (folder: ebook-cerita-nabi).
// Morals and Quran references are copied from those drafts — NOT invented.
// Verse references are given exactly as they appear in the drafts.
// NO hadith is quoted here (the drafts deliberately use Quran-only retellings
// for the prophet stories, except where noted).
//
// When the app runs in LIVE mode (Firebase AI Logic configured), the model is
// instructed to use ONLY these figures, morals and sources — see
// story-engine.js buildLivePrompt(). The model must never invent a verse
// number or a hadith. If it cannot answer from this bank, it must say so.
// ============================================================================

export const FIGURES = [
  {
    id: "nuh",
    name: { id: "Nabi Nuh", en: "Prophet Noah" },
    theme: { id: "sabar & taat", en: "patience & obedience" },
    keywords: ["sabar", "taat", "kapal", "banjir", "mengejek", "patience", "obey", "ark", "flood", "mock"],
    moral: {
      id: "Sabar dan taat kepada Allah, walaupun orang lain mengejek.",
      en: "Be patient and obey Allah, even when others mock you.",
    },
    lessons: {
      id: [
        "Sabar — Nabi Nuh mengajak kaumnya selama 950 tahun dan tidak cepat menyerah.",
        "Taat kepada Allah — disuruh membuat kapal, ia membuatnya walaupun diejek.",
        "Jangan mengejek orang lain — mengejek itu dilarang Allah.",
        "Iman yang menyelamatkan — keselamatan karena iman, bukan karena ayahnya seorang nabi.",
      ],
      en: [
        "Patience — Prophet Noah called his people for 950 years and never gave up.",
        "Obedience to Allah — told to build the ark, he built it even while mocked.",
        "Never mock others — mocking is forbidden by Allah.",
        "Faith is what saves — safety comes from faith, not from having a prophet father.",
      ],
    },
    story: {
      id: [
        "Dahulu ada Nabi Nuh. Allah menyuruhnya mengajak kaumnya menyembah Allah saja. Nabi Nuh mengajak mereka dengan sabar, siang dan malam, selama 950 tahun. Banyak yang tidak mau mendengar, bahkan mengejeknya.",
        "Suatu hari Allah menyuruh Nabi Nuh membuat kapal besar di daratan. Orang-orang tertawa dan mengejek, “Kapal di darat? Untuk apa?” Nabi Nuh tetap taat dan terus membuat kapal.",
        "Lalu datanglah banjir besar. Nabi Nuh naik ke kapal bersama orang-orang beriman dan sepasang-sepasang hewan. Air menutupi bumi, tetapi kapal itu selamat karena Allah melindunginya. Anak Nabi Nuh yang tidak beriman tidak ikut naik, dan ia tidak selamat.",
        "Setelah banjir surut, Nabi Nuh berdoa kepada Allah. Allah mengajarkan bahwa keselamatan itu karena iman kepada Allah, bukan karena ayahnya seorang nabi.",
      ],
      en: [
        "Long ago there was Prophet Noah. Allah told him to call his people to worship Allah alone. Noah called them with patience, day and night, for 950 years. Many refused to listen, and some even mocked him.",
        "One day Allah told Noah to build a big ark on dry land. People laughed and mocked, “An ark on land? For what?” Noah stayed obedient and kept building the ark.",
        "Then a great flood came. Noah boarded the ark with the believers and pairs of animals. The water covered the earth, but the ark was safe because Allah protected it. Noah's son, who did not believe, did not board — and he was not saved.",
        "After the flood receded, Noah prayed to Allah. Allah taught that safety comes from faith in Allah, not from having a prophet as a father.",
      ],
    },
    sources: "QS Nuh 71:1; QS Hud 11:25–26; QS Al-'Ankabut 29:14 (950 tahun); QS Hud 11:37–38; QS Hud 11:42–47; QS Al-Hujurat 49:11.",
  },
  {
    id: "ayub",
    name: { id: "Nabi Ayub", en: "Prophet Job" },
    theme: { id: "sabar saat sakit & susah", en: "patience in sickness & hardship" },
    keywords: ["sabar", "sakit", "doa", "susah", "menunggu", "patience", "sick", "prayer", "hardship", "waiting"],
    moral: {
      id: "Sabar saat susah dan berdoa dengan tenang — Allah Maha Penyayang.",
      en: "Be patient in hardship and pray calmly — Allah is the Most Merciful.",
    },
    lessons: {
      id: [
        "Sabar — Nabi Ayub sakit dalam waktu yang lama, tetapi ia tetap sabar.",
        "Berdoa saat susah — ia berdoa dengan tenang dan ingat Allah Maha Penyayang.",
        "Allah Maha Penyayang — Allah menyembuhkannya dan membalas kesabaran dengan kebaikan yang lebih besar.",
        "Tetap taat — dalam keadaan senang maupun susah.",
      ],
      en: [
        "Patience — Prophet Job was sick for a long time, yet he stayed patient.",
        "Pray in hardship — he prayed calmly, remembering Allah is the Most Merciful.",
        "Allah is the Most Merciful — Allah healed him and repaid patience with even greater good.",
        "Stay obedient — in good times and in hard times.",
      ],
    },
    story: {
      id: [
        "Nabi Ayub adalah orang yang saleh dan kaya. Suatu hari Allah mengujinya: hartanya hilang, anak-anaknya pergi, dan tubuhnya sakit dalam waktu yang lama. Tetapi Nabi Ayub tidak marah dan tidak putus asa.",
        "Ia tetap sabar. Ia berdoa dengan tenang kepada Allah, karena ia tahu Allah Maha Penyayang. Ia tidak meninggalkan Allah, dalam keadaan senang maupun susah.",
        "Allah mendengar doanya. Allah menyembuhkan Nabi Ayub dan mengembalikan keluarganya, bahkan dua kali lipat. Allah membalas kesabaran dengan kebaikan yang lebih besar.",
        "Kisah Nabi Ayub mengajarkan kita: saat sakit atau susah, bersabarlah dan berdoalah. Allah tidak pernah meninggalkan hamba-Nya yang sabar.",
      ],
      en: [
        "Prophet Job was a righteous and wealthy man. One day Allah tested him: his wealth was gone, his children were gone, and his body was sick for a long time. But Job did not get angry and did not give up hope.",
        "He stayed patient. He prayed calmly to Allah, because he knew Allah is the Most Merciful. He never left Allah, in good times or in hard times.",
        "Allah heard his prayer. Allah healed Job and returned his family to him, even twice as much. Allah repays patience with even greater good.",
        "The story of Prophet Job teaches us: when you are sick or in hardship, be patient and pray. Allah never leaves His patient servant.",
      ],
    },
    sources: "QS Sad 38:41–44; QS Al-Anbiya 21:83–84. (Tanpa hadis — isi dari Al-Quran saja.)",
  },
  {
    id: "yunus",
    name: { id: "Nabi Yunus", en: "Prophet Jonah" },
    theme: { id: "jangan marah & berdoa saat susah", en: "don't decide in anger & pray in hardship" },
    keywords: ["marah", "ikan", "doa", "gelap", "menyesal", "angry", "fish", "whale", "prayer", "dark", "sorry"],
    moral: {
      id: "Jangan mengambil keputusan saat marah — dan berdoalah saat susah.",
      en: "Never decide while angry — and pray when you are in trouble.",
    },
    lessons: {
      id: [
        "Jangan pergi dalam keadaan marah — Nabi Yunus pergi dalam keadaan marah, lalu ia ditelan ikan besar.",
        "Berdoa saat susah — ia berdoa di dalam perut ikan, dalam keadaan yang sangat gelap, dan Allah mendengar doanya.",
        "Banyak mengingat Allah — karena itu ia tidak tinggal di dalam ikan selamanya.",
        "Allah Maha Penyayang — Allah menyelamatkan orang-orang yang beriman dan kembali kepada-Nya.",
      ],
      en: [
        "Never leave in anger — Jonah left while angry, and a great fish swallowed him.",
        "Pray in hardship — he prayed inside the fish, in total darkness, and Allah heard him.",
        "Remember Allah often — that is why he did not stay inside the fish forever.",
        "Allah is the Most Merciful — Allah saves the believers who return to Him.",
      ],
    },
    story: {
      id: [
        "Nabi Yunus mengajak kaumnya menyembah Allah, tetapi mereka tidak mau mendengar. Nabi Yunus marah, lalu ia pergi meninggalkan mereka tanpa menunggu perintah Allah.",
        "Ia naik kapal dan berlayar. Di tengah laut, ombak besar datang. Nabi Yunus dilempar ke laut, lalu seekor ikan besar menelannya. Di dalam perut ikan, gelap sekali.",
        "Di dalam kegelapan itu Nabi Yunus berdoa dan mengingat Allah. Ia menyesal dan kembali kepada Allah. Allah mendengar doanya dan menyelamatkannya — ikan itu memuntahkannya ke daratan.",
        "Allah memilih Nabi Yunus dan menjadikannya orang yang saleh. Kisahnya mengajarkan kita: jangan mengambil keputusan saat marah, dan saat susah, berdoalah kepada Allah.",
      ],
      en: [
        "Prophet Jonah called his people to worship Allah, but they would not listen. Jonah got angry and left them without waiting for Allah's command.",
        "He boarded a ship and sailed away. In the middle of the sea, huge waves came. Jonah was thrown into the sea, and a great fish swallowed him. Inside the fish, it was completely dark.",
        "In that darkness Jonah prayed and remembered Allah. He felt sorry and returned to Allah. Allah heard his prayer and saved him — the fish cast him onto the shore.",
        "Allah chose Jonah and made him a righteous man. His story teaches us: never decide while angry, and when you are in trouble, pray to Allah.",
      ],
    },
    sources: "QS Al-Qalam 68:48; QS Al-Anbiya 21:87–88; QS As-Saffat 37:142–144; QS Al-Qalam 68:50. (Tanpa hadis — isi dari Al-Quran saja.)",
  },
  {
    id: "yusuf",
    name: { id: "Nabi Yusuf", en: "Prophet Joseph" },
    theme: { id: "jangan iri, sabar, & memaafkan", en: "no envy, patience, & forgiveness" },
    keywords: ["iri", "sumur", "mimpi", "maaf", "penjara", "sabar", "envy", "well", "dream", "forgive", "prison", "patience"],
    moral: {
      id: "Jangan iri, bersabarlah saat susah, dan memaafkan itu mulia.",
      en: "Do not envy others, be patient in hardship, and forgiving is noble.",
    },
    lessons: {
      id: [
        "Jangan iri kepada orang lain — saudara-saudara Yusuf iri, lalu mereka berbuat buruk. Iri membuat hati menjadi gelap.",
        "Sabar saat susah — Yusuf dibuang ke sumur, dijual, difitnah, dan dipenjara, tetapi ia bersabar.",
        "Jangan berputus asa dari rahmat Allah — Yusuf tidak putus asa di dalam penjara. Allah selalu memberi jalan keluar bagi orang yang sabar.",
        "Memaafkan itu mulia — Yusuf memaafkan saudara-saudaranya yang pernah membuangnya ke sumur.",
      ],
      en: [
        "Do not envy others — Joseph's brothers were envious, and then they did wrong. Envy darkens the heart.",
        "Be patient in hardship — Joseph was thrown into a well, sold, falsely accused, and imprisoned, yet he stayed patient.",
        "Never despair of Allah's mercy — Joseph did not despair in prison. Allah always opens a way out for the patient.",
        "Forgiving is noble — Joseph forgave his brothers who had once thrown him into the well.",
      ],
    },
    story: {
      id: [
        "Nabi Yusuf masih kecil ketika bermimpi melihat matahari, bulan, dan sebelas bintang bersujud kepadanya. Ayahnya, Nabi Ya'qub, tahu mimpi itu istimewa. Tetapi saudara-saudara Yusuf iri kepadanya.",
        "Karena iri, mereka membuang Yusuf ke dalam sumur, lalu menjualnya. Yusuf dibawa ke Mesir, difitnah, dan dipenjara. Tetapi Yusuf bersabar dan tidak putus asa dari rahmat Allah.",
        "Allah memberi Yusuf ilmu menafsirkan mimpi. Raja Mesir mengangkatnya menjadi bendahara. Bertahun-tahun kemudian, saudara-saudaranya datang meminta makanan — dan Yusuf memaafkan mereka semua.",
        "Kisah Nabi Yusuf mengajarkan kita: jangan iri, bersabarlah saat susah, jangan putus asa, dan memaafkan itu mulia.",
      ],
      en: [
        "Prophet Joseph was still a boy when he dreamed of the sun, the moon, and eleven stars bowing to him. His father, Prophet Jacob, knew the dream was special. But Joseph's brothers envied him.",
        "Out of envy, they threw Joseph into a well, then sold him. Joseph was taken to Egypt, falsely accused, and imprisoned. Yet Joseph stayed patient and never despaired of Allah's mercy.",
        "Allah gave Joseph the knowledge to interpret dreams. The king of Egypt made him treasurer. Years later, his brothers came asking for food — and Joseph forgave them all.",
        "The story of Prophet Joseph teaches us: do not envy, be patient in hardship, never despair, and forgiving is noble.",
      ],
    },
    sources: "QS Yusuf 12:8–9; QS Yusuf 12:18; QS Yusuf 12:23; QS Yusuf 12:87; QS Yusuf 12:92. (Tanpa hadis — isi dari Al-Quran saja.)",
  },
  {
    id: "musa",
    name: { id: "Nabi Musa", en: "Prophet Moses" },
    theme: { id: "berani berkata benar & jangan takut", en: "speak the truth & do not fear" },
    keywords: ["berani", "firaun", "laut", "takut", "menolong", "brave", "pharaoh", "sea", "afraid", "help"],
    moral: {
      id: "Berani berkata benar, menolong orang lain, dan jangan takut — Allah bersama kita.",
      en: "Speak the truth bravely, help others, and do not fear — Allah is with us.",
    },
    lessons: {
      id: [
        "Berani berkata benar — Nabi Musa berani pergi kepada Fir'aun, raja yang zalim, dan berkata benar.",
        "Memohon ampun saat salah — Nabi Musa berbuat kesalahan, lalu segera memohon ampun, dan Allah mengampuninya.",
        "Menolong orang lain — Nabi Musa menolong dua perempuan di sumur Madyan, padahal ia sendiri sedang lelah dan susah.",
        "Jangan takut, Allah bersama kita — di depan laut, Musa berkata, “Tuhanku besertaku.”",
        "Sabar, Allah pasti menolong.",
      ],
      en: [
        "Speak the truth bravely — Moses dared to go to Pharaoh, the unjust king, and speak the truth.",
        "Ask forgiveness when wrong — Moses made a mistake, then quickly asked forgiveness, and Allah forgave him.",
        "Help others — Moses helped two women at the well of Midian, even though he himself was tired and in trouble.",
        "Do not fear, Allah is with us — before the sea, Moses said, “My Lord is with me.”",
        "Be patient — Allah will surely help.",
      ],
    },
    story: {
      id: [
        "Nabi Musa tumbuh di istana Fir'aun, raja Mesir yang zalim. Suatu hari Allah menyuruh Musa pergi kepada Fir'aun dan berkata benar: sembahlah Allah saja. Musa berani pergi, walaupun Fir'aun marah dan mengancam.",
        "Fir'aun tidak mau mendengar. Ia mengejar Musa dan pengikutnya dengan pasukannya. Di depan mereka terbentang laut yang luas, di belakang mereka pasukan Fir'aun. Pengikut Musa ketakutan — tetapi Musa berkata, “Tuhanku besertaku.”",
        "Allah menyuruh Musa memukulkan tongkatnya ke laut. Laut terbelah, dan mereka berjalan di jalan yang kering. Fir'aun mengejar mereka ke tengah laut, tetapi air menutupinya.",
        "Kisah Nabi Musa mengajarkan kita: berani berkata benar, menolong orang lain, memohon ampun saat salah, dan jangan takut — Allah bersama kita.",
      ],
      en: [
        "Prophet Moses grew up in the palace of Pharaoh, the unjust king of Egypt. One day Allah told Moses to go to Pharaoh and speak the truth: worship Allah alone. Moses dared to go, even though Pharaoh was angry and threatened him.",
        "Pharaoh would not listen. He chased Moses and his followers with his army. Before them lay a wide sea, behind them Pharaoh's army. Moses' followers were afraid — but Moses said, “My Lord is with me.”",
        "Allah told Moses to strike the sea with his staff. The sea split apart, and they walked on a dry path. Pharaoh chased them into the sea, but the water closed over him.",
        "The story of Prophet Moses teaches us: speak the truth bravely, help others, ask forgiveness when wrong, and do not fear — Allah is with us.",
      ],
    },
    sources: "QS Ta-Ha 20:24; QS Al-Qasas 28:16; QS Al-Qasas 28:24; QS Asy-Syu'ara 26:62; QS Ta-Ha 20:68. (Tanpa hadis — isi dari Al-Quran saja.)",
  },
  {
    id: "ibrahim",
    name: { id: "Nabi Ibrahim", en: "Prophet Abraham" },
    theme: { id: "berani berkata benar & taat", en: "speak the truth & obey" },
    keywords: ["berani", "api", "patung", "taat", "sabar", "brave", "fire", "idol", "obey", "patience"],
    moral: {
      id: "Berani berkata benar dan taat kepada Allah — Allah menolong orang yang sabar dan berani.",
      en: "Speak the truth bravely and obey Allah — Allah helps the patient and the brave.",
    },
    lessons: {
      id: [
        "Hanya Allah yang disembah — patung tidak bisa makan, tidak bisa bicara, tidak bisa menjawab.",
        "Berani berkata benar — Ibrahim masih muda, tetapi ia berani bertanya dan berkata benar kepada kaumnya, walaupun mereka marah.",
        "Taat kepada Allah — Ibrahim dan Ismail taat kepada Allah, walaupun ujiannya berat.",
        "Allah menolong orang yang sabar dan berani.",
      ],
      en: [
        "Only Allah is to be worshipped — idols cannot eat, cannot speak, cannot answer.",
        "Speak the truth bravely — Abraham was still young, yet he dared to ask and speak the truth to his people, even though they were angry.",
        "Obey Allah — Abraham and Ishmael obeyed Allah, even though the test was heavy.",
        "Allah helps the patient and the brave.",
      ],
    },
    story: {
      id: [
        "Nabi Ibrahim masih muda ketika ia bertanya kepada kaumnya: mengapa kalian menyembah patung yang tidak bisa makan, tidak bisa bicara, dan tidak bisa menjawab? Hanya Allah, Tuhan langit dan bumi, yang pantas disembah. Kaumnya marah, tetapi Ibrahim berani berkata benar.",
        "Karena marah, kaumnya melempar Ibrahim ke dalam api yang besar. Tetapi Allah berkata kepada api itu, “Jadilah dingin dan selamat bagi Ibrahim.” Api itu menjadi dingin, dan Ibrahim selamat.",
        "Bertahun-tahun kemudian, Allah menguji Ibrahim dengan ujian yang berat bersama putranya, Ismail. Keduanya taat kepada Allah. Allah mengganti ujian itu dengan kebaikan yang besar.",
        "Kisah Nabi Ibrahim mengajarkan kita: berani berkata benar, taat kepada Allah, dan Allah menolong orang yang sabar dan berani.",
      ],
      en: [
        "Prophet Abraham was still young when he asked his people: why do you worship idols that cannot eat, cannot speak, and cannot answer? Only Allah, Lord of the heavens and the earth, deserves worship. His people were angry, but Abraham spoke the truth bravely.",
        "In anger, his people threw Abraham into a great fire. But Allah said to the fire, “Be cool and safe for Abraham.” The fire became cool, and Abraham was safe.",
        "Years later, Allah tested Abraham with a heavy test together with his son, Ishmael. Both obeyed Allah. Allah replaced that test with great good.",
        "The story of Prophet Abraham teaches us: speak the truth bravely, obey Allah, and Allah helps the patient and the brave.",
      ],
    },
    sources: "QS As-Saffat 37:86; QS Al-Anbiya 21:54; QS As-Saffat 37:102–103; QS Al-Anbiya 21:69; QS Ibrahim 14:40. (Tanpa hadis — isi dari Al-Quran saja.)",
  },
];

// --- Oyen & Momo podcast dialogue (template mode) ---------------------------
// Podcast Meong format: 17–25 words per 10-second line, English dialogue.
// Each figure gets one short exchange: Oyen asks, Momo answers with the moral.
export const DIALOGUES = {
  nuh: {
    id: [
      "Momo, Noah built a giant boat on dry land. People laughed at him. Why did he keep building it?",
      "Because Allah told him to, Oyen. Noah stayed patient for 950 years. Obeying Allah is always the right choice.",
    ],
    en: [
      "Momo, Noah built a giant boat on dry land. People laughed at him. Why did he keep building it?",
      "Because Allah told him to, Oyen. Noah stayed patient for 950 years. Obeying Allah is always the right choice.",
    ],
  },
  ayub: {
    id: [
      "Momo, Job was sick for such a long time. How could he stay so patient?",
      "He prayed calmly, Oyen. He knew Allah is the Most Merciful. Patience always brings something better.",
    ],
    en: [
      "Momo, Job was sick for such a long time. How could he stay so patient?",
      "He prayed calmly, Oyen. He knew Allah is the Most Merciful. Patience always brings something better.",
    ],
  },
  yunus: {
    id: [
      "Momo, Jonah left his people while he was angry. Then a fish swallowed him!",
      "Yes, Oyen. Never decide while you are angry. Jonah prayed in the dark, and Allah saved him.",
    ],
    en: [
      "Momo, Jonah left his people while he was angry. Then a fish swallowed him!",
      "Yes, Oyen. Never decide while you are angry. Jonah prayed in the dark, and Allah saved him.",
    ],
  },
  yusuf: {
    id: [
      "Momo, Joseph's brothers threw him into a well because they were jealous. That is so sad.",
      "It is, Oyen. But Joseph stayed patient, and in the end he forgave them all. Forgiving is noble.",
    ],
    en: [
      "Momo, Joseph's brothers threw him into a well because they were jealous. That is so sad.",
      "It is, Oyen. But Joseph stayed patient, and in the end he forgave them all. Forgiving is noble.",
    ],
  },
  musa: {
    id: [
      "Momo, Moses stood before the sea with Pharaoh's army behind him. Was he afraid?",
      "No, Oyen. He said, “My Lord is with me.” Allah split the sea. Never fear when Allah is with you.",
    ],
    en: [
      "Momo, Moses stood before the sea with Pharaoh's army behind him. Was he afraid?",
      "No, Oyen. He said, “My Lord is with me.” Allah split the sea. Never fear when Allah is with you.",
    ],
  },
  ibrahim: {
    id: [
      "Momo, Abraham was thrown into a big fire. How did he survive that?",
      "Allah told the fire to be cool and safe, Oyen. Allah always helps the brave and the patient.",
    ],
    en: [
      "Momo, Abraham was thrown into a big fire. How did he survive that?",
      "Allah told the fire to be cool and safe, Oyen. Allah always helps the brave and the patient.",
    ],
  },
};

// --- Theme keywords → figure matching (used by the on-device quick task) ----
export function matchFigure(themeText) {
  const t = (themeText || "").toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const f of FIGURES) {
    let score = 0;
    for (const kw of f.keywords) {
      if (t.includes(kw.toLowerCase())) score += 1;
    }
    if (score > bestScore) { bestScore = score; best = f; }
  }
  return { figure: best, score: bestScore };
}

export function getFigure(id) {
  return FIGURES.find((f) => f.id === id) || FIGURES[0];
}
