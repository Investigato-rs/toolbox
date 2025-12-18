---
title: WhoIs pretraga
description: Telefonski imenik interneta
---

Zamisli internet kao ogroman grad.

Sajtovi su zgrade. Domeni su adrese.

A **WhoIs** je onaj prašnjavi registrator u opštini koji zna ko je vlasnik čega, kada je prijavljeno, ko plaća račun i kada ističe dozvola za gradnju.

Ne zvuči glamurozno – ali često je **presudno**.

---

## Kada ti treba WhoIs?

Ako si ikada:

- ✅ Video sumnjiv sajt i zapitao se „ko stoji iza ovoga?"
- ✅ Istraživao mrežu portala koji niču preko noći
- ✅ Pokušavao da povežeš organizaciju, firmu i domen
- ✅ Ili jednostavno želeo da znaš da li je domen slobodan

… **WhoIs pretraga je tvoj prvi korak.**

---

## Šta je WhoIs?

WhoIs je javni protokol i baza podataka koja čuva informacije o:

- **Registraciji domena**
- **Vlasniku domena** (ili bar onome ko ga je registrovao)
- **Registraru** (firmi preko koje je domen kupljen)
- **Datumima** registracije, isteka i izmene
- **Name serverima** (gde je domen tehnički „okačen")

:::tip[Jednostavno rečeno]
WhoIs ti govori **ko** je prijavio domen, **kada** i **preko koga**.
:::

---

## Kako izgleda WhoIs zapis?

Tipičan WhoIs rezultat može da sadrži:

| Polje | Opis |
|-------|------|
| **Domain Name** | Naziv domena |
| **Registrar** | Firma kod koje je registrovan |
| **Creation Date** | Datum kreiranja |
| **Updated Date** | Datum poslednje izmene |
| **Expiry Date** | Datum isteka |
| **Registrant Name / Organization** | Ime vlasnika/organizacije |
| **Registrant Email** | Email vlasnika |
| **Registrant Country** | Država |
| **Name Servers** | Tehnička infrastruktura |

:::caution[Važna napomena]
Iz različitih razloga, lični podaci su često sakriveni, ali to **ne znači da je WhoIs beskoristan**. Naprotiv.
:::

---

## Šta možeš da saznaš?

### 1️⃣ Starost domena

Ako je domen registrovan pre 10 dana, a ponaša se kao „veliki medij" – 🚩

**Primer:**
```
Creation Date: 2024-11-03
```

---

### 2️⃣ Da li je domen često menjao vlasnika

Česte promene = moguće manipulacije, prodaje ili preusmeravanja.

---

### 3️⃣ Koji registrar se koristi

Neki registrari su češći kod:

- Masovnih kampanja
- Spam mreža
- Lažnih portala

---

### 4️⃣ Da li je domen produžavan godinama

Dugoročno produžen domen obično znači:

- Stabilan projekat
- Ozbiljan vlasnik

---

### 5️⃣ Tehnička infrastruktura (name serveri)

Ako više sumnjivih sajtova koristi iste name servere – **dobijaš mrežu**.

---

## WhoIs i GDPR: zašto često vidiš „REDACTED"

**Nekada** si u WhoIs-u mogao da vidiš:

- ❌ Ime i prezime
- ❌ Adresu
- ❌ Telefon
- ❌ Email

**Danas** često vidiš:
```
REDACTED FOR PRIVACY
```

**Ali:**

- ✅ Datumi ostaju
- ✅ Registrar ostaje
- ✅ Tehnička struktura ostaje
- ✅ Istorija domena ostaje

:::note[Za OSINT]
To je i dalje zlato.
:::

---

## Kada je WhoIs posebno koristan?

- 🔍 **Istraživanje sumnjivih portala**
- 🗳️ **Praćenje političkih kampanja i „spontanih" sajtova**
- 🎣 **Analiza scam i phishing stranica**
- 🕸️ **Povezivanje mreža domena**
- 📰 **Provera kredibiliteta novog medija**

:::tip[Zapamti]
WhoIs često ne daje konačan odgovor, ali **skoro uvek daje prvi trag**.
:::

---

## Gde raditi WhoIs pretragu?

### Popularni alati

- **[who.is](https://who.is)** — jednostavan i brz
- **[whois.domaintools.com](https://whois.domaintools.com)** — napredniji alat
- **[ICANN Lookup](https://lookup.icann.org)** — zvanični registar
- **[whois.com](https://whois.com)** — dodatne opcije
- **[RIPE WHOIS](https://apps.db.ripe.net/db-web-ui/query)** — za IP adrese
- **[RNIDS](https://www.rnids.rs/whois-pretraga)** — za `.rs` domene

### Saveti

- ✅ Proveri više izvora
- ✅ Uporedi rezultate
- ✅ Gledaj datume i obrasce, ne samo imena

---

## Najčešće greške u tumačenju

| ❌ Pogrešno | ✅ Tačno |
|------------|---------|
| „Ne vidim ime, znači anonimno je" | Znači da je zaštićeno privatnošću |
| „Registar je iz SAD, znači vlasnik je iz SAD" | Ne nužno |
| „WhoIs je prazan" | Nije – samo ne znaš šta gledaš |

---

## Za kraj

WhoIs nije magija.  
Nije ni hakovanje.  
To je **administrativna realnost interneta**.

Ali u rukama novinara, istraživača i radoznalih ljudi –  
**WhoIs je često prva pukotina u fasadi ispod koje želimo da pogledamo.**

---

## Kombinuj sa

- **[Google dorking](/alati/pretraga/google-dorking/)** — za napredne pretrage
- **[Wayback Machine](/alati/arhive/wayback-machine/)** — za arhivirane verzije
- **Reverse IP lookup** — ko još koristi isti server
