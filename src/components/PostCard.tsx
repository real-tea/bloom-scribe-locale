
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/data/posts';
import { useI18n } from '@/contexts/I18nContext';
import LazyImage from './LazyImage';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, featured = false }) => {
  const { t } = useI18n();
  
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(undefined, {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", 
      featured ? "md:grid md:grid-cols-2 md:gap-4" : ""
    )}>
      <div className={cn("h-48", featured ? "md:h-full" : "")}>
        <Link to={`/blog/${post.slug}`}>
          <LazyImage 
            src={post.coverImage} 
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
      
      <CardContent className={cn("p-6", featured ? "flex flex-col justify-center" : "")}>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-serif text-xl font-bold mb-2 hover:text-blog-accent transition-colors">{post.title}</h3>
        </Link>
        
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LazyImage 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
          
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>
      </CardContent>
      
      <CardFooter className={cn("px-6 py-4 border-t", featured ? "md:hidden" : "")}>
        <Link 
          to={`/blog/${post.slug}`} 
          className="text-blog-accent font-medium hover:text-blog-primary transition-colors"
        >
          {t('blog.readMore')} →
        </Link>
      </CardFooter>
    </Card>
  );
};

import { cn } from '@/lib/utils';

export default PostCard;
