import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'MEACS - Middle Easterners and Africans in Cybersecurity',
  description = 'Empowering cybersecurity professionals of Middle Eastern and African heritage through community, education, and mentorship.',
  keywords = [
    'cybersecurity',
    'middle east',
    'africa',
    'technology',
    'mentorship',
    'professional development',
    'diversity in tech',
    'security professionals',
    'tech community',
    'MEACS'
  ],
  image = 'https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
  url = 'https://meacs.org'
}: SEOProps) {
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="MEACS" />
      <link rel="canonical" href={url} />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'MEACS',
          description,
          url,
          logo: image,
          sameAs: [
            'https://twitter.com/meacs',
            'https://linkedin.com/company/meacs'
          ]
        })}
      </script>
    </Helmet>
  );
}