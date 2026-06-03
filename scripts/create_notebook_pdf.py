#!/usr/bin/env python3
"""
Generates an updated "Information zum Notebook-Kauf (Oberstufe)" PDF for the
BG Zehnergasse, aligned with the current website content (softened ARM/MacBook
stance) and 2026 data.

Run inside a venv with reportlab:
    python3 -m venv /tmp/pdfvenv
    /tmp/pdfvenv/bin/pip install reportlab
    /tmp/pdfvenv/bin/python scripts/create_notebook_pdf.py

Output: public/templates/Information-zum-Notebook-2026.pdf
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, ListFlowable, ListItem,
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO = os.path.join(ROOT, "public", "bgz-logo.png")
OUT = os.path.join(ROOT, "public", "templates", "Information-zum-Notebook-2026.pdf")

TEAL = HexColor("#00796b")
DARK = HexColor("#1a1a1a")
GREY = HexColor("#666666")

styles = getSampleStyleSheet()
body = ParagraphStyle(
    "body", parent=styles["Normal"], fontName="Helvetica", fontSize=9.3,
    leading=12.2, textColor=DARK, alignment=TA_JUSTIFY, spaceAfter=4,
)
h = ParagraphStyle(
    "h", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.5,
    leading=13, textColor=TEAL, spaceBefore=7, spaceAfter=2,
)
title = ParagraphStyle(
    "title", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=16,
    leading=20, textColor=TEAL, spaceAfter=2,
)
sub = ParagraphStyle(
    "sub", parent=styles["Normal"], fontName="Helvetica", fontSize=9,
    leading=12, textColor=GREY, spaceAfter=12,
)
footer = ParagraphStyle(
    "footer", parent=styles["Normal"], fontName="Helvetica-Oblique", fontSize=8,
    leading=11, textColor=GREY,
)
bullet = ParagraphStyle(
    "bullet", parent=body, spaceAfter=2, alignment=0,
)


def li(text):
    return ListItem(Paragraph(text, bullet), leftIndent=6)


def bullets(items):
    return ListFlowable(
        [li(t) for t in items],
        bulletType="bullet", bulletColor=TEAL, bulletFontSize=7,
        leftIndent=12, spaceAfter=5,
    )


story = []

# Header: logo + school line
if os.path.exists(LOGO):
    img = Image(LOGO, width=2.0 * cm, height=2.0 * cm)
    img.hAlign = "LEFT"
    story.append(img)
    story.append(Spacer(1, 4))

story.append(Paragraph("Information zum Notebook-Kauf (Oberstufe)", title))
story.append(Paragraph(
    "BG/BRG Zehnergasse &middot; Zehnergasse 15, 2700 Wiener Neustadt &middot; admin@bgzwn.at",
    sub,
))

story.append(Paragraph(
    "Liebe Eltern! Liebe Erziehungsberechtigte! Liebe Sch&uuml;lerinnen und Sch&uuml;ler!",
    body,
))
story.append(Paragraph(
    "Die folgenden Informationen gelten allgemein f&uuml;r den Ankauf eines Notebooks zur "
    "Verwendung in unserer Schule, insbesondere f&uuml;r die Oberstufe. Der Kauf sollte zu "
    "Schulbeginn erfolgen, da in vielen Unterrichtsgegenst&auml;nden das Notebook zum Einsatz "
    "kommt.",
    body,
))

story.append(Paragraph("Mindestanforderungen", h))
story.append(bullets([
    "<b>Bildschirm:</b> mind. 14 Zoll, empfohlen 14 bzw. 15,4 Zoll &middot; m&ouml;glichst hohe "
    "Aufl&ouml;sung (mind. FullHD). Das Ger&auml;t sollte leicht zu transportieren sein.",
    "<b>Prozessor:</b> Intel Core i5 bzw. Core Ultra 5 der aktuellen Generation oder "
    "gleichwertiger AMD Ryzen 5",
    "<b>Arbeitsspeicher:</b> mind. 16 GB",
    "<b>SSD-Festplatte:</b> mind. 512 GB",
    "<b>Betriebssystem:</b> Windows 11 (keine S-Version). Hinweis: Windows 10 erh&auml;lt seit "
    "14.&nbsp;Oktober&nbsp;2025 keine Sicherheitsupdates mehr.",
    "<b>Lokale Administrationsrechte</b>",
    "<b>USB-Anschl&uuml;sse</b> (bei reinen USB-C-Ger&auml;ten ggf. USB-C-Adapter/Hub n&ouml;tig)",
    "<b>WLAN-f&auml;higes Ger&auml;t</b>",
    "<b>3,5-mm-Kopfh&ouml;reranschluss</b> bzw. M&ouml;glichkeit, Kopfh&ouml;rer zu verbinden "
    "(auch &uuml;ber USB-Adapter oder Bluetooth)",
    "<b>Optional:</b> externe Maus (Funk/Kabel), externes DVD-Laufwerk",
]))

story.append(Paragraph("Apple MacBooks", h))
story.append(Paragraph(
    "Apple MacBooks k&ouml;nnen im Unterricht verwendet werden. Viele Programme (u.&nbsp;a. "
    "Office&nbsp;365) gibt es als macOS-Versionen. Einige im Unterricht verwendete Programme "
    "laufen jedoch nur unter Windows. Es kann daher sein, dass eine Windows-Installation "
    "(Dual-Boot oder Virtualisierung &uuml;ber Parallels/UTM) eingerichtet werden muss &mdash; "
    "das ist <b>kein Muss</b>, kann aber f&uuml;r bestimmte Windows-exklusive Software n&ouml;tig "
    "sein. Die Einrichtung liegt in der <b>Verantwortung der Sch&uuml;lerin / des Sch&uuml;lers</b>; "
    "Lehrkr&auml;fte helfen dabei nicht.",
    body,
))

story.append(Paragraph("ARM-Prozessoren (Apple Silicon &amp; Windows-ARM)", h))
story.append(Paragraph(
    "Ger&auml;te mit ARM-Prozessor &mdash; MacBooks mit M-Chip (M1/M2/M3/M4) sowie "
    "Windows-Laptops mit ARM (z.&nbsp;B. Qualcomm Snapdragon) &mdash; sollten "
    "<b>grunds&auml;tzlich funktionieren</b> (Office&nbsp;365, Teams, Browser sowie Next-Exam "
    "mit eigener macOS-/ARM-Version). Bei Spezialsoftware kann es jedoch zu Kompatibilit&auml;ts- "
    "oder Leistungsproblemen kommen (manche Programme laufen nur &uuml;ber Emulation). In diesem "
    "Fall muss sich die <b>Sch&uuml;lerin / der Sch&uuml;ler selbst darum k&uuml;mmern</b> &mdash; "
    "Lehrkr&auml;fte und IT bieten daf&uuml;r keinen Support. F&uuml;r maximale Kompatibilit&auml;t "
    "empfehlen wir Ger&auml;te mit Intel- oder AMD-Prozessor (x86/x64-Architektur).",
    body,
))

story.append(Paragraph("Wichtiger Hinweis", h))
story.append(Paragraph(
    "Beim Kauf eines Ger&auml;tes wird eine Herstellergarantieverl&auml;ngerung bzw. eine "
    "Versicherung auf 3 oder 4 Jahre empfohlen. Eine geeignete Virenschutz-Software "
    "(<b>Microsoft Defender</b> ist in Windows&nbsp;11 vorinstalliert und ausreichend) sowie das "
    "Anfertigen von Backups (z.&nbsp;B. &uuml;ber OneDrive) liegen im Verantwortungsbereich der "
    "Sch&uuml;lerin / des Sch&uuml;lers. Das Lehrpersonal wird aus Haftungsgr&uuml;nden keine "
    "System- und Hardwarekonfigurationen durchf&uuml;hren. Hilfe und Support bieten wir f&uuml;r "
    "Schul-Software und Konfigurationen im Rahmen des Unterrichts sowie rund um das Arbeiten im "
    "Schulnetzwerk.",
    body,
))

story.append(Spacer(1, 6))
story.append(Paragraph(
    "Bei n&auml;heren Fragen wenden Sie sich bitte an das IT-Team unter "
    "<b>admin@bgzwn.at</b>.",
    body,
))
story.append(Spacer(1, 10))
story.append(Paragraph("Das IT-Team", body))
story.append(Spacer(1, 16))
story.append(Paragraph("Stand: Juni 2026", footer))


def _footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(GREY)
    canvas.drawRightString(
        A4[0] - 2 * cm, 1.2 * cm,
        "BG Zehnergasse – Information zum Notebook-Kauf – Stand: Juni 2026",
    )
    canvas.restoreState()


os.makedirs(os.path.dirname(OUT), exist_ok=True)
doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=1.9 * cm, rightMargin=1.9 * cm, topMargin=1.4 * cm, bottomMargin=1.5 * cm,
    title="Information zum Notebook-Kauf (Oberstufe)",
    author="BG Zehnergasse – IT-Team",
)
doc.build(story, onFirstPage=_footer, onLaterPages=_footer)
print(f"Wrote {OUT}")
