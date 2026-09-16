# NovaTech Electronics — Online Electronics Store

Premium, responsive business website for the fictional company **NovaTech Electronics**
(Chennai, Tamil Nadu, India), built for the DataTeach.ai assignment
**“AI Business Support Assistant”**.

Stack: **React + Vite + TypeScript + Tailwind CSS + Lucide React**. No backend, no database,
no auth, no external API calls.

## Features

- Sticky navbar with scroll-spy active state + mobile hamburger menu
- Hero: “Smart Technology. Better Living.” with Explore Products / AI Support CTAs
- About: concise Chennai-based store overview
- Products: 6 real products with working category filters (All / Laptop / Smartphone / Smartwatch / Audio / Accessories) + detail modal
- Delivery & Returns: delivery times, charges, returns, cancellation, refunds, payments
- AI Customer Support: prominent `Need Help? Ask NovaTech AI` section with n8n placeholder
- Contact: business details + frontend-only form with success message
- Footer: quick links, products, contact, hours, copyright
- SEO meta, semantic HTML, keyboard accessible, smooth scrolling

## Project structure

```text
NovaTech-Website/
  index.html
  package.json
  vite.config.ts
  tailwind.config.js
  postcss.config.js
  netlify.toml
  public/_redirects
  src/
    main.tsx
    App.tsx
    index.css
    vite-env.d.ts
    data/products.ts
    components/
      Navbar.tsx
      Hero.tsx
      About.tsx
      Products.tsx
      ProductModal.tsx
      DeliveryReturns.tsx
      AISupport.tsx
      Contact.tsx
      Footer.tsx
      SectionHeading.tsx
```

## Install

Requires Node.js 18+ (tested on Node 24).

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open the printed local URL (default http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

Type-check only:

```bash
npm run lint
```

## Deploy to Netlify

This repo is Netlify-ready:

- `netlify.toml` sets build command `npm run build` and publish directory `dist`.
- `public/_redirects` contains `/* /index.html 200` for SPA fallback.
- No environment variables required.

Steps:

1. Push this folder to a Git provider (GitHub/GitLab/Bitbucket).
2. In Netlify: **Add new site → Import an existing project** → connect the repo.
3. Build settings are auto-detected from `netlify.toml`. Deploy.
4. Or via CLI: `npm run build` then `npx netlify deploy --dir=dist --prod`.

## Replacing the n8n chatbot placeholder

The AI chat area lives in `src/components/AISupport.tsx`.

Inside it you will find:

```html
<!-- N8N_CHAT_EMBED_HERE -->
<div id="n8n-chat-container" ...>
  ...temporary “NovaTech AI Support / Chatbot will appear here” placeholder...
</div>
```

To embed the real n8n chat later (typically `@n8n/chat`):

1. Install the widget, e.g. `npm install @n8n/chat`.
2. Import its CSS + `createChat` in `AISupport.tsx` (or a new `ChatWidget.tsx`).
3. Mount it into `#n8n-chat-container` with your n8n webhook URL, e.g.:

```ts
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';

useEffect(() => {
  createChat({
    webhookUrl: 'https://YOUR-N8N-HOST/webhook/XXXX/chat',
    target: '#n8n-chat-container',
    mode: 'window', // or 'fullscreen'
    // ...any other n8n chat options, DO NOT change the existing n8n workflow
  });
}, []);
```

4. Remove the temporary placeholder content inside `#n8n-chat-container` once the widget renders.
5. Keep the surrounding heading/text (“Need Help? Ask NovaTech AI”) so the assignment copy stays intact.

> Do not create or modify any n8n workflow in this repo — only replace the frontend placeholder.

## Business info (source of truth)

- Email: support@novatech-electronics.com · Phone: +91 98765 43210
- Location: Chennai, Tamil Nadu, India · Hours: Monday–Saturday, 9 AM–6 PM
- Delivery: Chennai 1–2 days, major cities 2–4 days, other locations 4–7 days; free above ₹2,000, else ₹99
- Returns within 7 days (unused, undamaged, original packaging, order details required)
- Cancel before shipment only · Refunds to original method after inspection
- Payments: UPI, credit/debit cards, net banking, COD (eligible locations)
"# AIBusinessSystem" 
