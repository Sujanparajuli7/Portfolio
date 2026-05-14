/* =========================================
   SUJAN PARAJULI - PREMIUM HUMAN AI LOGIC
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  // --- NAVBAR SCROLL ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  });

  // --- HAMBURGER MENU ---
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // --- ACTIVE LINK ON SCROLL ---
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  }

  // --- PREMIUM HUMAN AI CHATBOT ---
  const chatBubble = document.getElementById('chat-bubble');
  const chatWindow = document.getElementById('chat-window');
  const closeChat = document.getElementById('close-chat');
  const chatBody = document.getElementById('chat-body');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');
  const typingIndicator = document.getElementById('typing-indicator');

  function toggleChat() {
    chatWindow.classList.toggle('active');
  }

  chatBubble.addEventListener('click', toggleChat);
  closeChat.addEventListener('click', toggleChat);

  const botResponses = {
    "networking": {
      en: "Sujan has extensive expertise in Networking, including LAN/WAN setup, TCP/IP protocols, VLAN segmentation, and enterprise routing. He specializes in designing reliable office infrastructures.",
      jp: "スジャンは、LAN/WANセットアップ、TCP/IPプロトコル、VLANセグメンテーション、企業ルーティングなど、ネットワーキングにおける広範な専門知識を持っています。信頼性の高いオフィスインフラの設計を専門としています。",
      de: "Sujan verfügt über umfassende Expertise im Bereich Networking, einschließlich LAN/WAN-Setup, TCP/IP-Protokolle, VLAN-Segmentierung und Enterprise-Routing. Er ist auf die Gestaltung zuverlässiger Büroinfrastrukturen spezialisiert."
    },
    "it support": {
      en: "With over 2 years of experience, Sujan provides comprehensive IT support, ranging from helpdesk and remote assistance to hardware troubleshooting and system performance monitoring.",
      jp: "2年以上の経験を持つスジャンは、ヘルプデスクやリモートアシスタンスから、ハードウェアのトラブルシューティングやシステムパフォーマンスの監視に至るまで、包括的なITサポートを提供します。",
      de: "Mit über 2 Jahren Erfahrung bietet Sujan umfassenden IT-Support, von Helpdesk und Remote-Unterstützung bis hin zu Hardware-Fehlerbehebung und Systemleistungsüberwachung."
    },
    "hardware": {
      en: "Sujan is skilled in hardware maintenance, including router/switch configuration, PC troubleshooting, and cable management to ensure optimal hardware performance.",
      jp: "スジャンは、最適なハードウェアパフォーマンスを確保するためのルーター/スイッチの設定、PCのトラブルシューティング、ケーブル管理など、ハードウェアのメンテナンスに熟練しています。",
      de: "Sujan ist erfahren in der Hardwarewartung, einschließlich Router-/Switch-Konfiguration, PC-Fehlerbehebung und Kabelmanagement, um eine optimale Hardwareleistung sicherzustellen."
    },
    "systems": {
      en: "He manages Windows and Linux systems, focusing on administration, backup solutions, user access management, and infrastructure monitoring.",
      jp: "WindowsおよびLinuxシステムを管理し、管理、バックアップソリューション、ユーザーアクセス管理、インフラストラクチャの監視に重点を置いています。",
      de: "Er verwaltet Windows- und Linux-Systeme mit den Schwerpunkten Administration, Backup-Lösungen, Benutzerzugriffsverwaltung und Infrastrukturüberwachung."
    },
    "vpn": {
      en: "VPN security is one of Sujan's core specialties. He deploys site-to-site and remote-access VPNs using OpenVPN and IPSec technologies for secure enterprise communication.",
      jp: "VPNセキュリティはスジャンの核となる専門分野の1つです。OpenVPNおよびIPSecテクノロジーを使用して、安全な企業通信のためにサイト間およびリモートアクセスVPNを展開します。",
      de: "VPN-Sicherheit ist eine von Sujans Kernkompetenzen. Er implementiert Site-to-Site- und Remote-Access-VPNs unter Verwendung von OpenVPN- und IPSec-Technologien für eine sichere Unternehmenskommunikation."
    },
    "experience": {
      en: "Sujan is currently an IT Support Executive at Easymoto Rental Services. Previously, he served as a Network Administrator at ICash Pvt. Ltd. (iCash Nepal) from May 2024 to Nov 2025.",
      jp: "スジャンは現在、Easymoto Rental ServicesでITサポートエグゼクティブを務めています。以前は、2024年5月から2025年11月までICash Pvt. Ltd. (iCash Nepal) でネットワーク管理者を務めていました。",
      de: "Sujan ist derzeit IT-Support-Mitarbeiter bei Easymoto Rental Services. Zuvor war er von Mai 2024 bis Nov 2025 als Netzwerkadministrator bei ICash Pvt. Ltd. (iCash Nepal) tätig."
    },
    "education": {
      en: "Sujan holds a Bachelor of Computer Application (BCA) and a professional Network & VPN Engineer Certification from NETWORK WORLD Inc.",
      jp: "スジャンは、コンピュータアプリケーションの学士号 (BCA) と、NETWORK WORLD Inc.からのプロフェッショナルなネットワーク＆VPNエンジニア認定資格を保持しています。",
      de: "Sujan besitzt einen Bachelor of Computer Application (BCA) und eine professionelle Netzwerk- & VPN-Ingenieur-Zertifizierung von NETWORK WORLD Inc."
    },
    "hello": {
      en: "Hello! I'm Sujan's AI assistant. How can I help you with information about his Networking, IT Support, or System Administration skills today?",
      jp: "こんにちは！スジャンのAIアシスタントです。本日は彼のネットワーキング、ITサポート、またはシステム管理のスキルについて、どのような情報をお探しですか？",
      de: "Hallo! Ich bin Sujans KI-Assistent. Wie kann ich Ihnen heute mit Informationen über seine Networking-, IT-Support- oder Systemadministrations-Fähigkeiten helfen?"
    },
    "hi": {
      en: "Hello! How can I assist you with information about Sujan's professional background today?",
      jp: "こんにちは！本日はスジャンの職歴について、どのような情報をお手伝いできますか？",
      de: "Hallo! Wie kann ich Ihnen heute mit Informationen über Sujans beruflichen Werdegang helfen?"
    },
    "default": {
      en: "I'm specifically trained to discuss Sujan's expertise in Networking, IT Support, Hardware, and Systems. Feel free to ask me about any of these professional topics!",
      jp: "私は特にスジャンのネットワーキング、ITサポート、ハードウェア、およびシステムにおける専門知識について話し合うように訓練されています。これらの専門的なトピックについてお気軽にお尋ねください！",
      de: "Ich bin speziell darauf trainiert, über Sujans Expertise in den Bereichen Networking, IT-Support, Hardware und Systeme zu sprechen. Fühlen Sie sich frei, mich nach diesen beruflichen Themen zu fragen!"
    }
  };

  function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `${sender}-message`;
    div.textContent = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleChat() {
    const message = userInput.value.trim().toLowerCase();
    if (!message) return;

    addMessage(userInput.value, 'user');
    userInput.value = '';

    // Show typing indicator
    typingIndicator.style.display = 'flex';
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      typingIndicator.style.display = 'none';
      const currentLang = localStorage.getItem('language') || 'en';
      let responseKey = "default";
      for (let key in botResponses) {
        if (message.includes(key)) {
          responseKey = key;
          break;
        }
      }
      addMessage(botResponses[responseKey][currentLang], 'bot');
    }, 1500);
  }

  sendBtn.addEventListener('click', handleChat);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChat();
  });

  // --- THEME SWITCHER ---
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');

  function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    
    // Update icon
    themeIcon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  themeToggle.addEventListener('click', toggleTheme);

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  // --- BACK TO TOP BUTTON ---
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --- LANGUAGE SWITCHER ---
  const langSwitcher = document.getElementById('language-switcher');
  
  const contentMap = [
    { selector: '.nav-menu a:nth-child(1)', en: 'Home', jp: 'ホーム', de: 'Startseite' },
    { selector: '.nav-menu a:nth-child(2)', en: 'About', jp: '私について', de: 'Über mich' },
    { selector: '.nav-menu a:nth-child(3)', en: 'Skills', jp: 'スキル', de: 'Kompetenzen' },
    { selector: '.nav-menu a:nth-child(4)', en: 'Experience', jp: '職歴', de: 'Erfahrung' },
    { selector: '.nav-menu a:nth-child(5)', en: 'Projects', jp: 'プロジェクト', de: 'Projekte' },
    { selector: '.nav-menu a:nth-child(6)', en: 'Certifications', jp: '資格', de: 'Zertifizierungen' },
    { selector: '.nav-menu a:nth-child(7)', en: 'Contact', jp: 'お問い合わせ', de: 'Kontakt' },
    
    { selector: '.hero-tag', en: 'IT Support & Network Professional', jp: 'ITサポート＆ネットワークプロフェッショナル', de: 'IT-Support & Netzwerk-Profi' },
    { selector: '.hero-title', en: 'Sujan Parajuli', jp: 'スジャン・パラジュリ', de: 'Sujan Parajuli' },
    { selector: '.hero-description', en: 'Dedicated IT Support and Network Professional with hands-on experience in LAN/WAN infrastructure, VPN configuration, system troubleshooting, and enterprise networking solutions.', jp: 'LAN/WANインフラ、VPN設定、システムのトラブルシューティング、および企業ネットワークソリューションの実務経験を持つ、献身的なITサポートおよびネットワークプロフェッショナルです。', de: 'Engagierter IT-Support- und Netzwerk-Experte mit praktischer Erfahrung in LAN/WAN-Infrastruktur, VPN-Konfiguration, System-Fehlerbehebung und Unternehmens-Netzwerklösungen.' },
    { selector: '.hero-buttons a.btn-primary', html: true, en: 'Download CV <i class="fas fa-download"></i>', jp: 'CVをダウンロード <i class="fas fa-download"></i>', de: 'Lebenslauf herunterladen <i class="fas fa-download"></i>' },
    { selector: '.hero-buttons a.btn-outline', en: 'Contact Me', jp: 'お問い合わせ', de: 'Kontaktiere mich' },
    { selector: '.floating-badge', html: true, en: '<i class="fas fa-check-circle"></i> Available for Hire', jp: '<i class="fas fa-check-circle"></i> 採用可能', de: '<i class="fas fa-check-circle"></i> Verfügbar für Anstellung' },
    
    { selector: '#about .section-title', html: true, en: 'About <span>Me</span>', jp: '<span>私について</span>', de: 'Über <span>mich</span>' },
    { selector: '#about .section-subtitle', en: 'Based in Kathmandu, Nepal', jp: 'ネパール、カトマンズ拠点', de: 'Ansässig in Kathmandu, Nepal' },
    { selector: '#about .card.glass p', en: 'I am an IT Support and Network Professional based in Kathmandu, Nepal with practical experience in networking, VPN solutions, hardware troubleshooting, and enterprise infrastructure support.', jp: '私はネパールのカトマンズを拠点とするITサポートおよびネットワークプロフェッショナルであり、ネットワーキング、VPNソリューション、ハードウェアのトラブルシューティング、および企業インフラサポートの実務経験があります。', de: 'Ich bin ein IT-Support- und Netzwerk-Experte mit Sitz in Kathmandu, Nepal, mit praktischer Erfahrung in Networking, VPN-Lösungen, Hardware-Fehlerbehebung und Unterstützung von Unternehmensinfrastrukturen.' },
    { selector: '#about .specialties h4', en: 'I specialize in:', jp: '専門分野：', de: 'Ich spezialisiere mich auf:' },
    { selector: '#about .spec-list li:nth-child(1)', html: true, en: '<i class="fas fa-network-wired"></i> LAN/WAN Networking', jp: '<i class="fas fa-network-wired"></i> LAN/WANネットワーキング', de: '<i class="fas fa-network-wired"></i> LAN/WAN-Vernetzung' },
    { selector: '#about .spec-list li:nth-child(2)', html: true, en: '<i class="fas fa-lock"></i> VPN Configuration', jp: '<i class="fas fa-lock"></i> VPN設定', de: '<i class="fas fa-lock"></i> VPN-Konfiguration' },
    { selector: '#about .spec-list li:nth-child(3)', html: true, en: '<i class="fas fa-headset"></i> IT Support', jp: '<i class="fas fa-headset"></i> ITサポート', de: '<i class="fas fa-headset"></i> IT-Support' },
    { selector: '#about .spec-list li:nth-child(4)', html: true, en: '<i class="fas fa-tools"></i> Hardware Troubleshooting', jp: '<i class="fas fa-tools"></i> ハードウェアのトラブルシューティング', de: '<i class="fas fa-tools"></i> Hardware-Fehlerbehebung' },
    { selector: '#about .spec-list li:nth-child(5)', html: true, en: '<i class="fas fa-server"></i> System Administration', jp: '<i class="fas fa-server"></i> システム管理', de: '<i class="fas fa-server"></i> Systemadministration' },
    { selector: '#about .spec-list li:nth-child(6)', html: true, en: '<i class="fas fa-microchip"></i> Router & Switch Configuration', jp: '<i class="fas fa-microchip"></i> ルーターとスイッチの設定', de: '<i class="fas fa-microchip"></i> Router- und Switch-Konfiguration' },
    
    { selector: '#skills .section-title', html: true, en: 'Technical <span>Skills</span>', jp: 'テクニカル<span>スキル</span>', de: 'Technische <span>Fähigkeiten</span>' },
    { selector: '#skills .skill-card:nth-child(1) h3', en: 'Networking', jp: 'ネットワーキング', de: 'Networking' },
    { selector: '#skills .skill-card:nth-child(1) li:nth-child(1)', en: 'LAN/WAN', jp: 'LAN/WAN', de: 'LAN/WAN' },
    { selector: '#skills .skill-card:nth-child(1) li:nth-child(2)', en: 'TCP/IP', jp: 'TCP/IP', de: 'TCP/IP' },
    { selector: '#skills .skill-card:nth-child(1) li:nth-child(3)', en: 'DNS & DHCP', jp: 'DNS & DHCP', de: 'DNS & DHCP' },
    { selector: '#skills .skill-card:nth-child(1) li:nth-child(4)', en: 'VLAN', jp: 'VLAN', de: 'VLAN' },
    { selector: '#skills .skill-card:nth-child(1) li:nth-child(5)', en: 'VPN Configuration', jp: 'VPN設定', de: 'VPN-Konfiguration' },
    { selector: '#skills .skill-card:nth-child(1) li:nth-child(6)', en: 'Network Monitoring', jp: 'ネットワーク監視', de: 'Netzwerküberwachung' },
    
    { selector: '#skills .skill-card:nth-child(2) h3', en: 'Hardware', jp: 'ハードウェア', de: 'Hardware' },
    { selector: '#skills .skill-card:nth-child(2) li:nth-child(1)', en: 'Router Configuration', jp: 'ルーター設定', de: 'Router-Konfiguration' },
    { selector: '#skills .skill-card:nth-child(2) li:nth-child(2)', en: 'Switch Management', jp: 'スイッチ管理', de: 'Switch-Management' },
    { selector: '#skills .skill-card:nth-child(2) li:nth-child(3)', en: 'PC Troubleshooting', jp: 'PCトラブルシューティング', de: 'PC-Fehlerbehebung' },
    { selector: '#skills .skill-card:nth-child(2) li:nth-child(4)', en: 'Hardware Maintenance', jp: 'ハードウェアメンテナンス', de: 'Hardware-Wartung' },
    { selector: '#skills .skill-card:nth-child(2) li:nth-child(5)', en: 'Cable Management', jp: 'ケーブル管理', de: 'Kabelmanagement' },
    
    { selector: '#skills .skill-card:nth-child(3) h3', en: 'IT Support', jp: 'ITサポート', de: 'IT-Support' },
    { selector: '#skills .skill-card:nth-child(3) li:nth-child(1)', en: 'Helpdesk Support', jp: 'ヘルプデスクサポート', de: 'Helpdesk-Support' },
    { selector: '#skills .skill-card:nth-child(3) li:nth-child(2)', en: 'Remote Support', jp: 'リモートサポート', de: 'Remote-Support' },
    { selector: '#skills .skill-card:nth-child(3) li:nth-child(3)', en: 'System Installation', jp: 'システムインストール', de: 'Systeminstallation' },
    { selector: '#skills .skill-card:nth-child(3) li:nth-child(4)', en: 'User Assistance', jp: 'ユーザー支援', de: 'Benutzerunterstützung' },
    { selector: '#skills .skill-card:nth-child(3) li:nth-child(5)', en: 'Software Troubleshooting', jp: 'ソフトウェアトラブルシューティング', de: 'Software-Fehlerbehebung' },
    
    { selector: '#skills .skill-card:nth-child(4) h3', en: 'Systems', jp: 'システム', de: 'Systeme' },
    { selector: '#skills .skill-card:nth-child(4) li:nth-child(1)', en: 'Windows Administration', jp: 'Windows管理', de: 'Windows-Administration' },
    { selector: '#skills .skill-card:nth-child(4) li:nth-child(2)', en: 'Linux Basics', jp: 'Linux基礎', de: 'Linux-Grundlagen' },
    { selector: '#skills .skill-card:nth-child(4) li:nth-child(3)', en: 'Backup Solutions', jp: 'バックアップソリューション', de: 'Backup-Lösungen' },
    { selector: '#skills .skill-card:nth-child(4) li:nth-child(4)', en: 'User Management', jp: 'ユーザー管理', de: 'Benutzerverwaltung' },
    { selector: '#skills .skill-card:nth-child(4) li:nth-child(5)', en: 'System Monitoring', jp: 'システム監視', de: 'Systemüberwachung' },
    
    { selector: '#experience .section-title', html: true, en: 'Work <span>Experience</span>', jp: '職務<span>経歴</span>', de: 'Arbeits<span>erfahrung</span>' },
    { selector: '#experience .timeline-item:nth-child(1) .timeline-date', en: '2025 – Present', jp: '2025年 – 現在', de: '2025 – Heute' },
    { selector: '#experience .timeline-item:nth-child(1) h3', en: 'IT Support Executive', jp: 'ITサポートエグゼクティブ', de: 'IT-Support-Mitarbeiter' },
    { selector: '#experience .timeline-item:nth-child(1) .resp-list li:nth-child(1)', en: 'Providing day-to-day IT support and technical assistance', jp: '日々のITサポートおよび技術支援の提供', de: 'Bereitstellung von täglichem IT-Support und technischer Unterstützung' },
    { selector: '#experience .timeline-item:nth-child(1) .resp-list li:nth-child(2)', en: 'Managing office systems and network connectivity', jp: 'オフィスシステムとネットワーク接続の管理', de: 'Verwaltung von Bürosystemen und Netzwerkkonnektivität' },
    { selector: '#experience .timeline-item:nth-child(1) .resp-list li:nth-child(3)', en: 'Troubleshooting hardware and software issues', jp: 'ハードウェアおよびソフトウェアの問題のトラブルシューティング', de: 'Fehlerbehebung bei Hardware- und Softwareproblemen' },
    { selector: '#experience .timeline-item:nth-child(1) .resp-list li:nth-child(4)', en: 'Maintaining computers, printers, and network devices', jp: 'コンピュータ、プリンター、ネットワーク機器のメンテナンス', de: 'Wartung von Computern, Druckern und Netzwerkgeräten' },
    { selector: '#experience .timeline-item:nth-child(1) .resp-list li:nth-child(5)', en: 'Supporting staff with technical problems and system configurations', jp: '技術的な問題やシステム設定に関するスタッフのサポート', de: 'Unterstützung der Mitarbeiter bei technischen Problemen und Systemkonfigurationen' },
    { selector: '#experience .timeline-item:nth-child(1) .resp-list li:nth-child(6)', en: 'Monitoring system performance and ensuring smooth IT operations', jp: 'システムパフォーマンスの監視とスムーズなIT運用の確保', de: 'Überwachung der Systemleistung und Gewährleistung eines reibungslosen IT-Betriebs' },
    
    { selector: '#experience .timeline-item:nth-child(2) .timeline-date', en: 'May 2024 – Nov 2025', jp: '2024年5月 – 2025年11月', de: 'Mai 2024 – Nov. 2025' },
    { selector: '#experience .timeline-item:nth-child(2) h3', en: 'Network Administrator', jp: 'ネットワーク管理者', de: 'Netzwerkadministrator' },
    { selector: '#experience .timeline-item:nth-child(2) .resp-list li:nth-child(1)', en: 'Delivered IT support, troubleshooting hardware/software issues and maintaining systems', jp: 'ハードウェア/ソフトウェアの問題のトラブルシューティングおよびシステムのメンテナンスなどのITサポートを提供', de: 'Bereitstellung von IT-Support, Fehlerbehebung bei Hardware-/Softwareproblemen und Systemwartung' },
    { selector: '#experience .timeline-item:nth-child(2) .resp-list li:nth-child(2)', en: 'Managed LAN/WAN connectivity, IP configuration, and network issues', jp: 'LAN/WAN接続、IP設定、およびネットワーク問題の管理', de: 'Verwaltung von LAN/WAN-Konnektivität, IP-Konfiguration und Netzwerkproblemen' },
    { selector: '#experience .timeline-item:nth-child(2) .resp-list li:nth-child(3)', en: 'Handled user support requests efficiently and communicated effectively with diverse teams', jp: 'ユーザーサポートリクエストを効率的に処理し、多様なチームと効果的にコミュニケーションを取る', de: 'Effiziente Bearbeitung von Benutzersupportanfragen und effektive Kommunikation mit vielfältigen Teams' },
    { selector: '#experience .timeline-item:nth-child(2) .resp-list li:nth-child(4)', en: 'Ensured smooth operations through proactive system maintenance', jp: 'プロアクティブなシステムメンテナンスによるスムーズな運用の確保', de: 'Gewährleistung eines reibungslosen Betriebs durch proaktive Systemwartung' },
    
    { selector: '#projects .section-title', html: true, en: 'Network <span>Infrastructure</span>', jp: 'ネットワーク<span>インフラ</span>', de: 'Netzwerk<span>infrastruktur</span>' },
    { selector: '#projects .project-card:nth-child(1) h3', en: 'Enterprise LAN/WAN Setup', jp: '企業向けLAN/WANセットアップ', de: 'Unternehmensweites LAN/WAN-Setup' },
    { selector: '#projects .project-card:nth-child(1) p', en: 'Designed and implemented enterprise office network infrastructure with secure VLAN segmentation, optimized routing, structured cabling, and firewall integration.', jp: 'セキュアなVLANセグメンテーション、最適化されたルーティング、構造化配線、およびファイアウォール統合を備えた企業オフィスネットワークインフラストラクチャを設計および実装しました。', de: 'Entwurf und Implementierung der Netzwerkinfrastruktur für Unternehmensbüros mit sicherer VLAN-Segmentierung, optimiertem Routing, strukturierter Verkabelung und Firewall-Integration.' },
    { selector: '#projects .project-card:nth-child(2) h3', en: 'VPN Infrastructure', jp: 'VPNインフラストラクチャ', de: 'VPN-Infrastruktur' },
    { selector: '#projects .project-card:nth-child(2) p', en: 'Designed and deployed secure remote-access and site-to-site VPN infrastructure using OpenVPN and IPSec technologies for encrypted communication.', jp: '暗号化された通信のために、OpenVPNおよびIPSecテクノロジーを使用して安全なリモートアクセスおよびサイト間VPNインフラストラクチャを設計および展開しました。', de: 'Entwurf und Bereitstellung einer sicheren Fernzugriffs- und Standort-zu-Standort-VPN-Infrastruktur unter Verwendung von OpenVPN- und IPSec-Technologien für verschlüsselte Kommunikation.' },
    { selector: '#projects .project-card:nth-child(3) h3', en: 'Home Lab Virtualization', jp: 'ホームラボ仮想化', de: 'Home-Lab-Virtualisierung' },
    { selector: '#projects .project-card:nth-child(3) p', en: 'Built a virtual network lab using GNS3 and Cisco IOS for networking simulations, topology testing, and continuous learning.', jp: 'ネットワーキングのシミュレーション、トポロジテスト、および継続的な学習のために、GNS3とCisco IOSを使用して仮想ネットワークラボを構築しました。', de: 'Aufbau eines virtuellen Netzwerklabors mit GNS3 und Cisco IOS für Netzwerk-Simulationen, Topologie-Tests und kontinuierliches Lernen.' },
    
    { selector: '#certifications .section-title', html: true, en: 'Education & <span>Certifications</span>', jp: '教育と<span>資格</span>', de: 'Ausbildung & <span>Zertifizierungen</span>' },
    { selector: '#certifications .cert-card:nth-child(1) h3', en: 'Master (Running)', jp: '修士課程（在学中）', de: 'Master (Laufend)' },
    { selector: '#certifications .cert-card:nth-child(2) h3', en: 'Bachelor of Computer Application (BCA)', jp: 'コンピュータアプリケーション学士 (BCA)', de: 'Bachelor of Computer Application (BCA)' },
    { selector: '#certifications .cert-card:nth-child(3) h3', en: 'Network & VPN Engineer Certification', jp: 'ネットワーク＆VPNエンジニア資格', de: 'Netzwerk- und VPN-Ingenieur-Zertifizierung' },
    { selector: '#certifications .cert-card:nth-child(3) .cert-meta', en: 'NETWORK WORLD Inc | Issued Apr 2026', jp: 'NETWORK WORLD Inc | 2026年4月発行', de: 'NETWORK WORLD Inc | Ausgestellt im April 2026' },
    { selector: '#certifications .cert-card:nth-child(3) .cert-id', en: 'Credential ID #40085', jp: '資格ID #40085', de: 'Ausweis-ID #40085' },
    { selector: '#certifications .cert-card:nth-child(3) .cert-desc', en: 'Completed 315 hours of training in Network & VPN Engineering, covering networking fundamentals, VPN configuration, and cybersecurity concepts.', jp: 'ネットワークの基礎、VPN設定、およびサイバーセキュリティの概念をカバーする315時間のネットワーク＆VPNエンジニアリングトレーニングを完了しました。', de: 'Abschluss einer 315-stündigen Ausbildung in Netzwerk- und VPN-Engineering, die Netzwerkgrundlagen, VPN-Konfiguration und Cybersicherheitskonzepte abdeckt.' },
    
    { selector: '#hobbies .section-title', html: true, en: 'Hobbies & <span>Interests</span>', jp: '趣味と<span>興味</span>', de: 'Hobbys & <span>Interessen</span>' },
    { selector: '#hobbies .hobby-card:nth-child(1) h3', en: 'Technology & Networking', jp: 'テクノロジーとネットワーキング', de: 'Technologie & Networking' },
    { selector: '#hobbies .hobby-card:nth-child(1) p', en: 'Passionate about exploring advanced networking topologies and emerging tech.', jp: '高度なネットワークトポロジと新興技術の探索に情熱を注いでいます。', de: 'Leidenschaft für die Erkundung fortgeschrittener Netzwerktopologien und aufstrebender Technologien.' },
    { selector: '#hobbies .hobby-card:nth-child(2) h3', en: 'Video Editing & Content Creation', jp: '動画編集とコンテンツ制作', de: 'Videobearbeitung & Content-Erstellung' },
    { selector: '#hobbies .hobby-card:nth-child(2) p', en: 'Creating engaging digital media and technology-related tutorials.', jp: '魅力的なデジタルメディアやテクノロジー関連のチュートリアルを作成しています。', de: 'Erstellung ansprechender digitaler Medien und technikbezogener Tutorials.' },
    { selector: '#hobbies .hobby-card:nth-child(3) h3', en: 'AI Tools', jp: 'AIツール', de: 'KI-Tools' },
    { selector: '#hobbies .hobby-card:nth-child(3) p', en: 'Experimenting with AI-driven solutions to optimize technical workflows.', jp: 'テクニカルワークフローを最適化するためのAI駆動ソリューションを実験しています。', de: 'Experimentieren mit KI-gesteuerten Lösungen zur Optimierung technischer Arbeitsabläufe.' },
    { selector: '#hobbies .hobby-card:nth-child(4) h3', en: 'Travel & Team Collaboration', jp: '旅行とチームコラボレーション', de: 'Reisen & Teamarbeit' },
    { selector: '#hobbies .hobby-card:nth-child(4) p', en: 'Enjoying travel and fostering strong collaboration within diverse teams.', jp: '旅行を楽しみ、多様なチーム内での強力なコラボレーションを促進しています。', de: 'Reisen genießen und starke Zusammenarbeit in vielfältigen Teams fördern.' },
    
    { selector: '#contact .section-title', html: true, en: 'Contact <span>Me</span>', jp: 'お問い合わせ', de: 'Kontaktiere <span>mich</span>' },
    { selector: '#contact .contact-item:nth-child(1) strong', en: 'Email', jp: 'メール', de: 'E-Mail' },
    { selector: '#contact .contact-item:nth-child(2) strong', en: 'Phone', jp: '電話', de: 'Telefon' },
    { selector: '#contact .contact-item:nth-child(3) strong', en: 'Location', jp: '場所', de: 'Standort' },
    { selector: '#contact .contact-item:nth-child(3) p', en: 'Kathmandu, Nepal', jp: 'ネパール、カトマンズ', de: 'Kathmandu, Nepal' },
    { selector: '#contact .contact-form button', en: 'Send Message', jp: 'メッセージを送信', de: 'Nachricht senden' },
    { selector: '.footer p', en: '© 2026 Sujan Parajuli — Professional Network Engineer Portfolio', jp: '© 2026 スジャン・パラジュリ — プロフェッショナルネットワークエンジニアポートフォリオ', de: '© 2026 Sujan Parajuli — Portfolio für professionelle Netzwerkingenieure' },
    { selector: '.bot-message', en: '👋 Hi! I’m Sujan\'s AI assistant. How can I help you today?', jp: '👋 こんにちは！スジャンのAIアシスタントです。本日はどのようなご用件でしょうか？', de: '👋 Hallo! Ich bin Sujans KI-Assistent. Wie kann ich Ihnen heute helfen?' }
  ];

  const placeholders = [
    { selector: '.contact-form input[type="text"]', en: 'Your Name', jp: 'お名前', de: 'Ihr Name' },
    { selector: '.contact-form input[type="email"]', en: 'Email Address', jp: 'メールアドレス', de: 'E-Mail-Adresse' },
    { selector: '.contact-form textarea', en: 'How can I help you?', jp: '何かお手伝いできることはありますか？', de: 'Wie kann ich Ihnen helfen?' },
    { selector: '#user-input', en: 'Ask me anything...', jp: '何でも聞いてください...', de: 'Fragen Sie mich etwas...' }
  ];

  function changeLanguage(lang) {
    if (!langSwitcher) return;
    
    contentMap.forEach(item => {
      const el = document.querySelector(item.selector);
      if (el) {
        if (item.html) {
          el.innerHTML = item[lang] || item.en;
        } else {
          el.textContent = item[lang] || item.en;
        }
      }
    });

    placeholders.forEach(item => {
      const el = document.querySelector(item.selector);
      if (el) {
        el.placeholder = item[lang] || item.en;
      }
    });

    localStorage.setItem('language', lang);
    langSwitcher.value = lang;
  }

  if (langSwitcher) {
    langSwitcher.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });

    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      langSwitcher.value = savedLang;
      changeLanguage(savedLang);
    }
  }

  // Auto-open chatbot after 10 seconds
  setTimeout(() => {
    if (!chatWindow.classList.contains('active')) {
      toggleChat();
    }
  }, 10000);
});
