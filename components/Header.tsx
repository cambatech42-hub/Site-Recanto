
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, RESERVATION_URL } from '../constants';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
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
          className="text-lg text-dark-text font-semibold hover:text-primary-green transition-colors cursor-pointer"
        >
          {link.name}
        </Link>
      );
    } else {
      return (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className="text-lg text-dark-text font-semibold hover:text-primary-green transition-colors cursor-pointer"
        >
          {link.name}
        </a>
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-6 py-7 flex justify-between items-center">
        <Link 
          to="/" 
          className="cursor-pointer"
        >
          <img 
            src="/5.jpeg" 
            alt="Recanto do Lago" 
            className="h-12 w-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => renderNavLink(link))}
        </nav>
        <div className="hidden md:block">
            <Button variant="secondary" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">Reservar Agora</Button>
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
            <Button variant="secondary" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">Reservar Agora</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;