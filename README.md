# HANDLY Website

Africa's freelancer platform - Modern responsive website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Waitlist Management** - Email capture with state/city tracking and referral system
- **Analytics Dashboard** - Admin panel to track waitlist growth and demographics
- **Multiple Pages** - Home, About, How It Works, Blog, FAQ, Careers, Contact, Community
- **Supabase Integration** - Secure database for waitlist entries
- **Social Integration** - WhatsApp, Telegram, Twitter, LinkedIn links
- **SEO Optimized** - Proper meta tags and structured content
- **Performance** - Fast loading with optimized assets

## 📋 Pages

- **Homepage** (`/`) - Hero section, features, stats counter, testimonials, CTA
- **Waitlist** (`/waitlist`) - Join waitlist with state/city selection
- **About** (`/about`) - Company mission, values, team
- **How It Works** (`/how-it-works`) - Step-by-step guides for customers and workers
- **FAQ** (`/faq`) - Frequently asked questions
- **Blog** (`/blog`) - Blog posts and insights
- **Testimonials** (`/testimonials`) - Success stories
- **Contact** (`/contact`) - Contact form and methods
- **Careers** (`/careers`) - Job listings and team info
- **Community** (`/community`) - Community channels and events
- **Admin** (`/admin`) - Analytics dashboard (password protected)

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment Ready**: Vercel, AWS, or any Node.js host

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your configuration to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Setup

Create a `waitlist` table in Supabase:

```sql
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20) NOT NULL,
  type VARCHAR(50) NOT NULL,
  state VARCHAR(100),
  city VARCHAR(100),
  referral_code VARCHAR(50),
  referred_by VARCHAR(255),
  created_at TIMESTAMP DEFAULT now()
);
```

## 🔐 Admin Dashboard

Access at `/admin` with password: `handly2024`

## 🚀 Deployment

```bash
npm run build
npm start
```

---

Built with ❤️ for Africa
