
import React from 'react';
import { useI18n } from '@/contexts/I18nContext';
import { posts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const { t } = useI18n();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
