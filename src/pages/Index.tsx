
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useI18n } from '@/contexts/I18nContext';
import { getFeaturedPosts, getLatestPosts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const { t } = useI18n();
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts(3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blog-primary to-blog-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fadeIn">
              {t('home.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-90">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/blog">
                <Button size="lg" variant="secondary">
                  {t('nav.blog')}
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  {t('auth.signup')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">
                {t('home.featuredPosts')}
              </h2>
              <div className="space-y-8">
                {featuredPosts.map(post => (
                  <PostCard key={post.id} post={post} featured={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Latest Posts Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              {t('home.latestPosts')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/blog">
                <Button>View All Posts</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
