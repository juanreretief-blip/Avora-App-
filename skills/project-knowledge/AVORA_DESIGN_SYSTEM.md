# Avora Design System
### v1.0.0 · React + Tailwind CSS v4

> "Nourish from the inside out."

A health-first design language built around the principle that wellness should feel effortless, natural, and beautiful. One green. One type pairing. Infinite clarity.

---

## Core Philosophy

| Pillar | Principle |
|---|---|
| **Natural** | A single, muted sage green. No rainbow — just nature. |
| **Restrained** | Only what's needed. White space is not empty space. |
| **Editorial** | Poppins headlines. Lora body. Warmth through serif. |
| **Accessible** | Every text colour at WCAG AA or better, always. |

---

## Color Tokens

### Brand Greens — one hue family, muted sage

| Token | Hex | Usage |
|---|---|---|
| `--gf-green-50` | `#f4f7ef` | Hover states, lightest surface |
| `--gf-green-100` | `#e4edd5` | Tag backgrounds |
| `--gf-green-200` | `#c8d9ab` | Progress tracks, borders |
| `--gf-green-300` | `#a3bc82` | Decorative, icons on dark |
| `--gf-green-400` | `#8fa36e` | Secondary accent |
| `--gf-green-500` | `#788c5d` | **Brand accent — primary use** |
| `--gf-green-600` | `#5f7047` | Stronger contrast |
| `--gf-green-700` | `#4a5836` | Text on light green |
| `--gf-green-800` | `#344027` | Dark headings on green |
| `--gf-green-900` | `#1e2616` | Maximum contrast |

### Warm Neutrals — the soul of the palette

| Token | Hex | Usage |
|---|---|---|
| `--gf-warm-50` | `#faf9f5` | App background |
| `--gf-warm-100` | `#f2f1eb` | Muted surfaces |
| `--gf-warm-200` | `#e8e6dc` | Borders, dividers |
| `--gf-warm-300` | `#d4d1c8` | Disabled borders |
| `--gf-warm-400` | `#b0aea5` | Placeholder, muted icons |
| `--gf-warm-500` | `#8a8880` | Caption, tertiary text |
| `--gf-warm-600` | `#5e5c55` | Body text |
| `--gf-warm-700` | `#3a3830` | Heading text |
| `--gf-warm-900` | `#141413` | Near-black — primary actions |

### Semantic Colors — purposeful, never decorative

| Token | Hex | Usage |
|---|---|---|
| `--gf-success-bg` | `#f0f4eb` | Alert, tag backgrounds |
| `--gf-success-text` | `#3d5230` | On success surface |
| `--gf-success-ring` | `#788c5d` | Success focus ring |
| `--gf-warning-bg` | `#fef6ec` | Alert backgrounds |
| `--gf-warning-text` | `#7a3f18` | On warning surface |
| `--gf-warning-ring` | `#c4824a` | Warning focus ring |
| `--gf-error-bg` | `#fdeaea` | Error states |
| `--gf-error-text` | `#7a1c1c` | On error surface |
| `--gf-error-ring` | `#a83232` | Error focus ring |
| `--gf-info-bg` | `#f2f1eb` | Info states |
| `--gf-info-text` | `#3a3830` | On info surface |
| `--gf-info-ring` | `#5e5c55` | Info focus ring |

### Core Semantic Tokens

| Token | Value | Notes |
|---|---|---|
| `--background` | `#faf9f5` | App canvas |
| `--foreground` | `#141413` | Default text |
| `--primary` | `#141413` | CTA buttons — near-black |
| `--primary-foreground` | `#faf9f5` | Text on primary |
| `--secondary` | `#f0f4eb` | Secondary button surface |
| `--secondary-foreground` | `#3d5230` | Text on secondary |
| `--muted` | `#f2f1eb` | Muted surface |
| `--muted-foreground` | `#5e5c55` | Muted text |
| `--border` | `#e8e6dc` | Borders |
| `--ring` | `#788c5d` | Focus rings |
| `--destructive` | `#8a2020` | Danger actions |

---

## Typography

### Font Families

| Role | Family | Fallback | Usage |
|---|---|---|---|
| **Headings & UI** | Poppins | Arial, sans-serif | H1–H6, labels, buttons, navigation |
| **Body & Editorial** | Lora | Georgia, serif | Body copy, quotes, captions, descriptions |

**Import (Google Fonts):**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
```

### Type Scale

| Token | Size | Weight | Line Height | Tracking | Family |
|---|---|---|---|---|---|
| Display | 52px | 800 | 1.05 | -0.03em | Poppins |
| H1 | 40px | 700 | 1.10 | -0.02em | Poppins |
| H2 | 32px | 700 | 1.15 | -0.01em | Poppins |
| H3 | 24px | 600 | 1.25 | -0.01em | Poppins |
| H4 | 20px | 600 | 1.30 | 0 | Poppins |
| H5 | 16px | 600 | 1.40 | 0 | Poppins |
| H6 | 14px | 600 | 1.40 | +0.01em | Poppins |
| Body LG | 18px | 400 | 1.75 | 0 | Lora |
| Body | 16px | 400 | 1.70 | 0 | Lora |
| Body SM | 14px | 400 | 1.65 | 0 | Lora |
| Label | 13px | 600 | 1.50 | +0.01em | Poppins |
| Caption | 12px | 400 | 1.50 | +0.01em | Lora |
| Overline | 10px | 700 | 1.40 | +0.12em | Poppins (UPPERCASE) |

### Poppins Weights Available
`300 Light` · `400 Regular` · `500 Medium` · `600 SemiBold` · `700 Bold` · `800 ExtraBold`

### Lora Weights Available
`400 Regular` · `500 Medium` · `600 SemiBold` · `700 Bold` (+ italic variants for all)

---

## Spacing

Base unit: **8px**

| Token | px | Usage |
|---|---|---|
| `space-1` | 4px | Icon gaps, tight inline |
| `space-2` | 8px | Tag padding, compact gaps |
| `space-3` | 12px | Input padding, small button |
| `space-4` | 16px | Base spacing, card padding sm |
| `space-6` | 24px | Section gap, card padding |
| `space-8` | 32px | Grid gutter, large gap |
| `space-12` | 48px | Section padding |
| `space-16` | 64px | Hero padding |
| `space-20` | 80px | Full-bleed sections |
| `space-24` | 96px | Max vertical rhythm |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-xs` | 2px | Inline chips, sharp tags |
| `radius-sm` | 4px | Inputs, small buttons |
| `radius-md` | 8px | Buttons, standard cards |
| `radius-lg` | 12px | Inputs lg, dropdown items |
| `radius-xl` | 16px | Feature cards, modals |
| `radius-2xl` | 24px | Large panels, hero cards |
| `radius-full` | 9999px | Pills, avatars, full-round |

---

## Elevation / Shadows

All shadows use `rgba(20, 20, 19, …)` — near-black tint, barely-there by design.

| Level | CSS Value | Usage |
|---|---|---|
| `shadow-xs` (Elev 1) | `0 1px 2px rgba(20,20,19,0.04)` | Floating tooltips |
| `shadow-sm` (Elev 2) | `0 1px 3px rgba(20,20,19,0.06), 0 1px 2px rgba(20,20,19,0.03)` | Buttons, focused inputs |
| `shadow-md` (Elev 3) | `0 2px 8px rgba(20,20,19,0.07), 0 1px 3px rgba(20,20,19,0.04)` | Cards, dropdowns |
| `shadow-lg` (Elev 4) | `0 4px 16px rgba(20,20,19,0.08), 0 2px 6px rgba(20,20,19,0.05)` | Modals, drawers |
| `shadow-xl` (Elev 5) | `0 8px 32px rgba(20,20,19,0.10), 0 4px 12px rgba(20,20,19,0.06)` | Overlays |

---

## Components

### Button Variants

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| `primary` | `#141413` | `#faf9f5` | none | Main CTA actions |
| `secondary` | `#f0f4eb` | `#4a5836` | none | Supporting actions |
| `outline` | transparent | `#4a5836` | `#788c5d` | Tertiary, less emphasis |
| `ghost` | transparent | `#4a5836` | none | Inline, minimal chrome |
| `destructive` | `#8a2020` | `#faf9f5` | none | Dangerous / irreversible |

**Button Sizes:**

| Size | Height | Padding | Font Size | Border Radius |
|---|---|---|---|---|
| `sm` | 32px | 0 12px | 12px | 8px |
| `md` | 40px | 0 16px | 13px | 10px |
| `lg` | 48px | 0 22px | 14px | 12px |

**Interaction States:**
- **Hover:** Lightened/darkened background, elevated shadow on `primary`
- **Active:** `scale(0.97)` transform
- **Disabled:** `#f2f1eb` bg, `#b0aea5` text, `not-allowed` cursor
- **Loading:** Spinner icon (Loader2) + disabled state

---

### Cards

**Recipe Card**
- White background, `#e8e6dc` border, 16px radius
- Hover: `translateY(-2px)` + `shadow-md`
- Contains: hero image (168px), tag chips, title, star rating, calorie count, Add button

**Nutrition Card**
- SVG donut ring (84% fill, `#788c5d` stroke)
- 4 macro linear progress bars
- Lora italic caption for context

**Testimonial Card**
- Lora italic quote (large, prominent)
- Avatar + name + verified badge
- White surface, subtle border

---

### Form Elements

**Text Input**
- Background: `#f2f1eb`
- Focus ring: `rgba(120,140,93,0.15)` (2px, 3px blur)
- Focus border: `#788c5d`
- Error border: `#a83232`, error ring: `rgba(168,50,50,0.15)`
- Label: Poppins 13px / 600
- Placeholder: `#b0aea5`

**Number Stepper**
- `–` / `+` buttons with min/max constraints
- Center value display in Poppins 700

**Select / Dropdown**
- Animated chevron (rotates 180° when open)
- Option list: white bg, `#e8e6dc` border

**Ingredient Selector**
- Chip display (removable tags)
- Search autocomplete with filtered options

---

### Toggles & Switches

**GF Switch**
- Off: `#c8c6bc` pill background
- On: `#788c5d` pill background
- Transition: `300ms ease`
- Thumb: white circle, `shadow-sm`

**GF Checkbox**
- Unchecked: `#e8e6dc` border, transparent fill
- Checked: `#788c5d` fill, white checkmark
- Focus ring: `rgba(120,140,93,0.2)`

**Dietary Chips (multi-select)**
- Unselected: `#f2f1eb` bg, `#5e5c55` text
- Selected: `#f0f4eb` bg, `#4a5836` text, `#788c5d` border

---

## Patterns

### Progress & Trackers

**Linear Bar**
- Track: `#f2f1eb` (6px height, full-round)
- Fill: `#788c5d` by default (configurable)
- Animated width transition: `0.7s ease`

**Ring / Circular Progress**
- SVG circles with `strokeDashoffset` animation
- Track: `#f2f1eb`
- Fill: `#788c5d` by default
- Transition: `stroke-dashoffset 1s ease`

**Hydration Tracker**
- 8 glass slots (filled = `#c8d9ab` / unfilled = `#f2f1eb`)
- Log Water CTA button

---

### Navigation

**Top Bar (Home)**
- Logo mark + greeting (Lora italic) + user avatar
- Notification bell with red dot indicator

**Top Bar (Detail)**
- Back chevron button + title + action icons (share, like)

**Bottom Navigation**
- 5 tabs: Home, Search, Log (CTA), Tracker, Profile
- Log tab: `#141413` bg, white icon — prominent center action
- Active: `#f0f4eb` bg, `#788c5d` icon
- Inactive: transparent, `#b0aea5` icon

**Breadcrumbs**
- Separator: `›` in `#b0aea5`
- Active: `#141413` Poppins 600
- Inactive: `#8a8880` Poppins 400

**Tabs**
- Pill variant: selected = `#141413` bg, white text
- Underline variant: selected = `#788c5d` 2px bottom border

---

### Tags & Badges

| Style | Background | Text | Usage |
|---|---|---|---|
| Default green | `#f0f4eb` | `#4a5836` | Dietary labels, categories |
| Amber | `#fef6ec` | `#7a3f18` | Calories, warnings |
| Neutral | `#f2f1eb` | `#3a3830` | System states, counts |
| Dark | `#141413` | `#faf9f5` | Highlighted, featured |

All tags: Poppins 9–11px / 700, border-radius 9999px (pill), padding `3px 9px`

---

### Alerts & Modals

**Alert Variants**

| Type | Bg | Text | Ring | Icon |
|---|---|---|---|---|
| Success | `#f0f4eb` | `#3d5230` | `#788c5d` | CheckCircle |
| Warning | `#fef6ec` | `#7a3f18` | `#c4824a` | AlertTriangle |
| Error | `#fdeaea` | `#7a1c1c` | `#a83232` | AlertCircle |
| Info | `#f2f1eb` | `#3a3830` | `#5e5c55` | Info |

**Toast**
- Left border accent (4px, variant color)
- Dismiss × button, right-aligned
- Same color logic as Alert

**Modal**
- Overlay: `rgba(20,20,19,0.4)` blur backdrop
- Dialog: white, 20px radius, `shadow-xl`
- Header: Poppins 700, close button top-right
- Actions: right-aligned, primary + ghost buttons

---

## WCAG Accessibility

All text colors are chosen to meet or exceed:

- **WCAG AA** — 4.5:1 contrast ratio for body text (< 18px)
- **WCAG AA Large** — 3:1 contrast ratio for large text (≥ 18px or 14px bold)
- **WCAG AAA** — 7:1 contrast ratio where possible

Key compliant pairings:

| Foreground | Background | Ratio | Level |
|---|---|---|---|
| `#141413` | `#faf9f5` | 19.1:1 | AAA |
| `#141413` | `#ffffff` | 19.6:1 | AAA |
| `#3a3830` | `#faf9f5` | 11.2:1 | AAA |
| `#5e5c55` | `#faf9f5` | 5.8:1 | AA |
| `#4a5836` | `#f0f4eb` | 5.2:1 | AA |
| `#788c5d` | `#ffffff` | 3.1:1 | AA Large |
| `#faf9f5` | `#141413` | 19.1:1 | AAA |

---

## Logo Mark

The Avora mark is a **stylized avocado seed form**:

- **Outer shape** — rounded teardrop pointing up (the fruit half)
- **Inner circle** — circular negative space (the pit / seed)
- **Stem line** — sage green diagonal stroke (`#788c5d`, 2px, rounded cap)

### Logo Variants

| Variant | Background | Mark fill | Stem |
|---|---|---|---|
| Dark (default) | any light | `#141413` | `#788c5d` |
| Light (reversed) | any dark | `#faf9f5` | `#788c5d` |

### Clear Space
Minimum clear space around the logo mark = **0.5× the mark height** on all sides.

### Minimum Sizes
- Logo mark only: 16px
- Mark + wordmark: 120px wide minimum

### Wordmark
- Typeface: Poppins 800
- Letter-spacing: `-0.03em`
- Case: Title case ("Avora" not "AVORA")

---

## Do's and Don'ts

### Color
✅ Use `#788c5d` sage green only for active states, progress, tags, and focus rings  
✅ Use `#141413` near-black for all primary CTA buttons  
✅ Use warm neutrals for all backgrounds, borders, and muted text  
❌ Don't introduce new hue families without system-wide approval  
❌ Don't use the sage green for large filled backgrounds  
❌ Don't use pure black (`#000000`) or pure white (`#ffffff`) for text on warm surfaces  

### Typography
✅ Use Poppins for all headings, labels, buttons, and navigation  
✅ Use Lora for body copy, descriptions, testimonials, and editorial content  
✅ Use Lora italic for quotes, taglines, and hero subtext  
❌ Don't use Lora for UI chrome (nav items, button labels, form labels)  
❌ Don't mix more than 2 font families  
❌ Don't set body text smaller than 14px  

### Spacing
✅ Stick to the 8px base grid for all layout spacing  
✅ Use 16px as the default internal padding for cards and panels  
✅ Use 48px minimum for section-level vertical spacing  
❌ Don't use arbitrary spacing values outside the scale  

### Components
✅ Always show all interaction states (hover, active, disabled, focus)  
✅ Provide visual focus indicators for all interactive elements  
✅ Use the `primary` button variant for one main action per screen only  
❌ Don't stack multiple `primary` buttons together  
❌ Don't use `destructive` for anything reversible  

---

## Design Token CSS Reference

```css
:root {
  /* Core */
  --background: #faf9f5;
  --foreground: #141413;
  --primary: #141413;
  --primary-foreground: #faf9f5;
  --secondary: #f0f4eb;
  --secondary-foreground: #3d5230;
  --muted: #f2f1eb;
  --muted-foreground: #5e5c55;
  --border: #e8e6dc;
  --ring: #788c5d;
  --destructive: #8a2020;

  /* Brand Greens */
  --gf-green-50:  #f4f7ef;
  --gf-green-100: #e4edd5;
  --gf-green-200: #c8d9ab;
  --gf-green-300: #a3bc82;
  --gf-green-400: #8fa36e;
  --gf-green-500: #788c5d;
  --gf-green-600: #5f7047;
  --gf-green-700: #4a5836;
  --gf-green-800: #344027;
  --gf-green-900: #1e2616;

  /* Warm Neutrals */
  --gf-warm-50:  #faf9f5;
  --gf-warm-100: #f2f1eb;
  --gf-warm-200: #e8e6dc;
  --gf-warm-300: #d4d1c8;
  --gf-warm-400: #b0aea5;
  --gf-warm-500: #8a8880;
  --gf-warm-600: #5e5c55;
  --gf-warm-700: #3a3830;
  --gf-warm-900: #141413;

  /* Semantic */
  --gf-success-bg:   #f0f4eb;
  --gf-success-text: #3d5230;
  --gf-success-ring: #788c5d;
  --gf-warning-bg:   #fef6ec;
  --gf-warning-text: #7a3f18;
  --gf-warning-ring: #c4824a;
  --gf-error-bg:     #fdeaea;
  --gf-error-text:   #7a1c1c;
  --gf-error-ring:   #a83232;
  --gf-info-bg:      #f2f1eb;
  --gf-info-text:    #3a3830;
  --gf-info-ring:    #5e5c55;

  /* Shadows */
  --gf-shadow-xs: 0 1px 2px rgba(20,20,19,0.04);
  --gf-shadow-sm: 0 1px 3px rgba(20,20,19,0.06), 0 1px 2px rgba(20,20,19,0.03);
  --gf-shadow-md: 0 2px 8px rgba(20,20,19,0.07), 0 1px 3px rgba(20,20,19,0.04);
  --gf-shadow-lg: 0 4px 16px rgba(20,20,19,0.08), 0 2px 6px rgba(20,20,19,0.05);
  --gf-shadow-xl: 0 8px 32px rgba(20,20,19,0.10), 0 4px 12px rgba(20,20,19,0.06);

  /* Radius */
  --radius: 0.75rem;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Fonts | Google Fonts (Poppins + Lora) |
| Charts | recharts |
| Animation | motion/react |

---

*Avora Design System · v1.0.0 · 2026*
