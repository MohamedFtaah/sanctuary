---
name: Sanctuary Clinical Luxury
colors:
  surface: '#f3fbff'
  surface-dim: '#c1dfec'
  surface-bright: '#f3fbff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e5f6ff'
  surface-container: '#d6f2ff'
  surface-container-high: '#cfedfa'
  surface-container-highest: '#c9e7f4'
  on-surface: '#001f28'
  on-surface-variant: '#41484c'
  inverse-surface: '#17343e'
  inverse-on-surface: '#ddf4ff'
  outline: '#71787c'
  outline-variant: '#c1c7cc'
  surface-tint: '#3c6376'
  primary: '#002532'
  on-primary: '#ffffff'
  primary-container: '#0d3b4c'
  on-primary-container: '#7da5b9'
  inverse-primary: '#a4cce1'
  secondary: '#006a62'
  on-secondary: '#ffffff'
  secondary-container: '#70f8e8'
  on-secondary-container: '#007168'
  tertiary: '#00252e'
  on-tertiary: '#ffffff'
  tertiary-container: '#003c4a'
  on-tertiary-container: '#00aed1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bfe9fe'
  primary-fixed-dim: '#a4cce1'
  on-primary-fixed: '#001f2a'
  on-primary-fixed-variant: '#224c5d'
  secondary-fixed: '#70f8e8'
  secondary-fixed-dim: '#4fdbcc'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#b3ebff'
  tertiary-fixed-dim: '#4cd6fb'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#f3fbff'
  on-background: '#001f28'
  surface-variant: '#c9e7f4'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-credential:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-interactive:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system establishes an ultra-modern, serene clinical luxury aesthetic tailored for high-trust family and cosmetic dentistry. It replaces cold, anxiety-inducing medical interfaces with an architectural, hospitable environment that feels closer to a high-end wellness retreat than a traditional dental office.

The emotional baseline is calm authority and uncompromising precision. Visual density is strictly managed through generous breathing room, intentional alignment, and radiant, luminous accents that cue hygiene, modern technology, and compassionate patient care.

Key aesthetic pillars:
- **Calibrated Warmth & Purity**: Crisp hospital-grade white card surfaces float above calming mineral-tinted creams, grounding the experience in comfort while preserving clinical rigor.
- **Precision Micro-Details**: Subtle ambient glows, whisper-thin borders, and polished typographic lockups mirror the microscopic precision of state-of-the-art dental procedures.
- **Accreditation as Art**: Veteran service, board credentials, and patient-satisfaction metrics are presented not as disruptive badges, but as integrated, jewel-like status indicators.

## Colors

The palette balances authoritative deep naval slate with energetic, radiant mineral waters and soothing thermal cream substrates.

- **Primary (`#0D3B4C`)**: Deep Marine Slate. Serves as the primary anchor for dominant structural elements, primary actions, and authoritative typographic headings.
- **Secondary (`#2EC4B6`)**: Clinical Tourmaline. Used for high-trust positive states, appointment confirmations, highlight accents, and active treatment badges.
- **Tertiary (`#00B4D8`)**: Luminous Cyan. Reserved strictly for primary focal triggers, interactive hover halos, high-value interactive CTAs, and luminous badge accents.
- **Neutral Deep (`#0F2D37`)**: Abyss Teal. Applied to body typography, deep boundaries, and high-contrast structural text to avoid stark pitch-black harshness.
- **Surface Foundations**:
  - `surface-canvas`: `#F8FAF9` (Gentle Sea Salt Cream) — softens full-screen glare while providing warmth.
  - `surface-subtle`: `#F0F5F5` (Hydrated Mist) — secondary segmenting background for quiet compartmentalization.
  - `surface-card`: `#FFFFFF` (Crisp Dental Enamel) — foreground interaction containers, modal dialogs, and credential tiles.

## Typography

The design system implements a unified hierarchy using Plus Jakarta Sans. Its geometric clarity conveys modern medical technology, while its open apertures and subtle humanistic curves soften clinical formality.

Rules for application:
- **Headlines**: Set tightly kerned display sizes using `700` and `600` weights. Use sentence case to retain warmth and approachability. Avoid all-caps for headings exceeding four words.
- **Body Copy**: Standardize on `body-md` for patient communication, insurance details, and procedural breakdowns to guarantee effortless reading under stress.
- **Micro-Copy & Badges**: Credential metadata, star ratings, and doctor status flags apply `label-credential` in all-caps with generous tracking (`0.08em`) to mimic prestige horology and medical certification plaques.

## Layout & Spacing

A disciplined 12-column grid system anchors the presentation on desktop (`1440px` maximum content container), condensing to 8 columns on tablet and 4 columns on mobile. 

Layout rules:
- **Canvas Margins**: Desktop layouts breathe via an expansive `3rem` horizontal margin. Mobile collapses strictly to `1.25rem` to prioritize touch targets and card readability.
- **Rhythm**: Vertical section stacking leverages `space-2xl` for macroscopic pacing, ensuring no treatment type or provider biography feels crowded.
- **Reflow**: Schedule booking funnels, credential banners, and patient reviews cascade from multi-column grids directly into single-column vertical cards on mobile devices without nested side-scrolling.

## Elevation & Depth

Visual depth combines physical layering with diffuse oceanic ambiance:

1. **Base Cards (Level 1)**: Crisp pure white `#FFFFFF` surfaces sitting on `#F8FAF9`. Elevated by a tinted shadow: `0 4px 20px -2px rgba(13, 59, 76, 0.05), 0 2px 6px -1px rgba(13, 59, 76, 0.02)`. Outlined with a microscopic border: `1px solid rgba(13, 59, 76, 0.06)`.
2. **Interactive Overlays & Booking Modals (Level 2)**: Crisp elevated dialogs using `0 16px 40px -4px rgba(13, 59, 76, 0.12), 0 6px 12px -2px rgba(13, 59, 76, 0.04)`.
3. **Clinical Frosted Glass**: Sticky top navigations, emergency call anchors, and treatment comparison bars use a frosted glass treatment: `background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(13, 59, 76, 0.08)`.
4. **Radiant Focus & Halo**: Hover states on interactive treatment tiles emit a subtle luminous cyan glow: `box-shadow: 0 8px 30px -4px rgba(0, 180, 216, 0.15)`.

## Shapes

The geometric framework balances approachable softness with clinical restraint:

- **Interactive Nodes (Buttons, Inputs)**: `0.5rem` (`roundedness: 2`) rounding conveys stability and ergonomics.
- **Surface Cards & Treatment Tiles**: Utilize `rounded-lg` (`1rem`) to establish a soft, furniture-like hospitality look that eliminates intimidating sharp corners.
- **Accreditation Badges & Metric Pills**: Utilize full capsule geometries (`rounded-full` / `9999px`) to visually preserve their status as independent verification seals.

## Components

### Buttons
- **Primary Action (e.g., "Schedule Consultation")**: Solid `#0D3B4C` background, white label, `0.5rem` border radius, padding `0.875rem 1.75rem`. Hover state transitions to `#0F2D37` with a soft elevation lift (`translateY(-1px)`) and a subtle `#00B4D8` focus ring.
- **Secondary Action (e.g., "Virtual Tour")**: Transparent background, `1.5px` border in `#0D3B4C`, typography in `#0D3B4C`. On hover, fills with `rgba(46, 196, 182, 0.08)`.
- **Urgent Clinical CTA (e.g., "Emergency Dental Care")**: Solid `#00B4D8` background, `#FFFFFF` text, subtle pulsing glow on rest: `box-shadow: 0 0 0 0 rgba(0, 180, 216, 0.4)`.

### Credential & Trust Badges
- Pill-shaped tokens (`rounded-full`) built with subtle tinted fills:
  - **Castle Connolly / Top Doctor**: Background `#FFFFFF`, border `1px solid rgba(13, 59, 76, 0.1)`, accompanied by an icon rendered in deep teal `#0D3B4C` with gold-tinted micro-accents.
  - **Navy Veteran Seal**: High-trust deep slate pill (`#0D3B4C`), white micro-copy, accompanied by a clean monochrome insignia.
  - **Rating Badges (4.9 Stars)**: Soft tourmaline background (`rgba(46, 196, 182, 0.12)`), text in `#0D3B4C`, paired with a star icon colored in radiant cyan `#00B4D8`.

### Cards & Service Tiles
- Solid `#FFFFFF` backgrounds wrapped in `1px solid rgba(13, 59, 76, 0.06)` with `1rem` corner rounding.
- Internal padding calibrated to `space-xl` (`2.5rem`) on desktop and `space-md` (`1rem`) on mobile.
- Features high-contrast typography, clinical iconography enclosed in `48x48px` circular `#F0F5F5` pods, and an explicit inline link styled with `#2EC4B6`.

### Form Fields & Intake Inputs
- Background `#FFFFFF`, border `1.5px solid rgba(13, 59, 76, 0.15)`, text `#0F2D37`.
- Focus state instantly swaps border color to `#00B4D8` with an ambient glow of `0 0 0 4px rgba(0, 180, 216, 0.15)`. No harsh dark browser outlines.
- Clear, supportive floating labels using `label-interactive`.

### Checkboxes & Segmented Controls
- Checkboxes use custom `20x20px` squares with `4px` corner radii. Unchecked: `1.5px solid rgba(13, 59, 76, 0.2)`. Checked: `#2EC4B6` fill with an optical white check glyph.
- Radio buttons feature a clean concentric dual-ring when active (`#0D3B4C` inner dot on a `#FFFFFF` core enclosed by a `#2EC4B6` ring).