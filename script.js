
// Language Content
const langData = {
    en: {
        title: "Network Assistant", navAbout: "Profile", navSkills: "Expertise", navContact: "Message",
        sectionIntro: "Introduction", sectionWork: "What I Do",
        heroTitle: "I am Sujan Parajuli.",
        heroDesc: "Kathmandu-based IT Support & Network Administrator focusing on virtualization and system security.",
        botGreet: "Namaste! I am Suzzan. How can I help you? 💭"
    },
    de: {
        title: "Netzwerk-Assistent", navAbout: "Profil", navSkills: "Expertise", navContact: "Nachricht",
        sectionIntro: "Einleitung", sectionWork: "Meine Arbeit",
        heroTitle: "Ich bin Sujan Parajuli.",
        heroDesc: "IT-Support und Netzwerkadministrator mit Sitz in Kathmandu, spezialisiert auf Virtualisierung und Sicherheit.",
        botGreet: "Hallo! Ich bin Suzzan. Wie kann ich Ihnen helfen? 💭"
    },
    jp: {
        title: "ネットワークアシスタント", navAbout: "プロフィール", navSkills: "専門知識", navContact: "メッセージ",
        sectionIntro: "はじめに", sectionWork: "業務内容",
        heroTitle: "スジャン・パラジュリです。",
        heroDesc: "カトマンズを拠点とするITサポートおよびネットワーク管理者。仮想化とシステムセキュリティを専門としています。",
        botGreet: "こんにちは！私はスザンです。何かお手伝いしましょうか？ 💭"
    }
};

function changeLang(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`button[onclick="changeLang('${lang}')"]`);
    if(activeBtn) activeBtn.classList.add('active');

    document.getElementById('title').innerText = langData[lang].title;
    document.getElementById('navAbout').innerText = langData[lang].navAbout;
    document.getElementById('navSkills').innerText = langData[lang].navSkills;
    document.getElementById('navContact').innerText = langData[lang].navContact;
    document.getElementById('sectionIntro').innerText = langData[lang].sectionIntro;
    document.getElementById('sectionWork').innerText = langData[lang].sectionWork;
    document.getElementById('heroTitle').innerText = langData[lang].heroTitle;
    document.getElementById('heroDesc').innerText = langData[lang].heroDesc;
    document.getElementById('botGreet').innerText = langData[lang].botGreet;
}

// Chatbot Logic
function toggleChat() {
    const win = document.getElementById('chatWindow');
    win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
}

function handleChat() {
    const input = document.getElementById('chatInput');
    const msgs = document.getElementById('chatMessages');
    const typing = document.getElementById('typingIndicator');
    const text = input.value.trim();
    if(!text) return;

    msgs.innerHTML += `<div class="msg user">${text}</div>`;
    input.value = "";
    msgs.scrollTop = msgs.scrollHeight;
    typing.style.display = "block";
    
    setTimeout(() => {
        typing.style.display = "none";
        let reply = "I understand. Sujan is an expert IT professional. You can email him at info@sujanparajuli7.com.np for details! 💭";
        
        const q = text.toLowerCase();
        if(q.includes("skill") || q.includes("expertise")) {
            reply = "Sujan specializes in Cisco, MikroTik, VPN configuration, and system security. 💭";
        } else if(q.includes("experience") || q.includes("work")) {
            reply = "Sujan has over 2 years of experience at companies like iCash Nepal and Easymoto Rental. 💭";
        }

        msgs.innerHTML += `<div class="msg bot">${reply}</div>`;
        msgs.scrollTop = msgs.scrollHeight;
    }, 1200);
}
