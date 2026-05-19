# Derry Hypnosis

Website for **Tracey McGill**, clinical hypnotherapist at the Centre of Wellbeing, Derry/Londonderry.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 3 + HeroUI
- Framer Motion
- React Router v6
- Formspree (contact form → hello@derryhypnosis.co.uk)
- Deployed via Cloudflare

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production bundle → dist/
npm run preview   # preview production build locally
```

## Key Config

| What | Where |
|---|---|
| Site name, email, address, owner | `constants.ts` → `SITE_INFO` |
| Contact form endpoint | `constants.ts` → `FORM_ENDPOINT` |
| Services list | `constants.ts` → `SERVICES` |
| Testimonials | `constants.ts` → `TESTIMONIALS` |
| FAQs | `constants.ts` → `FAQS` |
| Security headers | `public/_headers` |

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/services/:slug` | Service detail |
| `/about` | About Tracey |
| `/testimonials` | Success stories |
| `/contact` | Contact & booking |
| `/useful-numbers` | Support numbers |
| `/stop-smoking` | Stop smoking landing |
| `/privacy` | Privacy policy |
| `/terms` | Terms & conditions |
