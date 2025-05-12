
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useI18n } from '@/contexts/I18nContext';
import { LanguageSelector } from './LanguageSelector';
import { Book, User } from 'lucide-react';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { t } = useI18n();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <Book className="h-6 w-6 text-blog-primary" />
          <span className="text-xl font-serif font-bold text-blog-primary">{t('app.title')}</span>
        </NavLink>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-blog-accent font-medium" : "text-gray-600 hover:text-blog-primary"
            }
          >
            {t('nav.home')}
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              isActive ? "text-blog-accent font-medium" : "text-gray-600 hover:text-blog-primary"
            }
          >
            {t('nav.blog')}
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <NavLink to="/profile">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {user?.name}
                </Button>
              </NavLink>
              <Button variant="outline" size="sm" onClick={logout}>
                {t('auth.logout')}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <NavLink to="/login">
                <Button variant="ghost" size="sm">{t('auth.login')}</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button variant="default" size="sm">{t('auth.signup')}</Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
