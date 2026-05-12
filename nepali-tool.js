/* ============================================
   NEPALI-TOOL.JS
   Roman → Nepali Unicode Transliteration
   ============================================ */

/* ─── TRANSLITERATION MAP ─── */
const romanToNepali = {
  // Multi-char first (longer matches have priority)
  'shri':'श्री','shra':'श्र','shru':'श्रु','shre':'श्रे',
  'ksha':'क्ष','kshu':'क्षु','kshe':'क्षे','kshya':'क्ष्य',
  'gya':'ज्ञ','gyna':'ज्ञ',
  'tra':'त्र','tri':'त्रि','tru':'त्रु',
  'dha':'ध','dhi':'धि','dhu':'धु','dhe':'धे','dho':'धो',
  'tha':'थ','thi':'थि','thu':'थु','the':'थे','tho':'थो',
  'cha':'च','chi':'चि','chu':'चु','che':'चे','cho':'चो',
  'chha':'छ','chhi':'छि','chhu':'छु',
  'jha':'झ','jhi':'झि','jhu':'झु',
  'nja':'ञ',
  'sha':'श','shi':'शि','shu':'शु','she':'शे','sho':'शो',
  'shha':'ष','shhi':'षि',
  'nga':'ङ',
  'nya':'ञ',
  'pha':'फ','phi':'फि','phu':'फु','phe':'फे','pho':'फो',
  'bha':'भ','bhi':'भि','bhu':'भु','bhe':'भे','bho':'भो',
  'kha':'ख','khi':'खि','khu':'खु','khe':'खे','kho':'खो',
  'gha':'घ','ghi':'घि','ghu':'घु','ghe':'घे','gho':'घो',
  'jya':'ज्य',
  'rra':'र्र',
  // Vowels (standalone)
  'aa':'आ','ii':'ई','uu':'ऊ','ee':'ई','oo':'ओ',
  'ai':'ऐ','au':'औ','ou':'औ',
  'a':'अ','i':'इ','u':'उ','e':'ए','o':'ओ',
  'ri':'ऋ',
  // Basic consonants + vowels
  'ka':'क','ki':'कि','ku':'कु','ke':'के','ko':'को',
  'ga':'ग','gi':'गि','gu':'गु','ge':'गे','go':'गो',
  'ca':'क','ci':'कि',
  'ja':'ज','ji':'जि','ju':'जु','je':'जे','jo':'जो',
  'ta':'त','ti':'ति','tu':'तु','te':'ते','to':'तो',
  'da':'द','di':'दि','du':'दु','de':'दे','do':'दो',
  'na':'न','ni':'नि','nu':'नु','ne':'ने','no':'नो',
  'pa':'प','pi':'पि','pu':'पु','pe':'पे','po','पो',
  'ba':'ब','bi':'बि','bu':'बु','be':'बे','bo':'बो',
  'ma':'म','mi':'मि','mu':'मु','me':'मे','mo':'मो',
  'ya':'य','yi':'यि','yu':'यु','ye':'ये','yo':'यो',
  'ra':'र','ri':'रि','ru':'रु','re':'रे','ro':'रो',
  'la':'ल','li':'लि','lu':'लु','le':'ले','lo':'लो',
  'wa':'व','wi':'वि','wu':'वु','we':'वे','wo':'वो',
  'va':'व','vi':'वि','vu':'वु','ve':'वे','vo':'वो',
  'sa':'स','si':'सि','su':'सु','se':'से','so':'सो',
  'ha':'ह','hi':'हि','hu':'हु','he':'हे','ho':'हो',
  'fa':'फ',
  'za':'ज','zi':'जि','zu':'जु','ze':'जे','zo':'जो',
  // Consonant only (halant)
  'k':'क्','g':'ग्','c':'क्','j':'ज्','t':'त्','d':'द्',
  'n':'न','p':'प्','b':'ब्','m':'म','y':'य','r':'र','l':'ल',
  'w':'व','v':'व','s':'स','h':'ह','f':'फ','z':'ज',
  // Punctuation
  '।':'।','?':'?','!':'!',
  // Digits in Devanagari
  '0':'०','1':'१','2':'२','3':'३','4':'४',
  '5':'५','6':'६','7':'७','8':'८','9':'९',
};

/* ─── COMMON WORDS ─── */
const wordMap = {
  'namaskar':'नमस्कार','namaste':'नमस्ते',
  'nepal':'नेपाल','kathmandu':'काठमाडौं',
  'dhanyabad':'धन्यवाद','dhanyabaad':'धन्यवाद',
  'shuvakamanaa':'शुभकामना','shuva':'शुभ',
  'ramro':'राम्रो','sajilo':'सजिलो',
  'hamro':'हाम्रो','tapai':'तपाईं','ma':'म',
  'ko':'को','le':'ले','ma':'मा','lai':'लाई',
  'cha':'छ','chha':'छ','chaina':'छैन',
  'hunchha':'हुन्छ','bhayo':'भयो',
  'aayo':'आयो','gayo':'गयो',
  'paisa':'पैसा','ghar':'घर','school':'स्कुल',
  'kaam':'काम','din':'दिन','raat':'रात',
  'bhai':'भाई','didi':'दिदी','daju':'दाजु','bahini':'बहिनी',
  'aama':'आमा','buwa':'बुवा','saathi':'साथी',
  'khana':'खाना','paani':'पानी','chaiya':'चिया',
  'sundar':'सुन्दर','thulo':'ठूलो','sano':'सानो',
  'seto':'सेतो','kalo':'कालो','rato':'रातो',
  'nilo':'नीलो','pahelo':'पहेलो','hariyo':'हरियो',
  'ek':'एक','dui':'दुई','tin':'तीन','char':'चार','paanch':'पाँच',
  'chha':'छ','saat':'सात','aath':'आठ','nau':'नौ','das':'दस',
  'sujan':'सुजन','parajuli':'पराजुली',
};

/* ─── CONVERT FUNCTION ─── */
function convertRomanToNepali(input) {
  if (!input.trim()) return '';
  const lines = input.split('\n');
  return lines.map(line => convertLine(line)).join('\n');
}

function convertLine(line) {
  // First check word map for whole words
  const words = line.split(' ');
  return words.map(word => {
    const lower = word.toLowerCase().replace(/[।?!]/g, '');
    if (wordMap[lower]) {
      // Preserve any trailing punctuation
      const punct = word.replace(/[a-zA-Z]/g, '');
      return wordMap[lower] + (punct && !wordMap[punct] ? punct : '');
    }
    return convertWordChar(word);
  }).join(' ');
}

function convertWordChar(word) {
  let result = '';
  let i = 0;
  const input = word.toLowerCase();
  while (i < input.length) {
    let matched = false;
    for (let len = 5; len >= 1; len--) {
      const chunk = input.slice(i, i + len);
      if (romanToNepali[chunk] !== undefined) {
        result += romanToNepali[chunk];
        i += len; matched = true; break;
      }
    }
    if (!matched) { result += input[i]; i++; }
  }
  return result;
}

/* ─── UI BINDINGS ─── */
const nepaliInput = document.getElementById('nepaliInput');
const nepaliOutput = document.getElementById('nepaliOutput');
const npConvertBtn = document.getElementById('npConvertBtn');
const npCopyBtn = document.getElementById('npCopyBtn');
const npClearBtn = document.getElementById('npClearBtn');

npConvertBtn.addEventListener('click', () => {
  const input = nepaliInput.value;
  nepaliOutput.value = convertRomanToNepali(input);
});

// Real-time conversion on input
nepaliInput.addEventListener('input', () => {
  nepaliOutput.value = convertRomanToNepali(nepaliInput.value);
});

npCopyBtn.addEventListener('click', () => {
  const text = nepaliOutput.value;
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const orig = npCopyBtn.textContent;
    npCopyBtn.textContent = '✅ Copied!';
    setTimeout(() => npCopyBtn.textContent = orig, 1500);
  });
});

npClearBtn.addEventListener('click', () => {
  nepaliInput.value = '';
  nepaliOutput.value = '';
});

/* ─── SAMPLE WORDS HINT ─── */
const hintEl = document.createElement('p');
hintEl.style.cssText = 'font-size:0.75rem;color:rgba(107,143,163,0.7);margin-top:0.5rem;font-family:JetBrains Mono,monospace;';
hintEl.textContent = 'Try: namaskar, nepal, dhanyabad, sujan, kathmandu';
nepaliInput.parentElement.appendChild(hintEl);
