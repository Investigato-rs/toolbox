---
title: Google dorking
description: Kako da nateraš Google da prizna šta sve zna
---

Svi znamo onaj osećaj: ukucaš nešto u Google, dobiješ milion rezultata, a ono što ti stvarno treba – ne postoji.

Ili još gore: znaš da informacija postoji, ali se krije kao ratni zločin u arhivi lokalne samouprave.

Tu na scenu stupa **Google dorking** – veština postavljanja pametnih, preciznih i pomalo bezobraznih upita Google-u, da ti vrati tačno ono što ne bi trebalo da bude lako dostupno.

:::note
Ne, ovo nije hakovanje.  
Da, često deluje kao da jeste.
:::

---

## Osnovni operatori

### 1. `site:`
**Filtrira rezultate na jedan domen**

Ako znaš gde bi informacija trebalo da bude, ali ne znaš gde tačno.

**Primer:**
```
site:gov.rs konkurs mediji
```
➡ Pretražuje samo sajtove državnih institucija u Srbiji.

---

### 2. `filetype:`
**Traži tačno određeni tip fajla**

Izuzetno korisno za dokumente koji nisu lako pretraživi ili za koje nije ni planirano da budu vidljivi.

**Primer:**
```
filetype:pdf strategija komunikacije
```
➡ Vraća samo PDF dokumente.

---

### 3. `"tačna fraza"` (pod navodnicima)
**Traži doslovno navedeni tekst**

Google inače „pomaže", ali ovde mu kažeš: ne filozofiraj.

**Primer:**
```
"interni pravilnik o radu"
```
➡ Pronalazi samo stranice sa tom tačnom formulacijom.

---

### 4. `-` (minus)
**Isključuje neželjene rezultate**

Kada te jedna reč guši u rezultatima.

**Primer:**
```
investigative journalism -course -training
```
➡ Traži tekstove, a ne kurseve i obuke.

---

### 5. `OR`
**Alternativni pojmovi u jednoj pretrazi**

:::caution[Važno]
`OR` mora biti velikim slovima.
:::

**Primer:**
```
mediji OR medijski OR medije
```
➡ Kombinuje više termina u jednom upitu.

---

### 6. `intitle:`
**Traži po naslovu stranice**

Idealno za dokumente, izveštaje i prezentacije.

**Primer:**
```
intitle:izveštaj transparentnost
```
➡ Stranice koje u naslovu imaju reč „izveštaj".

---

### 7. `inurl:`
**Traži reč u URL-u**

Često otkriva admin panele, foldere i arhive.

**Primer:**
```
inurl:uploads filetype:pdf
```
➡ PDF fajlovi iz upload foldera.

---

### 8. `intext:`
**Traži reč u samom tekstu stranice**

Korisno kad naslov laže, a sadržaj ne.

**Primer:**
```
intext:"poverljivo"
```
➡ Stranice koje sadrže tu reč u tekstu.

---

### 9. `cache:`
**Gleda keširanu verziju stranice**

Kada je sadržaj obrisan, ali Google pamti.

:::tip[Napomena]
Google polako povlači ovu opciju iz upotrebe.
:::

**Primer:**
```
cache:example.com
```
➡ Stara verzija sajta.

---

### 10. `related:`
**Pronalazi slične sajtove**

Koristan za mapiranje ekosistema.

**Primer:**
```
related:bellingcat.com
```
➡ Sajtovi slični Bellingcatu.

---

## Dodatni operatori

| Operator | Opis |
|----------|------|
| `allintitle:` | Sve reči moraju biti u naslovu |
| `allinurl:` | Sve reči moraju biti u URL-u |
| `allintext:` | Sve reči moraju biti u tekstu |
| `before:2022` | Rezultati pre određene godine |
| `after:2019` | Rezultati posle određene godine |
| `AROUND(3)` | Reči blizu jedne druge |
| `define:` | Definicija pojma |
| `link:` | Stranice koje linkuju ka sajtu |
| `source:` | Specifičan izvor (npr. vesti) |
| `ext:` | Alternativno za `filetype:` |
| `*` | Wildcard (zamenjuje reči) |
| `()` | Grupisanje pojmova |

---

## Napredni primeri

### Pretraga po domenu
```
site:.edu investigative journalism
```
➡ Obrazovne institucije

```
site:.org transparency report
```
➡ Organizacije

```
site:.rs javne nabavke
```
➡ Nacionalni domen

---

### Otkrivanje direktorijuma
```
intitle:index of
```
➡ Otvoreni direktorijumi

```
inurl:admin
```
➡ Admin stranice

```
inurl:login
```
➡ Login forme

---

## Za kraj

Google dorking je kao dobro postavljeno pitanje na ispitivanju svedoka:  
**nije stvar u sili, nego u preciznosti.**

---

## Kombinuj sa

- **[Wayback Machine](/alati/arhive/wayback-machine/)** — za arhivirane verzije
- **DuckDuckGo** — alternativni pretraživač sa sličnim operatorima
- **Bing** — podržava neke operatore
