# Pull Up Store - Design System

## Brand Identity
Premium streetwear with minimal, fashion-forward aesthetic

---

## Color Palette

### Primary Colors
- **Background**: White (`#FFFFFF`)
- **Foreground**: Near Black (`#171717`)
- **Accent**: Neutral Gray scale

### Status Colors
- **Success**: Green for confirmations
- **Error**: Red for destructive actions
- **Warning**: Amber for cautionary states
- **Info**: Blue for informational messages

---

## Typography

### Fonts
- **Display/Headings**: Playfair Display (serif)
  - Elegant, sophisticated, fashion-forward
  - Use for: H1-H6, hero text, section titles
  
- **Body Text**: Inter (sans-serif)
  - Clean, readable, modern
  - Use for: paragraphs, UI elements, buttons

### Type Scale
```
H1: 3.5rem (56px) - Hero headlines
H2: 2.25rem (36px) - Section titles
H3: 1.875rem (30px) - Subsections
H4: 1.5rem (24px) - Card titles
H5: 1.25rem (20px) - Component headers
H6: 1.125rem (18px) - Small headers
Body: 1rem (16px) - Default text
Small: 0.875rem (14px) - Captions, labels
XSmall: 0.75rem (12px) - Fine print
```

### Font Weights
- Regular: 400 (body text)
- Medium: 500 (emphasis)
- Semibold: 600 (headings, buttons)
- Bold: 700 (strong emphasis)

### Letter Spacing
- Default: 0
- Wide: 0.05em (uppercase labels)
- Wider: 0.1em (special emphasis)

---

## Spacing System
Based on 4px base unit:

```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
4xl: 6rem (96px)
```

---

## Components

### Buttons

#### Primary Button
- Background: Foreground color
- Text: Background color
- Use for: Main CTAs (Add to Cart, Checkout, Shop Now)

#### Secondary Button
- Border: 1px solid border color
- Background: Transparent
- Text: Foreground color
- Use for: Secondary actions (View Details, Cancel)

#### Ghost Button
- Background: Transparent
- Text: Foreground color
- Hover: Subtle background
- Use for: Navigation, icon buttons

#### Sizes
- Default: h-10 (40px)
- Large: h-12 (48px)
- Small: h-8 (32px)

### Cards

#### Product Card
- Border: None
- Background: Transparent
- Hover: Subtle accent background
- Image ratio: 3:4 (portrait)
- Padding: 0

#### Content Card
- Border: 1px solid border color
- Background: Card color
- Padding: 1.5rem (24px)
- Border radius: 0.625rem (10px)

### Forms

#### Input Fields
- Height: 2.75rem (44px)
- Border: 1px solid input color
- Focus: 2px ring in ring color
- Border radius: 0.5rem (8px)

#### Labels
- Font size: 0.875rem (14px)
- Font weight: 500
- Margin bottom: 0.5rem (8px)

---

## Layout

### Container
- Max width: 1280px (7xl)
- Padding: 1rem (16px) mobile, 1.5rem (24px) tablet, 2rem (32px) desktop

### Grid System
- **Product Grids**: 1 col mobile, 2 cols tablet, 3-4 cols desktop
- **Gap**: 2rem (32px)

### Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## Imagery

### Product Images
- Aspect ratio: 3:4 (portrait)
- Format: WebP with JPEG fallback
- Quality: 80%
- Sizes: Thumbnail (400px), Medium (800px), Large (1200px)

### Category Images
- Aspect ratio: 4:5
- Overlay: Black at 40% opacity
- Hover: Scale 1.1, 500ms transition

---

## Animations

### Transitions
- Default: 200ms ease
- Slow: 500ms ease-in-out (images, large movements)
- Fast: 150ms ease (hover states)

### Hover Effects
- Product cards: Scale image 1.05
- Buttons: Slight background color change
- Links: Color fade to muted-foreground

### Page Transitions
- Fade in: 300ms
- Slide up: 400ms with ease-out

---

## Best Practices

### Do's
✅ Use whitespace generously
✅ Keep imagery high-quality and consistent
✅ Maintain hierarchy with font sizes and weights
✅ Use subtle animations for delight
✅ Ensure sufficient color contrast
✅ Mobile-first responsive design

### Don'ts
❌ Overcrowd the interface
❌ Mix too many font families
❌ Use bright, saturated colors
❌ Add excessive animations
❌ Ignore loading states
❌ Forget empty states

---

## Component Library

### Installed shadcn/ui Components
- ✅ Button
- ✅ Card
- ✅ Badge
- ✅ Input
- ✅ Select
- ✅ Separator
- ✅ Sheet (for mobile menu, cart)
- ✅ Dialog (for modals)

### Additional Components Needed
- [ ] Accordion (for product details)
- [ ] Tabs (for product info sections)
- [ ] Toast (for notifications)
- [ ] Dropdown Menu (for user account)
- [ ] Checkbox (for filters)
- [ ] Radio Group (for size selection)
- [ ] Skeleton (for loading states)
- [ ] Carousel (for product images)

---

## Accessibility

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus indicators
- Logical tab order

### Screen Readers
- Semantic HTML elements
- ARIA labels where needed
- Alt text for all images

### Color Contrast
- Minimum 4.5:1 for normal text
- Minimum 3:1 for large text
- Test with tools like WebAIM

---

## File Structure

```
/app
  /shop          - Product listing
  /products/[id] - Product detail
  /cart          - Shopping cart
  /checkout      - Checkout flow
  /account       - User account
  /about         - About page
  /contact       - Contact page
  
/components
  /ui            - shadcn/ui components
  product-card.tsx
  navigation.tsx
  footer.tsx
  container.tsx
  
/lib
  utils.ts       - Utility functions
  
/public
  /images        - Static images
```
