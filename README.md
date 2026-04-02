# Dev Patel - AI-ML Developer Portfolio

Welcome to my personal portfolio! This project showcases my skills, experience, and passion as an AI-ML Developer specializing in machine learning, artificial intelligence, and modern web development.

# LIVE LINK !!
https://portfolio-v1-gamma-five.vercel.app/   

## 🚀 Recent Enhancements & Fixes

- **Projects Section**: Added interactive project cards with video demos and modal popups.
- **Performance**: Optimized animations with Framer Motion for smooth mobile experience.
- **UI Improvements**: Fixed navigation bar visibility and scaled the Music Player widget for mobile screens.
- **Email Integration**: Contact form powered by EmailJS for direct message delivery.

## 🛠️ Tech Stack

This project is built using modern web technologies:

- **Framework**: Next.js 15
- **Library**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Iconify React
- **Email Service**: EmailJS (for direct contact form delivery)
- **Audio**: HTML5 `<audio>` API (for background music playback)

---

## 📂 Project Structure

```text
.
├── public/                 # Static assets
│   ├── images/            # Project screenshots and images
│   ├── music/             # Audio files for music player
│   └── video/             # Project demo videos
│
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/          # API routes (guestbook)
│   │   ├── favicon.ico
│   │   ├── globals.css   # Global styles and Tailwind directives
│   │   ├── layout.tsx    # Root layout with metadata
│   │   └── page.tsx      # Main Portfolio Landing Page
│   │
│   ├── components/        # Reusable UI components
│   │   ├── portfolio/    # Section-specific components
│   │   │   ├── Background.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── GuestbookForm.tsx
│   │   │   ├── GuestbookList.tsx
│   │   │   ├── GuestbookSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── index.ts
│   │   │   ├── MusicSection.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── OverviewSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── TypewriterRole.tsx
│   │   │
│   │   ├── ui/           # Generic/Shared UI elements
│   │   │   └── 3d-card.tsx
│   │   │
│   │   ├── AnimatedBackground.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   │
│   └── lib/              # Utility functions
│       └── utils.ts
│
├── .env                  # Environment variables (EmailJS config)
├── components.json       # shadcn/ui configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/devpatel21-03/portfolio_v1.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Set up environment variables:**
   Create a `.env.local` file in the root directory with your EmailJS credentials:
   ```bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   Get these values from [https://dashboard.emailjs.com/admin/account](https://dashboard.emailjs.com/admin/account)

---

## 🎨 Design & Features

- **Projects Showcase**: Interactive project cards with image previews and video demos in modal popups.
- **Dynamic Backgrounds**: Animated gradient backgrounds using Framer Motion.
- **Responsive Layout**: Visually appealing on all device sizes.
- **Typewriter Effects**: Smooth, performant text animations in the Hero section.
- **Interactive Music Player**: A sleek, minimal music widget with play/pause, seek functionality, and continuous playback.
- **Guestbook**: Interactive guestbook feature with API integration.
- **Contact Form Delivery**: Email service with EmailJS for direct message functionality.
- **Dark Mode**: Full dark mode support with theme toggle.

---

_Built with ❤️ by Dev Patel._

