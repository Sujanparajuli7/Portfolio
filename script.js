
const translations = {
  en:{
    hello:"Hello, It's Me",
    role:"IT Support & Network Professional",
    desc:"Passionate about networking, IT support, and modern technology solutions."
  },
  de:{
    hello:"Hallo, Ich bin",
    role:"IT-Support & Netzwerkprofi",
    desc:"Leidenschaftlich für Netzwerke und IT-Lösungen."
  },
  jp:{
    hello:"こんにちは、私は",
    role:"ITサポート・ネットワーク専門家",
    desc:"ネットワークとITソリューションに情熱を持っています。"
  }
};

document.getElementById("languageSwitcher").addEventListener("change",function(){
const lang=this.value;

document.getElementById("helloText").innerText=translations[lang].hello;
document.getElementById("roleText").innerText=translations[lang].role;
document.getElementById("descText").innerText=translations[lang].desc;
});

function generateCV(){

const role=document.getElementById("jobRole").value;
const output=document.getElementById("generatedCV");

let content="";

if(role==="network"){
content=`
SUJAN PARAJULI
Network Engineer

Professional Summary:
Experienced Network Engineer with expertise in LAN/WAN infrastructure, VPN configuration, routing & switching, and troubleshooting.

Key Skills:
• Routing & Switching
• VPN Configuration
• Network Maintenance
• IP Addressing
`;
}

else if(role==="support"){
content=`
SUJAN PARAJULI
IT Support Specialist

Professional Summary:
Dedicated IT Support professional skilled in troubleshooting, hardware maintenance, and end-user technical support.

Key Skills:
• IT Helpdesk
• Hardware Maintenance
• Software Installation
• Technical Support
`;
}

else if(role==="helpdesk"){
content=`
SUJAN PARAJULI
Helpdesk Technician

Professional Summary:
Experienced Helpdesk Technician providing fast technical assistance and resolving IT-related issues efficiently.

Key Skills:
• Ticket Management
• User Support
• Hardware Troubleshooting
• Remote Assistance
`;
}

else{
content=`
SUJAN PARAJULI
System Administrator

Professional Summary:
System Administrator with experience managing infrastructure, user access, and system performance.

Key Skills:
• Infrastructure Maintenance
• User Management
• System Monitoring
• Security Support
`;
}

output.innerText=content;
}

function downloadCV(){

const text=document.getElementById("generatedCV").innerText;

const blob=new Blob([text],{type:"text/plain"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="Generated_CV.txt";

link.click();
}

function sendMessage(){

const input=document.getElementById("userInput");
const messages=document.getElementById("chatMessages");

if(input.value.trim()==="") return;

const user=document.createElement("div");
user.className="user-message";
user.innerText=input.value;
messages.appendChild(user);

const bot=document.createElement("div");
bot.className="bot-message";

const msg=input.value.toLowerCase();

if(msg.includes("skill")){
bot.innerText="Sujan specializes in Networking, IT Support, VPN, Routing and Switching.";
}

else if(msg.includes("experience")){
bot.innerText="Sujan worked as a Network Administrator at iCash Nepal.";
}

else if(msg.includes("contact")){
bot.innerText="Contact: msuzzan119@gmail.com";
}

else{
bot.innerText="I can help you learn about Sujan's portfolio and experience.";
}

messages.appendChild(bot);

messages.scrollTop=messages.scrollHeight;

input.value="";
}
