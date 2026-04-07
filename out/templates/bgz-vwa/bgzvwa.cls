%% bgzvwa.cls - BG Zehnergasse VWA Document Class (APA6 Edition)
%% Vorlage fuer Vorwissenschaftliche Arbeiten am BG Zehnergasse
%% Basierend auf der HTL-Diplomarbeit-Vorlage von Wolfgang Schermann / Wilhelm Burger
%% Angepasst fuer AHS-VWA: Einzelautor, Betreuungsperson, Selbststaendigkeitserklaerung
%%
%% Version: 1.0 (2025)
%% Lizenz: MIT

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bgzvwa}[2025/01/01 BG Zehnergasse VWA APA6]

% === Optionen ===
\RequirePackage{ifthen}

\newcommand{\bgz@MainLanguage}{german}
\newcommand{\bgz@DoubleSided}{oneside}
\newcommand{\bgz@Colorcode}{color}

\DeclareOption{german}{\renewcommand{\bgz@MainLanguage}{german}}
\DeclareOption{english}{\renewcommand{\bgz@MainLanguage}{english}}
\DeclareOption{oneside}{\renewcommand{\bgz@DoubleSided}{oneside}}
\DeclareOption{twoside}{\renewcommand{\bgz@DoubleSided}{twoside}}
\DeclareOption{color}{\renewcommand{\bgz@Colorcode}{color}}
\DeclareOption{black}{\renewcommand{\bgz@Colorcode}{black}}
\DeclareOption*{\ClassWarning{bgzvwa}{Unknown document option "\CurrentOption"}}
\ProcessOptions\relax

% === Basisklasse laden (book — hat frontmatter/mainmatter) ===
\ifthenelse{\equal{\bgz@DoubleSided}{twoside}}%
  {\LoadClass[a4paper,11pt,twoside]{book}}%
  {\LoadClass[a4paper,11pt,oneside]{book}}

% === Grundlegende Pakete ===
\RequirePackage[T1]{fontenc}
\RequirePackage{lmodern}
\RequirePackage{pdfpages}

% Sprache
\ifthenelse{\equal{\bgz@MainLanguage}{german}}%
  {\RequirePackage[english,ngerman]{babel}}%
  {\RequirePackage[ngerman,english]{babel}}

% === Seitenraender ===
\RequirePackage[
  a4paper,
  left=3cm,
  right=3cm,
  top=3cm,
  bottom=3cm,
  headheight=14.5pt
]{geometry}

% === Automatisches noindent + Absatzabstand ===
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em plus 0.2em minus 0.1em}

% === Farben ===
\RequirePackage{xcolor}
\definecolor{bgzblau}{RGB}{26, 54, 93}
\definecolor{linkblau}{RGB}{0, 83, 155}
\definecolor{codegreen}{RGB}{40, 120, 40}
\definecolor{codegray}{RGB}{128, 128, 128}
\definecolor{codebg}{RGB}{248, 248, 248}
\newcommand{\@MissingArg}[1]{\textcolor{red}{#1}}

% === Grafiken ===
\RequirePackage{graphicx}
\graphicspath{{images/}}

% === Literaturverzeichnis (APA6) ===
\RequirePackage{csquotes}
\RequirePackage[
  backend=biber,
  style=apa,
  sorting=nyt,
  maxcitenames=2,
  mincitenames=1,
  uniquelist=false,
  url=true,
  doi=true,
  eprint=false
]{biblatex}
\ifthenelse{\equal{\bgz@MainLanguage}{german}}%
  {\DeclareLanguageMapping{ngerman}{ngerman-apa}}{}

% === Weitere Pakete ===
\RequirePackage[font=small,labelfont=bf]{caption}
\setlength{\captionmargin}{5mm}
\RequirePackage{subcaption}
\PassOptionsToPackage{hyphens}{url}
\RequirePackage{float}
\RequirePackage{amsmath}
\RequirePackage{amsfonts}
\RequirePackage{amssymb}
\RequirePackage{booktabs}
\RequirePackage{tabularx}
\RequirePackage{longtable}
\RequirePackage{enumitem}
\RequirePackage{xspace}
\RequirePackage{listings}
\RequirePackage{algorithm}
\RequirePackage{algpseudocode}
\RequirePackage[toc,acronym]{glossaries}
\RequirePackage{fancyhdr}
\RequirePackage[
  colorlinks=true,
  linkcolor=bgzblau,
  citecolor=bgzblau,
  urlcolor=linkblau,
  bookmarksopen=true,
  bookmarksnumbered=true,
  pdfstartview=FitH,
  hypertexnames=false
]{hyperref}
\RequirePackage[all]{hypcap}

% ============================================================
% JavaScript-Sprache fuer Listings definieren
% ============================================================
\lstdefinelanguage{JavaScript}{
  keywords={break, case, catch, const, continue, debugger, default, delete,
    do, else, export, extends, finally, for, function, if, import, in,
    instanceof, let, new, return, switch, this, throw, try, typeof, var,
    void, while, with, yield, class, async, await, of, from},
  sensitive=true,
  comment=[l]{//},
  morecomment=[s]{/*}{*/},
  morestring=[b]',
  morestring=[b]",
  morestring=[b]`,
}

% ============================================================
% TypeScript-Sprache fuer Listings definieren
% ============================================================
\lstdefinelanguage{TypeScript}{
  keywords={break, case, catch, const, continue, debugger, default, delete,
    do, else, export, extends, finally, for, function, if, import, in,
    instanceof, let, new, return, switch, this, throw, try, typeof, var,
    void, while, with, yield, class, async, await, of, from,
    type, interface, enum, implements, declare, namespace, module, as},
  sensitive=true,
  comment=[l]{//},
  morecomment=[s]{/*}{*/},
  morestring=[b]',
  morestring=[b]",
  morestring=[b]`,
}

% ============================================================
% Listings Konfiguration
% ============================================================
\lstset{
  basicstyle=\ttfamily\small,
  numbers=left,
  numberstyle=\tiny\color{codegray},
  numbersep=8pt,
  frame=single,
  framerule=0.4pt,
  rulecolor=\color{codegray!50},
  breaklines=true,
  breakatwhitespace=true,
  tabsize=2,
  showstringspaces=false,
  captionpos=b,
  columns=flexible,
  keepspaces=true,
  upquote=true,
  aboveskip=1em,
  belowskip=1em,
  xleftmargin=2em,
  framexleftmargin=1.5em,
}

% Farb-Highlighting wenn Option color
\ifthenelse{\equal{\bgz@Colorcode}{color}}{%
  \lstset{
    keywordstyle=\color{blue!80!black}\bfseries,
    commentstyle=\color{codegreen}\itshape,
    stringstyle=\color{red!70!black},
    backgroundcolor=\color{codebg},
  }
}{}

% === Code-Umgebungen ===
\lstnewenvironment{JavaCode}
  {\lstset{language=Java,escapeinside={/+}{+/}}}{}
\lstnewenvironment{CCode}
  {\lstset{language=[ANSI]C,escapeinside={/+}{+/}}}{}
\lstnewenvironment{CppCode}
  {\lstset{language=[ISO]C++,escapeinside={/+}{+/}}}{}
\lstnewenvironment{PythonCode}
  {\lstset{language=Python,escapeinside={/+}{+/}}}{}
\lstnewenvironment{JavaScriptCode}
  {\lstset{language=JavaScript,escapeinside={/+}{+/}}}{}
\lstnewenvironment{TypeScriptCode}
  {\lstset{language=TypeScript,escapeinside={/+}{+/}}}{}
\lstnewenvironment{LaTeXCode}
  {\lstset{language=[LaTeX]TeX,commentstyle={},texcl=false,escapeinside={/+}{+/}}}{}
\lstnewenvironment{GenericCode}
  {\lstset{language={},commentstyle={},texcl=false,escapechar={},escapeinside={}}}{}

% ============================================================
% Kopf- und Fusszeilen
% ============================================================
\pagestyle{fancy}
\fancyhf{}

\addtolength{\headheight}{\baselineskip}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}
\fancyhead[R]{\sffamily\thepage}
\fancyhead[L]{\sffamily\nouppercase{\leftmark}}

\fancypagestyle{plain}{%
  \fancyhf{}
  \fancyfoot[C]{\sffamily\thepage}
  \renewcommand{\headrulewidth}{0pt}
}

% ============================================================
% Abkuerzungsbefehle
% ============================================================
\newcommand{\bzgl}{bzgl.\@\xspace}
\newcommand{\bzw}{bzw.\@\xspace}
\newcommand{\ca}{ca.\@\xspace}
\renewcommand{\dh}{d.\,h.\@\xspace}
\newcommand{\Dah}{D.\,h.\@\xspace}
\newcommand{\ds}{d.\,sind\@\xspace}
\newcommand{\evtl}{evtl.\@\xspace}
\newcommand{\ia}{i.\,Allg.\@\xspace}
\newcommand{\sa}{s.\ auch\@\xspace}
\newcommand{\so}{s.\ oben\xspace}
\newcommand{\su}{s.\ unten\@\xspace}
\newcommand{\ua}{u.\,a.\@\xspace}
\newcommand{\Ua}{U.\,a.\@\xspace}
\newcommand{\uae}{u.\,\"a.\@\xspace}
\newcommand{\usw}{usw.\@\xspace}
\newcommand{\uva}{u.\,v.\,a.\@\xspace}
\newcommand{\uvm}{u.\,v.\,m.\@\xspace}
\newcommand{\va}{vor allem\@\xspace}
\newcommand{\vgl}{vgl.\@\xspace}
\newcommand{\zB}{z.\,B.\@\xspace}
\newcommand{\ZB}{Zum Beispiel\xspace}

% === Mengensymbole ===
\newcommand{\R}{\ensuremath{\mathbb{R}}\xspace}
\newcommand{\Z}{\ensuremath{\mathbb{Z}}\xspace}
\newcommand{\N}{\ensuremath{\mathbb{N}}\xspace}
\newcommand{\Q}{\ensuremath{\mathbb{Q}}\xspace}
\newcommand{\C}{\ensuremath{\mathbb{C}}\xspace}

% === Messbox zur Druckkontrolle ===
\newcommand{\Messbox}[2]{%
  \setlength{\unitlength}{1.0mm}%
  \begin{picture}(#1,#2)%
    \linethickness{0.05mm}%
    \put(0,0){\dashbox{0.2}(#1,#2){%
      \parbox{#1mm}{\centering\footnotesize
        Breite $ = #1 {\rm\ mm}$\\
        H\"ohe $ = #2 {\rm\ mm}$
    }}}%
  \end{picture}%
}

% ============================================================
% Metadaten-Befehle (VWA-spezifisch: Einzelautor)
% ============================================================

% Schulinformationen
\newcommand{\@schule}{BG Zehnergasse}
\newcommand{\schule}[1]{\renewcommand{\@schule}{#1}}

\newcommand{\@schuladresse}{Zehnergasse 15, 2700 Wiener Neustadt}
\newcommand{\schuladresse}[1]{\renewcommand{\@schuladresse}{#1}}

\newcommand{\@schullogo}{bgz-logo.png}
\newcommand{\schullogo}[1]{\renewcommand{\@schullogo}{#1}}

\newcommand{\@abgabejahr}{\@MissingArg{Abgabejahr??}}
\newcommand{\abgabejahr}[1]{\renewcommand{\@abgabejahr}{#1}}

% VerfasserIn (Einzelperson)
\newcommand{\@verfasserIn}{\@MissingArg{VerfasserIn??}}
\newcommand{\verfasserIn}[1]{\renewcommand{\@verfasserIn}{#1}}

% Klasse (z.B. 8A)
\newcommand{\@klasse}{\@MissingArg{Klasse??}}
\newcommand{\klasse}[1]{\renewcommand{\@klasse}{#1}}

% Betreuungsperson
\newcommand{\@betreuungsperson}{\@MissingArg{Betreuungsperson??}}
\newcommand{\betreuungsperson}[1]{\renewcommand{\@betreuungsperson}{#1}}

% Fachbereich (z.B. Geschichte und Politische Bildung)
\newcommand{\@fachbereich}{\@MissingArg{Fachbereich??}}
\newcommand{\fachbereich}[1]{\renewcommand{\@fachbereich}{#1}}

% ============================================================
% Titelseite (VWA-Layout: Einzelautor, AHS-Stil)
% ============================================================
\renewcommand{\maketitle}{%
\begin{titlepage}%
  \begin{center}%
    \vspace*{10mm}%
    %
    % --- Schullogo und Schulname ---
    \ifthenelse{\equal{\@schullogo}{}}{}{%
      \includegraphics[width=35mm]{\@schullogo}%
      \vskip 8mm%
    }%
    {\Large\bfseries\@schule}%
    \vskip 2mm%
    {\normalsize \@schuladresse}%
    \vskip 8mm%
    %
    % --- Trennlinie ---
    \rule{\textwidth}{1pt}%
    \vskip 12mm%
    %
    % --- Dokumenttyp ---
    {\Huge\bfseries V\,O\,R\,W\,I\,S\,S\,E\,N\,S\,C\,H\,A\,F\,T\,L\,I\,C\,H\,E}%
    \vskip 2mm%
    {\Huge\bfseries A\,R\,B\,E\,I\,T}%
    \vskip 14mm%
    %
    % --- Titel ---
    {\huge\bfseries\@title}%
    \vskip 20mm%
    %
    % --- Fachbereich ---
    {\large Fachbereich: \@fachbereich}%
    \vskip 20mm%
    %
    % --- VerfasserIn ---
    {\large\bfseries Verfasst von:}%
    \vskip 3mm%
    {\large \@verfasserIn}%
    \vskip 2mm%
    {\normalsize Klasse \@klasse}%
    \vskip 14mm%
    %
    % --- Betreuungsperson ---
    {\large\bfseries Betreuungsperson:}%
    \vskip 3mm%
    {\large \@betreuungsperson}%
    \vskip 14mm%
    %
    % --- Ort und Jahr ---
    {\large Wiener Neustadt, \@abgabejahr}%
    \vskip 8mm%
    %
    % --- Trennlinie ---
    \rule{\textwidth}{1pt}%
  \end{center}%
  \par\vfil\null
\end{titlepage}%
%
\hypersetup{
  pdftitle={\@title},
  pdfauthor={\@verfasserIn},
  pdfsubject={Vorwissenschaftliche Arbeit, \@fachbereich},
  pdfcreator={LaTeX using class bgzvwa (APA6 Edition)},
}%
}

% ============================================================
% Selbststaendigkeitserklaerung (VWA-konform)
% ============================================================
\newcommand{\selbststaendigkeitserklaerung}{%
  \chapter*{Selbstst\"andigkeitserkl\"arung}
  \addcontentsline{toc}{chapter}{Selbstst\"andigkeitserkl\"arung}

  \noindent
  Ich erkl\"are, dass ich die vorliegende Vorwissenschaftliche Arbeit
  selbstst\"andig und ohne fremde Hilfe verfasst, andere als die
  angegebenen Quellen und Hilfsmittel nicht benutzt und die den
  benutzten Quellen w\"ortlich oder inhaltlich entnommenen Stellen als
  solche kenntlich gemacht habe.

  \vskip 5mm
  \noindent
  Die Arbeit wurde bisher in gleicher oder \"ahnlicher Form keiner
  anderen Pr\"ufungsbeh\"orde vorgelegt und auch nicht ver\"offentlicht.

  \vskip 5mm
  \noindent
  Die vorliegende Fassung entspricht der eingereichten elektronischen
  Version.

  \vspace{15mm}
  \noindent
  Wiener Neustadt, am \today

  \vspace{20mm}
  \noindent
  \rule{7cm}{0.4pt}\\
  \@verfasserIn
}

% ============================================================
% Float placement
% ============================================================
\renewcommand{\floatpagefraction}{.9}
\renewcommand{\textfraction}{.01}
\renewcommand{\topfraction}{.9}
\renewcommand{\bottomfraction}{.7}
\setcounter{topnumber}{3}
\setcounter{bottomnumber}{2}
\setcounter{totalnumber}{5}

\frenchspacing

\endinput
