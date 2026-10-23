---
name: GECOP EXPERT
description: A live compliance rubric turned into a landing page — every claim stamped CUMPLE.
colors:
  ink: "#161213"
  ink-soft: "#423b3c"
  ink-mute: "#746b6c"
  paper: "#ffffff"
  paper-line: "#ded9da"
  signal: "#620a20"
  signal-dark: "#430516"
  signal-bg: "#f2e2e5"
  neutral-pending: "#55494b"
  neutral-pending-dark: "#332b2c"
  neutral-pending-bg: "#eeeaea"
typography:
  display:
    fontFamily: "Spectral, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.25rem, 2.4vw + 1.7rem, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.006em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.03em"
rounded:
  sm: "3px"
  md: "6px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.signal-dark}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
  status-chip-cumple:
    backgroundColor: "{colors.signal-bg}"
    textColor: "{colors.signal-dark}"
    rounded: "999px"
  status-chip-pending:
    backgroundColor: "{colors.neutral-pending-bg}"
    textColor: "{colors.neutral-pending-dark}"
    rounded: "999px"
---

# Design System: GECOP EXPERT

## Overview

**Creative North Star: "The Evaluation Ledger"**

GECOP EXPERT sells the ability to make a public-procurement offer pass a compliance rubric. The site doesn't argue that case in marketing language — it performs it: a live matrix of requirement rows stamping from "en revisión" to "Cumple" in front of the visitor, on a page built like the ledger paper and rubric codes of the process itself. The system is deliberately restrained: near-black ink on true white, with the client's own brand maroon (#620a20) as the single carried color. Nothing competes with that stamp.

Confirmed visual rejections: no cards-plus-icon grids, no gradient hero, no stock handshake photography, no kicker/eyebrow labels above headings, no second accent color (WhatsApp's own green was deliberately dropped to hold the one-color discipline).

**Key Characteristics:**
- One accent (brand maroon) carries every "this matters" signal — CTAs, the CUMPLE stamp, the brand mark.
- Pending/in-progress states stay strictly achromatic (gray), never a second hue.
- Rubric and status codes (`REQ-01`, `SRV-01`, `Cumple`) set in monospace, reserved for that data-like role only.
- Self-hosted serif display face for headings, doing the "ledger authority" work; sans body for legibility.

## Colors

Two-color system by design: ink/paper carry structure, brand maroon carries meaning. There is no secondary or tertiary hue — introducing one would break the "one signal" rule the rubric concept depends on.

### Primary
- **Signal Maroon** (`#620a20`): the client's brand color. Used for primary CTA backgrounds, the CUMPLE stamp state, the brand mark, the wordmark, active status text, and focus/selection rings. Nothing else in the system uses saturated color.

### Neutral
- **Ink** (`#161213`): headings, primary text, dark section backgrounds (the "ledger" track-record section). Near-black rather than flat `#000` to stay warm under the serif display face.
- **Ink Soft** (`#423b3c`): body copy, secondary text.
- **Ink Mute** (`#746b6c`): tertiary text, codes, captions.
- **Paper** (`#ffffff`): page background, card/panel surfaces. True white, matching the client's logo ground.
- **Paper Line** (`#ded9da`): hairline borders and dividers.
- **Pending Gray** (`#55494b` text / `#eeeaea` background): the rubric's "en revisión" state. Kept achromatic on purpose — see the One Signal rule below.

### Named Rules
**The One Signal Rule.** Brand maroon is the only saturated color in the system. Every other state distinction (pending vs. cumple, hover, disabled) is expressed through value and weight, never a second hue. A second accent color anywhere in this system is a defect, not a variant.

## Typography

**Display Font:** Spectral (with Iowan Old Style, Georgia, serif fallback)
**Body Font:** Inter (with system-ui fallback)
**Label/Mono Font:** JetBrains Mono

**Character:** A ledger-authority serif for headlines paired with a neutral, high-legibility sans for reading copy; mono is reserved for rubric codes and status marks so it reads as data, never as a "technical" costume.

### Hierarchy
- **Display** (600, `clamp(2.25rem, 2.4vw + 1.7rem, 3.6rem)`, 1.08): hero H1 only.
- **Headline** (600, `clamp(1.75rem, 1.4vw + 1.4rem, 2.5rem)`, default): section H2s.
- **Title** (600, `clamp(1.2rem, 0.6vw + 1rem, 1.5rem)`): service/ledger entry H3s.
- **Body** (400–500, 15–18.5px, 1.5–1.65): paragraph copy; leads (`.section-lede`, `.hero-lede`) capped near 52–62ch.
- **Label** (600, 11–11.5px, `0.02–0.08em`, uppercase where used): rubric codes (`REQ-01`), footer column heads, status chip text.

### Named Rules
**The Data Mono Rule.** JetBrains Mono appears only on rubric/service codes and status marks — content that is genuinely code-like. It never stands in as a "technical" decorative face elsewhere.

## Layout

Single-column content `wrap` capped at 1180px, `clamp(20px, 5vw, 48px)` inline padding. The hero is the only two-column region (`1.05fr / 0.95fr` copy vs. matrix), collapsing to one column at 900px. Section rhythm runs `clamp(56px, 8vw, 104px)` vertical padding. The contact section mirrors the hero's two-column shape (`0.85fr / 1fr`), collapsing at 800px. The rubric matrix itself collapses its head row and stacks label/description/status at 560px — the one deliberate density change between desktop and mobile.

## Elevation & Depth

Flat by default; shadows are reserved for surfaces that visually float above the page — the matrix card and the contact form panel — never applied to inline elements or buttons at rest.

### Shadow Vocabulary
- **Shadow SM** (`0 1px 2px rgba(22,18,19,.08), 0 1px 1px rgba(22,18,19,.04)`): default button elevation.
- **Shadow MD** (`0 8px 24px rgba(22,18,19,.12), 0 2px 8px rgba(22,18,19,.06)`): button hover state.
- **Shadow LG** (`0 24px 60px rgba(22,18,19,.18), 0 6px 16px rgba(22,18,19,.08)`): the matrix card and contact form panel — the two surfaces meant to read as physically raised above the ledger-lined page.

### Named Rules
**The Two-Surface Rule.** Only the rubric matrix and the contact form get `shadow-lg`. A third floating panel dilutes both.

## Shapes

Small, restrained radii throughout: `3px` on buttons, inputs, and the skip-link; `6px` on the matrix card, ledger list, and the brand mark's rounded square. Status chips are the one fully-rounded (`999px`) shape in the system, reading as a stamped mark rather than a UI control. Borders are hairline (`1–1.5px`) `paper-line` or, on the active/pending status chip, the semantic color itself.

## Components

### Buttons
- **Shape:** 3px radius, 1.5px border (transparent unless secondary/whatsapp).
- **Primary:** maroon background (`#620a20`), white text, `shadow-sm` at rest → `shadow-dark` background + `shadow-md` on hover.
- **Secondary:** transparent with ink border, inverts to solid ink on hover.
- **WhatsApp:** deliberately unbranded — white surface, ink text, paper-line border; hover swaps the border/text to brand maroon. Never WhatsApp's own green; that would break the One Signal rule.

### Chips (status)
- **Style:** pill (999px), 1px border in the state's own color, mono label text.
- **State:** pending (gray) and cumple (maroon) are the only two states; a row animates pending → cumple once, staggered per row by a `--delay` custom property, never re-triggering.

### Cards / Containers
- **Corner Style:** 6px.
- **Background:** paper (white).
- **Shadow Strategy:** `shadow-lg` only (see Elevation).
- **Border:** 1px paper-line.
- **Internal Padding:** `clamp(24px, 3vw, 36px)` on the contact form; matrix rows use `18px 22px`.

### Inputs / Fields
- **Style:** 1.5px paper-line border, 3px radius, white background, ink text.
- **Focus:** border and outline both shift to signal maroon.
- **Error:** signal-dark text, no red-alert color — errors stay inside the one-color system.

### Navigation
- **Style:** sticky header, translucent paper background with blur-on-scroll. Brand mark (maroon rounded-square + checkmark) plus wordmark on the left, phone link and primary CTA on the right. Phone label collapses to icon-only under 640px.

### Brand Mark (signature)
A maroon rounded-square containing a white checkmark, paired with the "GECOP EXPERT" wordmark set in Spectral, both in signal maroon, no italics or weight split between the two words. Reconstructed in code from the client-supplied logo reference (checkmark-in-square + wordmark on white); replace with the client's sourced SVG/PNG when available — this is a placeholder for a real asset, not a final design decision.

### Mascot (the brand mark, alive)
The logo's check-in-square drawn as a small advisor: paper body with a 5px maroon outline, the check as its smile, ink limbs, and a maroon-based rubber stamp in its right hand. It stands on the hero matrix's top edge and is the one who stamps each row CUMPLE: wind-up, slam, body squash, maroon ink burst, chip turns. Afterward its eyes follow a fine pointer, and hovering it triggers one hello-stamp. It uses only ink, paper, and maroon, which keeps the One Signal Rule. It appears in the hero only: one character on one stage, never repeated as decoration elsewhere. Under reduced motion it stands still with the stamp raised. Source: `src/sections/Mascot.tsx`; rig and motion: `src/sections/Matrix.tsx`.

## Do's and Don'ts

### Do:
- **Do** keep brand maroon as the only saturated color anywhere on the page.
- **Do** use JetBrains Mono only for rubric/status codes, never as generic "tech" styling.
- **Do** reserve `shadow-lg` for the matrix and the form panel only.
- **Do** collapse the matrix to a stacked, label-led layout below 560px rather than shrinking it in place.

### Don't:
- **Don't** introduce a second accent hue (including WhatsApp green) anywhere in the system.
- **Don't** add a kicker or eyebrow label above any heading.
- **Don't** use a same-size icon-plus-heading-plus-text card grid; this system expresses lists as rows (matrix rows, service rows, ledger rows), not cards.
- **Don't** treat the brand mark as final — it's a code reconstruction pending the client's real logo file.
