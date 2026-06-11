# Portfolio – Viktor Weber

## Projektübersicht
Persönliches Portfolio von Viktor Weber. Reines HTML/CSS/JS, kein Framework, kein Build-Step.
Live unter: **https://viktor-weber.de**
GitHub: `127-blip/viktors-portfolio`
GitHub Pages: `https://127-blip.github.io/viktors-portfolio/`
Vercel: `https://viktors-weber.vercel.app/`
Hosting: Infomaniak

## Dateistruktur
| Datei | Zweck |
|---|---|
| `index.html` | Hauptseite (Hero, Projekte, Über mich, Kontakt) |
| `style.css` | Alle Styles |
| `i18n.js` | Übersetzungen DE/EN + Sprachlogik |
| `main.js` | Animations, Scroll, sonstiges JS |
| `community.html` | AI Community Niedersachsen Detail-Seite |
| `barbershop.html` | SaaS Booking Platform Detail-Seite |
| `sanifair.html` | IoT Smart Cleaning Detail-Seite |
| `automation.html` | AI Workflow Automation Detail-Seite |
| `admin-barbershop.html` | Admin-Dashboard der Barbershop-Demo (Supabase) |
| `Smart_Cabin_Monitor_Mockup.html` | Interaktives IoT-Mockup (React in HTML) |
| `social-preview.png` | OG-Bild (1200x630px) für Social Media |

## Bilder
| Datei | Verwendung |
|---|---|
| `Viktor.png` | Avatar / Favicon / LinkedIn-Karte |
| `Viktor_komplett.jpeg` | Hero-Foto + About-Foto |
| `IMG_4245.jpeg` | Community-Event-Foto 1 |
| `IMG_4253.jpeg` | Community-Event-Foto 2 |
| `IMG_4255.jpeg` | Community-Bento-Foto |
| `IMG_7815.jpeg` | Präsi-Foto (Speaker) |
| `AI_Logo.png` | AI Community Logo (Platform-Card) |
| `Luma.png` | Luma-Logo (Platform-Card) |
| `500px-Telegram_logo.svg.png` | Telegram-Logo (Platform-Card) |
| `meetup-icon.svg` | Meetup-Logo (Platform-Card) |
| `social-preview.png` | Social Preview 1200x630 |

## i18n-System
- Sprachkey in `localStorage`: `portfolio_lang`
- Texte in `i18n.js` unter `translations.de` und `translations.en`
- `data-i18n="key"` → `el.textContent = translations[lang][key]`
- `data-i18n-html="key"` → `el.innerHTML = translations[lang][key]`
- Sprachwechsel feuert `CustomEvent('langchange')`

## Persönliche Daten (Viktor)
- **Name:** Viktor Weber
- **Rolle:** AI Product Leader · Strategie & Automatisierung
- **E-Mail:** info@viktor-weber.de
- **Telefon:** +49 160 7578 343 (klickbar als `tel:`-Link)
- **LinkedIn:** https://www.linkedin.com/in/viktor-weber/
- **Domain:** viktor-weber.de (alle OG-URLs)
- **Favicon/Avatar:** Viktor.png
- **Foto:** Viktor_komplett.jpeg

## Stats (index.html)
- `19+` Jahre Erfahrung
- `+35%` ROI gesteigert
- `<10 Min` Idee zu MVP (Subtext: "Prototyping mit Claude Code & n8n")
- `290+` Community Mitglieder

## Projekte
1. **VW Enterprise** – 18 Jahre Automotive (kein eigenes Detail-File, inline in index.html)
2. **SaaS Booking Platform** → `barbershop.html` + `admin-barbershop.html`
3. **IoT Smart Cleaning** → `sanifair.html` + `Smart_Cabin_Monitor_Mockup.html`
4. **AI Workflow Automation** → `automation.html`
5. **AI Community Niedersachsen** → `community.html`

## Supabase (Barbershop-Demo)
- URL: `https://mvggueegxnrtfametfev.supabase.co`
- Nur in `admin-barbershop.html` – Demo-Daten, kein Produktivbetrieb
- Service Role Key liegt im Client (bewusste Entscheidung für Demo-Zwecke)

## Konventionen – PFLICHTREGELN
- **Kein Em-Dash (—)**. En-Dash (–) ist okay, Punkt oder Komma bevorzugt.
- Kommentare nur wenn das WARUM nicht offensichtlich ist – nie was der Code tut
- Keine neuen Dateien anlegen wenn eine bestehende geändert werden kann
- OG-URLs immer `https://viktor-weber.de/...` (mit Bindestrich, nicht viktorweber.de)
- Vor jedem Push: prüfen ob Domain-Referenzen konsistent sind
- Video: `AI_Event_Video.mp4` (nicht .mov)

## Changelog wichtiger Entscheidungen
- **2026-06** Hosting auf Infomaniak migriert, Domain viktor-weber.de
- **2026-06** E-Mail von viktor.weber@startmail.com auf info@viktor-weber.de geändert
- **2026-06** Projekt umbenannt: "Smart Cabin Monitor" → "IoT Smart Cleaning: Intelligente Reinigungssteuerung"
- **2026-06** "AI Community Braunschweig" → "AI Community Niedersachsen" überall
- **2026-06** Hero umbenannt: "AI-Builder" → "AI Product Leader · Strategie & Automatisierung"
- **2026-06** PIN aus admin-barbershop.html entfernt, als Live-Demo in barbershop.html eingebettet
- **2026-06** "Open to Work" Badge entfernt
- **2026-06** Telefonnummer als tel:-Link unter Namen in Email-Karte, separate Telefon-Karte entfernt
