const tabButtons = document.querySelectorAll(".tab-button");
const languageButtons = document.querySelectorAll(".language-button");
const panels = document.querySelectorAll(".policy-panel");

const translations = {
  it: {
    pageTitle: "Casta's Bot | Legal Infos",
    metaDescription:
      "Terms of Service e Privacy Policy per Casta's Bot, bot Discord.",
    navLabel: "Navigazione principale",
    tabsLabel: "Documenti legali",
    languageLabel: "Selezione lingua",
    "intro.eyebrow": "Documenti legali",
    "intro.copy":
      "Qui trovi le condizioni di utilizzo e le informazioni sulla privacy relative all'uso del bot su Discord.",
    "intro.updated": "Ultimo aggiornamento: 18 maggio 2026",
    "terms.kicker": "Terms of Service",
    "terms.title": "Condizioni di utilizzo",
    "terms.1.title": "1. Accettazione dei termini",
    "terms.1.body":
      "Utilizzando Casta's Bot su Discord, accetti questi Terms of Service. Se non accetti questi termini, non utilizzare il bot e rimuovilo dai server in cui hai il permesso di gestire le applicazioni.",
    "terms.2.title": "2. Uso consentito",
    "terms.2.body":
      'Casta\'s Bot deve essere usato nel rispetto delle regole di Discord, incluse le <a href="https://discord.com/terms" target="_blank" rel="noreferrer">Terms of Service di Discord</a>, le policy per sviluppatori, le leggi applicabili e le regole del server in cui viene installato. Non e\' consentito usare il bot per spam, molestie, abuso, elusione di sistemi di moderazione, raccolta non autorizzata di dati o attivita\' dannose verso utenti, server o servizi terzi.',
    "terms.3.title": "3. Disponibilita' del servizio",
    "terms.3.body":
      "Il bot viene fornito cosi' com'e'. Potrebbero verificarsi interruzioni, bug, manutenzioni, limitazioni o modifiche alle funzionalita' senza preavviso. Non garantiamo disponibilita' continua o assenza totale di errori.",
    "terms.4.title": "4. Permessi e responsabilita' dei server",
    "terms.4.body":
      "Gli amministratori dei server sono responsabili della configurazione del bot, dei permessi concessi e dell'uso delle sue funzioni nel loro server. Invita il bot solo se hai l'autorizzazione necessaria.",
    "terms.5.title": "5. Contenuti e comportamento degli utenti",
    "terms.5.body":
      "Gli utenti restano responsabili dei contenuti, dei comandi e delle interazioni inviati tramite Discord. Possiamo limitare, sospendere o bloccare l'accesso al bot in caso di uso improprio, violazione di questi termini o rischio per sicurezza, stabilita' o reputazione del servizio.",
    "terms.6.title": "6. Modifiche ai termini",
    "terms.6.body":
      "Questi termini possono essere aggiornati nel tempo. L'uso continuato del bot dopo una modifica costituisce accettazione della versione aggiornata.",
    "terms.7.title": "7. Contatti",
    "terms.7.body":
      'Per domande, richieste o segnalazioni puoi scrivere a <a href="mailto:mattydosse@gmail.com">mattydosse@gmail.com</a>.',
    "privacy.kicker": "Privacy Policy",
    "privacy.title": "Informativa sulla privacy",
    "privacy.1.title": "1. Dati che possiamo trattare",
    "privacy.1.body":
      "Casta's Bot puo' trattare dati tecnici e dati Discord necessari al funzionamento del bot, come ID utente, ID server, ID canali, ruoli, impostazioni del server, comandi usati, timestamp, log tecnici e contenuti inviati dagli utenti quando sono necessari per eseguire una funzione richiesta.",
    "privacy.2.title": "2. Finalita' del trattamento",
    "privacy.2.body":
      "I dati vengono usati per fornire le funzionalita' del bot, gestire la configurazione dei server, migliorare stabilita' e sicurezza, prevenire abusi, correggere errori e rispondere a richieste di supporto.",
    "privacy.3.title": "3. Conservazione dei dati",
    "privacy.3.body":
      "Conserviamo i dati solo per il tempo necessario al funzionamento del bot, alla sicurezza del servizio, alla risoluzione di problemi tecnici o agli obblighi applicabili. I dati non piu' necessari vengono eliminati o resi non riconducibili quando possibile.",
    "privacy.4.title": "4. Condivisione dei dati",
    "privacy.4.body":
      "Non vendiamo i dati degli utenti. I dati possono essere trattati da servizi tecnici usati per ospitare, monitorare o mantenere il bot, oppure condivisi quando richiesto dalla legge o necessario per proteggere utenti, server e integrita' del servizio.",
    "privacy.5.title": "5. Sicurezza",
    "privacy.5.body":
      "Usiamo misure ragionevoli per proteggere i dati trattati dal bot. Nessun sistema online, tuttavia, puo' essere considerato sicuro al 100%.",
    "privacy.6.title": "6. Diritti e richieste degli utenti",
    "privacy.6.body":
      'Puoi richiedere informazioni, correzione o cancellazione dei dati associati al tuo utilizzo del bot scrivendo a <a href="mailto:mattydosse@gmail.com">mattydosse@gmail.com</a>. Per aiutarci a gestire la richiesta, includi il tuo ID Discord e, se rilevante, l\'ID del server.',
    "privacy.7.title": "7. Servizi di terze parti",
    "privacy.7.body":
      'Il bot opera sulla piattaforma Discord. L\'uso di Discord resta soggetto ai <a href="https://discord.com/terms" target="_blank" rel="noreferrer">termini</a>, alla <a href="https://discord.com/privacy" target="_blank" rel="noreferrer">privacy policy</a> e alle impostazioni privacy di Discord. Per le applicazioni Discord possono inoltre applicarsi i <a href="https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service" target="_blank" rel="noreferrer">Developer Terms of Service</a> e la <a href="https://support-dev.discord.com/hc/en-us/articles/8563934450327-Discord-Developer-Policy" target="_blank" rel="noreferrer">Developer Policy</a>.',
    "privacy.8.title": "8. Modifiche alla privacy policy",
    "privacy.8.body":
      "Questa Privacy Policy puo' essere aggiornata nel tempo. La versione pubblicata su questa pagina e' quella attualmente applicabile.",
    "footer.developed": "Sviluppato da: @dossenix @_thetypicalplayer (discord)",
    "footer.email":
      'email: <a href="mailto:mattydosse@gmail.com">mattydosse@gmail.com</a>',
    "footer.disclaimer":
      "Testi informativi generali per un bot Discord. Non costituiscono consulenza legale.",
  },
  en: {
    pageTitle: "Casta's Bot | Legal Infos",
    metaDescription:
      "Terms of Service and Privacy Policy for Casta's Bot, a Discord bot.",
    navLabel: "Main navigation",
    tabsLabel: "Legal documents",
    languageLabel: "Language selection",
    "intro.eyebrow": "Legal documents",
    "intro.copy":
      "Here you can find the Terms of Service and Privacy Policy for using the bot on Discord.",
    "intro.updated": "Last updated: May 18, 2026",
    "terms.kicker": "Terms of Service",
    "terms.title": "Terms of Service",
    "terms.1.title": "1. Acceptance of the terms",
    "terms.1.body":
      "By using Casta's Bot on Discord, you agree to these Terms of Service. If you do not agree to these terms, do not use the bot and remove it from any servers where you have permission to manage applications.",
    "terms.2.title": "2. Permitted use",
    "terms.2.body":
      'Casta\'s Bot must be used in compliance with Discord rules, including the <a href="https://discord.com/terms" target="_blank" rel="noreferrer">Discord Terms of Service</a>, developer policies, applicable laws, and the rules of the server where it is installed. You may not use the bot for spam, harassment, abuse, bypassing moderation systems, unauthorized data collection, or harmful activity against users, servers, or third-party services.',
    "terms.3.title": "3. Service availability",
    "terms.3.body":
      "The bot is provided as is. Interruptions, bugs, maintenance, limitations, or changes to features may occur without prior notice. We do not guarantee continuous availability or complete absence of errors.",
    "terms.4.title": "4. Server permissions and responsibilities",
    "terms.4.body":
      "Server administrators are responsible for configuring the bot, granting permissions, and using its features within their server. Only invite the bot if you have the required authorization.",
    "terms.5.title": "5. User content and conduct",
    "terms.5.body":
      "Users remain responsible for the content, commands, and interactions they send through Discord. We may limit, suspend, or block access to the bot in case of misuse, violation of these terms, or risks to the security, stability, or reputation of the service.",
    "terms.6.title": "6. Changes to the terms",
    "terms.6.body":
      "These terms may be updated over time. Continued use of the bot after a change means acceptance of the updated version.",
    "terms.7.title": "7. Contact",
    "terms.7.body":
      'For questions, requests, or reports, you can contact <a href="mailto:mattydosse@gmail.com">mattydosse@gmail.com</a>.',
    "privacy.kicker": "Privacy Policy",
    "privacy.title": "Privacy Policy",
    "privacy.1.title": "1. Data we may process",
    "privacy.1.body":
      "Casta's Bot may process technical data and Discord data required for the bot to operate, such as user IDs, server IDs, channel IDs, roles, server settings, used commands, timestamps, technical logs, and content sent by users when needed to perform a requested feature.",
    "privacy.2.title": "2. Purposes of processing",
    "privacy.2.body":
      "Data is used to provide the bot's features, manage server configuration, improve stability and security, prevent abuse, fix errors, and respond to support requests.",
    "privacy.3.title": "3. Data retention",
    "privacy.3.body":
      "We retain data only for as long as necessary for the bot to operate, for service security, for resolving technical issues, or for applicable obligations. Data that is no longer needed is deleted or made non-identifiable whenever possible.",
    "privacy.4.title": "4. Data sharing",
    "privacy.4.body":
      "We do not sell user data. Data may be processed by technical services used to host, monitor, or maintain the bot, or shared when required by law or necessary to protect users, servers, and the integrity of the service.",
    "privacy.5.title": "5. Security",
    "privacy.5.body":
      "We use reasonable measures to protect data processed by the bot. However, no online system can be considered 100% secure.",
    "privacy.6.title": "6. User rights and requests",
    "privacy.6.body":
      'You can request information, correction, or deletion of data associated with your use of the bot by writing to <a href="mailto:mattydosse@gmail.com">mattydosse@gmail.com</a>. To help us handle the request, include your Discord ID and, if relevant, the server ID.',
    "privacy.7.title": "7. Third-party services",
    "privacy.7.body":
      'The bot operates on the Discord platform. Use of Discord remains subject to Discord <a href="https://discord.com/terms" target="_blank" rel="noreferrer">terms</a>, <a href="https://discord.com/privacy" target="_blank" rel="noreferrer">privacy policy</a>, and privacy settings. Discord applications may also be subject to the <a href="https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service" target="_blank" rel="noreferrer">Developer Terms of Service</a> and the <a href="https://support-dev.discord.com/hc/en-us/articles/8563934450327-Discord-Developer-Policy" target="_blank" rel="noreferrer">Developer Policy</a>.',
    "privacy.8.title": "8. Changes to this privacy policy",
    "privacy.8.body":
      "This Privacy Policy may be updated over time. The version published on this page is the currently applicable version.",
    "footer.developed": "Developed by: @dossenix @_thetypicalplayer (Discord)",
    "footer.email":
      'email: <a href="mailto:mattydosse@gmail.com">mattydosse@gmail.com</a>',
    "footer.disclaimer":
      "General informational text for a Discord bot. This does not constitute legal advice.",
  },
};

function showPanel(targetId, updateHash = true) {
  const targetPanel = document.getElementById(targetId);

  if (!targetPanel) {
    return;
  }

  panels.forEach((panel) => {
    const isTarget = panel.id === targetId;
    panel.hidden = !isTarget;
    panel.classList.toggle("is-visible", isTarget);
  });

  tabButtons.forEach((button) => {
    const isActive = button.dataset.target === targetId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (updateHash) {
    history.replaceState(null, "", `#${targetId}`);
  }
}

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "it";
  const labels = translations[selectedLanguage];
  const description = document.querySelector('meta[name="description"]');

  document.documentElement.lang = selectedLanguage;
  document.title = labels.pageTitle;
  document.querySelector(".nav")?.setAttribute("aria-label", labels.navLabel);
  document.querySelector(".tabs")?.setAttribute("aria-label", labels.tabsLabel);
  document
    .querySelector(".language-switch")
    ?.setAttribute("aria-label", labels.languageLabel);

  if (description) {
    description.setAttribute("content", labels.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = labels[element.dataset.i18n];

    if (translation) {
      element.textContent = translation;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const translation = labels[element.dataset.i18nHtml];

    if (translation) {
      element.innerHTML = translation;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === selectedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("castaLegalLanguage", selectedLanguage);
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showPanel(button.dataset.target);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

window.addEventListener("hashchange", () => {
  const targetId = window.location.hash.replace("#", "") || "terms";
  showPanel(targetId, false);
});

const savedLanguage = localStorage.getItem("castaLegalLanguage");

setLanguage(savedLanguage || "it");
showPanel(window.location.hash.replace("#", "") || "terms", false);
