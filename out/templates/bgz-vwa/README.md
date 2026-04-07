# VWA-Vorlage BG Zehnergasse

LaTeX-Vorlage fuer Vorwissenschaftliche Arbeiten am BG Zehnergasse, Wiener Neustadt.

## Voraussetzungen

- **TeX Live** (Linux/macOS) oder **MiKTeX** (Windows) -- vollstaendige Installation empfohlen
- **Biber** als Bibliographie-Prozessor (in TeX Live/MiKTeX enthalten)
- Ein LaTeX-Editor (z.B. TeXstudio, VS Code mit LaTeX Workshop, Overleaf)

## Kompilierung

```bash
pdflatex main.tex
biber main
makeglossaries main
pdflatex main.tex
pdflatex main.tex
```

Oder mit `latexmk`:

```bash
latexmk -pdf main.tex
```

## Dateistruktur

```
bgz-vwa/
├── main.tex              # Hauptdatei
├── bgzvwa.cls            # Dokumentklasse
├── literatur.bib         # Literaturverzeichnis
├── glossar.tex           # Glossar und Abkuerzungen
├── images/               # Abbildungen (inkl. Schullogo)
│   └── bgz-logo.png
└── kapitel/
    ├── kurzfassung.tex   # Kurzfassung (Deutsch)
    ├── abstract.tex      # Abstract (Englisch)
    ├── einleitung.tex    # Einleitung
    ├── hauptteil.tex     # Hauptteil (Theorie, Analyse, Ergebnisse)
    ├── fazit.tex         # Fazit
    └── anhang.tex        # Anhang
```

## Anpassung

1. `main.tex`: Metadaten anpassen (Titel, Name, Klasse, Betreuungsperson, Fachbereich)
2. `images/bgz-logo.png`: Schullogo ablegen
3. Kapitel-Dateien in `kapitel/` bearbeiten
4. Quellen in `literatur.bib` eintragen
5. Glossareintraege in `glossar.tex` ergaenzen

## Zitieren (APA-Stil)

- Indirektes Zitat: `\textcite{karmasin2019}` oder `\parencite{karmasin2019}`
- Direktes Zitat: `\textcite[S.~42]{karmasin2019} stellt fest: \glqq Zitat\grqq`
- Mehrere Quellen: `\parencite{karmasin2019,prenzel2013}`
