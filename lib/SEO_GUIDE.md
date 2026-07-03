# SEO Implementation Guide

This guide shows how to implement proper SEO metadata and structured data on your HANDLY pages.

## 1. Basic Page Metadata

For any page, use the `generateMetadata` function from `lib/metadata.ts`:

```typescript
import { Metadata } from 'next';
import { generateMetadata, pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata(pageMetadata.customers);

export default function CustomersPage() {
  return (/* ... */);
}
```

## 2. Schema Markup (Structured Data)

Add schema markup to pages using the `SchemaMarkup` component:

```typescript
import SchemaMarkup from '@/components/SchemaMarkup';
import { getBreadcrumbSchema } from '@/lib/schema';

export default function ArticlePage() {
  const schema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://handly.app' },
    { name: 'Resources', url: 'https://handly.app/resources' },
    { name: 'Article Title', url: 'https://handly.app/article' },
  ]);

  return (
    <>
      <SchemaMarkup schema={schema} id="article-breadcrumb" />
      {/* Page content */}
    </>
  );
}
```

### Available Schema Functions

- **getOrganizationSchema()** - For organization info on homepage
- **getWebsiteSchema()** - For website search functionality
- **getArticleSchema()** - For blog posts and articles
- **getBreadcrumbSchema()** - For navigation structure
- **getFAQSchema()** - For FAQ pages
- **getLocalBusinessSchema()** - For business locations
- **getProductSchema()** - For products/services

## 3. Tracking User Interactions

### Trackable Link Component

```typescript
import TrackableLink from '@/components/TrackableLink';

<TrackableLink 
  href="/investors" 
  trackingLabel="Investors Section"
>
  View Investor Materials
</TrackableLink>
```

### Trackable Button Component

```typescript
import TrackableButton from '@/components/TrackableButton';

<TrackableButton
  trackingLabel="Download App iOS"
  onClick={() => window.open(appStoreLink)}
>
  Download on App Store
</TrackableButton>
```

### Manual Event Tracking

```typescript
import { trackEvent, EventCategory, EventName } from '@/lib/analytics';

trackEvent(EventCategory.ENGAGEMENT, EventName.VIDEO_PLAY, {
  video_title: 'How HANDLY Works',
  duration: '3:45',
});
```

## 4. Forms with Analytics

Use `WaitlistForm` or `ContactForm` components - they automatically track:
- Form start
- User interactions
- Successful submissions
- Form errors

```typescript
import WaitlistForm from '@/components/WaitlistForm';

<WaitlistForm 
  defaultType="worker"
  onSuccess={() => console.log('Success!')}
/>
```

## 5. Implementing Breadcrumbs

Add breadcrumb navigation for better UX and SEO:

```typescript
export default function ArticlePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'Article Title', url: '/article' },
  ];

  return (
    <>
      <SchemaMarkup 
        schema={getBreadcrumbSchema(breadcrumbs)} 
        id="breadcrumbs"
      />
      
      {/* Display breadcrumbs */}
      <nav className="breadcrumbs">
        {breadcrumbs.map((item, i) => (
          <span key={i}>
            <Link href={item.url}>{item.name}</Link>
            {i < breadcrumbs.length - 1 && ' / '}
          </span>
        ))}
      </nav>
      
      {/* Rest of page */}
    </>
  );
}
```

## 6. FAQ Pages

```typescript
import { getFAQSchema } from '@/lib/schema';

export default function FAQPage() {
  const faqs = [
    {
      question: 'How does HANDLY work?',
      answer: 'HANDLY connects workers with customers...',
    },
    // More FAQs
  ];

  return (
    <>
      <SchemaMarkup schema={getFAQSchema(faqs)} id="faq-schema" />
      
      {/* Display FAQs */}
      <div className="faqs">
        {faqs.map((faq, i) => (
          <details key={i}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
```

## 7. Article/Blog Posts

```typescript
import { getArticleSchema } from '@/lib/schema';
import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Article Title',
  description: 'Article description...',
  type: 'article',
  author: 'HANDLY',
  publishedDate: '2026-06-01',
  modifiedDate: '2026-06-10',
});

export default function ArticlePage() {
  const articleData = {
    title: 'Article Title',
    description: 'Article description...',
    image: 'https://handly.app/article-image.jpg',
    datePublished: '2026-06-01',
    dateModified: '2026-06-10',
    author: 'HANDLY',
    url: 'https://handly.app/article',
  };

  return (
    <>
      <SchemaMarkup schema={getArticleSchema(articleData)} id="article-schema" />
      {/* Article content */}
    </>
  );
}
```

## 8. SEO Best Practices

1. **Unique Titles & Descriptions**
   - Keep titles under 60 characters
   - Keep descriptions under 160 characters
   - Include target keywords naturally

2. **Heading Structure**
   - Use H1 only once per page
   - Use H2, H3 hierarchically
   - Include keywords in headings

3. **Meta Tags**
   - Always include canonical URL
   - Use Open Graph tags for social sharing
   - Include Twitter card metadata

4. **Images**
   - Use descriptive alt text
   - Optimize image sizes
   - Use WebP format when possible

5. **Internal Links**
   - Use descriptive anchor text
   - Link to relevant pages
   - Maintain consistent URL structure

6. **Mobile Optimization**
   - Ensure responsive design
   - Test on mobile devices
   - Check mobile-friendly in Google Search Console

## 9. Monitoring & Analytics

Monitor your SEO performance:

1. **Google Search Console**
   - Track search queries
   - Monitor impressions and clicks
   - Fix indexing issues

2. **Google Analytics**
   - Track page views and sessions
   - Monitor bounce rate
   - Analyze user behavior

3. **Conversion Tracking**
   - Track waitlist signups
   - Monitor app downloads
   - Measure form submissions

Events are automatically tracked via the analytics system:
- `trackWaitlistSignup()` - When users join waitlist
- `trackContactForm()` - When users submit contact form
- `trackButtonClick()` - When users click tracked buttons
- `trackEvent()` - Custom event tracking

## 10. Environment Variables Required

```env
NEXT_PUBLIC_SITE_URL=https://handly.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXXXX
```

## 11. Sitemap & Robots.txt

Both are automatically generated:
- `public/robots.txt` - Crawler directives
- `app/sitemap.ts` - Dynamic sitemap

No action needed unless you want to add custom routes.
