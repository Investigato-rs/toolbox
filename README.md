# Investigato.rs

**OSINT priručnik za Srbiju i region**

Besplatan, otvoreni priručnik za istraživačko novinarstvo. Pronađi baze podataka, nauči kako istraživati firme, vlasnike, nekretnine i javni novac.

## Struktura projekta

```
investigato.rs/
├── landing/          # Glavna landing stranica (investigato.rs)
│   └── src/
│       └── pages/
│           └── index.astro
│
└── toolbox/          # Glavni sadržaj (toolbox.investigato.rs)
    ├── astro.config.mjs
    └── src/
        └── content/
            ├── config.ts        # Content collections schema
            └── docs/
                ├── index.mdx    # Homepage
                ├── pocni-ovde/  # Getting started
                ├── istrazivanja/  # Investigation guides
                ├── baze-podataka/  # Database catalog
                │   ├── srbija/
                │   │   ├── privreda-i-vlasnistvo/
                │   │   ├── nekretnine-i-katastar/
                │   │   ├── finansije-i-naplata/
                │   │   ├── mediji-i-telekomunikacije/
                │   │   ├── sudovi-i-propisi/
                │   │   ├── izbori-i-politika/
                │   │   ├── zivotna-sredina-i-energetika/
                │   │   ├── statistika-i-otvoreni-podaci/
                │   │   └── intelektualna-svojina/
                │   ├── region/
                │   └── globalno/
                ├── alati/         # General OSINT tools
                ├── uputstva/      # Tutorials
                └── o-projektu/    # About
```

## Tehnologije

- **Landing stranica:** Astro (minimal)
- **Toolbox:** Astro + Starlight
- **Jezik:** Srpski (latinica)
- **Hosting:** (TBD - Netlify, Vercel, ili GitHub Pages)

## Razvoj lokalno

### Landing stranica

```bash
cd landing
npm install
npm run dev
```

Otvori http://localhost:4321

### Toolbox

```bash
cd toolbox
npm install
npm run dev
```

Otvori http://localhost:4321

## Build za produkciju

### Landing

```bash
cd landing
npm run build
npm run preview  # Preview production build
```

### Toolbox

```bash
cd toolbox
npm run build
npm run preview
```

## Sadržaj

### Istraživanja
Korak-po-korak vodiči za konkretne scenarije:
- Kako pronaći firmu?
- Ko je stvarni vlasnik?
- Povezane firme i lica

### Baze podataka
Katalog javnih registara organizovan po:
- **Geografiji:** Srbija / Region / Globalno
- **Funkciji:** Privreda, Nekretnine, Finansije, Mediji, Sudovi, itd.

Svaka baza ima strukturirane metapodatke (frontmatter):
- URL, tip, pružalac
- Pristup (besplatan/plaćen)
- Šta pretraživati
- Kada koristiti

### Alati
Opšti OSINT alati (ne-specifični za Srbiju):
- Pretraga
- Arhive
- Slike i video
- Mape i geolokacija
- Dokumenta i metapodaci
- Društvene mreže

### Uputstva
Edukativni sadržaji koji objašnjavaju kontekst:
- Kako koristiti APR
- Latinica vs ćirilica u pretrazi
- Čitanje finansijskih izveštaja
- Osnove katastra

## Doprinosi

Investigato.rs je community-driven projekat. Doprinosi su dobrodošli!

### Kako doprineti?

1. **Prijavi grešku** - Otvori GitHub issue
2. **Dodaj novu bazu ili vodič** - Napravi pull request
3. **Poboljšaj postojeći sadržaj** - Edit i PR
4. **Podeli projekat** - Pomozi da više ljudi sazna

### Struktura sadržaja

#### Istraživanja (`istrazivanja/`)

```markdown
---
title: Naslov istraživanja
description: Kratak opis
tezina: pocetno | srednje | napredno
jurisdikcija: Srbija
poslednja_provera: "2025-02"
povezane_baze: [APR, NBS]
---

## Šta možeš da saznaš
## Šta ti je potrebno
## Korak-po-korak postupak
## Korišćene baze podataka
## Česte greške i zamke
## Pravni i etički okvir
```

#### Baze podataka (`baze-podataka/`)

```markdown
---
title: Naziv baze
description: Kratak opis
url: https://...
tip: zvanicni-registar | javni-portal | privatna-baza | agregator | alat
pruzalac: Ko održava
pristup: besplatan | registracija | placen | delomicno-besplatan
potrebna_prijava: true | false
jezici: [sr, en]
pretraga_po: [naziv, PIB, matični broj]
izlaz: [HTML, PDF, CSV]
poslednja_provera: "2025-02"
geografija: srbija | region | globalno
funkcija: privreda-i-vlasnistvo | nekretnine-i-katastar | ...
---

## Šta sadrži
## Šta ne sadrži
## Kako koristiti
## Kada koristiti u istraživanjima
## Ograničenja
## Pravni okvir
```

## Licenca

(TBD - predlog: Creative Commons CC BY-SA 4.0 za sadržaj, MIT za kod)

## Kontakt

- GitHub: (dodaj link)
- Email: (dodaj ako želiš)

---

**Investigato.rs** je nezavisni projekat za sve koji imaju pravo da znaju.
