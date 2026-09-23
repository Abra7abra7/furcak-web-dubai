# FURCAK Corporate Website - Production & Deployment Notes

Tento dokument slúži ako prehľadný zoznam krokov pre spustenie do živej prevádzky a budúce vylepšenia.

---

## 1. Aktivácia Kontaktného Formulára (Email)
Web má pripravenú integráciu na bezplatnú službu **Web3Forms**:
1. Otvorte [https://web3forms.com](https://web3forms.com).
2. Zadajte email klienta (`jan.furcak@gmail.com` alebo `jan@fmm-fzco.com`).
3. Do emailu príde **Access Key**.
4. V Cloudflare Pages (alebo v lokálnom súbore `.env.local`) pridajte:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=vas_vygenerovany_kluc
   ```
5. Každý odoslaný formulár z webu bude okamžite preposlaný na zadaný email s údajmi o klientovi a možnosťou priamej odpovede.

---

## 2. Nastavenie Cloudflare Email Routing (pre doménu fmm-fzco.com)
Keďže klient zakúpil doménu **`fmm-fzco.com`** priamo na Cloudflare:
1. V Cloudflare Dashboarde prejdite na doménu **`fmm-fzco.com`**.
2. V ľavom menu otvorte **Email** -> **Email Routing**.
3. Kliknite na **Get Started** a potvrďte pridanie DNS záznamov (**Add records automatically**).
4. V záložke **Destination addresses**:
   - Pridajte cieľovú adresu: `jan.furcak@gmail.com`.
   - Na tento Gmail príde verifikačný e-mail od Cloudflare — klient ho potvrdí kliknutím na odkaz.
5. V záložke **Routing rules**:
   - Vytvorte pravidlo pre **`info@fmm-fzco.com`** -> Send to: `jan.furcak@gmail.com`.
   - V sekcii **Catch-all rule** kliknite na **Edit** -> Action: **Send to an email** -> `jan.furcak@gmail.com`. (Vďaka tomu čokoľvek zaslané na doménu `@fmm-fzco.com` príde klientovi do Gmailu).
6. Výsledok: Na webe je jednotný oficiálny e-mail `info@fmm-fzco.com` a všetky správy bezplatne pristanú v Gmaile klienta!

---

## 3. WhatsApp Integrácia
- Odkazy na webe smerujú priamo na:
  `https://wa.me/971505395412?text=...`
- Na čísle **+971 50 539 5412** stačí mať aktívnu aplikáciu WhatsApp / WhatsApp Business.
- Po kliknutí na widget alebo tlačidlá sa klientovi automaticky otvorí priamy chat s predvyplnenou správou.

---

## 4. Nasadenie na Cloudflare Pages (Hosting) pre fmm-fzco.com
1. V Cloudflare Dashboarde prejdite do sekcie **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
2. Vyberte repozitár `furcak-web-dubai`.
3. Nastavenia buildu:
   - **Framework preset:** `Next.js`
   - **Build command:** `npx @cloudflare/next-on-pages` (alebo `npm run build`)
   - **Build output directory:** `.vercel/output/static` (alebo `out`)
4. V sekcii **Environment Variables** pridajte:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = váš kľúč z web3forms.com
   - `NODE_VERSION` = `20`
5. Kliknite na **Save and Deploy**.
6. V záložke **Custom domains** pridajte doménu **`fmm-fzco.com`** a **`www.fmm-fzco.com`**. Cloudflare automaticky vygeneruje SSL certifikát a prepojí DNS.

---

## 4. Budúce Odporúčané Vylepšenia
1. **Reálna fotografia Jana Furčáka:** Nahradiť grafický monogram `JF` profesionálnou fotografiou.
2. **Katalóg / Prezentácia firmy (PDF Deck):** Tlačidlo na stiahnutie profilu firmy pre B2B tenderové konzorciá.
3. **Interaktívna mapa:** Tmavá Google mapa sídla v Dubai Silicon Oasis (IFZA).
4. **Viacjazyčnosť:** Prepínač jazykov (EN / SK / DE / AR) podľa cieľových trhov.
5. **Cookie Banner:** Decentná lišta pre formálny súlad s predpismi DIEZA a európskym GDPR.
