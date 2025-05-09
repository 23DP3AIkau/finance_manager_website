document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

const languageToggle = document.getElementById('language-toggle');
const languageText = document.querySelector('.language-text');
const languageFlag = document.querySelector('.language-flag');
let currentLanguage = 'en';

const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.download": "Download",
        "nav.contact": "Contact",
        "hero.title": "Take Full Control<br>of Your <span>Finances</span>",
        "hero.subtitle": "Manage your income and expenses easily with Finance Manager. Track transactions, calculate totals, and set budgets – all in a simple Windows Forms GUI interface.",
        "hero.download": "Download Now",
        "hero.learn": "Learn More",
        "about.title": "What is <span>Finance Manager</span>?",
        "about.subtitle": "A lightweight Windows Forms GUI financial tool",
        "about.feature1.title": "Windows Forms GUI",
        "about.feature1.text": "Run .exe file for comfortable and easy to navigate interface.",
        "about.feature2.title": "Real-Time Stats",
        "about.feature2.text": "Get instant insights into your financial health with Overviews.",
        "about.feature3.title": "Secure",
        "about.feature3.text": "Your financial data stays private on your local machine - no cloud storage.",
        "download.title": "Get <span>Finance Manager</span>",
        "download.subtitle": "Available for all major platforms",
        "download.windows": "Windows",
        "download.windows-version": "Windows 10/11 (64-bit)",
        "download.macos": "macOS",
        "download.macos-version": "macOS 10.15+ (Intel/Apple Silicon)",
        "download.linux": "Linux",
        "download.linux-version": "Debian/Ubuntu/Arch (x86_64)",
        "download.download": "Download",
        "download.soon": "(Coming Soon)",
        "download.install": "Installation Guide",
        "contact.title": "Contact <span>Us</span>",
        "contact.subtitle": "We'd love to hear from you",
        "contact.form.name": "Your Name",
        "contact.form.email": "Email Address",
        "contact.form.message": "Your Message",
        "contact.form.submit": "Send Message",
        "contact.email": "Email",
        "contact.github": "GitHub",
        "contact.phone": "Phone",
        "footer.copyright": "© 2025 Alans Ikaunieks. All rights reserved.",
        "guide.title": "Installation Guide",
        "guide.windows-title": "Windows Installation",
        "guide.step1": "Download the App through website or <a href='https://github.com/23DP3AIkau/finance_manager/releases/latest' target='_blank'>Release</a>",
        "guide.step2": "Extract <strong>all</strong> files",
        "guide.step3": "Run <code>FinanceManager.exe</code>",
        "guide.step4": "<a href='https://github.com/23DP3AIkau/finance_manager/blob/main/README.md' targer='_blank'>User Guide</a>",
        "guide.github-url": "https://github.com/23DP3AIkau/finance_manager/releases/latest"
    },
    lv: {
        "nav.home": "Sākums",
        "nav.about": "Par mums",
        "nav.download": "Lejupielādēt",
        "nav.contact": "Kontakti",
        "hero.title": "Pilnīga kontrole<br>pār saviem <span>Finansiem</span>",
        "hero.subtitle": "Viegli pārvaldiet savus ienākumus un izdevumus ar Finance Manager. Sekojiet transakcijām, aprēķiniet kopsummas un uzstādiet budžetus – viss vienkāršā Windows Forms lietojumprogrammā.",
        "hero.download": "Lejupielādēt",
        "hero.learn": "Uzzināt vairāk",
        "about.title": "Kas ir <span>Finance Manager</span>?",
        "about.subtitle": "Viegls Windows Forms finanšu pārvaldības rīks",
        "about.feature1.title": "Windows Forms GUI",
        "about.feature1.text": "Palaidiet .exe failu, lai iegūtu ērtu un viegli lietojamu saskarni.",
        "about.feature2.title": "Reāllaika Statistika",
        "about.feature2.text": "Iegūstiet tūlītēju ieskatu savā finansiālajā stāvoklī ar pārskatiem.",
        "about.feature3.title": "Drošs",
        "about.feature3.text": "Jūsu finanšu dati paliek privāti jūsu lokālajā datorā - bez mākoņa glabāšanas.",
        "download.title": "Iegūstiet <span>Finance Manager</span>",
        "download.subtitle": "Pieejams visām populārākajām platformām",
        "download.windows": "Windows",
        "download.windows-version": "Windows 10/11 (64-bit)",
        "download.macos": "macOS",
        "download.macos-version": "macOS 10.15+ (Intel/Apple Silicon)",
        "download.linux": "Linux",
        "download.linux-version": "Debian/Ubuntu/Arch (x86_64)",
        "download.download": "Lejupielādēt",
        "download.soon": "(Drīzumā)",
        "download.install": "Instalēšanas instrukcija",
        "contact.title": "Sazinieties <span>Ar Mums</span>",
        "contact.subtitle": "Mēs vēlētos dzirdēt no jums",
        "contact.form.name": "Jūsu vārds",
        "contact.form.email": "E-pasta adrese",
        "contact.form.message": "Jūsu ziņa",
        "contact.form.submit": "Sūtīt ziņu",
        "contact.email": "E-pasts",
        "contact.github": "GitHub",
        "contact.phone": "Tālrunis",
        "footer.copyright": "© 2025 Alans Ikaunieks. Visas tiesības aizsargātas.",
        "guide.title": "Instalēšanas instrukcija",
        "guide.windows-title": "Instalēšana Windows",
        "guide.step1": "Lejupielādējiet lietotni caur mājaslapu vai <a href='https://github.com/23DP3AIkau/finance_manager/releases/latest' target='_blank'>Release</a>",
        "guide.step2": "Atarhivējiet <strong>visus</strong> failus",
        "guide.step3": "Palaidiet <code>FinanceManager.exe</code>",
        "guide.step4": "<a href='https://github.com/23DP3AIkau/finance_manager/blob/main/README.md' targer='_blank'>Lietotāja ceļvedis</a>",
        "guide.github-url": "https://github.com/23DP3AIkau/finance_manager/releases/latest"
    }
};

function changeLanguage(lang) {
    currentLanguage = lang;
    languageText.textContent = lang === 'en' ? 'English' : 'Latviešu';
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

changeLanguage('en');

document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

changeLanguage('en');

document.querySelectorAll('.coming-soon').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const message = currentLanguage === 'en' 
            ? 'Download will be available soon!' 
            : 'Lejupielāde būs pieejama drīz!';
        alert(message);
    });
});

document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = currentLanguage === 'en'
        ? 'Thank you for your message! We will get back to you soon.'
        : 'Paldies par jūsu ziņu! Mēs ar jums sazināsimies drīz.';
    alert(message);
    this.reset();
});

