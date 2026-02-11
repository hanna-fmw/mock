# Zoey Website Modernization Project

## 🎯 Project Overview

Modernize zoey.se with a contemporary design inspired by eidra.com while maintaining Zoey's brand identity and content. This is a complete rebuild using modern Next.js architecture with a focus on performance, accessibility, and smooth animations.

**Current site:** https://zoey.se  
**Design inspiration:** https://www.eidra.com  
**Code reference:** https://github.com/rookieworkdev/rookie_2.0.git

---

## 🏗️ Project Phases

### Phase 1: Homepage (Current Focus)

- Start with the homepage implementation
- Establish the design system and component patterns
- Set up all infrastructure (SEO, metadata, animations)

### Phase 2: Full Site Expansion

- Apply patterns to all pages
- Content pages, blog, contact forms, etc.
- Future: Supabase integration for blog posts and dynamic content

---

## 🎨 Design Philosophy

### Visual Inspiration (from eidra.com)

Analyze and implement the following design elements:

**Layout & Structure:**

- Full-width sections with contained content
- Smooth section transitions and reveals
- Clean, spacious layouts with generous whitespace
- Responsive grid systems
- Modern card designs with subtle shadows/borders

**Typography:**

- Use Google Fonts similar to eidra.com's modern sans-serif
- Large, bold hero text
- Clear hierarchy (h1, h2, h3, body, small)
- Proper line-height and letter-spacing
- Readable font sizes (16px base minimum)

**Hero Section:**

- Hero video or high-quality image placeholder
- Full viewport height or near-full
- Overlay text with proper contrast
- Smooth fade-in animations on load
- If video not provided initially, use a high-quality static image or gradient background

**Navigation:**

- Clean, minimal header
- Sticky navigation on scroll
- Smooth scroll to sections
- Mobile-friendly hamburger menu
- Logo on the left, nav items on the right

**Animations & Interactions:**

- Smooth scroll animations
- Fade-in effects on scroll (sections reveal as you scroll)
- Hover states on cards and buttons
- Smooth page transitions
- Parallax effects where appropriate
- Loading states and skeleton screens

**Color Scheme:**

- Extract and document the color palette from eidra.com
- Primary, secondary, accent colors
- Neutral grays for text and backgrounds
- High contrast for accessibility
- Dark mode consideration (optional for phase 1)

**Spacing & Rhythm:**

- Consistent section padding (e.g., py-16 lg:py-24)
- Proper spacing between elements
- Coherent use of Tailwind spacing scale
- Visual rhythm throughout the page

**Media Placeholders:**

- Use placeholder images/videos where actual media isn't provided yet
- Maintain aspect ratios (16:9 for videos, appropriate ratios for images)
- Add proper alt text for accessibility

---

## 📚 Reference Repository (rookie_2.0)

Study and implement patterns from: https://github.com/rookieworkdev/rookie_2.0.git

### Critical Files to Analyze

**App Structure & Metadata:**

```
/app
  ├── layout.tsx          # Root layout, fonts, providers
  ├── template.tsx        # Page transition wrapper
  ├── not-found.tsx       # 404 page
  ├── error.tsx           # Error boundary
  ├── robots.ts           # SEO: Robots configuration
  ├── sitemap.ts          # SEO: Sitemap generation
  ├── manifest.ts         # PWA manifest
  ├── opengraph-image.tsx # OG image generation
  └── icon.tsx            # Favicon generation
```

**Styling System:**

- How they structure Tailwind config
- Custom CSS patterns
- shadcn component customizations
- Theme configuration
- Animation utilities

**Components Architecture:**

```
/components
  ├── ui/              # shadcn components (Button, Card, etc.)
  ├── sections/        # Page section components
  ├── layout/          # Header, Footer, Nav
  └── animations/      # Reusable animation wrappers
```

**Key Patterns to Copy:**

1. **Spacing & Layout System:**
   - How they define consistent section spacing
   - Container/wrapper components
   - Responsive breakpoint patterns
   - Grid and flex layouts

2. **shadcn Integration:**
   - Which components they use
   - How they customize default shadcn styles
   - Theme integration
   - Component composition patterns

3. **SEO Implementation:**
   - Metadata configuration
   - Structured data
   - OpenGraph image generation
   - Sitemap structure
   - Robots.txt patterns

4. **Animation System:**
   - Framer Motion setup
   - Scroll-triggered animations
   - Page transitions
   - Loading states

5. **TypeScript Patterns:**
   - Type definitions
   - Component prop types
   - API response types

---

## 🛠️ Tech Stack

### Core Framework

```json
{
	"framework": "Next.js 15+ (App Router)",
	"language": "TypeScript",
	"styling": "Tailwind CSS",
	"components": "shadcn/ui (latest)",
	"animations": "Framer Motion",
	"fonts": "next/font with Google Fonts"
}
```

### Architecture Preferences

- **Server Components:** Use by default for better performance
- **Server Actions:** For form submissions and data mutations
- **Client Components:** Only when needed (interactivity, animations, hooks)
- **TypeScript:** Strict mode, proper typing throughout

### Future Additions (Phase 2)

- Supabase for database (blog posts, dynamic content)
- Authentication (if needed)
- Analytics
- CMS integration

---

## 📝 Content Strategy

### Source

- **Primary:** Extract content from existing https://zoey.se
- **Fallback:** Use realistic placeholder text if content extraction is challenging
- **Text Volume:** Match approximately the amount of text on current homepage

### Content Structure (Homepage)

**Hero Section:**

- Headline: "När människor växer, växer organisationer" (When people grow, organizations grow)
- Subheading about HR & Talent Acquisition
- CTA buttons

**Services Section:**

- Rekrytera (Recruit)
- Anlita konsult (Hire consultant)
- Bli konsult (Become consultant)
- Lediga jobb (Open positions)

**Philosophy Section:**

- "Vi har en filosofi" (We have a philosophy)
- Three core values: Glädje (Joy), Utveckling (Development), Enkelhet (Simplicity)

**Team/Roles Section:**

- Marquee of different HR roles
- Could be animated

**Blog Section (Zoey Hub):**

- Latest 3 articles
- Link to full blog

**Footer:**

- Navigation links
- Contact information
- Social media
- Copyright

### Language

- Swedish (primary language)
- Keep all Swedish content intact
- Ensure proper Swedish character support (å, ä, ö)

---

## 🎯 Implementation Guidelines

### Step-by-Step Approach

1. **Project Setup**

   ```bash
   # Initialize Next.js with TypeScript
   npx create-next-app@latest zoey-modernized --typescript --tailwind --app
   cd zoey-modernized

   # Initialize shadcn
   npx shadcn@latest init

   # Install additional dependencies
   npm install framer-motion lucide-react
   ```

2. **Study Reference Repo**
   - Clone rookie_2.0
   - Analyze file structure
   - Document key patterns

3. **Setup Base Structure**
   - Create layout.tsx with proper metadata
   - Add template.tsx for transitions
   - Setup robots.ts, sitemap.ts, manifest.ts
   - Configure opengraph-image.tsx
   - Add error.tsx and not-found.tsx

4. **Design System**
   - Extract eidra.com color palette
   - Configure Tailwind theme
   - Setup Google Fonts
   - Create spacing utilities
   - Define animation variants

5. **Install shadcn Components**

   ```bash
   npx shadcn@latest add button
   npx shadcn@latest add card
   npx shadcn@latest add navigation-menu
   # Add others as needed
   ```

6. **Build Components**
   - Header/Navigation
   - Hero section with video/image
   - Service cards
   - Philosophy section
   - Role marquee
   - Blog cards
   - Footer

7. **Add Animations**
   - Scroll-triggered reveals
   - Smooth transitions
   - Hover effects
   - Loading states

8. **Content Population**
   - Extract from zoey.se or use placeholders
   - Ensure proper Swedish language support
   - Optimize images
   - Add proper alt text

9. **Optimization**
   - Image optimization
   - Bundle size
   - Lighthouse score
   - Accessibility audit

---

## 🎬 Animation & Interaction Patterns

### From eidra.com

- Fade-in on scroll (use Framer Motion's viewport animations)
- Smooth parallax effects
- Hover states with scale/shadow transitions
- Video autoplay with proper loading states
- Smooth scroll behavior

### Implementation

```typescript
// Example scroll animation pattern
import { motion } from 'framer-motion';

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Use in components:
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeInUpVariant}
>
  {/* Content */}
</motion.div>
```

---

## 📐 Component Guidelines

### shadcn Components

- Customize variants to match eidra.com aesthetic
- Maintain consistency across all components
- Document custom variants

### Section Components

Each major section should be its own component:

```
/components/sections
  ├── hero-section.tsx
  ├── services-section.tsx
  ├── philosophy-section.tsx
  ├── roles-marquee.tsx
  ├── blog-section.tsx
  └── cta-section.tsx
```

### Layout Components

```
/components/layout
  ├── header.tsx
  ├── nav.tsx
  ├── footer.tsx
  └── page-container.tsx
```

---

## 🔍 SEO & Metadata

### Required Metadata (from rookie_2.0)

```typescript
// app/layout.tsx
export const metadata: Metadata = {
	title: {
		default: 'Zoey - HR & Talent Acquisition',
		template: '%s | Zoey',
	},
	description:
		'När människor växer, växer organisationer. Zoey hjälper er med rekrytering och interim HR-konsulter.',
	keywords: ['HR', 'Talent Acquisition', 'Rekrytering', 'Sverige', 'Konsulter'],
	authors: [{ name: 'Zoey' }],
	openGraph: {
		type: 'website',
		locale: 'sv_SE',
		url: 'https://zoey.se',
		title: 'Zoey - HR & Talent Acquisition',
		description: 'När människor växer, växer organisationer.',
		siteName: 'Zoey',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Zoey - HR & Talent Acquisition',
		description: 'När människor växer, växer organisationer.',
	},
	robots: {
		index: true,
		follow: true,
	},
	// Add more as needed
}
```

---

## 🎨 Color Palette (Extract from eidra.com)

Document the colors you find on eidra.com and create a Tailwind theme:

```javascript
// tailwind.config.ts
module.exports = {
	theme: {
		extend: {
			colors: {
				// Update these after analyzing eidra.com
				primary: {
					DEFAULT: '#...',
					light: '#...',
					dark: '#...',
				},
				secondary: {
					DEFAULT: '#...',
				},
				accent: {
					DEFAULT: '#...',
				},
				neutral: {
					50: '#...',
					100: '#...',
					// ... etc
				},
			},
		},
	},
}
```

---

## 📦 File Structure

```
zoey-modernized/
├── app/
│   ├── layout.tsx
│   ├── template.tsx
│   ├── page.tsx              # Homepage
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── manifest.ts
│   ├── opengraph-image.tsx
│   ├── icon.tsx
│   └── globals.css
├── components/
│   ├── ui/                   # shadcn components
│   ├── sections/             # Homepage sections
│   ├── layout/               # Header, Footer, etc.
│   └── animations/           # Animation wrappers
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── public/
│   ├── images/
│   └── videos/
├── types/
│   └── index.ts
└── CLAUDE.md                 # This file
```

---

## ✅ Definition of Done (Homepage)

A homepage is complete when:

- [ ] All sections from zoey.se are recreated
- [ ] Design matches eidra.com aesthetic (layout, spacing, animations)
- [ ] All animations work smoothly
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] SEO metadata properly configured
- [ ] Accessibility score >90 (Lighthouse)
- [ ] Performance score >90 (Lighthouse)
- [ ] TypeScript with no errors
- [ ] Server components used by default
- [ ] Video/hero image properly integrated
- [ ] All links and navigation work
- [ ] Footer complete with all links
- [ ] Swedish language properly supported

---

## 🚀 Getting Started Checklist

When you start working on this project:

1. Study rookie_2.0 repo structure
2. Analyze eidra.com design in detail
3. Extract content from zoey.se
4. Create color palette documentation
5. Setup Next.js project with TypeScript
6. Configure Tailwind and shadcn
7. Build design system (colors, fonts, spacing)
8. Implement base layout (header, footer)
9. Build homepage sections one by one
10. Add animations and interactions
11. Test responsiveness
12. Optimize performance
13. Accessibility audit

---

## 🎥 Hero Video/Image

- **If hero video is provided:** Use it with proper lazy loading and autoplay
- **If not provided yet:** Ask user for video or use a high-quality placeholder
- **Temporary fallback:** Use a gradient or abstract background image
- **Format:** MP4 for web, optimized for fast loading
- **Dimensions:** Full width, aspect ratio 16:9 or similar

---

## 💬 Communication Style

- Ask clarifying questions when needed
- Provide progress updates
- Explain architectural decisions
- Suggest improvements based on best practices
- Flag any deviations from the reference patterns

---

## 📚 Resources

- **Next.js Docs:** https://nextjs.org/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Framer Motion:** https://www.framer.com/motion
- **Tailwind CSS:** https://tailwindcss.com
- **Reference repo:** https://github.com/rookieworkdev/rookie_2.0.git
- **Design inspiration:** https://www.eidra.com
- **Current site:** https://zoey.se

---

## 🎯 Success Criteria

The project is successful when:

1. Homepage looks modern and professional (matching eidra.com quality)
2. All technical best practices are followed (from rookie_2.0)
3. Content from zoey.se is properly integrated
4. Performance and accessibility are excellent
5. Code is clean, typed, and maintainable
6. Ready to scale to full site in Phase 2

---

**Remember:** Start with the homepage. Get it perfect. Then we'll scale these patterns to the entire site.
