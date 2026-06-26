# International & Multi-Country SEO Setup Guide

This guide provides instructions for preparing the HANDLY website for expansion to multiple countries.

## 1. Current Structure (Single Country - Nigeria)

Currently, the site is structured as:
- Domain: `handly.app`
- Language: English
- Country: Nigeria (primary market)

---

## 2. Multi-Country Architecture Options

### Option A: Subdomains (Recommended for HANDLY)
```
ng.handly.app (Nigeria)
gh.handly.app (Ghana)
ke.handly.app (Kenya)
etc.
```

**Pros:**
- Independent SEO for each country
- Easier server/CDN optimization per country
- Can customize content per country
- Easier analytics separation

**Cons:**
- More complex deployment
- Each subdomain needs separate verification

### Option B: Subfolders
```
handly.app/ng/ (Nigeria)
handly.app/gh/ (Ghana)
handly.app/ke/ (Kenya)
```

**Pros:**
- All on one domain (easier management)
- Shared domain authority benefits

**Cons:**
- More complex URL structure
- Harder to customize per country

### Option C: Country-Specific Domains
```
handly.ng (Nigeria)
handly.gh (Ghana)
handly.ke (Kenya)
```

**Pros:**
- Local domain extensions
- Strong country signal

**Cons:**
- Expensive (multiple domain registrations)
- Complex brand management

**RECOMMENDATION: Use Option A (Subdomains) for HANDLY**

---

## 3. Implementation: Subdomain Structure

### 3.1 DNS Configuration

Add DNS records for each country:
```
CNAME ng.handly.app → handly-ng.vercel.app (or your hosting)
CNAME gh.handly.app → handly-gh.vercel.app
CNAME ke.handly.app → handly-ke.vercel.app
```

### 3.2 Next.js App Router Configuration

Create separate app directories for each country:

```
app/
├── layout.tsx (global layout)
├── page.tsx (global home)
├── [country]/
│   ├── layout.tsx (country-specific layout)
│   ├── page.tsx (country home)
│   ├── customers/
│   ├── workers/
│   ├── investors/
│   └── ...
├── api/
└── ...
```

Or, with middleware for subdomain routing:

```typescript
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { hostname } = request.nextUrl;
  
  // Extract country from subdomain
  const countryCode = hostname.split('.')[0];
  
  if (['ng', 'gh', 'ke'].includes(countryCode)) {
    // Rewrite to country-specific route
    return NextResponse.rewrite(
      new URL(`/${countryCode}${request.nextUrl.pathname}`, request.url)
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static|public).*)'],
};
```

### 3.3 Environment Configuration by Country

Create country-specific environment files:
```
.env.local
.env.ng.local
.env.gh.local
.env.ke.local
```

Example `.env.ng.local`:
```env
NEXT_PUBLIC_SITE_URL=https://ng.handly.app
NEXT_PUBLIC_COUNTRY=NG
NEXT_PUBLIC_CURRENCY=NGN
NEXT_PUBLIC_LANGUAGE=en-NG
NEXT_PUBLIC_PHONE_PREFIX=+234
```

---

## 4. Localization Setup

### 4.1 Translation Infrastructure

Create country/language-specific content:

```typescript
// lib/localization.ts
export const locales = {
  NG: {
    name: 'Nigeria',
    language: 'en',
    currency: 'NGN',
    phonePrefix: '+234',
    currency_symbol: '₦',
  },
  GH: {
    name: 'Ghana',
    language: 'en',
    currency: 'GHS',
    phonePrefix: '+233',
    currency_symbol: 'GH₵',
  },
  KE: {
    name: 'Kenya',
    language: 'en',
    currency: 'KES',
    phonePrefix: '+254',
    currency_symbol: 'KSh',
  },
};

export function getLocale(countryCode: string) {
  return locales[countryCode as keyof typeof locales] || locales.NG;
}
```

### 4.2 Content Localization

Create country-specific content variations:

```typescript
// lib/content.ts
export const countryContent = {
  NG: {
    states: ['Lagos', 'Abuja', 'Enugu', ...],
    banks: ['Access Bank', 'GTBank', 'First Bank', ...],
    popular_services: ['Electrical Work', 'Plumbing', ...],
  },
  GH: {
    states: ['Accra', 'Kumasi', 'Takoradi', ...],
    banks: ['GCB Bank', 'Barclays', 'Stanbic', ...],
    popular_services: ['Carpentry', 'Masonry', ...],
  },
  KE: {
    states: ['Nairobi', 'Mombasa', 'Kisumu', ...],
    banks: ['Safaricom', 'Equity Bank', 'KCB', ...],
    popular_services: ['Vehicle Repair', 'Home Services', ...],
  },
};
```

### 4.3 URL Metadata by Country

```typescript
// lib/metadata.ts
export const countryMetadata: Record<string, PageMetadata> = {
  NG: {
    title: 'HANDLY Nigeria | Hire Local Talent, Grow Your Business',
    description: 'Connect with skilled workers across Nigeria. Post jobs in Lagos, Abuja, Port Harcourt and 30+ states. Instant matching. Secure payments. Real results.',
    keywords: 'freelance nigeria, hire workers, jobs in lagos, skilled workers, local talent marketplace',
  },
  GH: {
    title: 'HANDLY Ghana | Trusted Marketplace for Workers & Customers',
    description: 'Find trusted workers in Accra, Kumasi, and across Ghana. Post jobs, connect with skilled professionals, grow your business with HANDLY.',
    keywords: 'freelance ghana, hire workers accra, jobs in kumasi, skilled workers ghana',
  },
  KE: {
    title: 'HANDLY Kenya | Connect with Talented Workers in Nairobi & Beyond',
    description: 'Hire verified workers in Nairobi, Mombasa, and across Kenya. Instant job matching. Fair rates. Secure payments. Grow your business.',
    keywords: 'freelance kenya, hire workers nairobi, jobs in kenya, skilled workers kenya',
  },
};
```

---

## 5. SEO Implementation by Country

### 5.1 Hreflang Tags

Add language/region alternates to all pages:

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  alternates: {
    languages: {
      'en-NG': 'https://ng.handly.app',
      'en-GH': 'https://gh.handly.app',
      'en-KE': 'https://ke.handly.app',
      'x-default': 'https://handly.app',
    },
  },
};
```

### 5.2 Country-Specific Sitemaps

Generate separate sitemaps for each country:

```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const countryCode = process.env.NEXT_PUBLIC_COUNTRY || 'NG';
  const baseUrl = `https://${countryCode.toLowerCase()}.handly.app`;
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // ... rest of routes
  ];
}
```

### 5.3 Structured Data - Local Business Schema

```typescript
// lib/schema.ts
export function getLocalBusinessSchema(countryCode: string) {
  const countries: Record<string, any> = {
    NG: {
      name: 'HANDLY Nigeria',
      address: 'Lagos, Nigeria',
      telephone: '+234-XXX-XXX-XXXX',
    },
    GH: {
      name: 'HANDLY Ghana',
      address: 'Accra, Ghana',
      telephone: '+233-XXX-XXX-XXXX',
    },
    KE: {
      name: 'HANDLY Kenya',
      address: 'Nairobi, Kenya',
      telephone: '+254-XXX-XXX-XXXX',
    },
  };
  
  const data = countries[countryCode] || countries['NG'];
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    address: {
      '@type': 'PostalAddress',
      addressCountry: countryCode,
      addressLocality: data.address,
    },
    telephone: data.telephone,
    url: `https://${countryCode.toLowerCase()}.handly.app`,
  };
}
```

---

## 6. Payment & Currency Setup

### 6.1 Multi-Currency Support

```typescript
// lib/currency.ts
export const currencies = {
  NG: { code: 'NGN', symbol: '₦', rate: 1 },
  GH: { code: 'GHS', symbol: 'GH₵', rate: 0.08 },
  KE: { code: 'KES', symbol: 'KSh', rate: 0.007 },
};

export function convertCurrency(amount: number, from: string, to: string) {
  const fromRate = currencies[from as keyof typeof currencies].rate;
  const toRate = currencies[to as keyof typeof currencies].rate;
  return (amount / fromRate) * toRate;
}
```

### 6.2 Payment Gateway Integration

```typescript
// lib/payments.ts
export function getPaymentGateway(countryCode: string) {
  const gateways: Record<string, string> = {
    NG: 'paystack', // Nigeria - use Paystack
    GH: 'paystack', // Ghana - use Paystack
    KE: 'mpesa', // Kenya - use M-Pesa
  };
  
  return gateways[countryCode] || 'paystack';
}
```

---

## 7. Search Console Setup per Country

For each country subdomain:

1. Go to Google Search Console
2. Add property: `https://ng.handly.app`
3. Verify ownership
4. Submit sitemap: `https://ng.handly.app/sitemap.xml`
5. Set country targeting: Admin → Settings → Geographic target
6. Repeat for `gh.handly.app`, `ke.handly.app`

---

## 8. Analytics Configuration

### 8.1 Separate GA4 Properties

Create separate GA4 properties for each country:
- HANDLY Nigeria
- HANDLY Ghana
- HANDLY Kenya

Each with its own Measurement ID.

### 8.2 Cross-Property Analytics

Or use audience and view filters in a single property to segment by country.

---

## 9. Gradual Rollout Strategy

### Phase 1: Nigeria (Current)
- ✅ Already live on `handly.app`
- Redirect to `ng.handly.app` later

### Phase 2: Add Ghana (Month 7-8)
- Deploy to `gh.handly.app`
- Customize content, currency, payment gateway
- Market launch in Ghana

### Phase 3: Add Kenya (Month 9-10)
- Deploy to `ke.handly.app`
- Customize for Kenya market
- Market launch in Kenya

### Phase 4: Multi-country Portal
- Create `handly.app/locations` showing all countries
- Allow users to select country
- Redirect to appropriate subdomain

---

## 10. Multi-Language Support (Future)

For future language support:

```typescript
// Subdomain + language structure
// ng.handly.app/en (English - Nigeria)
// ng.handly.app/yo (Yoruba - Nigeria)
// gh.handly.app/en (English - Ghana)
// gh.handly.app/tw (Twi - Ghana)
```

Use i18n Next.js package:
```bash
npm install next-intl
```

---

## 11. Verification Checklist

### Before Adding New Country:
- [ ] Country-specific environment variables configured
- [ ] Content localized (states, currencies, services)
- [ ] Payment gateway verified for that country
- [ ] Phone format updated for country
- [ ] Currency conversions set up
- [ ] DNS records configured (if using subdomains)
- [ ] GA4 property created for country
- [ ] Search Console property added for country
- [ ] Hreflang tags configured
- [ ] Sitemap submitted to Search Console
- [ ] Content reviewed for cultural appropriateness
- [ ] Legal requirements checked (data, payments, terms)

---

## 12. Next Steps

1. **Immediate (before Ghana launch):** 
   - Set up subdomain structure
   - Configure Ghana-specific content
   - Test payment gateway with Paystack Ghana account

2. **Before Kenya launch:**
   - Set up Kenya subdomain
   - Integrate M-Pesa for Kenya
   - Customize content for Kenya market

3. **Post-launch:**
   - Monitor search console for each country
   - Track conversion metrics by country
   - Optimize based on country-specific user behavior
