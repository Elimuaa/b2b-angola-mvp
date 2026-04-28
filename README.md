# B2B Angola — Marketplace Profissional

A premium, high-fidelity MVP for a Fiverr-style B2B marketplace tailored for Angola.

## 🎨 Design System
- **Aesthetic**: Apple Minimalist / Futuristic
- **Effects**: Glassmorphism, subtle shadows, blurred headers, glow effects
- **Font**: Inter (SF Pro feel)
- **Spacing**: Massive white space, clean layouts
- **Colors**: Brand blue (#0c93e7), with Angola-inspired accents

## ✨ Features

### 1. Home Page
- Premium hero section with animated search bar (glow effect)
- Category "pill" navigation (horizontal scroll on mobile)
- Featured "Destaque" service cards with Verified badges & hover effects
- Trust & Safety section with animated cards
- Dark CTA section with gradient effects

### 2. Search (`/busca`)
- Interactive search bar with glow focus effects
- Category pill filters
- Sort by relevance, rating, price
- Real-time filtering
- Responsive grid layout

### 3. Service Detail (`/servico/[id]`)
- Image gallery with thumbnails
- Seller info with KYC verification badge
- Package comparison (Básico / Standard / Premium)
- Multi-step order flow:
  - **Step 1**: Package confirmation with Escrow notice
  - **Step 2**: Payment method selection (Multicaixa Express, Bank Transfer, Card)
  - **Step 3**: Success confirmation with order details
- Review section

### 4. Messaging (`/mensagens`)
- Sleek chat interface with conversation list
- Real-time message sending (local state)
- Online/offline status indicators
- Read receipts (single/double check)
- Escrow protection notice in chat
- Mobile-responsive with slide-in chat panel

### 5. Trust & Safety
- Escrow protection badges throughout
- KYC verification status on seller profiles
- Multicaixa Express payment badges
- SSL encryption indicators
- Protected conversation notices

### 6. Responsive Design
- Mobile-first approach
- Native app feel on mobile
- Smooth animations with Framer Motion
- Glassmorphism header with blur
- Touch-friendly interactions

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```
The app runs on [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 📁 Project Structure
```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles & utilities
│   ├── busca/
│   │   └── page.tsx          # Search/Browse page
│   ├── servico/
│   │   └── [id]/
│   │       └── page.tsx      # Service detail + order flow
│   └── mensagens/
│       └── page.tsx          # Messaging UI
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Glassmorphism header
│   │   └── Footer.tsx        # Footer with trust badges
│   ├── home/
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Categories.tsx    # Category pills
│   │   ├── ServiceCard.tsx   # Service card component
│   │   ├── FeaturedServices.tsx
│   │   ├── TrustSection.tsx  # Trust & Safety features
│   │   └── CTASection.tsx    # Call to action
│   └── shared/               # Shared components
└── data/
    └── mock.ts               # Mock data & types
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npx vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Notes
- All currency values are in AOA (Angolan Kwanza)
- Portuguese (Angola) localization throughout
- Multicaixa Express is the primary payment method
- Mock data includes 6 services across multiple categories
- Order flow is a frontend prototype (no backend integration)
- Chat messages are stored in local state (no persistence)
