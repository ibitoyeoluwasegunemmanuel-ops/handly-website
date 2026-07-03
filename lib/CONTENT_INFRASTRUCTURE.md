# Content Infrastructure Setup Guide

This guide outlines how to set up a content management system for blogs, resources, and press materials.

---

## 1. Blog Architecture

### 1.1 Directory Structure

```
app/
├── blog/
│   ├── page.tsx (blog index)
│   ├── [slug]/
│   │   └── page.tsx (individual article)
│   └── categories/
│       └── [category]/
│           └── page.tsx
├── resources/
│   ├── page.tsx (resources hub)
│   ├── guides/
│   ├── case-studies/
│   └── whitepapers/
├── press/
│   ├── page.tsx (press center)
│   ├── releases/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── media-kit/
│       └── page.tsx
└── ...
```

### 1.2 Blog Data Structure

Create content in markdown format:

```
content/
├── blog/
│   ├── how-handly-works.md
│   ├── hiring-best-practices.md
│   └── success-story-jane-doe.md
├── resources/
│   ├── freelancer-guide.md
│   ├── customer-handbook.md
│   └── business-growth-toolkit.md
└── press/
    ├── series-a-announcement.md
    └── award-recognition.md
```

### 1.3 Blog Post Frontmatter

```markdown
---
title: "How to Hire the Right Worker on HANDLY"
slug: "how-to-hire-right-worker"
author: "HANDLY Team"
date: "2026-06-01"
modified: "2026-06-10"
category: "Hiring Tips"
tags: ["hiring", "workers", "best practices"]
image: "/blog/hiring-tips.jpg"
excerpt: "A guide to finding and hiring the perfect worker for your project."
readTime: 5
featured: true
---

Your article content here...
```

---

## 2. Blog Content Strategy

### 2.1 Content Pillars

**For Customers:**
1. Hiring & Recruitment
   - How to post a job
   - Writing effective job descriptions
   - Vetting workers
   - Pricing your project

2. Success Stories
   - Customer testimonials
   - Business growth stories
   - Industry-specific guides

3. Best Practices
   - Communication tips
   - Project management
   - Dispute resolution

**For Workers:**
1. Income & Earnings
   - How to earn more
   - Pricing your services
   - Building your profile

2. Growth & Development
   - Building a portfolio
   - Getting positive reviews
   - Scaling your business

3. Success Stories
   - Worker testimonials
   - Career growth stories
   - Market insights

**For Investors:**
1. Market Analysis
   - Market size & growth
   - Competitive landscape
   - Industry trends

2. Business Metrics
   - Traction & growth
   - Unit economics
   - Expansion plans

3. News & Updates
   - Company announcements
   - Funding news
   - Expansion updates

### 2.2 Publishing Schedule

```
Daily:  1 social media post
Weekly: 1-2 blog articles (customer/worker content)
Bi-weekly: 1 investor update
Monthly: 1 press release or major announcement
```

### 2.3 Content Themes by Month

```
January:   New Year Growth
February:  Love Your Work (Employer/Employee Relations)
March:     Spring Forward (Growth Strategies)
April:     Skills & Training
May:       Success Stories Month
June:      Mid-Year Metrics
July:      Summer Services
August:    Back to Business
September: Professional Development
October:   Growth & Scaling
November:  Gratitude & Community
December:  Year in Review
```

---

## 3. Blog Implementation

### 3.1 Markdown-based Blog (Recommended for MVP)

Install required packages:
```bash
npm install gray-matter remark remark-html
```

Create blog utilities:

```typescript
// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  modified: string;
  category: string;
  tags: string[];
  image: string;
  excerpt: string;
  readTime: number;
  featured: boolean;
  content: string;
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      content,
      ...data,
    } as BlogPost;
  } catch {
    return null;
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace('.md', '');
      return getBlogPost(slug);
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.category === category);
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return getAllBlogPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}
```

### 3.2 Blog Index Page

```typescript
// app/blog/page.tsx
import { Metadata } from 'next';
import { generateMetadata, pageMetadata } from '@/lib/metadata';
import { getAllBlogPosts, getBlogPostsByCategory } from '@/lib/blog';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generateMetadata({
  title: 'HANDLY Blog | Tips, Stories & Insights',
  description: 'Tips for hiring, earning more, and growing your business on HANDLY.',
  type: 'website',
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = [...new Set(posts.map(p => p.category))];
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  return (
    <>
      <SchemaMarkup schema={getBreadcrumbSchema(breadcrumbs)} id="blog-breadcrumb" />
      
      {/* Blog content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 mb-12">Tips, stories, and insights for HANDLY users</p>
          
          {/* Category filter */}
          <div className="flex gap-2 mb-12 overflow-x-auto">
            <button className="px-4 py-2 bg-handly-600 text-white rounded-full">All</button>
            {categories.map(cat => (
              <button key={cat} className="px-4 py-2 bg-gray-200 rounded-full">
                {cat}
              </button>
            ))}
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.slug} className="border rounded-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-sm text-handly-600">{post.category}</span>
                  <h2 className="text-xl font-bold mt-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <a href={`/blog/${post.slug}`} className="text-handly-600 font-semibold mt-4 inline-block">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

### 3.3 Individual Blog Post Page

```typescript
// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getArticleSchema } from '@/lib/schema';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {};
  }

  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    author: post.author,
    publishedDate: post.date,
    modifiedDate: post.modified,
    type: 'article',
  });
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  // Process markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.modified,
    author: post.author,
    url: `https://handly.app/blog/${post.slug}`,
  });

  return (
    <>
      <SchemaMarkup schema={articleSchema} id="article-schema" />

      <article className="max-w-2xl mx-auto px-4 py-20">
        <header className="mb-8">
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
          
          <span className="text-handly-600 text-sm font-semibold">{post.category}</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By {post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime} min read</span>
          </div>
        </header>

        {/* Article content */}
        <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: processedContent.toString() }} />

        {/* Tags */}
        <div className="flex gap-2 flex-wrap pt-8 border-t">
          {post.tags.map(tag => (
            <a key={tag} href={`/blog?tag=${tag}`} className="text-sm px-3 py-1 bg-gray-100 rounded-full hover:bg-handly-100">
              #{tag}
            </a>
          ))}
        </div>
      </article>
    </>
  );
}
```

---

## 4. Resources Hub

### 4.1 Resources Page Structure

```typescript
// app/resources/page.tsx
export default function ResourcesPage() {
  const resources = {
    guides: [
      { title: 'Customer Handbook', description: 'Complete guide for customers', link: '/resources/guides/customer-handbook.pdf' },
      { title: 'Worker Guide', description: 'Tips for workers', link: '/resources/guides/worker-guide.pdf' },
    ],
    caseStudies: [
      { title: 'Case Study: How Jane Built $10K/Month', company: 'Jane\'s Service Business', link: '/resources/case-studies/jane-story' },
    ],
    whitepapers: [
      { title: 'The Future of Work in Africa', authors: 'HANDLY Research', year: 2026, link: '/resources/whitepapers/future-of-work' },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Resources</h1>
      
      {/* Guides */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Guides & Handbooks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.guides.map(guide => (
            <a key={guide.title} href={guide.link} className="p-6 bg-white border rounded-lg hover:shadow-lg transition">
              <h3 className="font-bold mb-2">{guide.title}</h3>
              <p className="text-gray-600">{guide.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.caseStudies.map(study => (
            <a key={study.title} href={study.link} className="p-6 bg-white border rounded-lg hover:shadow-lg transition">
              <h3 className="font-bold mb-2">{study.title}</h3>
              <p className="text-gray-600">{study.company}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Whitepapers */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Whitepapers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.whitepapers.map(paper => (
            <a key={paper.title} href={paper.link} className="p-6 bg-white border rounded-lg hover:shadow-lg transition">
              <h3 className="font-bold mb-2">{paper.title}</h3>
              <p className="text-gray-600">{paper.authors} • {paper.year}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
```

---

## 5. Press Center

### 5.1 Press Release Structure

```typescript
// app/press/releases/[slug]/page.tsx
export default function PressReleasePage({ params }: { params: { slug: string } }) {
  return (
    <article className="max-w-2xl mx-auto px-4 py-20">
      <div className="mb-8">
        <span className="text-handly-600 text-sm">Press Release</span>
        <h1 className="text-4xl font-bold mt-2">Release Title</h1>
        <time className="text-gray-600 text-sm">June 26, 2026</time>
      </div>

      {/* Release content */}
      <div className="prose max-w-none">
        <p>FOR IMMEDIATE RELEASE</p>
        {/* Release body */}
      </div>

      {/* Media contact */}
      <aside className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold mb-2">Media Contact</h3>
        <p>Name: Media Relations Team</p>
        <p>Email: press@handly.app</p>
        <p>Phone: +234-XXX-XXX-XXXX</p>
      </aside>
    </article>
  );
}
```

### 5.2 Media Kit

```typescript
// app/press/media-kit/page.tsx
export default function MediaKitPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Media Kit</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
        <p>HANDLY is Africa's premier marketplace...</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Logo & Brand Assets</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 bg-white border rounded-lg">
            <img src="/logos/logo-full.png" alt="Logo Full" className="mb-4 w-32" />
            <a href="/downloads/logo-full.png" className="text-handly-600">Download PNG</a>
          </div>
          <div className="p-6 bg-white border rounded-lg">
            <img src="/logos/logo-mark.png" alt="Logo Mark" className="mb-4 w-32" />
            <a href="/downloads/logo-mark.png" className="text-handly-600">Download PNG</a>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Brand Guidelines</h2>
        <a href="/downloads/brand-guidelines.pdf" className="text-handly-600">
          Download Brand Guidelines (PDF)
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Executive Bios</h2>
        {/* Team bios */}
      </section>
    </div>
  );
}
```

---

## 6. Content SEO Best Practices

1. **Keyword Research**
   - Use tools like Ahrefs, SEMrush, Ubersuggest
   - Target long-tail keywords (3+ words)
   - Focus on user intent

2. **On-Page SEO**
   - Include keyword in title, H1, first 100 words
   - Use descriptive meta descriptions
   - Add internal links to related content

3. **Content Length**
   - Aim for 1,500+ words for blog posts
   - Use subheadings to structure content
   - Include visuals (images, diagrams)

4. **Link Building**
   - Link to authoritative sources
   - Build backlinks from industry sites
   - Guest post on popular publications

---

## 7. Content Calendar

Create a shared content calendar (Google Sheets or Notion):

```
Week 1: Blog post on hiring tips
Week 2: Case study feature
Week 3: How-to guide
Week 4: Success story
```

---

## 8. Analytics & Metrics

Track content performance:
- Page views per article
- Time on page
- Bounce rate
- Conversion rate (CTR to actions)
- Social shares

---

## 9. Next Steps

1. Set up markdown-based blog system
2. Create content calendar for next 3 months
3. Write 10-15 foundational blog posts
4. Set up Resources hub with 3-5 core guides
5. Create Press section with recent announcements
6. Monitor analytics and optimize based on performance
