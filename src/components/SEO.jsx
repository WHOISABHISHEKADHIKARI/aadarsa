import { useEffect } from 'react';

const SEO = ({ 
  title = "Adarsha Bro - Content Creator & Digital Marketing Expert",
  description = "Aadrasa Upreti (Adarsha Bro) - Content Creator specializing in Food and Digital Marketing. Watch engaging videos and get expert digital marketing consultation.",
  keywords = "Adarsha Bro, Aadrasa Upreti, Content Creator, Food Content, Digital Marketing, Nepal, YouTube, Social Media",
  image = "https://aadarsa.netlify.app/og-image.jpg",
  url = "https://aadarsa.netlify.app",
  type = "website"
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
    updateMetaTag('robots', 'index, follow');
    
    // Update Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Adarsha Bro', true);
    
    // Update Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:creator', '@adarshabro');
    
  }, [title, description, keywords, image, url, type]);
  
  return null; // This component doesn't render anything
};

export default SEO;