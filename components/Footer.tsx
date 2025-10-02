
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NAV_LINKS } from '../constants';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-background-beige/70 hover:text-white transition-colors">
    {children}
  </a>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-green text-background-beige">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">{t('footer.title')}</h3>
            <p className="text-background-beige/80 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-background-beige/80 hover:text-white transition-colors">{t(link.name)}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
                <SocialIcon href="https://instagram.com">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
                </SocialIcon>
                <SocialIcon href="https://facebook.com">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
                </SocialIcon>
            </div>
          </div>

          {/* Column 4: Reservas & Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('contact.title')}</h4>
            <p className="text-background-beige/80 max-w-md">{t('contact.subtitle')}</p>
          </div>
        </div>
        
        <div className="border-t border-background-beige/20 mt-8 pt-6 text-center text-sm text-background-beige/70">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
