/* ============================================
   CV-BUILDER.JS — 4 Templates + PDF Export
   Europass | Modern | Minimal | Glassmorphism
   ============================================ */

let currentTemplate = 'europass';

const tplBtns = document.querySelectorAll('.tpl-btn');
const previewPane = document.getElementById('cvPreviewInner');
const cvPreviewBtn = document.getElementById('cv-preview-btn');
const cvDownloadBtn = document.getElementById('cv-download-btn');

/* ─── TEMPLATE SWITCHER ─── */
tplBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tplBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTemplate = btn.dataset.tpl;
    renderCV();
  });
});

/* ─── COLLECT FORM DATA ─── */
function getCVData() {
  return {
    name: document.getElementById('cv-name').value || 'Sujan Parajuli',
    title: document.getElementById('cv-title').value || 'IT Support & Network Professional',
    email: document.getElementById('cv-email').value || 'info@sujanparajuli7.com.np',
    phone: document.getElementById('cv-phone').value || '+977-XXXXXXXXX',
    location: document.getElementById('cv-location').value || 'Kathmandu, Nepal',
    summary: document.getElementById('cv-summary').value || '',
    photo: window._profileImgData || null,
  };
}

/* ─── RENDER CV ─── */
function renderCV() {
  const d = getCVData();
  let html = '';
  switch (currentTemplate) {
    case 'europass': html = renderEuropass(d); break;
    case 'modern':   html = renderModern(d);   break;
    case 'minimal':  html = renderMinimal(d);  break;
    case 'glass':    html = renderGlass(d);    break;
  }
  previewPane.innerHTML = html;
}

/* ─── EUROPASS TEMPLATE ─── */
function renderEuropass(d) {
  const photo = d.photo ? `<img src="${d.photo}" style="width:80px;height:80px;border-radius:4px;object-fit:cover;float:right;margin-left:1rem;border:2px solid #003399;" />` : '';
  return `
  <div class="cv-doc europass">
    <div class="cv-header">
      ${photo}
      <h1>${d.name}</h1>
      <div style="font-size:0.95rem;color:#003399;font-weight:600;margin-top:4px;">${d.title}</div>
      <div class="cv-info-row">
        <span>📧 ${d.email}</span>
        <span>📞 ${d.phone}</span>
        <span>📍 ${d.location}</span>
      </div>
    </div>
    <div class="cv-section-title">Personal Statement</div>
    <p style="font-size:0.88rem;color:#333;line-height:1.7;">${d.summary}</p>
    <div class="cv-section-title">Work Experience</div>
    <div style="margin-bottom:0.8rem;">
      <div style="display:flex;justify-content:space-between;"><strong>Network Administrator</strong><span style="color:#003399;font-size:0.82rem;">2022 – 2024</span></div>
      <div style="color:#555;font-size:0.85rem;">iCash Nepal · Kathmandu, Nepal</div>
      <ul style="margin-top:0.4rem;padding-left:1.2rem;font-size:0.85rem;color:#333;">
        <li>Managed enterprise LAN/WAN infrastructure for 50+ endpoints</li>
        <li>Configured and maintained VPN tunnels for remote access</li>
        <li>Monitored network performance and reduced downtime by 30%</li>
      </ul>
    </div>
    <div style="margin-bottom:0.8rem;">
      <div style="display:flex;justify-content:space-between;"><strong>IT Support Specialist</strong><span style="color:#003399;font-size:0.82rem;">2021 – 2022</span></div>
      <div style="color:#555;font-size:0.85rem;">Easymoto Rental Service · Kathmandu, Nepal</div>
      <ul style="margin-top:0.4rem;padding-left:1.2rem;font-size:0.85rem;color:#333;">
        <li>Provided first and second-line IT support to staff</li>
        <li>Configured routers, switches, and network devices</li>
        <li>Managed Windows/Linux workstations and servers</li>
      </ul>
    </div>
    <div class="cv-section-title">Education</div>
    <div style="margin-bottom:0.5rem;"><div style="display:flex;justify-content:space-between;"><strong>Master's in IT (Running)</strong><span style="font-size:0.82rem;color:#003399;">2024 – Present</span></div></div>
    <div><div style="display:flex;justify-content:space-between;"><strong>BCA — Bachelor of Computer Applications</strong><span style="font-size:0.82rem;color:#003399;">2018 – 2022</span></div></div>
    <div class="cv-section-title">Skills</div>
    <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
      ${['LAN/WAN','VPN','IP Addressing','Router Config','Troubleshooting','Network Security','Windows/Linux','Cloud'].map(s=>`<span style="background:#eef2ff;color:#003399;padding:3px 10px;border-radius:3px;font-size:0.8rem;">${s}</span>`).join('')}
    </div>
    <div class="cv-section-title">Languages</div>
    <div style="font-size:0.85rem;">Nepali (Native) · English (Fluent) · German (Basic) · Japanese (Basic)</div>
  </div>`;
}

/* ─── MODERN TEMPLATE ─── */
function renderModern(d) {
  const photo = d.photo ? `<img src="${d.photo}" style="width:90px;height:90px;border-radius:50%;object-fit:cover;border:3px solid #00f5ff;box-shadow:0 0 20px rgba(0,245,255,0.4);" />` : `<div style="width:90px;height:90px;border-radius:50%;background:linear-gradient(135deg,#0066ff,#00f5ff);display:flex;align-items:center;justify-content:center;font-family:Orbitron,monospace;font-size:1.8rem;color:#020d18;font-weight:900;border:3px solid #00f5ff;">${d.name.split(' ').map(n=>n[0]).join('')}</div>` ;
  return `
  <div class="cv-doc modern">
    <div class="cv-header" style="display:flex;gap:1.5rem;align-items:center;">
      ${photo}
      <div>
        <h1 style="font-family:Orbitron,monospace;">${d.name}</h1>
        <div style="color:#aaa;font-size:0.9rem;margin-top:4px;">${d.title}</div>
        <div class="cv-info-row" style="margin-top:8px;">
          <span style="font-size:0.78rem;">📧 ${d.email}</span>
          <span style="font-size:0.78rem;">📞 ${d.phone}</span>
          <span style="font-size:0.78rem;">📍 ${d.location}</span>
        </div>
      </div>
    </div>
    <div class="cv-section-title">Profile</div>
    <p style="font-size:0.88rem;line-height:1.7;color:#ccc;">${d.summary}</p>
    <div class="cv-section-title">Experience</div>
    <div style="margin-bottom:1rem;padding:0.8rem;background:rgba(255,255,255,0.03);border-radius:6px;border-left:3px solid #00f5ff;">
      <div style="display:flex;justify-content:space-between;"><strong style="color:#00f5ff;">Network Administrator</strong><span style="font-size:0.8rem;color:#888;">2022–2024</span></div>
      <div style="font-size:0.85rem;color:#aaa;">iCash Nepal</div>
      <ul style="margin-top:0.5rem;padding-left:1rem;font-size:0.84rem;color:#ccc;">
        <li>Enterprise LAN/WAN management (50+ endpoints)</li>
        <li>VPN tunnel configuration and maintenance</li>
        <li>30% reduction in network downtime</li>
      </ul>
    </div>
    <div style="padding:0.8rem;background:rgba(255,255,255,0.03);border-radius:6px;border-left:3px solid #0066ff;">
      <div style="display:flex;justify-content:space-between;"><strong style="color:#00f5ff;">IT Support Specialist</strong><span style="font-size:0.8rem;color:#888;">2021–2022</span></div>
      <div style="font-size:0.85rem;color:#aaa;">Easymoto Rental Service</div>
      <ul style="margin-top:0.5rem;padding-left:1rem;font-size:0.84rem;color:#ccc;">
        <li>First/second-line IT support</li>
        <li>Router, switch & network device configuration</li>
      </ul>
    </div>
    <div class="cv-section-title">Skills</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">
      ${[['LAN/WAN','90'],['VPN Config','85'],['IP/Subnet','88'],['Router/Switch','87'],['Troubleshoot','92'],['Net Security','80']].map(([s,p])=>`
      <div style="font-size:0.82rem;">
        <div style="display:flex;justify-content:space-between;color:#ccc;margin-bottom:3px;"><span>${s}</span><span style="color:#00f5ff;">${p}%</span></div>
        <div style="height:3px;background:rgba(255,255,255,0.1);border-radius:2px;"><div style="width:${p}%;height:100%;background:linear-gradient(90deg,#0066ff,#00f5ff);border-radius:2px;"></div></div>
      </div>`).join('')}
    </div>
    <div class="cv-section-title">Education</div>
    <div style="font-size:0.85rem;color:#ccc;">🎓 Master's in IT (Running) · BCA Graduate</div>
  </div>`;
}

/* ─── MINIMAL TEMPLATE ─── */
function renderMinimal(d) {
  const photo = d.photo ? `<img src="${d.photo}" style="width:70px;height:70px;border-radius:50%;object-fit:cover;border:2px solid #000;position:absolute;right:2.5rem;top:2rem;" />` : '';
  return `
  <div class="cv-doc minimal" style="position:relative;">
    ${photo}
    <div class="cv-header">
      <h1 style="font-family:'Orbitron',monospace;letter-spacing:0.05em;">${d.name}</h1>
      <div style="font-size:0.9rem;color:#666;margin-top:4px;letter-spacing:0.1em;text-transform:uppercase;">${d.title}</div>
      <div style="margin-top:8px;font-size:0.78rem;color:#888;letter-spacing:0.05em;">${d.email} · ${d.phone} · ${d.location}</div>
    </div>
    <div class="cv-section-title">Summary</div>
    <p style="font-size:0.88rem;color:#444;line-height:1.8;">${d.summary}</p>
    <div class="cv-section-title">Experience</div>
    <div style="margin-bottom:1rem;">
      <div style="font-size:0.88rem;font-weight:700;">Network Administrator — iCash Nepal</div>
      <div style="font-size:0.78rem;color:#888;letter-spacing:0.08em;text-transform:uppercase;margin:2px 0 6px;">2022 – 2024</div>
      <ul style="font-size:0.84rem;color:#444;padding-left:1rem;">
        <li>Enterprise LAN/WAN infrastructure management</li>
        <li>VPN configuration and network security</li>
        <li>Reduced network downtime by 30%</li>
      </ul>
    </div>
    <div>
      <div style="font-size:0.88rem;font-weight:700;">IT Support Specialist — Easymoto Rental Service</div>
      <div style="font-size:0.78rem;color:#888;letter-spacing:0.08em;text-transform:uppercase;margin:2px 0 6px;">2021 – 2022</div>
      <ul style="font-size:0.84rem;color:#444;padding-left:1rem;">
        <li>First and second-line IT support</li>
        <li>Network device configuration</li>
      </ul>
    </div>
    <div class="cv-section-title">Skills</div>
    <div style="font-size:0.84rem;color:#333;line-height:2;">
      LAN/WAN · VPN · IP Addressing · Router Config · Troubleshooting · Network Security · Windows/Linux Admin · Cloud Fundamentals
    </div>
    <div class="cv-section-title">Education</div>
    <div style="font-size:0.84rem;color:#333;">Master's IT (Running) · BCA Graduate</div>
  </div>`;
}

/* ─── GLASSMORPHISM TEMPLATE ─── */
function renderGlass(d) {
  const photo = d.photo ? `<img src="${d.photo}" style="width:85px;height:85px;border-radius:50%;object-fit:cover;border:2px solid rgba(0,245,255,0.5);box-shadow:0 0 20px rgba(0,245,255,0.3);flex-shrink:0;" />` : `<div style="width:85px;height:85px;border-radius:50%;background:linear-gradient(135deg,rgba(0,102,255,0.3),rgba(0,245,255,0.3));display:flex;align-items:center;justify-content:center;font-family:Orbitron,monospace;font-size:1.6rem;color:#00f5ff;border:2px solid rgba(0,245,255,0.4);flex-shrink:0;">${d.name.split(' ').map(n=>n[0]).join('')}</div>`;
  return `
  <div class="cv-doc glass-cv">
    <div class="cv-header" style="display:flex;gap:1.2rem;align-items:center;">
      ${photo}
      <div>
        <h1>${d.name}</h1>
        <div style="color:rgba(0,245,255,0.7);font-size:0.88rem;margin-top:4px;font-family:'JetBrains Mono',monospace;">${d.title}</div>
        <div style="margin-top:6px;font-size:0.76rem;color:rgba(255,255,255,0.5);font-family:'JetBrains Mono',monospace;">${d.email} · ${d.phone} · ${d.location}</div>
      </div>
    </div>
    <div class="cv-section-title">// Profile</div>
    <p style="font-size:0.87rem;color:rgba(255,255,255,0.7);line-height:1.8;padding:0.8rem;background:rgba(0,245,255,0.03);border-radius:6px;border:1px solid rgba(0,245,255,0.08);">${d.summary}</p>
    <div class="cv-section-title">// Experience</div>
    <div style="margin-bottom:0.8rem;padding:0.8rem;background:rgba(0,245,255,0.03);border-radius:6px;border:1px solid rgba(0,245,255,0.08);">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:#00f5ff;font-weight:600;">Network Administrator</span>
        <span style="font-size:0.75rem;color:rgba(0,245,255,0.5);font-family:'JetBrains Mono',monospace;">2022–2024</span>
      </div>
      <div style="color:rgba(255,255,255,0.5);font-size:0.82rem;margin:3px 0 6px;">iCash Nepal</div>
      <div style="font-size:0.83rem;color:rgba(255,255,255,0.65);line-height:1.7;">
        ◈ Enterprise LAN/WAN for 50+ endpoints<br/>◈ VPN tunnels & remote access configuration<br/>◈ Network monitoring — 30% downtime reduction
      </div>
    </div>
    <div style="padding:0.8rem;background:rgba(0,102,255,0.04);border-radius:6px;border:1px solid rgba(0,102,255,0.15);">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:#00f5ff;font-weight:600;">IT Support Specialist</span>
        <span style="font-size:0.75rem;color:rgba(0,245,255,0.5);font-family:'JetBrains Mono',monospace;">2021–2022</span>
      </div>
      <div style="color:rgba(255,255,255,0.5);font-size:0.82rem;margin:3px 0 6px;">Easymoto Rental Service</div>
      <div style="font-size:0.83rem;color:rgba(255,255,255,0.65);line-height:1.7;">
        ◈ First/second-line support & troubleshooting<br/>◈ Router, switch, device configuration
      </div>
    </div>
    <div class="cv-section-title">// Skills</div>
    <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
      ${['LAN/WAN','VPN','IP/Subnetting','Router/Switch','Troubleshoot','Net Security','Linux Admin','Cloud'].map(s=>`<span style="padding:3px 10px;border-radius:3px;font-size:0.76rem;background:rgba(0,245,255,0.07);border:1px solid rgba(0,245,255,0.2);color:#00f5ff;font-family:'JetBrains Mono',monospace;">${s}</span>`).join('')}
    </div>
    <div class="cv-section-title">// Education</div>
    <div style="font-size:0.84rem;color:rgba(255,255,255,0.6);font-family:'JetBrains Mono',monospace;">
      MSc IT (In Progress) · BCA Graduate · Focus: Network & Security
    </div>
  </div>`;
}

/* ─── PREVIEW BUTTON ─── */
cvPreviewBtn.addEventListener('click', renderCV);

/* ─── PDF DOWNLOAD ─── */
cvDownloadBtn.addEventListener('click', () => {
  renderCV();
  const content = document.getElementById('cvPreviewInner');
  // Use print dialog for PDF
  const printWin = window.open('', '_blank', 'width=800,height=900');
  printWin.document.write(`
    <!DOCTYPE html><html><head>
    <meta charset="UTF-8">
    <title>CV - ${document.getElementById('cv-name').value || 'Sujan Parajuli'}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
      body { margin: 0; padding: 20px; font-family: 'Rajdhani', sans-serif; }
      @media print { body { margin: 0; padding: 0; } }
      .cv-doc { background:#fff;color:#1a1a1a;padding:2.5rem;font-size:0.92rem;line-height:1.6; }
      .cv-doc.europass .cv-header { border-left:5px solid #003399;padding-left:1rem;margin-bottom:1.5rem; }
      .cv-doc.europass .cv-header h1 { font-size:1.6rem;color:#003399;font-weight:700; }
      .cv-doc.europass .cv-section-title { color:#003399;border-bottom:2px solid #003399;padding-bottom:4px;margin:1.2rem 0 0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;font-size:.8rem; }
      .cv-doc.modern { background:linear-gradient(135deg,#0a0a2e,#1a1a4e);color:#e0e0ff; }
      .cv-doc.modern .cv-header { background:rgba(255,255,255,.05);padding:1.5rem;border-radius:8px;margin-bottom:1.5rem; }
      .cv-doc.modern .cv-header h1 { color:#00f5ff;font-size:1.6rem;font-family:'Orbitron',monospace; }
      .cv-doc.modern .cv-section-title { color:#00f5ff;border-bottom:1px solid rgba(0,245,255,.3);padding-bottom:4px;margin:1.2rem 0 .6rem;font-size:.8rem;text-transform:uppercase;letter-spacing:.1em; }
      .cv-doc.minimal { background:#f9f9f9; }
      .cv-doc.minimal .cv-header { text-align:center;margin-bottom:2rem; }
      .cv-doc.minimal .cv-header h1 { font-size:2rem;font-weight:900;letter-spacing:.1em;font-family:'Orbitron',monospace; }
      .cv-doc.minimal .cv-section-title { text-transform:uppercase;letter-spacing:.15em;font-size:.7rem;color:#888;margin:1.5rem 0 .5rem; }
      .cv-doc.glass-cv { background:rgba(5,15,30,.95);color:#e0f7ff; }
      .cv-doc.glass-cv .cv-header { background:rgba(0,245,255,.05);padding:1.5rem;border-radius:8px;margin-bottom:1.5rem;border:1px solid rgba(0,245,255,.1); }
      .cv-doc.glass-cv .cv-header h1 { color:#00f5ff;font-size:1.6rem;font-family:'Orbitron',monospace; }
      .cv-doc.glass-cv .cv-section-title { color:#00f5ff;border-bottom:1px solid rgba(0,245,255,.2);padding-bottom:4px;margin:1.2rem 0 .6rem;font-family:'JetBrains Mono',monospace;font-size:.75rem;text-transform:uppercase;letter-spacing:.1em; }
      .cv-info-row { display:flex;gap:.5rem;flex-wrap:wrap;font-size:.82rem;opacity:.75;margin-top:.3rem; }
      ul { margin: 0; } li { margin-bottom: 2px; }
    </style>
    </head><body>
    ${content.innerHTML}
    </body></html>
  `);
  printWin.document.close();
  setTimeout(() => printWin.print(), 500);
});

/* ─── AUTO-RENDER ON INPUT ─── */
['cv-name','cv-title','cv-email','cv-phone','cv-location','cv-summary'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', () => {
    if (previewPane.innerHTML) renderCV();
  });
});

// Initial render
renderCV();
window.renderCV = renderCV;
