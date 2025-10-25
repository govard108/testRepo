# Changelog

## [Unreleased] - Theme Toggle, Sidebar, and SVG Icons Update

### Added
- **Theme Toggle**: Added light/dark theme toggle with light theme as default
  - Theme preference saved to localStorage
  - Smooth transitions between themes
  - Icon animations on theme switch
  
- **Collapsible Sidebar**: Added left sidebar navigation inspired by app.daily.dev
  - Collapsible/expandable functionality
  - State persisted in localStorage
  - Tooltips shown when collapsed
  - Mobile responsive (auto-collapsed on mobile)
  
- **Category Pages**: Added dynamic category pages
  - Each category has its own page at `/category/[category-slug]/`
  - Displays all posts in that category
  - Cyrillic category names transliterated to Latin for URLs
  
- **SVG Icons**: Replaced all emoji with lucide-astro SVG icons
  - Hero section icons (Layers, Rocket, Bot, Zap, ArrowRight)
  - Category icons (Bot, Building2, Settings, Zap, Rocket, etc.)
  - Navigation icons (Home, Tags, Rss)
  - UI icons (Sun, Moon, Eye, ArrowRight, ChevronLeft)
  
- **Hero Background**: Added decorative SVG pattern background to hero section
  - Gradient overlay
  - Responsive opacity based on theme

### Changed
- Updated `Categories` component to link to proper category pages
- Updated header to be fixed with proper spacing for sidebar
- Updated footer and main content to respect sidebar width
- Updated theme system with CSS variables for light and dark themes
- Improved responsive design for mobile devices

### Technical Details
- Installed `lucide-astro` package for SVG icons
- Created `/src/utils/slugify.ts` for Cyrillic-to-Latin transliteration
- Created `/src/components/Sidebar.astro` for navigation
- Created `/src/components/ThemeToggle.astro` for theme switching
- Created `/src/pages/category/[category]/index.astro` for category pages
- Updated CSS with light theme as default and dark theme variant
