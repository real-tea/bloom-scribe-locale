
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useI18n } from '@/contexts/I18nContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Profile = () => {
  const { user } = useAuth();
  const { t } = useI18n();

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">{t('profile.title')}</h1>
        
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Role</span>
                <span className="capitalize">{user.role}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">User ID</span>
                <span className="text-gray-600">{user.id}</span>
              </div>
              
              <Button className="w-full mt-4">{t('profile.editProfile')}</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
