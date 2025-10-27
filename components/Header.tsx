
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NAV_LINKS, RESERVATION_URL } from '../constants';
import Button from './ui/Button';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // Se estamos em uma página de blog post, navega para home e depois faz scroll
      if (location.pathname.startsWith('/blog/')) {
        navigate('/');
        // Aguarda um pequeno delay para a página carregar e depois faz o scroll
        setTimeout(() => {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const headerHeight = window.innerWidth >= 768 ? 96 : 80;
            const offset = headerHeight + 20;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
        return;
      }
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerHeight = window.innerWidth >= 768 ? 96 : 80; // h-24 = 96px, h-20 = 80px
        const offset = headerHeight + 20; // Adiciona margem extra
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  const renderNavLink = (link: { name: string; href: string }) => {
    if (link.href.startsWith('/')) {
      return (
        <Link
          key={link.name}
          to={link.href}
          onClick={() => setIsOpen(false)}
          className="text-base text-dark-text font-medium cursor-pointer transition-colors hover:text-primary-green px-1 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent-gold after:transition-all after:duration-300 hover:after:w-full"
        >
          {t(link.name)}
        </Link>
      );
    } else {
      return (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className="text-base text-dark-text font-medium cursor-pointer transition-colors hover:text-primary-green px-1 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent-gold after:transition-all after:duration-300 hover:after:w-full"
        >
          {t(link.name)}
        </a>
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex justify-between items-center relative overflow-visible">
        <Link 
          to="/" 
          className="cursor-pointer relative z-10"
        >
          <img 
            src="/outros/logo.PNG" 
            alt="Pousada Recanto do Lago - Hospedagem em Cambará do Sul perto dos Cânions" 
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-28 md:h-36 w-auto object-contain mt-1 md:mt-2"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {NAV_LINKS.map((link) => renderNavLink(link))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="primary" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">{t('nav.reserveNow')}</Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary-green focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {NAV_LINKS.map((link) => renderNavLink(link))}
            <Button variant="primary" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">{t('nav.reserveNow')}</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;