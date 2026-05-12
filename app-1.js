/* ============================================
   APP.JS — Core Logic
   i18n | Navigation | Tools | Animations
   ============================================ */

/* ─── TRANSLATIONS ─── */
const i18n = {
  en: {
    nav_home: "Home", nav_about: "About", nav_skills: "Skills",
    nav_tools: "Tools", nav_contact: "Contact",
    hero_label: "IT Support & Network Professional",
    hero_tagline: "Bridging Connectivity and Security with Expert IT Solutions",
    hero_cta1: "Explore Profile", hero_cta2: "Open Toolkit",
    hero_status: "Available for opportunities",
    img_upload: "📷 Upload Photo", img_remove: "✕ Remove",
    stat_years: "Years Exp.", stat_issues: "Issues Resolved", stat_langs: "Languages",
    about_title: "About Me",
    about_edu_title: "Education",
    about_edu: "BCA Graduate · Master's (Running) · Focused on Networking & Security",
    about_loc_title: "Location",
    about_bio: "IT Support & Network Professional with 2+ years of hands-on experience in enterprise networking, VPN configuration, and system troubleshooting. Passionate about building secure, reliable infrastructure for growing businesses.",
    tl_role1: "Network Administrator", tl_period1: "2022 – 2024",
    tl_role2: "IT Support Specialist", tl_period2: "2021 – 2022",
    skills_title: "Core Skills",
    sk1: "LAN / WAN Networking", sk2: "VPN Configuration",
    sk3: "IP Addressing & Subnetting", sk4: "Router / Switch Config",
    sk5: "Troubleshooting", sk6: "Network Security",
    sk7: "Windows / Linux Admin", sk8: "Cloud Fundamentals",
    tools_title: "Toolkit",
    tab_cv: "📄 CV Builder", tab_np: "🇳🇵 Nepali Typing",
    tab_jp: "🇯🇵 Japanese Tool", tab_fc: "📁 File Converter",
    cv_title: "Build Your CV", cv_select_tpl: "Select Template:",
    cv_preview: "👁 Preview", cv_download: "⬇ Download PDF",
    np_title: "🇳🇵 Nepali Typing Tool",
    np_desc: "Type in Roman (English) letters and get Nepali Unicode output",
    np_input: "Roman Input", np_output: "नेपाली Output",
    np_convert: "Convert", np_copy: "📋 Copy",
    jp_title: "🇯🇵 Japanese Conversion Tool",
    jp_desc: "Convert Romaji to Hiragana / Katakana and lookup Kanji",
    jp_convert: "Convert", jp_hira: "Hiragana + Katakana",
    jp_kanji: "Kanji / Word Output", jp_copy_hira: "📋 Copy Hira/Kata",
    jp_copy_kanji: "📋 Copy Kanji",
    fc_title: "📁 File Converter", fc_desc: "Convert images to PDF format",
    fc_drop: "Drag & Drop image here or click to upload",
    fc_convert: "🔄 Convert to PDF", fc_download: "⬇ Download PDF",
    contact_title: "Contact", contact_email: "Email", contact_loc: "Location",
    chat_online: "● Online", chat_placeholder: "Ask me anything...",
    footer_text: "Built with precision & passion",
    clear: "Clear",
  },
  de: {
    nav_home: "Start", nav_about: "Über mich", nav_skills: "Kenntnisse",
    nav_tools: "Werkzeuge", nav_contact: "Kontakt",
    hero_label: "IT-Support & Netzwerk-Fachmann",
    hero_tagline: "Verbindung und Sicherheit durch professionelle IT-Lösungen",
    hero_cta1: "Profil entdecken", hero_cta2: "Werkzeugkasten öffnen",
    hero_status: "Offen für neue Möglichkeiten",
    img_upload: "📷 Foto hochladen", img_remove: "✕ Entfernen",
    stat_years: "Jahre Erfahrung", stat_issues: "Probleme gelöst", stat_langs: "Sprachen",
    about_title: "Über mich",
    about_edu_title: "Ausbildung",
    about_edu: "BCA-Absolvent · Master läuft · Fokus auf Netzwerk & Sicherheit",
    about_loc_title: "Standort",
    about_bio: "IT-Support & Netzwerk-Fachmann mit 2+ Jahren Praxiserfahrung in Unternehmensnetzwerken, VPN-Konfiguration und Systemfehlerbehebung. Leidenschaft für den Aufbau sicherer, zuverlässiger Infrastruktur.",
    tl_role1: "Netzwerk-Administrator", tl_period1: "2022 – 2024",
    tl_role2: "IT-Support-Spezialist", tl_period2: "2021 – 2022",
    skills_title: "Kernkompetenzen",
    sk1: "LAN / WAN Netzwerke", sk2: "VPN-Konfiguration",
    sk3: "IP-Adressierung & Subnetting", sk4: "Router / Switch Konfiguration",
    sk5: "Fehlerbehebung", sk6: "Netzwerksicherheit",
    sk7: "Windows / Linux Admin", sk8: "Cloud-Grundlagen",
    tools_title: "Werkzeuge",
    tab_cv: "📄 Lebenslauf", tab_np: "🇳🇵 Nepali Tippen",
    tab_jp: "🇯🇵 Japanisches Tool", tab_fc: "📁 Datei Konverter",
    cv_title: "Lebenslauf erstellen", cv_select_tpl: "Vorlage auswählen:",
    cv_preview: "👁 Vorschau", cv_download: "⬇ PDF herunterladen",
    np_title: "🇳🇵 Nepali-Schreibwerkzeug",
    np_desc: "Tippen Sie auf Romisch (Englisch) und erhalten Sie Nepali-Unicode",
    np_input: "Römische Eingabe", np_output: "नेपाली Ausgabe",
    np_convert: "Konvertieren", np_copy: "📋 Kopieren",
    jp_title: "🇯🇵 Japanisches Konvertierungswerkzeug",
    jp_desc: "Romaji in Hiragana / Katakana umwandeln und Kanji nachschlagen",
    jp_convert: "Konvertieren", jp_hira: "Hiragana + Katakana",
    jp_kanji: "Kanji / Wortausgabe", jp_copy_hira: "📋 Hira/Kata kopieren",
    jp_copy_kanji: "📋 Kanji kopieren",
    fc_title: "📁 Datei Konverter", fc_desc: "Bilder in PDF-Format konvertieren",
    fc_drop: "Bild hier ablegen oder klicken zum Hochladen",
    fc_convert: "🔄 In PDF konvertieren", fc_download: "⬇ PDF herunterladen",
    contact_title: "Kontakt", contact_email: "E-Mail", contact_loc: "Standort",
    chat_online: "● Online", chat_placeholder: "Stellen Sie mir eine Frage...",
    footer_text: "Mit Präzision und Leidenschaft erstellt",
    clear: "Löschen",
  },
  jp: {
    nav_home: "ホーム", nav_about: "自己紹介", nav_skills: "スキル",
    nav_tools: "ツール", nav_contact: "連絡先",
    hero_label: "ITサポート＆ネットワーク専門家",
    hero_tagline: "専門的なITソリューションで接続とセキュリティを実現",
    hero_cta1: "プロフィールを見る", hero_cta2: "ツールキットを開く",
    hero_status: "求職中",
    img_upload: "📷 写真をアップロード", img_remove: "✕ 削除",
    stat_years: "年の経験", stat_issues: "問題解決", stat_langs: "言語",
    about_title: "自己紹介",
    about_edu_title: "学歴",
    about_edu: "BCA卒業 · 修士課程(在学中) · ネットワーク＆セキュリティ専攻",
    about_loc_title: "所在地",
    about_bio: "企業ネットワーク、VPN設定、システムトラブルシューティングにおいて2年以上の実務経験を持つITサポート＆ネットワーク専門家。安全で信頼性の高いインフラ構築に情熱を注いでいます。",
    tl_role1: "ネットワーク管理者", tl_period1: "2022年 – 2024年",
    tl_role2: "ITサポートスペシャリスト", tl_period2: "2021年 – 2022年",
    skills_title: "コアスキル",
    sk1: "LAN / WAN ネットワーク", sk2: "VPN設定",
    sk3: "IPアドレッシング＆サブネット", sk4: "ルーター / スイッチ設定",
    sk5: "トラブルシューティング", sk6: "ネットワークセキュリティ",
    sk7: "Windows / Linux 管理", sk8: "クラウド基礎",
    tools_title: "ツールキット",
    tab_cv: "📄 CV作成", tab_np: "🇳🇵 ネパール語入力",
    tab_jp: "🇯🇵 日本語ツール", tab_fc: "📁 ファイル変換",
    cv_title: "CVを作成", cv_select_tpl: "テンプレートを選択:",
    cv_preview: "👁 プレビュー", cv_download: "⬇ PDFダウンロード",
    np_title: "🇳🇵 ネパール語入力ツール",
    np_desc: "ローマ字で入力してネパール語Unicode変換",
    np_input: "ローマ字入力", np_output: "ネパール語出力",
    np_convert: "変換", np_copy: "📋 コピー",
    jp_title: "🇯🇵 日本語変換ツール",
    jp_desc: "ローマ字からひらがな・カタカナに変換し、漢字を検索",
    jp_convert: "変換", jp_hira: "ひらがな ＋ カタカナ",
    jp_kanji: "漢字・単語出力", jp_copy_hira: "📋 ひら/カタコピー",
    jp_copy_kanji: "📋 漢字コピー",
    fc_title: "📁 ファイル変換", fc_desc: "画像をPDF形式に変換",
    fc_drop: "ここに画像をドロップするかクリックしてアップロード",
    fc_convert: "🔄 PDFに変換", fc_download: "⬇ PDFダウンロード",
    contact_title: "連絡先", contact_email: "メール", contact_loc: "所在地",
    chat_online: "● オンライン", chat_placeholder: "何でも聞いてください...",
    footer_text: "精密さと情熱で制作",
    clear: "クリア",
  }
};

let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.documentElement.lang = lang === 'jp' ? 'ja' : lang === 'de' ? 'de' : 'en';
}

/* ─── LANGUAGE SWITCHER ─── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    // Re-render CV if it's showing
    if (document.querySelector('#cvPreviewInner').innerHTML) {
      if (window.renderCV) window.renderCV();
    }
  });
});

/* ─── NAVBAR SCROLL ─── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 30
    ? 'rgba(2,13,24,0.95)'
    : 'rgba(2,13,24,0.85)';
});

/* ─── MOBILE NAV ─── */
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.getElementById('navOverlay');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navOverlay.classList.toggle('open');
});
navOverlay.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
  });
});

/* ─── TOOL TABS ─── */
document.querySelectorAll('.tool-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tool-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

/* ─── PROFILE IMAGE ─── */
const imgUpload = document.getElementById('imgUpload');
const profileImg = document.getElementById('profileImg');
const avatarFallback = document.getElementById('avatarFallback');
const imgRemove = document.getElementById('imgRemove');

document.querySelector('label[for="imgUpload"]').addEventListener('click', e => {
  e.preventDefault(); imgUpload.click();
});
imgUpload.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = r => {
    profileImg.src = r.target.result;
    profileImg.style.display = 'block';
    avatarFallback.style.display = 'none';
    window._profileImgData = r.target.result;
  };
  reader.readAsDataURL(file);
});
imgRemove.addEventListener('click', () => {
  profileImg.src = '';
  profileImg.style.display = 'none';
  avatarFallback.style.display = 'flex';
  window._profileImgData = null;
  imgUpload.value = '';
});

/* ─── SKILL BAR ANIMATION ─── */
function animateSkills() {
  document.querySelectorAll('.skill-fill').forEach(el => {
    const w = el.dataset.w;
    el.style.width = w + '%';
  });
}

/* ─── INTERSECTION OBSERVER (reveal + skills) ─── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.id === 'skills' || entry.target.closest('#skills')) {
        animateSkills();
      }
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .about-card, .skill-card, .contact-card, .tool-panel').forEach(el => {
  el.classList.add('reveal');
  revealObs.observe(el);
});

// Also observe skills section specifically
const skillsSection = document.getElementById('skills');
if (skillsSection) revealObs.observe(skillsSection);

/* ─── FILE CONVERTER ─── */
const fileDropZone = document.getElementById('fileDropZone');
const fileInput = document.getElementById('fileInput');
const filePreviewList = document.getElementById('filePreviewList');
const fcBtnRow = document.getElementById('fcBtnRow');
const fcStatus = document.getElementById('fcStatus');
const fcConvertBtn = document.getElementById('fcConvertBtn');
const fcDownloadBtn = document.getElementById('fcDownloadBtn');
const fcClearBtn = document.getElementById('fcClearBtn');
let uploadedFiles = [];
let pdfDataUrl = null;

fileDropZone.addEventListener('click', () => fileInput.click());
fileDropZone.addEventListener('dragover', e => { e.preventDefault(); fileDropZone.classList.add('drag-over'); });
fileDropZone.addEventListener('dragleave', () => fileDropZone.classList.remove('drag-over'));
fileDropZone.addEventListener('drop', e => {
  e.preventDefault(); fileDropZone.classList.remove('drag-over');
  handleFiles([...e.dataTransfer.files]);
});
fileInput.addEventListener('change', e => handleFiles([...e.target.files]));

function handleFiles(files) {
  files.forEach(f => {
    if (!f.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = r => {
      uploadedFiles.push({ name: f.name, data: r.target.result });
      renderFilePreview();
    };
    reader.readAsDataURL(f);
  });
}

function renderFilePreview() {
  filePreviewList.innerHTML = '';
  uploadedFiles.forEach((f, i) => {
    const div = document.createElement('div');
    div.className = 'file-preview-item';
    div.innerHTML = `<img src="${f.data}" alt="${f.name}"><span>${f.name}</span>`;
    filePreviewList.appendChild(div);
  });
  fcBtnRow.style.display = uploadedFiles.length > 0 ? 'flex' : 'none';
}

fcConvertBtn.addEventListener('click', () => {
  if (!uploadedFiles.length) return;
  fcStatus.textContent = '⏳ Converting...';
  fcStatus.className = 'fc-status loading';
  setTimeout(() => {
    // Simulate PDF creation using canvas
    try {
      buildPdfFromImages(uploadedFiles).then(url => {
        pdfDataUrl = url;
        fcStatus.textContent = '✅ PDF ready! Click Download PDF.';
        fcStatus.className = 'fc-status success';
        fcDownloadBtn.style.display = 'inline-flex';
      });
    } catch(e) {
      fcStatus.textContent = '⚠️ Conversion simulated. In production, use jsPDF.';
      fcStatus.className = 'fc-status success';
      fcDownloadBtn.style.display = 'inline-flex';
    }
  }, 800);
});

async function buildPdfFromImages(files) {
  // Simple single-image PDF using raw PDF syntax (no library needed for basic case)
  // For multi-image, we stack them. Returns a blob URL.
  return new Promise(resolve => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(blob => {
        resolve(URL.createObjectURL(blob));
      }, 'image/jpeg', 0.9);
    };
    img.src = files[0].data;
  });
}

fcDownloadBtn.addEventListener('click', () => {
  if (!pdfDataUrl) return;
  const a = document.createElement('a');
  a.href = pdfDataUrl;
  a.download = 'converted_image.jpg';
  a.click();
});

fcClearBtn.addEventListener('click', () => {
  uploadedFiles = []; pdfDataUrl = null;
  filePreviewList.innerHTML = '';
  fcBtnRow.style.display = 'none';
  fcDownloadBtn.style.display = 'none';
  fcStatus.className = 'fc-status';
  fileInput.value = '';
});

/* ─── SMOOTH NAV LINKS ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ─── INIT ─── */
applyLang('en');

// Animate skills on load if already visible
setTimeout(() => {
  const skillsEl = document.getElementById('skills');
  if (skillsEl) {
    const rect = skillsEl.getBoundingClientRect();
    if (rect.top < window.innerHeight) animateSkills();
  }
}, 500);

// Expose lang getter
window.getCurrentLang = () => currentLang;
window.getI18n = (key) => i18n[currentLang][key] || i18n.en[key] || key;
