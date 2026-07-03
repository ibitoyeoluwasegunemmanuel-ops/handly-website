import { Metadata } from 'next';

export const siteConfig = {
  name: 'HANDLY',
  description: 'Africa\'s premier marketplace connecting customers, workers, and businesses. Instant access to trusted talent. Fair rates. Real results.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://handly.app',
  ogImage: '/og-image.png',
  twitter: '@handlyafrica',
  linkedIn: 'handly',
  facebook: 'handlyafrica',
  email: 'hello@handly.app',
};

export interface PageMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

export function generateMetadata(page: PageMetadata): Metadata {
  const url = page.url || siteConfig.url;
  const image = page.image || siteConfig.ogImage;

  return {
    title: page.title,
    description: page.description,
    keywords: [
      'marketplace',
      'workers',
      'services',
      'Africa',
      'jobs',
      'freelance',
      'businesses',
      'hiring',
    ],
    authors: [{ name: page.author || 'HANDLY' }],
    creator: 'HANDLY',
    publisher: 'HANDLY',
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: page.type || 'website',
      url,
      title: page.title,
      description: page.description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [image],
      creator: siteConfig.twitter,
    },
    other: {
      'linkedin:creator': siteConfig.email,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
    },
  };
}

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: 'HANDLY - The Operating System for Services & Work in Africa',
    description: 'Find trusted workers, hire artisans, grow your business, and earn more. HANDLY connects customers, workers, and businesses across Africa.',
    url: siteConfig.url,
  },
  investors: {
    title: 'Investors - HANDLY | Funding & Growth Opportunity',
    description: 'Discover why HANDLY is the most promising services marketplace in Africa. 50K+ users, ₦480K/month revenue, 300:1 LTV:CAC ratio.',
    type: 'article',
  },
  company: {
    title: 'Company - HANDLY | Vision & Mission',
    description: 'Learn about HANDLY\'s mission to connect workers and customers across Africa. Our vision, values, and the problem we\'re solving.',
    type: 'article',
  },
  roadmap: {
    title: 'Roadmap - HANDLY | Product & Growth Plan',
    description: 'HANDLY\'s product roadmap from MVP launch to pan-African market leader. Milestones, features, and growth projections.',
    type: 'article',
  },
  traction: {
    title: 'Traction Dashboard - HANDLY | Real-Time Metrics',
    description: 'Real-time metrics showing HANDLY\'s market-leading growth. 50K+ users, 45% MoM growth, ₦480K/month revenue.',
    type: 'article',
  },
  customers: {
    title: 'For Customers - HANDLY | Post Jobs & Hire Workers',
    description: 'Post jobs and hire trusted workers in minutes. Access verified artisans and professionals across Africa.',
  },
  workers: {
    title: 'For Workers - HANDLY | Get Discovered & Earn More',
    description: 'Get discovered by customers, build your reputation, and earn fair rates. Join thousands of workers earning on HANDLY.',
  },
  businesses: {
    title: 'For Businesses - HANDLY | Grow Your Business',
    description: 'Reach local customers, manage orders, and grow your sales. List your business and attract customers on HANDLY.',
  },
  successStories: {
    title: 'Success Stories - HANDLY | Real Impact',
    description: 'See how workers, artisans, customers, and businesses are transforming their lives with HANDLY.',
    type: 'article',
  },
  community: {
    title: 'Community - HANDLY | Join Our Network',
    description: 'Join our thriving community of workers, artisans, customers, and businesses. Network, learn, and grow together.',
  },
  waitlist: {
    title: 'Join HANDLY Waitlist',
    description: 'Be among the first to access HANDLY when we launch in your city. Join thousands already waiting.',
  },
};
