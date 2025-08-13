import { useEffect } from 'react';

const SEO = ({ 
  title = "Adarsha Bro - Content Creator & Digital Marketing Expert",
  description = "Aadrasa Upreti (Adarsha Bro) - Content Creator specializing in Food and Digital Marketing. Watch engaging videos and get expert digital marketing consultation.",
  keywords = "Adarsha Bro, Aadrasa Upreti, Content Creator, Food Content, Digital Marketing, Nepal, YouTube, Social Media",
  image = "https://aadarsa.netlify.app/og-image.jpg",
  url = "https://aadarsa.netlify.app",
  type = "website",
  structuredData = null,
  noindex = false,
  article = null
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Aadrasa Upreti');
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    updateMetaTag('theme-color', '#8b5cf6');
    updateMetaTag('format-detection', 'telephone=no');
    
    // Update Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', title, true);
    updateMetaTag('og:site_name', 'Adarsha Bro', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Update Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', title);
    updateMetaTag('twitter:creator', '@adarshabro');
    updateMetaTag('twitter:site', '@adarshabro');
    
    // Article specific meta tags
    if (article) {
      updateMetaTag('article:author', article.author, true);
      updateMetaTag('article:published_time', article.publishedTime, true);
      updateMetaTag('article:modified_time', article.modifiedTime, true);
      if (article.tags) {
        article.tags.forEach(tag => {
          const meta = document.createElement('meta');
          meta.setAttribute('property', 'article:tag');
          meta.setAttribute('content', tag);
          document.head.appendChild(meta);
        });
      }
    }
    
    // Add structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"][data-dynamic="true"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.type = 'application/ld+json';
        structuredDataScript.setAttribute('data-dynamic', 'true');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
    
    
    // Cleanup function
    return () => {
      // Remove dynamic structured data on unmount
      const dynamicScript = document.querySelector('script[type="application/ld+json"][data-dynamic="true"]');
      if (dynamicScript) {
        dynamicScript.remove();
      }
    };
    
  }, [title, description, keywords, image, url, type, structuredData, noindex, article]);
  
  return null; // This component doesn't render anything
};

export default SEO;