# Quick Start Guide

## What you have

✅ **Landing page** (`landing/`) - Simple, clean entry point  
✅ **Toolbox** (`toolbox/`) - Full Starlight documentation site  
✅ **Serbian language** configured throughout  
✅ **Structured content** with TypeScript schemas  
✅ **Example content** to demonstrate patterns  

## Project structure

```
investigato.rs/
├── landing/           → investigato.rs (main landing)
└── toolbox/           → toolbox.investigato.rs (knowledge base)
```

## Running locally

### Toolbox (main site)

```bash
cd toolbox
npm run dev
```

Visit: http://localhost:4321

### Landing page

```bash
cd landing
npm run dev
```

Visit: http://localhost:4321

## Content organization

### 1. Getting started (`pocni-ovde/`)
- Introduction to OSINT in Serbia
- Key identifiers (PIB, matični broj, JMBG)
- Cyrillic vs Latin alphabet challenges
- Legal and ethical framework

### 2. Investigations (`istrazivanja/`)
Task-based guides with standard template:
- ✅ Kako pronaći firmu (complete example)
- 🚧 Ko je vlasnik firme (placeholder)
- 🚧 Povezane firme i lica (placeholder)

**Template structure:**
- Šta možeš da saznaš
- Šta ti je potrebno
- Korak-po-korak postupak
- Korišćene baze podataka
- Česte greške i zamke
- Pravni i etički okvir

### 3. Databases (`baze-podataka/`)
Catalog of public registries organized by:
- Geography: `srbija/`, `region/`, `globalno/`
- Function: `privreda-i-vlasnistvo/`, `finansije-i-naplata/`, etc.

**Examples created:**
- ✅ APR (business registry) - full entry
- ✅ NBS blokade (blocked accounts) - full entry
- ✅ Registar medija (media registry) - full entry

**Frontmatter schema:**
```yaml
title: Database name
url: https://...
tip: zvanicni-registar | javni-portal | privatna-baza
pruzalac: Who maintains it
pristup: besplatan | registracija | placen
potrebna_prijava: true/false
jezici: [sr, en]
pretraga_po: [pib, naziv, ...]
izlaz: [HTML, PDF]
poslednja_provera: "2025-02"
geografija: srbija | region | globalno
funkcija: category
```

### 4. Tools (`alati/`)
General OSINT tools (not Serbia-specific):
- `pretraga/` - Search operators
- `arhive/` - Wayback Machine, etc.
- `slike-i-video/` - Image/video verification
- `mape-i-geolokacija/` - Geolocation
- `dokumenta-i-metapodaci/` - Document analysis
- `drustvene-mreze/` - Social media

**Example created:**
- ✅ Wayback Machine

### 5. Tutorials (`uputstva/`)
Educational content explaining concepts:
- 🚧 Kako koristiti APR
- 🚧 Latinica vs ćirilica

### 6. About (`o-projektu/`)
- ✅ Why this project exists
- ✅ Principles (open, transparent, ethical)
- ✅ Legal framework
- ✅ How to contribute
- ✅ Licensing (TBD)

## Next steps

### 1. Add more database entries
Priority databases to add:
- Registar nepokretnosti (Real estate registry)
- Portal javnih nabavki (Public procurement)
- Sudski registar (Court registry)
- Registar finansijskih izveštaja (Financial reports)
- Agencija za energetiku (Energy agency)
- Agencija za zaštitu životne sredine (Environmental agency)

### 2. Complete investigation guides
Finish placeholder investigations:
- Ko je vlasnik firme?
- Povezane firme i lica?
- Add more: nekretnine, javne nabavke, mediji

### 3. Add screenshots
Add visual guides to:
- APR entry
- Investigation step-by-step guides
- Tool usage examples

### 4. Configure deployment
Choose hosting:
- **Netlify** - Easy, free tier
- **Vercel** - Also easy, free tier
- **GitHub Pages** - Free, requires more setup

Update `astro.config.mjs` with your domain:
```js
export default defineConfig({
  site: 'https://toolbox.investigato.rs',
  // ...
});
```

### 5. Set up Git repository
```bash
cd /Users/lazar/investigato.rs
git init
git add .
git commit -m "Initial commit: Investigato.rs OSINT toolbox"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 6. Custom branding
- Replace `houston.webp` hero image
- Add logo/favicon
- Customize colors in Starlight config

## Key files to know

- `toolbox/astro.config.mjs` - Starlight configuration
- `toolbox/src/content/config.ts` - Content collection schemas
- `toolbox/src/content/docs/` - All content
- `landing/src/pages/index.astro` - Landing page

## Adding new content

### New investigation guide
```bash
cd toolbox/src/content/docs/istrazivanja
cp kako-pronaci-firmu.md novi-vodic.md
# Edit and customize
```

### New database entry
```bash
cd toolbox/src/content/docs/baze-podataka/srbija/<category>
# Create new .md file with proper frontmatter
```

### New tool
```bash
cd toolbox/src/content/docs/alati/<category>
# Create new .md file
```

## Testing

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Build fails
- Check content collection schemas match your frontmatter
- Ensure all links use valid paths
- Verify Serbian characters are properly encoded

### Navigation not showing
- Check `autogenerate` directories exist
- Verify frontmatter includes `title` field

### Search not working
- Pagefind automatically indexes on build
- Make sure content has searchable text

## Need help?

- [Astro docs](https://docs.astro.build)
- [Starlight docs](https://starlight.astro.build)

---

**Sve je spremno! Počni sa pisanjem sadržaja. 🚀**
