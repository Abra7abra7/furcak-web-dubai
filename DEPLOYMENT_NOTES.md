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

## 3. Nasadenie na Cloudflare Pages (Hosting) & Vlastná Doména
1. Prihláste sa do [Cloudflare Dashboard](https://dash.cloudflare.com) a prejdite do sekcie **Compute (Workers & Pages)** -> **Create application** -> **Pages** -> **Connect to Git**.
2. Vyberte repozitár `furcak-web-dubai`.
3. Nastavenia buildu:
   - **Framework preset:** `Next.js` (alebo `None`)
   - **Build command:** `npx @cloudflare/next-on-pages` alebo `npm run build`
   - **Build output directory:** `.vercel/output/static` (pri next-on-pages) alebo `out` (pri statickom exporte)
4. V sekcii **Environment Variables** pridajte:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = váš kľúč z web3forms.com
   - `NODE_VERSION` = `20` alebo `22`
5. Kliknite na **Save and Deploy**.
6. V záložke **Custom domains** priraďte vlastnú doménu (napr. `furcak.com` alebo `furcak.ae`) s automatickým bezplatným SSL certifikátom a ochranou Cloudflare.

---

## 4. Budúce Odporúčané Vylepšenia
1. **Reálna fotografia Jana Furčáka:** Nahradiť grafický monogram `JF` profesionálnou fotografiou.
2. **Katalóg / Prezentácia firmy (PDF Deck):** Tlačidlo na stiahnutie profilu firmy pre B2B tenderové konzorciá.
3. **Interaktívna mapa:** Tmavá Google mapa sídla v Dubai Silicon Oasis (IFZA).
4. **Viacjazyčnosť:** Prepínač jazykov (EN / SK / DE / AR) podľa cieľových trhov.
5. **Cookie Banner:** Decentná lišta pre formálny súlad s predpismi DIEZA a európskym GDPR.
