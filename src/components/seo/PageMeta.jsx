import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PageMeta({ 
  title = "JOHIA Cubao", 
  description = "Jesus Our Hope International Assemblies - Cubao. A welcoming community where faith meets purpose.",
  image = "/images/general/outside.png"
}) {
  return (
    <Helmet>
      <title>{title === "JOHIA Cubao" ? title : `${title} | JOHIA Cubao`}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
