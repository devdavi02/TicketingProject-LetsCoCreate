---
name: Digital Access Premium
colors:
  surface: '#111417'
  surface-dim: '#111417'
  surface-bright: '#37393d'
  surface-container-lowest: '#0b0e11'
  surface-container-low: '#191c1f'
  surface-container: '#1d2023'
  surface-container-high: '#272a2e'
  surface-container-highest: '#323538'
  on-surface: '#e1e2e7'
  on-surface-variant: '#e4beb4'
  inverse-surface: '#e1e2e7'
  inverse-on-surface: '#2e3134'
  outline: '#ab8980'
  outline-variant: '#5b4039'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#5f1500'
  primary-container: '#ff5722'
  on-primary-container: '#541200'
  inverse-primary: '#b02f00'
  secondary: '#a6e6ff'
  on-secondary: '#003543'
  secondary-container: '#14d1ff'
  on-secondary-container: '#00566b'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#909191'
  on-tertiary-container: '#282a2b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#862200'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#4cd6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#111417'
  on-background: '#e1e2e7'
  surface-variant: '#323538'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
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
  lg: 48px
  xl: 80px
  gutter: 16px
  margin: 20px
---

## Brand & Style

The design system focuses on the intersection of high-energy entertainment and high-security technology. It bridges the gap between the complex world of Web3 and the consumer-facing world of live events by adopting a "Digital Ticket" first approach. The aesthetic is a sophisticated blend of **Minimalism** and **Glassmorphism**, emphasizing clarity and ease of use while maintaining an "after-dark" event atmosphere. 

The tone is professional and secure to build trust during financial transactions, yet energetic and vibrant to mirror the excitement of attending a concert or festival. Visual interest is driven by high-contrast elements and subtle, multi-layered translucency, ensuring that the technology feels invisible while the utility remains front and center.

## Colors

The palette is anchored in a deep, monochromatic foundation to emphasize a premium dark-mode experience. The primary background uses a rich black (#0B0E11) to allow accent colors and content to "pop" with maximum luminance.

*   **Primary (Action):** Vibrant Orange (#FF5722) is used exclusively for primary calls to action, ticket status indicators, and critical navigational elements.
*   **Secondary (Highlight):** Electric Blue (#00D1FF) serves as a secondary accent for interactive feedback, links, and data visualization.
*   **Neutral (Surface):** A range of dark grays (#1A1D21, #2C2F33) are used to create structural hierarchy through tonal layering.
*   **Semantic:** White (#FFFFFF) and light grays are reserved for high-readability text and minimalist icons.

## Typography

The design system utilizes **Inter** across all levels to maintain a systematic, utilitarian, and clean appearance. The typographic hierarchy relies on significant weight contrast—using Extra Bold and Bold for headlines to create a sense of urgency and excitement, while Body text remains at a Medium or Regular weight for optimal legibility against dark backgrounds.

Letter spacing is tightened for large display headers to create a compact, modern look, while labels utilize increased tracking and uppercase styling for "Digital Ticket" metadata and technical details.

## Layout & Spacing

This design system employs a **Fluid Grid** model to ensure seamless scaling between mobile and desktop views. The layout is based on an 8px rhythmic scale.

For mobile, a 4-column layout is used with 20px outer margins. For desktop, a 12-column grid provides flexibility for complex dashboard views. Elements such as event cards and ticket listings should span full width on mobile or use horizontal carousels to maintain momentum. Vertical spacing is generous (48px+) between major sections to prevent visual clutter and emphasize the high-contrast cards.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and translucent layering rather than traditional drop shadows. This creates a high-tech, lightweight feel appropriate for a Web3-backed platform.

*   **Primary Surface:** Deep black base layer.
*   **Secondary Surface:** Translucent dark gray (80% opacity) with a 16px backdrop blur.
*   **Overlays:** High-transparency layers (40-60% opacity) with a 24px backdrop blur and a subtle 1px white border at 10% opacity to define edges.
*   **Highlights:** Vibrant blue or orange blurs are placed behind ticket cards to create a "glow" effect, suggesting energy and value.

## Shapes

The shape language is characterized by **large, friendly radii**. A base corner radius of 16px (1rem) is the standard for most interactive elements.

*   **Cards:** 24px (1.5rem) to emphasize their container-like quality for "Digital Tickets."
*   **Buttons & Inputs:** 12px to 16px for a modern, tactile feel.
*   **Chips & Tags:** Fully pill-shaped (capsule) to contrast against the more rectangular event cards.

## Components

### Buttons
Primary buttons are vibrant orange (#FF5722) with bold white text. Secondary buttons use a glassmorphic style with a subtle white border. All buttons should have a minimum height of 48px to ensure ease of interaction on mobile devices.

### Event Cards
High-contrast containers with a gradient overlay. The bottom section of the card should use glassmorphism to house ticket metadata (Price, Date, Venue) clearly against varying event imagery.

### Digital Ticket (QR)
The core component of the platform. It must be presented on a clean white or high-contrast surface to ensure scanners at event venues can read the QR code without interference from the dark UI.

### Navigation
Mobile-first bottom navigation with thin-line icons. The active state should be indicated by a vibrant blue (#00D1FF) glow or dot indicator.

### Input Fields
Dark-themed fields with a 1px border. When focused, the border should glow with the electric blue accent. Avoid all crypto-related terminology; use "Connect Profile" instead of "Connect Wallet" where possible.