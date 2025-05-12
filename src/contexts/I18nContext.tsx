
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Translations {
  [key: string]: string;
}

interface I18nContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
  availableLanguages: string[];
}

// Our translations - in a real app, these would be in separate files
const translations: Record<string, Translations> = {
  en: {
    'app.title': 'Modern Blog',
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'auth.login': 'Login',
    'auth.signup': 'Sign Up',
    'auth.logout': 'Logout',
    'blog.readMore': 'Read More',
    'blog.publishedOn': 'Published on',
    'blog.by': 'by',
    'home.heroTitle': 'Welcome to Modern Blog',
    'home.heroSubtitle': 'Your source for thoughtful articles and insights',
    'home.featuredPosts': 'Featured Posts',
    'home.latestPosts': 'Latest Posts',
    'login.title': 'Log In to Your Account',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.submit': 'Log In',
    'login.noAccount': 'Don\'t have an account?',
    'signup.title': 'Create Your Account',
    'signup.name': 'Name',
    'signup.email': 'Email',
    'signup.password': 'Password',
    'signup.submit': 'Sign Up',
    'signup.hasAccount': 'Already have an account?',
    'profile.title': 'Your Profile',
    'profile.editProfile': 'Edit Profile',
    'post.new': 'New Post',
    'post.title': 'Title',
    'post.content': 'Content',
    'post.publish': 'Publish',
  },
  es: {
    'app.title': 'Blog Moderno',
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'auth.login': 'Iniciar Sesión',
    'auth.signup': 'Registrarse',
    'auth.logout': 'Cerrar Sesión',
    'blog.readMore': 'Leer Más',
    'blog.publishedOn': 'Publicado el',
    'blog.by': 'por',
    'home.heroTitle': 'Bienvenido al Blog Moderno',
    'home.heroSubtitle': 'Tu fuente de artículos e ideas interesantes',
    'home.featuredPosts': 'Publicaciones Destacadas',
    'home.latestPosts': 'Publicaciones Recientes',
    'login.title': 'Iniciar Sesión en tu Cuenta',
    'login.email': 'Correo Electrónico',
    'login.password': 'Contraseña',
    'login.submit': 'Iniciar Sesión',
    'login.noAccount': '¿No tienes cuenta?',
    'signup.title': 'Crear tu Cuenta',
    'signup.name': 'Nombre',
    'signup.email': 'Correo Electrónico',
    'signup.password': 'Contraseña',
    'signup.submit': 'Registrarse',
    'signup.hasAccount': '¿Ya tienes una cuenta?',
    'profile.title': 'Tu Perfil',
    'profile.editProfile': 'Editar Perfil',
    'post.new': 'Nueva Publicación',
    'post.title': 'Título',
    'post.content': 'Contenido',
    'post.publish': 'Publicar',
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState('en');
  const availableLanguages = Object.keys(translations);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('blogLanguage');
    if (savedLanguage && availableLanguages.includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (availableLanguages.includes(browserLang)) {
        setLanguageState(browserLang);
      }
    }
  }, [availableLanguages]);

  const setLanguage = (lang: string) => {
    if (availableLanguages.includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem('blogLanguage', lang);
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    availableLanguages
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
