---
title: Latinica vs Ćirilica u pretrazi
description: Kako rešiti problem sa različitim pismima i dijakriticima
---

## Problem

Srpski jezik koristi dva pisma — latinicu i ćirilicu. Ovo stvara probleme u pretrazi baza podataka.

### Primeri

Različite firme mogu zbog ovoga delovati kao da imaju isto ime:
- "Društvo" (latinica)
- "Друштво" (ćirilica)

Isto ime može imati varijacije:
- "Đorđe" (latinica sa đ)
- "Djordje" (latinica bez đ)
- "Ђорђе" (ćirilica)

Iz nekog razloga ljudi u Srbiji ne vole da koriste dijakritike kako treba
- "Salon za sisanje i satiranje" nije isto što i
- "Salon za šišanje i šatiranje"

## Strategije pretrage

### 1. Pretraži oba pisma
Uvek probaj i latinicu i ćirilicu.

### 2. Probaj varijacije dijakritika
- č/c, ć/c, š/s, ž/z, đ/dj

### 3. Koristi delimičnu pretragu
Umesto "Društvo", pretraži samo "Drustvo" ili "rustvo"
Jednom mi je pretraga za "*ugosl*" dala mnogo bolje rezultate nego "Jugoslavija"

### 4. Koristi identifikatore
Kad god je moguće, koristi PIB ili MB (matični broj) umesto imena.
MB je jedan, imena su slična

## Primena u bazama

(Detalji u pripremi...)

---

⚠️ **Ovaj sadržaj je u pripremi.**
