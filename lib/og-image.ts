/**
 * Open Graph Image Generator
 * Generates OG images for dynamic pages
 */

export function generateOGImageUrl(
  title: string,
  type: 'page' | 'article' | 'investor' = 'page'
): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://handly.app';
  const params = new URLSearchParams({
    title,
    type,
  });

  return `${baseUrl}/api/og?${params.toString()}`;
}

export function getDefaultOGImage(): string {
  return `${process.env.NEXT_PUBLIC_SITE_URL || 'https://handly.app'}/og-image.png`;
}

export function generateMetaImage(
  title: string,
  subtitle?: string,
  type?: string
): {
  url: string;
  width: number;
  height: number;
  alt: string;
} {
  return {
    url: generateOGImageUrl(title, (type as 'page' | 'article' | 'investor') || 'page'),
    width: 1200,
    height: 630,
    alt: subtitle ? `${title} - ${subtitle}` : title,
  };
}
