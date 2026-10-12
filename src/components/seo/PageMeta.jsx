import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PageMeta({ 
  title = "JOHIA Cubao", 
  description = "Jesus Our Hope International Assemblies - Cubao. A welcoming community where faith meets purpose.",
  image = "/images/general/og-image.png"
}) {
  const siteUrl = "https://johiacubao.com";
  const resolvedImage = image
    ? (image.startsWith("http") ? image : `${siteUrl}${image}`)
    : `${siteUrl}/images/general/og-image.png`;
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;

  return (
    <Helmet>
      <title>{title === "JOHIA Cubao" ? title : `${title} | JOHIA Cubao`}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook / Messenger */}
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="JOHIA Cubao" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title === "JOHIA Cubao" ? title : `${title} | JOHIA Cubao`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:secure_url" content={resolvedImage} />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title === "JOHIA Cubao" ? title : `${title} | JOHIA Cubao`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />
    </Helmet>
  );
}
