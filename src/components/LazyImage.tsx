
import React, { useState, useEffect, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setImageSrc(undefined);

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      src={imageSrc || 'https://placeholder.pics/svg/300x200/DEDEDE/555555/loading...'}
      alt={alt}
      className={cn(
        'lazy-image',
        isLoaded ? 'loaded' : 'loading',
        className
      )}
      {...props}
    />
  );
};

export default LazyImage;
