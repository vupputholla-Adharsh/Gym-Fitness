# Gym Fitness App - Fitmaker

A modern, animated gym and fitness website built with Next.js, React, and Framer Motion. Inspired by professional animation patterns similar to xm.com.

## ✨ Features

- 🎨 **Modern, Responsive Design** - Beautiful UI that works on all devices
- ✨ **Smooth Scroll Animations** - Elements fade in and slide up as you scroll
- 🎭 **Interactive Hover Effects** - Engaging animations on cards, buttons, and links
- 🌊 **Parallax Effects** - Depth and movement for a dynamic experience
- 💫 **Particle Background** - Animated background particles
- 🎯 **Scroll-to-Top Button** - Smooth navigation back to top
- 📱 **Mobile-Friendly** - Fully responsive with mobile menu
- ⚡ **Fast & Optimized** - Built with Next.js for optimal performance
- 🎬 **Loading Animation** - Smooth page load experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Gym-Fitness/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section with animations
│   ├── Features.tsx      # Features grid
│   ├── About.tsx         # About section
│   ├── Programs.tsx      # Programs showcase
│   ├── Testimonials.tsx  # Customer testimonials
│   ├── Pricing.tsx       # Pricing plans
│   ├── Footer.tsx        # Footer component
│   ├── ScrollToTop.tsx  # Scroll to top button
│   ├── LoadingScreen.tsx # Loading animation
│   └── Particles.tsx     # Background particles
├── lib/
│   └── animations.ts     # Reusable animation variants
└── package.json
```

## 🎨 Animation Features

### Scroll Animations
- Elements fade in and slide up when scrolled into view
- Staggered animations for lists and grids
- Smooth parallax effects on hero section

### Interactive Animations
- Hover effects on cards (scale, lift, color change)
- Button animations (scale on hover/tap)
- Icon rotations and transforms
- Smooth transitions throughout

### Advanced Effects
- Mouse-following cursor effect
- Parallax background elements
- Floating particles
- Smooth page transitions

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Framer Motion** - Animation library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS (via className)

## 📱 Sections

1. **Header** - Sticky navigation with scroll effects
2. **Hero** - Animated hero section with call-to-action
3. **Features** - Grid of key features with icons
4. **About** - About section with statistics
5. **Programs** - Fitness programs showcase
6. **Testimonials** - Customer reviews
7. **Pricing** - Subscription plans
8. **Footer** - Links and social media

## 🎯 Customization

### Colors
The primary color (orange) can be changed in the components by replacing `orange-500` with your preferred color class.

### Content
All text content, features, programs, and pricing can be easily modified in the respective component files.

### Animations
Animation timings and effects can be adjusted in the component files or in `lib/animations.ts`.

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

Built with ❤️ using Next.js and Framer Motion
