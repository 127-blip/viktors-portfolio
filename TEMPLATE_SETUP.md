# Portfolio Template Setup

Dieses Dokument ist die Anleitung für Claude, um aus diesem Portfolio eine neue Version
für eine andere Person zu erstellen. Kein Code-Duplizieren – nur gezielt ersetzen.

## Schritt 1 – Vom Nutzer abfragen

Bevor du anfängst, frage nach diesen Informationen:

```
1. Vollständiger Name (z.B. "Anna Müller")
2. Berufsbezeichnung / Rolle (z.B. "Grundschullehrerin & Autorin")
3. Kurz-Tagline (z.B. "Bildung · Kreativität · Digitale Medien")
4. E-Mail-Adresse
5. Telefonnummer (optional, als tel:-Link)
6. LinkedIn-URL (optional)
7. Domain (z.B. anna-mueller.de)
8. Sprache: nur DE, nur EN, oder beides?
9. Foto-Dateinamen (Avatar + Hauptfoto)
10. Farbe: gleiche Palette behalten oder neue Akzentfarbe?

Projekte (für jedes Projekt):
- Titel
- Kurzbeschreibung (1-2 Sätze)
- Tag (z.B. "Buchprojekt · 2025")
- Hat es eine eigene Detail-Seite? Wenn ja: Inhalt?

Über mich (3 Absätze):
- Absatz 1: Wer bist du? Hintergrund?
- Absatz 2: Was machst du heute / womit?
- Absatz 3: Community, Speaking, Ehrenamt?

Stats (4 Kennzahlen):
- Zahl 1: (z.B. "12+ Jahre Erfahrung")
- Zahl 2: (z.B. "+200 Schüler unterrichtet")
- Zahl 3: (z.B. "3 Bücher veröffentlicht")
- Zahl 4: (z.B. "500+ Follower")
```

## Schritt 2 – Dateien kopieren

Erstelle einen neuen Ordner oder ein neues Repository. Kopiere diese Dateien:
- `index.html`
- `style.css`
- `i18n.js`
- `main.js`
- `social-preview.png` (wird ersetzt)

Detail-Seiten nur übernehmen wenn die Person eigene Projekte mit Detail-Seite braucht.
`admin-barbershop.html` und `Smart_Cabin_Monitor_Mockup.html` weglassen (Viktor-spezifisch).

## Schritt 3 – Alles ersetzen

### index.html

| Wo | Was ersetzen |
|---|---|
| `<title>` | Name der Person |
| `og:title` + `twitter:title` | "Name · Rolle · Tagline" |
| `og:url` | neue Domain |
| `<link rel="icon">` + `<link rel="apple-touch-icon">` | neues Avatar-Bild |
| Nav `<a>` "Viktor Weber" | neuer Name |
| `hero__photo` img src + alt | neues Foto |
| `about__photo` img src + alt | neues Foto |
| `ccard__name` (2x) | neuer Name |
| `ccard__handle` tel:-Link | neue Telefonnummer |
| `mailto:` href + compose-val | neue E-Mail |
| `c_compose_body` "Hallo Viktor" | neuen Namen |
| LinkedIn href | neue LinkedIn-URL |
| `ccard__bio` | neue LinkedIn-Bio |
| `ccard__avatar--img` | neues Avatar-Bild |
| `© 2026 Viktor Weber` | neuer Name |
| Stats `data-count` Werte | neue Zahlen |
| Projekt-Tiles `href` | neue Detail-Seiten oder `#` |

### i18n.js

Alle Texte unter `translations.de` und `translations.en` anpassen:

| Key | Was ändern |
|---|---|
| `hero_role` | neue Rolle |
| `hero_hook` | neuer Headline-Satz |
| `hero_exec` | neue Executive Summary |
| `hero_b1`, `hero_b2`, `hero_b3` | neue Bullet Points |
| `about_p1`, `about_p2`, `about_p3` | neue Über-mich-Texte |
| `stat_l1`–`stat_l4` | neue Stat-Labels |
| `stat_sub3` | neuer Stat-Subtext (oder löschen) |
| `c_compose_body` | "Hallo [Name]" |
| `c_subject_val` | Betreff anpassen |
| Alle Projekt-Keys (`bs_*`, `sf_*`, `wf_*`, `cm_*`, `vw_*`) | neue Projekte |

### Projektstruktur anpassen

Wenn die Person weniger als 5 Projekte hat:
- Nicht benötigte Tiles in index.html entfernen
- Entsprechende i18n-Keys löschen
- Detail-HTML-Dateien weglassen

Wenn die Person andere Projekttypen hat:
- Tile-Tags anpassen (z.B. statt "Deployed · Live" → "Buchprojekt · 2025")
- VW-Enterprise-Card umbenennen oder durch ein anderes großes Highlight ersetzen

### Bilder

| Datei | Ersetzen durch |
|---|---|
| `Viktor.png` | Avatar der neuen Person (quadratisch, mind. 200x200px) |
| `Viktor_komplett.jpeg` | Hauptfoto (Hochformat bevorzugt) |
| `social-preview.png` | Neues 1200x630px OG-Bild generieren |
| Community/Event-Fotos | eigene Fotos der Person |

Social Preview neu generieren: Python PIL-Script aus vorheriger Session nutzen,
oder Canva mit 1200x630px Export.

### Farben (style.css)

Akzentfarbe in `style.css` ist `--accent: #3B82F6` (Blau).
Für andere Personen z.B.:
- Grün: `#10B981`
- Lila: `#8B5CF6`
- Rose: `#F43F5E`
- Orange: `#F97316`

Suche nach `--accent` und ersetze alle Vorkommen.

### Platform-Links (community.html / falls übernommen)

Plattform-Karten (`plattform-card`) anpassen oder entfernen wenn nicht relevant.

## Schritt 4 – OG-URLs prüfen

In allen HTML-Dateien: `viktorweber.de` oder `viktor-weber.de` → neue Domain ersetzen.
```bash
grep -rn "viktor-weber.de" --include="*.html"
```

## Schritt 5 – Testen

- [ ] Seite lokal öffnen: sieht alles richtig aus?
- [ ] Sprachumschalter DE/EN funktioniert (oder nur eine Sprache?)
- [ ] Alle Links klickbar (mailto, tel, LinkedIn)
- [ ] Fotos laden
- [ ] Mobile-Ansicht checken (Browser DevTools, 375px Breite)
- [ ] OG-Bild testen: https://opengraph.xyz eingeben

## Schritt 6 – Deploy

GitHub Pages: neues Repo `github-username/vorname-nachname-portfolio` anlegen,
pushen, GitHub Pages auf `main` Branch aktivieren.

Oder Vercel: `vercel --prod` im Ordner.

---

## Schnell-Referenz: Was ist Viktor-spezifisch und muss immer weg

- VW/Volkswagen-Referenzen (alle `vw_*` i18n-Keys)
- AI Community Niedersachsen (alle `cm_*` Keys + community.html)
- "19+ Jahre Enterprise Product Management"
- Barbershop/Supabase-Demo (admin-barbershop.html, barbershop.html)
- IoT Smart Cleaning / SaniFair-Referenzen
- n8n, Claude API, MCP als persönliche Tools (sofern nicht zutreffend)
- Telefonnummer +49 160 7578 343
- E-Mail info@viktor-weber.de
- LinkedIn /in/viktor-weber/
- Domain viktor-weber.de
