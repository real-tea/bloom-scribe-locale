
import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/contexts/I18nContext';
import { Book } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <Book className="h-6 w-6 text-blog-primary" />
              <span className="text-xl font-serif font-bold text-blog-primary">{t('app.title')}</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              A modern blog platform for sharing ideas, stories, and knowledge. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blog-primary">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-blog-primary">
                  {t('nav.blog')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-600 hover:text-blog-primary">
                  {t('auth.login')}
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-600 hover:text-blog-primary">
                  {t('auth.signup')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500">
          <p>© {currentYear} {t('app.title')}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
