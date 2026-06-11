const translations = {
  de: {
    // Nav
    nav_work:    "Projekte",
    nav_about:   "Über mich",
    nav_contact: "Kontakt",
    back:        "Zurück",
    back_portfolio: "← Zurück zum Portfolio",

    // Hero
    hero_intro:  "ich baue dinge,",
    hero_l1:     "die funktionieren.",
    hero_role:   "AI Product Leader · Strategie & Automatisierung",
    hero_hook:   "An der Schnittstelle von Tech & Business-Strategie:",
    hero_exec:   "Intelligente, skalierbare Workflows und validierte MVPs – präzise konzipiert, um echten Geschäftswert zu schaffen.",
    hero_b1:     "19+ Jahre Enterprise Product Management & Tech Consulting (u.a. Volkswagen)",
    hero_b2:     "KI & Automatisierung: Claude API · MCP · n8n Workflows",
    hero_b3:     "Gründer & Community Manager der AI Community Niedersachsen",

    // About
    about_label: "Über mich",
    about_p1:    "Ich bin Viktor. Mein Fundament basiert auf internationalem Projektmanagement, tiefgehender Datenanalyse und starkem Enterprise-Produktmanagement bei Volkswagen. Heute verbinde ich diese Erfahrung mit hands-on AI: Ich baue keine Folien, ich baue Produkte.",
    about_p2:    "Ich schließe die Lücke zwischen Strategie und Code, indem ich geschäftliche Ziele direkt in Technik übersetze. Mit der Claude API, MCP und n8n entwickle ich Prototypen und Automatisierungen, die sofort Mehrwert stiften.",
    about_p3:    "Um technologisch immer einen Schritt voraus zu sein, teile ich meine Erkenntnisse regelmäßig als Speaker. In der von mir gegründeten AI Community Niedersachsen bringe ich Menschen zusammen, um Wissen zu vermitteln und die Brücke zwischen Theorie und echter Produktion zu schlagen.",

    // Stats
    stat_l1: "Jahre Erfahrung",
    stat_l2: "ROI gesteigert",
    stat_l3: "Idee zu MVP",
    stat_sub3: "Prototyping mit Claude Code & n8n",
    stat_l4: "Community Mitglieder",

    // Contact
    c_label:           "Kontakt",
    c_headline:        "Lass uns reden.",
    c_sub:             "Offen für neue Rollen und spannende Projekte.",
    c_compose_to:      "An",
    c_compose_subject: "Betreff",
    c_subject_val:     "Lass uns reden",
    c_compose_body:    "Hallo Viktor, …",
    c_btn_email:       "E-Mail schreiben ↗",
    c_btn_linkedin:    "Vernetzen ↗",

    // Shared detail-page labels
    meta_role:   "Meine Rolle",
    meta_stack:  "Stack",
    meta_time:   "Zeitraum",
    meta_status: "Status",
    meta_format: "Format",
    meta_chapter: "Chapter",

    tile_cta: "Ansehen ↗",

    // ── VW Card ──
    vw_meta:   "18 Jahre Automotive Innovation & Transformation",
    vw_tag2:   "Produktstrategie & Skalierung",
    vw_text1:  "Konzeption eines ML-Modells zur automatisierten Bilderkennung und Fehlerdiagnose bei Scheinwerfersystemen sowie eines LLM-basierten Werkstatt-Chatbots für globale After-Sales-Prozesse.",
    vw_text2:  "Transformation einer bestehenden Ein-Marken-Diagnoseplattform in eine konzernweite Multi-Marken-Lösung (VW, SEAT, VW Nutzfahrzeuge) mit einer Reduktion der Betriebskosten um 11% und einer Steigerung des Projekt-ROI um 35%.",
    vw_text3:  "Projektleitung bei der Einführung des gesetzlichen ERA-GLONASS-Notrufsystems für 1,2 Mio. Fahrzeuge. Nachhaltige Einsparung von 500.000 €/Jahr durch konsequente Backend-Automatisierung.",

    // ── Barbershop ──
    bs_tag:   "Deployed · Live-Traffic · Supabase + Vercel · 2026",
    bs_title: "SaaS Booking Platform für Kleinunternehmen & Dienstleister",
    bs_sub:   "Ein frameworkloses, DSGVO-konformes Echtzeit-Buchungssystem (Produktionsreifes MVP) – konzipiert nach realen Praxisanforderungen.",
    bs_sec1:  "Beschreibung",
    bs_text1: "Entwicklung eines voll funktionsfähigen, produktionsreifen MVPs für ein Online-Buchungssystem im Dienstleistungsgewerbe (Konzept-Case-Study: Barbershop). Das System wurde von Grund auf so architektiert, dass es reale geschäftliche Herausforderungen löst und sofort in den Live-Betrieb gehen könnte. Es vereint maximale Performance durch Vanilla JS mit einer modernen Serverless-Infrastruktur. Neben der automatisierten Online-Terminvergabe inklusive E-Mail-OTP (Magic Links) wurde ein Echtzeit-Admin-Dashboard für administrative Live-Alerts und die manuelle Erfassung von Telefon-Buchungen implementiert.",
    bs_hl1_label: "Stornierungsschutz & Admin-Alltag",
    bs_hl1_text:  "Integrierter Stornierungsschutz bei Absagen unter 24 Stunden mittels automatisiertem Realtime-Freigabeprozess (Admin-Entscheidung via Live-Banner) sowie nahtlose manuelle Erfassung von Telefon-Buchungen direkt im Dashboard.",
    bs_hl2_label: "Privacy by Design / DSGVO-ready",
    bs_hl2_text:  "Vollständig vorbereitet für den sensiblen deutschen Markt durch lokal gehostete Typografie (kein Datenabfluss an Google-Server) und ein datenschutzkonformes Fehler-Tracking via Sentry mit DE-Ingest in Frankfurt.",
    bs_hl3_label: "Automatisierte Workflows",
    bs_hl3_text:  "Voll integrierte transaktionale E-Mail-Infrastruktur über Resend für automatisierte Bestätigungen, Absagen und zeitgesteuerte 24h-Terminerinnerungen ohne zusätzliche API-Overheads.",
    bs_cta:   "Live ansehen",
    bs_preview_label: "Vorschau",
    bs_hint:  "Klicke dich durch…",
    bs_role1: "Produktkonzeption",
    bs_auth_label: "Passwortloser Login",
    bs_auth_input: "E-Mail eingeben",
    bs_auth_btn:   "Code per E-Mail senden",
    bs_stack_resend: "Resend, Transaktionale E-Mails",
    bs_stack_html:   "Pure HTML / CSS / JS, kein Framework",

    // ── Sanifair ──
    sf_tag:   "IoT Konzept · 2026",
    sf_title: "Smart Cabin Monitor",
    sf_sub:   "Bedarfsbasierte Ressourcensteuerung durch LoRaWAN-Sensorik – Ein interaktiver B2B-Prototyp zur Reduktion von Betriebskosten um bis zu 40%.",
    sf_idea_headline: "Reinigung nach Zeitplan<br>ist teuer und ineffizient.",
    sf_idea_body:     "Öffentliche Toiletten werden in festen Intervallen gereinigt, egal ob eine Kabine zehnmal oder keinmal genutzt wurde. Das kostet Personal, Zeit und Geld. Die Idee: Sensoren erkennen wann eine Kabine wirklich Reinigung braucht.",
    sf_idea_stat:     "der Reinigungseinsätze sind bei zeitplanbasierter Steuerung unnötig",
    sf_mvp_headline:  "Interaktives Dashboard,<br>gebaut um zu zeigen wie es funktioniert.",
    sf_mvp_body:      "Das Monitoring-Dashboard simuliert eine echte Anlage mit sechs Kabinen, LoRaWAN-Gateway, Sensordaten und Ereignisprotokoll. Vollständig interaktiv, gebaut in reinem HTML, CSS und React.",
    sf_prod_headline: "Was ein echter Rollout<br>kosten und bringen würde.",
    sf_prod_body:     "Ein produktiver Einsatz mit 20 Kabinen amortisiert sich bei typischen Reinigungskosten innerhalb von 3 bis 6 Monaten. Die Hardware ist batterielos, wartungsarm und skaliert ohne zusätzliche Infrastruktur.",
    sf_repeat_headline: "Das Modell funktioniert<br>überall wo Räume genutzt werden.",
    sf_repeat_body:     "Was mit Toilettenkabinen funktioniert, skaliert auf jeden Raum der überwacht werden muss. Dasselbe Sensor-Gateway-Dashboard-Modell, andere Domäne.",
    sf_role1: "Produktkonzeption",
    sf_role2: "IoT Architektur",
    sf_role3: "Interaktiver Prototyp",
    sf_sec1:  "Beschreibung",
    sf_text1: "Konzeption und Entwicklung eines voll interaktiven IoT-Prototyps für datengetriebenes Facility Management. Das System bricht starre, zeitplanbasierte Reinigungszyklen auf und ersetzt sie durch eine automatisierte, bedarfsbasierte Steuerung in Echtzeit. Über batterielose LoRaWAN-Sensoren werden Belegungsdaten erfasst, durch eine intelligente Zwei-Sensor-Logik validiert und in einem Management-Dashboard aggregiert. Ein integrierter ROI-Rechner kalkuliert die finanzielle Ersparnis dynamisch auf Basis realer tariflicher Lohnkosten und individueller Reinigungszeiten.",
    sf_sec2:  "Besonderheit",
    sf_text2: "Die Sensoren arbeiten batterielos. Jeder Sensor verfügt über ein integriertes Solarpanel, das sich über Umgebungslicht auflädt – sowohl durch Kunstlicht in der Anlage als auch durch Tageslicht. Das eliminiert Wartungsaufwand und ermöglicht den Einsatz an hunderten Kabinen ohne zusätzliche Infrastruktur oder Verkabelung.",
    sf_idea_t1:  "Problem",
    sf_idea_c1:  "Reinigungsintervalle ignorieren tatsächliche Nutzung komplett.",
    sf_idea_t2:  "Ansatz",
    sf_idea_c2:  "LoRaWAN-Sensoren an Tür und Riegel, integriertes Solarpanel lädt über Umgebungslicht.",
    sf_idea_t3:  "Ziel",
    sf_idea_c3:  "Reinigung nur wenn nötig. Dashboards für Facility Manager in Echtzeit.",
    sf_mvp_badge: "Mockup · interaktiv",
    sf_prod_val3:   "bis zu 40%",
    sf_prod_label1: "Einmalinvestition pro Kabine inkl. Montage",
    sf_prod_label2: "Monate bis zur Amortisation bei Festivals",
    sf_prod_label3: "weniger Reinigungseinsätze",
    sf_learn_headline: "Was dieses Projekt mir gezeigt hat.",
    sf_learn1: `<strong>Rapid Prototyping &amp; Speed-to-Market:</strong> Konzeption des ersten funktionalen MVPs innerhalb von 10 Minuten und Bereitstellung des vollständig interaktiven Prototyps inklusive valider ROI-Logik in unter 60 Minuten mittels moderner AI-Assisted Development Workflows.`,
    sf_learn2: `<strong>Zwei-Sensor-Logik (Datenqualität):</strong> Erhöhung der Datenvalidität durch Verknüpfung von Tür- und Riegelkontakt. Ein reines Öffnen der Tür ohne anschließendes Verriegeln wird als bloßer Durchgang erkannt und verhindert teure Fehlalarme.`,
    sf_scale_t1:   "Hotellerie",
    sf_scale_c1:   "Zimmerservice nur wenn das Zimmer tatsächlich genutzt wurde. Housekeeping-Routen automatisch optimieren.",
    sf_scale_tag1: "Gleiches Modell",
    sf_scale_t2:   "Messen und Events",
    sf_scale_c2:   "Sanitäranlagen auf Großveranstaltungen bedarfsbasiert steuern. Amortisation in wenigen Wochen bei hohem Durchsatz.",
    sf_scale_tag2: "Schnelle ROI",
    sf_scale_t3:   "Krankenhäuser",
    sf_scale_c3:   "Hygieneintervalle dokumentieren, Nachweise automatisch erzeugen. Compliance als Nebenprodukt.",
    sf_scale_tag3: "Compliance-Vorteil",
    sf_scale_t4:   "Facility Management",
    sf_scale_c4:   "Mehrere Standorte, eine Plattform. White-Label für FM-Dienstleister als eigenes Produkt.",
    sf_scale_tag4: "White-Label",

    // ── Automation ──
    wf_tag:   "AI Automation · 2026",
    wf_title: "AI-Driven Workflow Automation",
    wf_sub:   "Eventgetriebene Prozessautomatisierung via n8n & Model Context Protocol (MCP) – Skalierbare Infrastruktur zur Eliminierung manueller Datensichtung.",
    wf_sec1:  "Beschreibung",
    wf_text1: "Konzeption und Implementierung einer skalierbaren, eventgetriebenen Automatisierungs-Infrastruktur auf Basis von n8n. Das System demonstriert die nahtlose Integration moderner Large Language Models (LLMs) in bestehende Systemlandschaften über das Model Context Protocol (MCP). Repetitive, fehleranfällige Prozesse der manuellen Datensichtung und -bewertung werden vollständig autonomisiert: von der API-gestützten Datenbeschaffung über eine KI-basierte Relevanz-Analyse bis hin zur strukturierten Bereitstellung im lokalen Workspace.",
    wf_sec2:  "Highlights",
    wf_text2: `<ul class="highlights-list"><li><strong>Eventgetriebene Orchestrierung:</strong> Nahtlose API- und Webhook-Integration in n8n zur Echtzeit-Verarbeitung von Datenströmen, anstatt starrer und ineffizienter Cron-Intervalle.</li><li><strong>Next-Gen AI Context (MCP):</strong> Pionier-Einsatz des Model Context Protocols, um LLMs kontextbezogenen, sicheren Zugriff auf Werkzeuge und Datenquellen zu ermöglichen.</li><li><strong>Rausch-Reduktion &amp; ROI:</strong> Automatisierte Vorfilterung und Scoring-Logik, die Datenqualität maximiert und manuellen Sichtungsaufwand um bis zu 90% reduziert.</li></ul>`,
    wf_idea_headline: "Bewerbungen schreiben<br>kostet mehr Zeit als der Job selbst.",
    wf_idea_body:     "Jede Stelle braucht ein individuelles Anschreiben, einen angepassten Lebenslauf, und das alles für Hunderte von Ausschreibungen. 80% der Zeit geht für Recherche und Umformulierungen drauf, nicht für die eigentliche Stärke.",
    wf_idea_stat:     "der Bewerbungszeit entfallen auf manuelle Anpassungen",
    wf_mvp_headline:  "Zwei Workflows,<br>ein vollständiges System.",
    wf_mvp_body:      "Workflow 1 überwacht das E-Mail-Postfach, filtert nach Relevanz und sendet Alerts per Telegram. Workflow 2 nimmt eine Stellenbeschreibung via Telegram entgegen und generiert ein komplettes Bewerbungspaket, das direkt in Notion landet.",
    wf_prod_headline: "Beide Workflows laufen<br>täglich im Produktivbetrieb.",
    wf_prod_body:     "Seit Mai 2026 aktiv. Der Job-Alert-Workflow filtert täglich eingehende Jobalerts und schickt nur relevante Treffer weiter. Der Bewerbungs-Assistent hat bereits mehrere vollständige Bewerbungspakete generiert.",
    wf_repeat_headline: "Bereit für<br>mehrere Nutzer.",
    wf_repeat_body:     "Der Kern ist template-fähig, jedes Profil bekommt sein eigenes Master-CV in Notion und eine eigene Telegram-Verbindung. Eine neue Instanz ist in Minuten eingerichtet.",
    wf_idea_t1: "Problem",
    wf_idea_c1: "Jobalerts kommen täglich, aber manuelles Screenen kostet zu viel Zeit.",
    wf_idea_t2: "Ansatz",
    wf_idea_c2: "KI bewertet Relevanz automatisch, nur passende Jobs landen im Postfach.",
    wf_idea_t3: "Ziel",
    wf_idea_c3: "Von Jobalert bis fertigem Anschreiben in unter 60 Sekunden.",
    wf_tab1: "Workflow 1 · Job Alerts",
    wf_tab2: "Workflow 2 · Bewerbungs-Assistent",
    wf_start_hint: "Drücke Start um den Workflow zu simulieren.",
    wf_btn_start:  "▶ Starten",
    wf_btn_reset:  "↺ Reset",
    wf_btn_replay: "↺ Nochmal",
    wf_done_text:  "✅ Fertig, alles in Notion dokumentiert.",
    wf_prod_val2:   `Von 40<br><span style="font-size:20px;color:var(--ink-soft)">auf 3</span>`,
    wf_prod_label1: "Von Jobalert bis fertigem Anschreiben",
    wf_prod_label2: "Jobalerts täglich, nur noch Relevantes",
    wf_prod_label3: "Kosten pro Monat (GPT-4o-mini)",
    wf_scale_t1: "Recruiting-Agenturen",
    wf_scale_c1: "Kandidatenprofile automatisch auf Stellen matchen und Anschreiben in Sekunden generieren.",
    wf_scale_t2: "HR-Teams",
    wf_scale_c2: "Eingehende Bewerbungen automatisch vorsortieren und zusammenfassen.",
    wf_scale_t3: "Freelancer-Plattformen",
    wf_scale_c3: "Projektausschreibungen monitoren, Angebote automatisch auf Anforderungen anpassen.",
    wf_scale_t4: "Karriere-Coaching",
    wf_scale_c4: "Als Service für Kunden anbieten: eigenes Profil einrichten, Workflow läuft autonom.",

    // ── Community ──
    cm_tag:   "Ecosystem Strategy & Community Building · Okt 2024 bis heute",
    cm_title: "Ecosystem Building:<br>Die AI Community Niedersachsen",
    cm_sub:   "Wie aus einer strategischen Marktlücke ein führendes regionales Tech-Ökosystem mit über 290 aktiven Mitgliedern und internationaler Verankerung entstand.",
    cm_sec1:  "Die Marktvalidierung",
    cm_text1: "Ende 2024 identifizierte ich eine strukturelle Marktlücke in der Region: Es fehlte eine agile, praxisnahe Plattform, die KI-Anwender, Entrepreneure und Entscheider gezielt zusammenbringt. Die strategische Zielsetzung bestand darin, ein kollaboratives Innovations-Ökosystem aufzubauen, das echten Wissenstransfer fördert, Silos aufbricht und lokale Synergien bündelt.",
    cm_sec2:  "Strategie & operative Steuerung",
    cm_text2: "Die Konzeption, das Partnermanagement und die Skalierung der gesamten Community-Infrastruktur liegen vollständig in meiner Verantwortung. Das umfasst das Sourcing hochkarätiger Speaker, das Verhandeln von strategischem Location-Sponsoring sowie den Aufbau einer integrierten digitalen Plattform-Architektur (Webpräsenz, Automatisierung und geschlossene Kommunikationskanäle zur Nutzeraktivierung).",
    cm_text3: "Durch die strategische Akkreditierung als offizielles Kapitel der globalen Organisation 'Global AI Community' wurde das regionale Netzwerk international verankert. Die Events sind als offene Innovationsplattformen konzipiert, um maximale Reichweite und eine niedrige Barriere für Wissenstransfer zu garantieren.",
    cm_sec3:  "Der Business Impact",
    cm_text4: "Was als zielgerichtete Initiative startete, hat sich in kürzester Zeit zum führenden Knotenpunkt für KI-Interessierte der Region entwickelt. Das Projekt demonstriert tiefes Verständnis für Community-Led Growth, agile Markenführung und das Management komplexer Stakeholder-Interessen. Die resultierende Marktpositionierung führte folgerichtig zu Folgeeinladungen als Fach-Speaker auf externen Tech- und Enterprise-Events.",
    cm_impressions: "Impressionen",
    cm_platforms:   "Plattformen",
    cm_tg_desc:  "Zentraler Kommunikations-Hub für den asynchronen B2B- & Tech-Austausch, aktives Peer-to-Peer-Feedback und kollaborative Projektinitiierung.",
    cm_mu_desc:  "Strategischer Kanal für das Event-Marketing, Besuchermanagement und die zielgruppenspezifische Reichweitenaktivierung in der Region.",
    cm_lu_desc:  "Integriertes Ticketing- und CRM-Tool für die nahtlose Event-Skalierung, Teilnehmererfassung und das Touchpoint-Management.",
    cm_web_desc: "Zentrales digitales Schaufenster und funktionale Conversion-Infrastruktur des Ökosystems zur primären Informationsvermittlung und Nutzer-Akquise.",
  },

  en: {
    // Nav
    tile_cta: "View ↗",
    nav_work:    "Work",
    nav_about:   "About",
    nav_contact: "Contact",
    back:        "Back",
    back_portfolio: "← Back to Portfolio",

    // Hero
    hero_intro:  "i build things",
    hero_l1:     "that work.",
    hero_role:   "AI Product Leader · Strategy & Automation",
    hero_hook:   "At the intersection of Tech & Business Strategy:",
    hero_exec:   "Intelligent, scalable workflows and validated MVPs – precisely engineered to create real business value.",
    hero_b1:     "19+ years of Enterprise Product Management & Tech Consulting (incl. Volkswagen)",
    hero_b2:     "AI & Automation: Claude API · MCP · n8n Workflows",
    hero_b3:     "Founder & Community Manager of AI Community Niedersachsen",

    // About
    about_label: "About",
    about_p1:    "I'm Viktor. My foundation is built on international project management, deep data analysis and enterprise product management at Volkswagen. Today I combine that experience with hands-on AI: I don't build slide decks, I build products.",
    about_p2:    "I close the gap between strategy and code by translating business goals directly into technology. With the Claude API, MCP and n8n I build prototypes and automations that deliver immediate value.",
    about_p3:    "To stay ahead technologically, I regularly share my insights as a speaker. In the AI Community Niedersachsen, which I founded, I bring people together to share knowledge and bridge the gap between theory and real production.",

    // Stats
    stat_l1: "Years Experience",
    stat_l2: "ROI Increased",
    stat_l3: "Idea to MVP",
    stat_sub3: "Prototyping with Claude Code & n8n",
    stat_l4: "Community Members",

    // Contact
    c_label:           "Contact",
    c_headline:        "Let's talk.",
    c_sub:             "Open to new roles and interesting projects.",
    c_compose_to:      "To",
    c_compose_subject: "Subject",
    c_subject_val:     "Let's talk",
    c_compose_body:    "Hi Viktor, …",
    c_btn_email:       "Send Email ↗",
    c_btn_linkedin:    "Connect ↗",

    // Shared detail-page labels
    meta_role:   "My Role",
    meta_stack:  "Stack",
    meta_time:   "Timeline",
    meta_status: "Status",
    meta_format: "Format",
    meta_chapter: "Chapter",

    // ── VW Card ──
    vw_meta:   "18 Years of Automotive Innovation & Transformation",
    vw_tag2:   "Product Strategy & Scaling",
    vw_text1:  "Conception of an ML model for automated image recognition and fault diagnosis in headlight systems, as well as an LLM-based workshop chatbot for global after-sales processes.",
    vw_text2:  "Transformation of an existing single-brand diagnostics platform into a group-wide multi-brand solution (VW, SEAT, VW Commercial Vehicles), reducing operating costs by 11% and increasing project ROI by 35%.",
    vw_text3:  "Project lead for the rollout of the statutory ERA-GLONASS emergency call system across 1.2 million vehicles. Sustained savings of €500,000/year through consistent backend automation.",

    // ── Barbershop ──
    bs_tag:   "Deployed · Live-Traffic · Supabase + Vercel · 2026",
    bs_title: "SaaS Booking Platform for Small Businesses & Service Providers",
    bs_sub:   "A framework-free, GDPR-compliant real-time booking system (production-ready MVP) — designed around real-world operational requirements.",
    bs_sec1:  "Description",
    bs_text1: "Development of a fully functional, production-ready MVP for an online booking system in the service industry (concept case study: barbershop). The system was architected from the ground up to solve real business challenges and could go live immediately. It combines maximum performance through Vanilla JS with a modern serverless infrastructure. In addition to automated online appointment booking with email OTP (magic links), a real-time admin dashboard was implemented for live administrative alerts and manual entry of phone bookings.",
    bs_hl1_label: "Cancellation Protection & Admin Workflow",
    bs_hl1_text:  "Integrated cancellation protection for late cancellations under 24 hours via an automated real-time release process (admin decision via live banner), plus seamless manual entry of phone bookings directly in the dashboard.",
    bs_hl2_label: "Privacy by Design / GDPR-ready",
    bs_hl2_text:  "Fully prepared for the sensitive German market through locally hosted typography (no data leak to Google servers) and privacy-compliant error tracking via Sentry with DE ingest in Frankfurt.",
    bs_hl3_label: "Automated Workflows",
    bs_hl3_text:  "Fully integrated transactional email infrastructure via Resend for automated confirmations, cancellations and scheduled 24h appointment reminders — without additional API overhead.",
    bs_cta:   "View live",
    bs_preview_label: "Preview",
    bs_hint:  "Click through…",
    bs_role1: "Product Conception",
    bs_auth_label: "Passwordless Login",
    bs_auth_input: "Enter email",
    bs_auth_btn:   "Send code via email",
    bs_stack_resend: "Resend, Transactional Emails",
    bs_stack_html:   "Pure HTML / CSS / JS, no Framework",

    // ── Sanifair ──
    sf_tag:   "IoT Concept · 2026",
    sf_title: "Smart Cabin Monitor",
    sf_sub:   "Demand-based resource management via LoRaWAN sensors – An interactive B2B prototype reducing operational costs by up to 40%.",
    sf_idea_headline: "Schedule-based cleaning<br>is expensive and inefficient.",
    sf_idea_body:     "Public restrooms are cleaned at fixed intervals, regardless of whether a cabin was used ten times or not at all. This wastes staff time and money. The idea: sensors detect when a cabin actually needs cleaning.",
    sf_idea_stat:     "of cleaning operations are unnecessary in schedule-based systems",
    sf_mvp_headline:  "Interactive dashboard,<br>built to show how it works.",
    sf_mvp_body:      "The monitoring dashboard simulates a real facility with six cabins, LoRaWAN gateway, sensor data and event log. Fully interactive, built in pure HTML, CSS and React.",
    sf_prod_headline: "What a real rollout<br>would cost and deliver.",
    sf_prod_body:     "A production deployment with 20 cabins pays for itself within 3 to 6 months at typical cleaning costs. The hardware is batteryless, low-maintenance and scales without additional infrastructure.",
    sf_repeat_headline: "The model works<br>anywhere rooms are used.",
    sf_repeat_body:     "What works for restroom cabins scales to any room that needs monitoring. The same sensor-gateway-dashboard model, different domain.",
    sf_role1: "Product Conception",
    sf_role2: "IoT Architecture",
    sf_role3: "Interactive Prototype",
    sf_sec1:  "Description",
    sf_text1: "Conception and development of a fully interactive IoT prototype for data-driven facility management. The system breaks rigid, schedule-based cleaning cycles and replaces them with automated, demand-driven control in real time. Batteryless LoRaWAN sensors capture occupancy data, validate it through intelligent dual-sensor logic, and aggregate it in a management dashboard. An integrated ROI calculator dynamically calculates cost savings based on real wage rates and individual cleaning times.",
    sf_sec2:  "Special Feature",
    sf_text2: "The sensors operate without batteries. Each sensor has an integrated solar panel that charges via ambient light – from both artificial lighting in the facility and natural daylight. This eliminates maintenance overhead and enables deployment across hundreds of cabins without additional infrastructure or wiring.",
    sf_idea_t1:  "Problem",
    sf_idea_c1:  "Cleaning intervals completely ignore actual usage.",
    sf_idea_t2:  "Approach",
    sf_idea_c2:  "LoRaWAN sensors on door and latch, integrated solar panel charges via ambient light.",
    sf_idea_t3:  "Goal",
    sf_idea_c3:  "Cleaning only when needed. Real-time dashboards for facility managers.",
    sf_mvp_badge: "Mockup · interactive",
    sf_prod_val3:   "up to 40%",
    sf_prod_label1: "One-time investment per cabin incl. installation",
    sf_prod_label2: "months to break-even at festivals",
    sf_prod_label3: "fewer cleaning operations",
    sf_learn_headline: "What this project taught me.",
    sf_learn1: `<strong>Rapid Prototyping & Speed-to-Market:</strong> Conception of the first functional MVP in under 10 minutes and delivery of the fully interactive prototype including valid ROI logic in under 60 minutes using modern AI-assisted development workflows.`,
    sf_learn2: `<strong>Dual-Sensor Logic (Data Quality):</strong> Data validity increased by linking door and latch contact. A door opening without a subsequent lock is recognised as a mere pass-through, preventing costly false alarms.`,
    sf_scale_t1:   "Hospitality",
    sf_scale_c1:   "Room service only when the room was actually used. Housekeeping routes optimised automatically.",
    sf_scale_tag1: "Same Model",
    sf_scale_t2:   "Trade Shows & Events",
    sf_scale_c2:   "Demand-driven management of sanitary facilities at large-scale events. Break-even within weeks at high throughput.",
    sf_scale_tag2: "Fast ROI",
    sf_scale_t3:   "Hospitals",
    sf_scale_c3:   "Document hygiene intervals and generate compliance records automatically. Compliance as a byproduct.",
    sf_scale_tag3: "Compliance Benefit",
    sf_scale_t4:   "Facility Management",
    sf_scale_c4:   "Multiple locations, one platform. White-label solution for FM service providers as their own product.",
    sf_scale_tag4: "White-Label",

    // ── Automation ──
    wf_tag:   "AI Automation · 2026",
    wf_title: "AI-Driven Workflow Automation",
    wf_sub:   "Event-driven process automation via n8n & Model Context Protocol (MCP) – Scalable infrastructure for eliminating manual data review.",
    wf_sec1:  "Description",
    wf_text1: "Design and implementation of a scalable, event-driven automation infrastructure built on n8n. The system demonstrates seamless integration of modern Large Language Models (LLMs) into existing system landscapes via the Model Context Protocol (MCP). Repetitive, error-prone processes of manual data review and scoring are fully autonomised: from API-driven data sourcing through AI-based relevance analysis to structured delivery in the local workspace.",
    wf_sec2:  "Highlights",
    wf_text2: `<ul class="highlights-list"><li><strong>Event-driven Orchestration:</strong> Seamless API and webhook integration in n8n for real-time data stream processing, replacing rigid and inefficient cron intervals.</li><li><strong>Next-Gen AI Context (MCP):</strong> Pioneer use of the Model Context Protocol to give LLMs contextual, secure access to tools and data sources.</li><li><strong>Noise Reduction &amp; ROI:</strong> Automated pre-filtering and scoring logic that maximises data quality and reduces manual review effort by up to 90%.</li></ul>`,
    wf_idea_headline: "Writing applications<br>takes longer than the job itself.",
    wf_idea_body:     "Every position needs a tailored cover letter and adjusted CV, and that for hundreds of listings. 80% of the time goes into research and rephrasing, not into showcasing actual strengths.",
    wf_idea_stat:     "of application time is spent on manual adjustments",
    wf_mvp_headline:  "Two workflows,<br>one complete system.",
    wf_mvp_body:      "Workflow 1 monitors the inbox, filters by relevance and sends alerts via Telegram. Workflow 2 takes a job description via Telegram and generates a complete application package that lands directly in Notion.",
    wf_prod_headline: "Both workflows run<br>daily in production.",
    wf_prod_body:     "Active since May 2026. The job alert workflow filters incoming alerts daily and only forwards relevant matches. The application assistant has already generated several complete application packages.",
    wf_repeat_headline: "Ready for<br>multiple users.",
    wf_repeat_body:     "The core is template-ready, each profile gets its own master CV in Notion and its own Telegram connection. A new instance is set up in minutes.",
    wf_idea_t1: "Problem",
    wf_idea_c1: "Job alerts arrive daily, but manual screening takes too much time.",
    wf_idea_t2: "Approach",
    wf_idea_c2: "AI automatically rates relevance – only matching jobs land in the inbox.",
    wf_idea_t3: "Goal",
    wf_idea_c3: "From job alert to finished cover letter in under 60 seconds.",
    wf_tab1: "Workflow 1 · Job Alerts",
    wf_tab2: "Workflow 2 · Application Assistant",
    wf_start_hint: "Press Start to simulate the workflow.",
    wf_btn_start:  "▶ Start",
    wf_btn_reset:  "↺ Reset",
    wf_btn_replay: "↺ Again",
    wf_done_text:  "✅ Done, everything documented in Notion.",
    wf_prod_val2:   `From 40<br><span style="font-size:20px;color:var(--ink-soft)">down to 3</span>`,
    wf_prod_label1: "From job alert to finished cover letter",
    wf_prod_label2: "job alerts daily – only the relevant ones",
    wf_prod_label3: "cost per month (GPT-4o-mini)",
    wf_scale_t1: "Recruiting Agencies",
    wf_scale_c1: "Automatically match candidate profiles to positions and generate cover letters in seconds.",
    wf_scale_t2: "HR Teams",
    wf_scale_c2: "Automatically pre-sort and summarise incoming applications.",
    wf_scale_t3: "Freelancer Platforms",
    wf_scale_c3: "Monitor project listings and automatically adapt proposals to requirements.",
    wf_scale_t4: "Career Coaching",
    wf_scale_c4: "Offer as a service for clients: set up their profile, the workflow runs autonomously.",

    // ── Community ──
    cm_tag:   "Ecosystem Strategy & Community Building · Oct 2024 to present",
    cm_title: "Ecosystem Building:<br>The AI Community Lower Saxony",
    cm_sub:   "How a strategic market gap became a leading regional tech ecosystem with over 290 active members and international anchoring.",
    cm_sec1:  "Market Validation",
    cm_text1: "At the end of 2024 I identified a structural gap in the region: there was no agile, practice-oriented platform bringing together AI practitioners, entrepreneurs and decision-makers. The strategic objective was to build a collaborative innovation ecosystem that fosters genuine knowledge transfer, breaks down silos and pools local synergies.",
    cm_sec2:  "Strategy & Operations",
    cm_text2: "The conception, partner management and scaling of the entire community infrastructure are fully my responsibility. This includes sourcing high-calibre speakers, negotiating strategic venue sponsorship and building an integrated digital platform architecture (web presence, automation and closed communication channels for user activation).",
    cm_text3: "Through strategic accreditation as an official chapter of the global organisation Global AI Community, the regional network gained international anchoring. Events are designed as open innovation platforms to guarantee maximum reach and a low barrier to knowledge transfer.",
    cm_sec3:  "Business Impact",
    cm_text4: "What started as a targeted initiative has rapidly become the leading hub for AI enthusiasts in the region. The project demonstrates deep understanding of community-led growth, agile brand management and the handling of complex stakeholder interests. The resulting market positioning led directly to invitations as a subject-matter speaker at external tech and enterprise events.",
    cm_impressions: "Impressions",
    cm_platforms:   "Platforms",
    cm_tg_desc:  "Central communications hub for asynchronous B2B & tech exchange, active peer-to-peer feedback and collaborative project initiation.",
    cm_mu_desc:  "Strategic channel for event marketing, audience management and targeted reach activation in the region.",
    cm_lu_desc:  "Integrated ticketing and CRM tool for seamless event scaling, attendee capture and touchpoint management.",
    cm_web_desc: "Central digital storefront and functional conversion infrastructure of the ecosystem for primary information delivery and user acquisition.",
  }
};

const _stored = localStorage.getItem('portfolio_lang');
let currentLang = _stored || 'de';
if (!_stored) localStorage.setItem('portfolio_lang', 'de');

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = lang;

  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'de' ? 'EN' : 'DE';

  window.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

const toggle = document.getElementById('langToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    applyLang(currentLang === 'de' ? 'en' : 'de');
  });
}

// Re-apply when page is restored from bfcache (back/forward navigation)
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    applyLang(localStorage.getItem('portfolio_lang') || 'de');
  }
});

applyLang(currentLang);
