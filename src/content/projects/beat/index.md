---
title: "Swatch Internet Time"
description: "Eine moderne Web-App zur Anzeige, Umrechnung und sharing von Swatch Internet Time (.beat time)"
date: "2025-01-15"
tags: ["web-app", "time", "swatch", "pwa", "react", "typescript"]
demoURL: "https://beat.dimi.cool"
repoURL: "https://github.com/TheCodeOne/beat"
---

Ich habe eine Web-App entwickelt, um Swatch Internet Time anzuzeigen und zu konvertieren. Swatch Internet Time ist ein dezimales Zeitsystem, das 1998 vom Schweizer Uhrenhersteller Swatch eingeführt wurde. Es teilt den Tag in 1000 "Beats" (@000-@999) ein, wobei jeder Beat 86.4 Sekunden entspricht.

## 🎯 Was ist Swatch Internet Time?

Swatch Internet Time ist ein universelles Zeitsystem ohne Zeitzonen. Wenn jemand "@500 beats" sagt, repräsentiert das exakt denselben Moment weltweit – unabhängig von der lokalen Zeit. Das System basiert auf **Biel Mean Time (BMT)**, was UTC+1 ohne Sommerzeit ist.

**Wichtige Fakten:**

- **1000 Beats pro Tag**: Der Tag wird in 1000 Einheiten aufgeteilt
- **Beat-Dauer**: Jeder Beat = 86.4 Sekunden (1 Minute 26.4 Sekunden)
- **Keine Zeitzonen**: Derselbe Beat-Zeitpunkt gilt global
- **@000 beats** = Mitternacht BMT
- **@500 beats** = Mittag BMT

## 🚀 Features

- ✅ **Live Beat-Zeit** - Echtzeit-Anzeige der aktuellen Swatch Internet Time (@000-@999)
- ✅ **Zeitkonverter** - Bidirektionale Umrechnung zwischen Realzeit und Beat-Zeit
- ✅ **Beat-Uhr** - Analoge Uhr mit Stunden 0-12 und entsprechenden Beat-Werten
- ✅ **Teilen-Funktion** - Beat-Zeiten per Link teilen mit Erklärung
- ✅ **Informationsseite** - Umfassende Analyse der Vorteile von Swatch Internet Time
- ✅ **Dark Mode** - Umschaltung zwischen hellem und dunklem Theme
- ✅ **PWA-Support** - Als App installieren, funktioniert offline
- ✅ **Mobile optimiert** - Responsive Design für alle Geräte
- ✅ **Präzise Umrechnung** - Unterstützung für Centibeats (z.B. @500.50)

## 🎨 Seiten & Funktionen

### Home

Die Startseite zeigt die aktuelle Beat-Zeit in Echtzeit sowie die lokale Realzeit mit Zeitzone an.

### Converter

Bidirektionaler Zeitkonverter:

- **Realzeit → Beat**: Wähle Datum und Uhrzeit, konvertiere zu Beat-Zeit
- **Beat → Realzeit**: Gib Beat-Zeit ein (mit optionalem Datum als Referenz), erhalte Realzeit

### Clock

Eine analoge Uhr, die die Stunden 0-12 mit den entsprechenden Beat-Werten anzeigt. Beim Hovern über die Stunden werden die zugehörigen Beat-Werte angezeigt.

### Share

Erstelle teilbare Links für spezifische Beat-Zeiten. Die Links enthalten sowohl die Beat-Zeit als auch die entsprechende Realzeit mit Erklärung.

### Informations

Eine umfassende Analyse der Vorteile von Swatch Internet Time, einschließlich:

- Universeller Zeitstandard ohne Zeitzonen
- Dezimalsystem für einfache Berechnungen
- Keine Sommerzeit-Verwirrung
- Digitale Kompatibilität
- Internationale Kommunikation

## 💻 Tech Stack

- **React 19** - UI-Bibliothek
- **TypeScript** - Typsicherheit
- **Vite** - Build-Tool und Dev-Server
- **Tailwind CSS** - Utility-first CSS-Framework
- **React Router** - Routing
- **Vite PWA Plugin** - Progressive Web App Support
- **Lucide React** - Icons

## 🎯 Warum diese App?

Ich habe diese App entwickelt, weil ich eine moderne, benutzerfreundliche Möglichkeit wollte, Swatch Internet Time zu verwenden. Die meisten verfügbaren Tools sind veraltet oder nicht mehr funktionsfähig. Diese App bietet:

- **Moderne UI/UX** - Sauberes, responsives Design
- **Offline-Funktionalität** - Funktioniert ohne Internetverbindung
- **Teilen-Funktion** - Einfaches Teilen von Beat-Zeiten
- **Umfassende Informationen** - Detaillierte Erklärung des Systems
- **PWA** - Installierbar als native App

## 🌍 Verwendung

Die App ist live unter [beat.dimi.cool](https://beat.dimi.cool) verfügbar und kann als Progressive Web App installiert werden. Sie funktioniert vollständig offline nach dem ersten Laden.

**Beispiel-Verwendung:**

- Koordiniere globale Events mit "@750 beats" statt komplizierter Zeitzonen-Umrechnungen
- Teile präzise Zeitpunkte mit Freunden weltweit
- Verstehe die Vorteile eines dezimalen Zeitsystems
- Nutze die analoge Uhr für visuelles Verständnis
