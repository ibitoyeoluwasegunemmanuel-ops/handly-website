# Search Console & Analytics Setup Guide

This guide provides step-by-step instructions for setting up Google Search Console, Bing Webmaster Tools, and Analytics.

## 1. Google Search Console Setup

### Step 1: Add Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Choose "URL prefix" option
4. Enter: `https://handly.app`
5. Click "Continue"

### Step 2: Verify Ownership
Choose one of these verification methods:

**Option A: HTML File Upload (Recommended)**
1. Download the HTML file Google provides
2. Place it in the `public/` directory
3. Upload to your server
4. Verify in Search Console

**Option B: HTML Meta Tag**
1. Copy the meta tag from Google Search Console
2. Add to `app/layout.tsx` in the `<head>` section:
```typescript
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```
3. Deploy changes
4. Verify in Search Console

**Option C: DNS Record**
1. Add the TXT record to your domain DNS settings
2. Wait for DNS propagation (can take 24-48 hours)
3. Verify in Search Console

### Step 3: Configuration in app/layout.tsx

The verification meta tag is already configured in the metadata:
```typescript
verification: {
  google: "YOUR_GOOGLE_VERIFICATION_CODE",
}
```

Replace `YOUR_GOOGLE_VERIFICATION_CODE` with your actual code from Google Search Console.

### Step 4: Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Enter: `https://handly.app/sitemap.xml`
3. Click "Submit"

### Step 5: Monitor Performance
- **Performance**: Track impressions, clicks, CTR, average position
- **Coverage**: Check indexing status of all pages
- **Enhancements**: View structured data (rich results, mobile usability)
- **Links**: See which sites link to you

### Initial Setup Checklist
- [ ] Property verified
- [ ] Sitemap submitted
- [ ] robots.txt configured
- [ ] Mobile usability checked
- [ ] Core Web Vitals monitored

---

## 2. Bing Webmaster Tools Setup

### Step 1: Add Site
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Click "Add a site"
3. Enter: `https://handly.app`
4. Click "Add"

### Step 2: Verify Ownership
Choose verification method:

**Option A: XML Sitemap**
1. Enter sitemap URL: `https://handly.app/sitemap.xml`
2. Click "Verify"

**Option B: Meta Tag**
1. Copy the meta tag
2. Add to `app/layout.tsx`:
```typescript
<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
```

### Step 3: Submit Sitemap
1. Go to "Sitemaps"
2. Enter: `https://handly.app/sitemap.xml`
3. Click "Submit"

### Step 4: Monitor Performance
- **Site health**: Check crawl stats and errors
- **Search keywords**: Monitor top queries
- **Mobile usability**: Check mobile compatibility
- **Backlinks**: See inbound links

---

## 3. Google Analytics 4 Setup

### Already Configured
The app is already configured for GA4 in `app/layout.tsx`:
```typescript
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <Script strategy="afterInteractive" src={...} />
    {/* GA4 initialization */}
  </>
)}
```

### Step 1: Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin"
3. Under "Property", click "Create Property"
4. Name: "HANDLY Website"
5. Set timezone and currency to your preference
6. Click "Create"

### Step 2: Create Web Data Stream
1. Click "Data streams"
2. Click "Add stream"
3. Select "Web"
4. Enter stream name: "handly.app"
5. Enter website URL: `https://handly.app`
6. Click "Create stream"

### Step 3: Get Measurement ID
1. After stream creation, you'll see the Measurement ID (starts with G-)
2. Copy the ID
3. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Step 4: Verify Tracking
1. Deploy the website with the GA_ID environment variable
2. In Google Analytics, go to "Real-time"
3. Open your website in a browser
4. You should see active users in the Real-time report

### Step 5: Configure Events
The following events are already configured:

**Conversion Events:**
- `waitlist_signup` - User joins waitlist
- `contact_form_submit` - User submits contact form
- `investor_inquiry` - User inquires about investment
- `community_join` - User joins community
- `download_app` - User downloads app

**Engagement Events:**
- `page_view` - Page view
- `button_click` - Button click
- `form_start` - User starts filling a form
- `form_error` - Form validation error
- `link_click` - Internal link click
- `user_type_select` - User selects their type

### Step 6: Create Conversion Goals
1. Go to "Admin" → "Conversions"
2. Click "New conversion event"
3. Enter event name: `waitlist_signup`
4. Click "Create"

Repeat for these conversion events:
- `contact_form_submit`
- `investor_inquiry`
- `community_join`
- `download_app`

### Step 7: Set Up Custom Dashboards
1. Click "Customize" → "Create dashboard"
2. Add these metrics:
   - Users
   - Sessions
   - Conversion rate
   - Events (per event type)
   - Page views by page

### Step 8: Enable Google Signals
1. Go to "Admin" → "Data Settings" → "Data Collection"
2. Enable "Google Signals Data Collection"
3. This enables demographic and interest data

### Step 9: Set Up Alerts
1. Go to "Alerts"
2. Create alerts for:
   - Sudden traffic drop (>50%)
   - Conversion rate changes (>30%)
   - Bounce rate increases (>40%)

---

## 4. Environment Variables

Create `.env.local` with:
```env
NEXT_PUBLIC_SITE_URL=https://handly.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_APPSTORE_LINK=https://your-app-store-link
```

---

## 5. Performance Monitoring

### Google Search Console Checklist
- [ ] Property verified and added
- [ ] Sitemap submitted
- [ ] Mobile usability status checked
- [ ] Core Web Vitals monitored
- [ ] Coverage issues resolved
- [ ] Enhancements (rich results) enabled

### Google Analytics Checklist
- [ ] GA4 property created
- [ ] Measurement ID added to .env.local
- [ ] Tracking verified in Real-time
- [ ] Conversion events created
- [ ] Custom dashboards configured
- [ ] Alerts set up
- [ ] Google Signals enabled

### Bing Webmaster Tools Checklist
- [ ] Site verified
- [ ] Sitemap submitted
- [ ] Mobile usability checked
- [ ] Site health monitored

---

## 6. Ongoing Monitoring

### Weekly
- Check Google Search Console for coverage issues
- Review Google Analytics real-time traffic
- Monitor top search queries

### Monthly
- Review conversion metrics
- Analyze user behavior in Analytics
- Check page performance in Search Console
- Identify low-performing pages

### Quarterly
- Comprehensive SEO audit
- Competitor analysis
- Content gap analysis
- Technical SEO review

---

## 7. Common Issues & Solutions

### Issue: Google not indexing pages
**Solution:**
1. Check robots.txt allows indexing
2. Submit sitemap in Search Console
3. Use URL inspection tool
4. Check for noindex meta tags

### Issue: Low conversion rate
**Solution:**
1. Analyze user behavior with session recordings
2. Review form completion rates
3. Test CTA button placement
4. A/B test messaging

### Issue: High bounce rate
**Solution:**
1. Improve page load speed
2. Ensure mobile responsiveness
3. Improve content relevance
4. Add related content suggestions

### Issue: GA4 not tracking events
**Solution:**
1. Verify Measurement ID is correct
2. Check .env.local configuration
3. Use browser DevTools to inspect gtag calls
4. Ensure gtag is not blocked by ad blocker

---

## 8. Next Steps

After setup, focus on:
1. **Content Strategy** - Create valuable content for your target audience
2. **Link Building** - Build backlinks from authoritative sites
3. **Technical SEO** - Optimize page speed, mobile, and crawlability
4. **User Experience** - Improve engagement metrics
5. **Conversion Optimization** - Test and improve conversion rates
