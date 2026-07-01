# AuraAI — Web design research

## Aesthetic direction
**Tiza & Cuaderno** (chalk & notebook) — risograph editorial. Warm classroom
stationery, not a generic SaaS landing. One dominant ink (ink-green `#1F2A24`),
one signature accent (fluorescent riso coral `#FF4D6D`), a second chalkboard
green `#2F6B4F` for confirmations. Background is warm cream paper `#F5F0E6`,
never pure white. The whole system mirrors the iOS app's `DesignSystem.swift`
1:1 so the site and app read as one product.

## Typography
- **Display**: Redaction (the app's bundled OFL face), loaded via `@font-face`.
  Editorial, typewriter-adjacent — carries every headline, exactly as in-app.
- **Body**: SF Pro Text (system stack). Never Inter/Roboto/system-ui as a
  display crutch.
- **Data / numerals**: SF Mono (record numbers, the email stamp, step numbers).

## Motion
One orchestrated moment: a gentle fade-and-rise (`Reveal`, Framer Motion) as
each section enters the viewport, staggered within a section. Honors
`prefers-reduced-motion`. No scattered micro-interactions competing for
attention; hover states on feature cards (coral-wash fill) provide the accents.

## Signature devices (borrowed from the app, not from a template)
- **Coral notebook margin** — a fixed 2px coral left spine (`.coral-margin`),
  the app's `NotebookPage` metaphor.
- **Ruled paper + riso grain** — CSS `.notebook-lines` + SVG-noise
  `.paper-grain` recreate `PaperBackground`.
- **Gis mark** — the chalk-stick mascot, drawn inline as themeable SVG (never
  rasterized), used in header, footer, final CTA, and 404.
- **Chalkboard panel** — the privacy section inverts to board green with chalk
  text, the one dark island on the page.

## Structure
Header (sticky, logo + Support/Privacy + theme toggle) → Hero (headline +
themed device frame that follows light/dark) → Features (6, bordered grid) →
How it works (3 alternating steps with device frames) → Privacy-first
(chalkboard panel) → Final CTA (Gis) → Footer.

## References consulted
- The iOS app itself — `DesignSystem.swift`, `NotebookKit.swift`,
  `GisMascot.swift`, `LegalViews.swift` (source of truth for tokens + privacy
  copy).
- Sibling site `medrecord-web` — proven Next.js 15 static-export architecture,
  tokenized `globals.css`, `DeviceFrame`, sitemap/robots pattern.
- Editorial/minimal product-page bar: Linear, Things, Craft — restraint,
  generous whitespace, one confident type voice.

## Color decisions vs iOS palette
Kept the app palette verbatim in both themes. Light mode leads (warm cream) to
match "warm classroom"; dark mode uses the app's exact dark tokens so the
device-frame screenshots sit naturally on the page in either mode.

## Compliance-driven copy
Privacy Policy and Support FAQ are written from the app's shipped
`LegalViews.swift` — they name Moonshot AI (Kimi), disclose servers in China,
BYOK + Keychain storage, on-device SwiftData, "students never leave the
device", and FERPA/COPPA/GDPR. No invented claims.
