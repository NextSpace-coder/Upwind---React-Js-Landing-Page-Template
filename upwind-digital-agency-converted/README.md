# Digital Agency Landing Page Template

A modern, responsive landing page template built for digital agencies and creative professionals. Features multiple homepage variations, smooth animations, and a clean, professional design.

## Project Type

**Landing Page Template** - Multi-variation landing page for digital agencies, creative studios, and business services

## Main Features

- 🎨 9 Different Homepage Variations
- 📱 Fully Responsive Design
- ⚡ Smooth Animations and Transitions
- 🎯 Modern UI Components
- 🌙 Dark/Light Theme Switcher
- 📧 Contact Forms
- 💼 Portfolio Showcase
- 📝 Blog Section
- 🔐 Authentication Pages
- 💰 Pricing Tables

## Technology Stack

- **Frontend Framework**: React 19+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.1+
- **Routing**: React Router Dom 7+
- **Animations**: React Type Animation, React CountUp
- **UI Components**: Custom Tailwind Components
- **Image Gallery**: Yet Another React Lightbox
- **Slider**: Tiny Slider React
- **Scroll Effects**: React Scroll
- **Third-party Integrations**: Supabase (ready for backend integration)

## Project Structure

```
├── src/
│   ├── assets/
│   │   ├── css/           # Custom styles and Tailwind config
│   │   ├── images/        # Static images and assets
│   │   └── fonts/         # Icon fonts
│   ├── component/         # Reusable components
│   │   ├── About.jsx      # About section
│   │   ├── Blog.jsx       # Blog listing
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Footer.jsx     # Site footer
│   │   ├── Portfolio.jsx  # Portfolio showcase
│   │   ├── Pricing.jsx    # Pricing tables
│   │   ├── Services.jsx   # Services section
│   │   ├── Testimonial.jsx# Client testimonials
│   │   └── navbar.jsx     # Navigation header
│   ├── pages/            # Page components
│   │   ├── auth/         # Authentication pages
│   │   ├── index.jsx     # Homepage variation 1
│   │   ├── index-two.jsx # Homepage variation 2
│   │   ├── index-three.jsx # Homepage variation 3
│   │   └── [other variations]
│   ├── data/             # Static data
│   └── integrations/     # Third-party integrations
│       └── supabase/     # Supabase configuration
└── public/               # Static assets
```

## Page Functionality

### Homepage Variations
- **Main Homepage (/)**: Full-featured landing page with hero, services, about, portfolio, testimonials, blog, and contact sections
- **Homepage Two**: Alternative layout with different hero design
- **Homepage Three**: Creative agency focused layout
- **Homepage Four**: Corporate business layout
- **Homepage Five**: Startup-focused design
- **Homepage Six**: Portfolio-heavy layout
- **Homepage Seven**: Service-focused layout
- **Homepage Eight**: Minimal design approach
- **Homepage Nine**: Blog-focused layout

### Additional Pages
- **Portfolio Detail**: Individual portfolio item showcase
- **Blog Detail**: Individual blog post pages
- **Authentication**: Login, signup, and password reset forms

### Key Sections
- **Hero Section**: Animated text with multiple business focus options
- **Services**: Highlighting core business services
- **About**: Company/agency introduction
- **Portfolio**: Project showcase with filtering
- **Testimonials**: Client feedback carousel
- **Pricing**: Service packages and pricing plans
- **Blog**: Latest articles and insights
- **Contact**: Contact form and information

## Installation & Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Start development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Build for production:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Configuration

### Environment Variables
Create a `.env` file for configuration:
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Customization
- **Colors**: Modify Tailwind config for brand colors
- **Content**: Update data files in `src/data/` directory
- **Images**: Replace assets in `public/images/` and `src/assets/images/`
- **Components**: Customize components in `src/component/` directory

## Features in Detail

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### Performance
- Vite for fast development and building
- Optimized images and assets
- Lazy loading where applicable

### SEO Ready
- Semantic HTML structure
- Meta tags configured
- Social media integration ready

### Theme Support
- Light/Dark mode switcher
- Consistent theming across components
- Smooth theme transitions

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
This template is ready for commercial use and customization.