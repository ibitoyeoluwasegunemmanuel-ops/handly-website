import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://handly.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Main pages
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1 },
    
    // Platform pages
    { url: `${baseUrl}/customers`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/workers`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/businesses`, changeFrequency: 'monthly' as const, priority: 0.9 },
    
    // Investor pages
    { url: `${baseUrl}/investors`, changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${baseUrl}/company`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/roadmap`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/traction`, changeFrequency: 'weekly' as const, priority: 0.9 },
    
    // Content pages
    { url: `${baseUrl}/success-stories`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/community`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/testimonials`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly' as const, priority: 0.6 },
    
    // Conversion pages
    { url: `${baseUrl}/waitlist`, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.7 },
    
    // Resource pages
    { url: `${baseUrl}/careers`, changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
