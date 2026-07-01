# AuraAI — Product website

The product site for **AuraAI**, a chalk-and-notebook teaching assistant for
iOS. It hosts the landing page and the App Store-required Privacy Policy and
Support pages.

## Stack
- Next.js 15 (App Router, TypeScript, static export)
- Tailwind CSS 4
- next-themes (light + dark, system default)
- Framer Motion (scroll reveals)
- lucide-react (icons)

## Design
"Tiza & Cuaderno" — risograph editorial. Ink-green on warm cream paper with a
fluorescent coral accent and the Redaction display face. Tokens mirror the iOS
app's `DesignSystem.swift`. See `docs/web-design-research.md`.

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run serve    # preview the built ./out
```

## Pages
- `/` — landing
- `/privacy` — Privacy Policy (App Store)
- `/support` — Support & FAQ (App Store)
- `/terms` — Terms of Use

Site-wide constants (contact email, URLs, dates) live in `src/lib/site.ts`.
