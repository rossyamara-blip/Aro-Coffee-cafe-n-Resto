---
name: Aro Cafe Design System
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#424844'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#496455'
  primary: '#173124'
  on-primary: '#ffffff'
  primary-container: '#2d4739'
  on-primary-container: '#98b5a3'
  inverse-primary: '#b0cdbb'
  secondary: '#675d4d'
  on-secondary: '#ffffff'
  secondary-container: '#f0e0cc'
  on-secondary-container: '#6e6353'
  tertiary: '#4d1d06'
  on-tertiary: '#ffffff'
  tertiary-container: '#693219'
  on-tertiary-container: '#e99b7b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead6'
  primary-fixed-dim: '#b0cdbb'
  on-primary-fixed: '#062014'
  on-primary-fixed-variant: '#324c3e'
  secondary-fixed: '#f0e0cc'
  secondary-fixed-dim: '#d3c4b1'
  on-secondary-fixed: '#221a0e'
  on-secondary-fixed-variant: '#4f4537'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb598'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#6f371e'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: notoSerif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: notoSerif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: notoSerif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: notoSerif
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: notoSerif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

This design system embodies the serene and majestic atmosphere of Mount Sindoro. The brand personality is **sophisticated, grounded, and restorative**. It avoids the frantic pace of urban "third-wave" coffee culture in favor of a "slow-living" philosophy that appeals to both multi-generational families and modern explorers.

The visual style is **Modern-Organic**. It blends the structural reliability of a professional service with the soft, unpredictable beauty of the natural world. The aesthetic utilizes generous whitespace to mimic the openness of the mountain slopes, while fine-lined details and rich serif typography provide a sense of heritage and premium craft. Every interaction should feel intentional and calm, prioritizing ease of use for older patrons while maintaining the "Instagrammable" elegance required by younger audiences.

## Colors

The palette is derived directly from the Sindoro landscape. 

- **Primary (Forest Green):** A deep, quiet green used for primary actions, branding, and structural headers. It provides a strong "anchor" for the UI.
- **Secondary (Warm Sand):** Used for subtle backgrounds, secondary buttons, and decorative separators. It softens the high contrast of the green.
- **Accent (Muted Terracotta):** Used sparingly for highlights, special offers, or "warm" call-to-actions. It represents the volcanic earth and the warmth of a freshly brewed cup.
- **Background (Off-White/Cream):** The foundation of the UI. This specific tint reduces blue-light strain and creates a printed-paper feel that is welcoming to seniors.
- **Typography:** Deep charcoal rather than pure black to maintain a premium, soft appearance.

## Typography

The typography strategy focuses on the interplay between **notoSerif** (the voice of heritage) and **inter** (the voice of clarity). 

1.  **Hierarchy:** Headlines should be set in Noto Serif with slightly tighter letter-spacing to feel like editorial mastheads.
2.  **Readability:** Body text uses Inter at a minimum of 16px to ensure accessibility for those aged 40+. Line heights are generous (1.5x+) to prevent "crowding" of text.
3.  **Labels:** Smaller labels use uppercase Inter with increased letter-spacing to provide a functional, organized contrast to the expressive headlines.
4.  **Scaling:** On mobile devices, display sizes should scale down aggressively to avoid awkward line breaks, while body text remains large for legibility.

## Layout & Spacing

The layout philosophy is **asymmetrical and airy**. We move away from strict, boxy grids to allow content to "breathe" like a mountain breeze.

- **Grid:** A 12-column fixed grid for desktop (centered), transitioning to a 4-column fluid grid for mobile.
- **Rhythm:** We use a base-8 spacing system. Large vertical gaps (80px+) are encouraged between major sections to define a "slow" scroll experience.
- **Margins:** Generous page margins (minimum 24px on mobile, up to 120px on wide desktop) ensure content never feels cramped against the edge of the screen.
- **Asymmetry:** Occasionally offset images or text blocks by 1-2 columns to create an organic, non-mechanical feel.

## Elevation & Depth

To maintain the "nature-inspired" goal, elevation is handled through **tonal layering** and **ambient shadows** rather than harsh offsets.

- **Surface Tiers:** The base layer is the Off-White neutral. Cards and containers use pure white or the Secondary (Warm Sand) color to sit slightly "above" the base.
- **Shadows:** Shadows are extremely soft and tinted with the Primary Forest Green. For example: `box-shadow: 0 10px 30px -5px rgba(45, 71, 57, 0.08)`. This makes elements feel like they are floating on a soft mist rather than a hard surface.
- **Glassmorphism:** Use subtle backdrop blurs (10px - 15px) for navigation bars to allow the mountain-inspired background imagery to peek through without sacrificing text legibility.

## Shapes

The shape language is defined by **rounded elegance**. 

- **Corners:** A `roundedness` of 2 (8px standard) is applied to buttons and inputs. Larger cards use `rounded-lg` (16px) or `rounded-xl` (24px) to feel more approachable.
- **Organic Elements:** Incorporate non-geometric shapes like "leaf-cut" apertures for images (where one or two corners have a much larger radius than the others, e.g., 80px).
- **Icons:** Use thin-stroke icons with rounded terminals. Avoid sharp corners or heavy fills.
- **Dividers:** Use very thin (1px) lines in the Secondary Sand color, or "fading" lines that disappear into the background.

## Components

### Buttons
- **Primary:** Forest Green background with White text. Bold Inter typography.
- **Secondary:** Transparent background with Forest Green border (1px) or Warm Sand background.
- **Hover States:** Subtle shift in opacity or a slight lift via an ambient shadow. No jarring color changes.

### Cards
- White background with a `rounded-lg` corner. 
- Minimalist borders (1px, Sand color) or just a soft ambient shadow.
- High-quality photography of coffee or Sindoro landscapes should occupy at least 50% of the card area.

### Input Fields
- Off-white background to blend with the page.
- 1px border that turns Forest Green on focus.
- Labels always visible above the field (no floating labels) to aid cognitive accessibility for seniors.

### Lists & Menus
- Coffee menus should use Noto Serif for item names and Inter for descriptions/pricing.
- Use a "dotted leader" (dots connecting name to price) to create a classic, premium cafe feel.

### Specialized Elements
- **Botanical Accents:** Use SVG leaf patterns as background watermarks or section ends.
- **The "Sindoro" Divider:** A subtle, stylized mountain-line graphic used to separate long-form content.