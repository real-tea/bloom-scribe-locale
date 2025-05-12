
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '@/contexts/I18nContext';
import { getPostBySlug } from '@/data/posts';
import LazyImage from '@/components/LazyImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();
  
  const post = slug ? getPostBySlug(slug) : undefined;
  
  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
    // Set the document title
    if (post) {
      document.title = `${post.title} | Blog`;
    }
    
    return () => {
      document.title = 'Modern Blog';
    };
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }
  
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(undefined, {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section with cover image */}
        <div className="w-full h-80 md:h-96 relative">
          <LazyImage
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="bg-white/10 backdrop-blur-sm text-white">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">{post.title}</h1>
          </div>
        </div>
        
        {/* Post metadata */}
        <div className="container mx-auto px-4 py-8 border-b">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <LazyImage
                src={post.author.avatar}
                alt={post.author.name}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-500">{t('blog.by')}</p>
                <p className="font-medium">{post.author.name}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">{t('blog.publishedOn')}</p>
              <p className="font-medium">{formattedDate}</p>
            </div>
          </div>
        </div>
        
        {/* Post content */}
        <article className="container mx-auto px-4 py-8">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/^#\s+(.*?)$/gm, '<h1>$1</h1>')
                .replace(/^##\s+(.*?)$/gm, '<h2>$1</h2>')
                .replace(/^###\s+(.*?)$/gm, '<h3>$1</h3>')
                .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/\n/g, '<br>')
            }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PostDetail;
