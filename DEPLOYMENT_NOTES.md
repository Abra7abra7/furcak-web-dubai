# FURCAK Corporate Website - Production & Deployment Notes

Tento dokument slúži ako prehľadný zoznam krokov pre spustenie do živej prevádzky a budúce vylepšenia.

---

## 1. Aktivácia Kontaktného Formulára (Email)
Web má pripravenú integráciu na bezplatnú službu **Web3Forms**:
1. Otvorte [https://web3forms.com](https://web3forms.com).
2. Zadajte email, na ktorý majú dopyty prichádzať (napr. `info@furcak.com` alebo Janov email).
3. Do emailu príde **Access Key**.
4. Vo Verceli (alebo v lokálnom súbore `.env.local`) pridajte:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=vas_vygenerovany_kluc
   ```
5. Každý odoslaný formulár z webu bude okamžite preposlaný na zadaný email s údajmi o klientovi a možnosti priamej odpovede.

---

## 2. WhatsApp Integrácia
- Odkazy na webe smerujú priamo na:
  `https://wa.me/971505395412?text=...`
- Na čísle **+971 50 539 5412** stačí mať aktívnu aplikáciu WhatsApp / WhatsApp Business.
- Po kliknutí na widget alebo tlačidlá sa klientovi automaticky otvorí priamy chat s predvyplnenou správou.

---

## 3. Nasadenie na Vercel (Hosting) & Vlastná Doména
1. Prihláste sa na [Vercel.com](https://vercel.com) cez váš GitHub účet.
2. Vyberte repozitár `furcak-web-dubai`.
3. Pridajte premennú `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. Kliknite na **Deploy**.
5. V sekcii *Settings -> Domains* priraďte vlastnú doménu (napr. `furcak.com` alebo `furcak.ae`).

---

## 4. Budúce Odporúčané Vylepšenia
1. **Reálna fotografia Jana Furčáka:** Nahradiť grafický monogram `JF` profesionálnou fotografiou.
2. **Katalóg / Prezentácia firmy (PDF Deck):** Tlačidlo na stiahnutie profilu firmy pre B2B tenderové konzorciá.
3. **Interaktívna mapa:** Tmavá Google mapa sídla v Dubai Silicon Oasis (IFZA).
4. **Viacjazyčnosť:** Prepínač jazykov (EN / SK / DE / AR) podľa cieľových trhov.
5. **Cookie Banner:** Decentná lišta pre formálny súlad s predpismi DIEZA a európskym GDPR.
