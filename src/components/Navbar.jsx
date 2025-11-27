import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const navLinks = [
    { name: t('navbar.owners'), href: '/salon-owners', isRoute: true },
    { name: t('navbar.features'), href: '#features', isRoute: false },
    { name: t('navbar.about'), href: '#about', isRoute: false },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/image/logo.png" alt="Zayna Logo" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => 
            link.isRoute ? (
              <Link 
                key={link.href} 
                to={link.href} 
                className="text-dark hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-dark hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </a>
            )
          )}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-dark hover:text-accent transition-colors font-medium"
          >
            <Globe size={20} />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <button className="bg-accent text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            {t('navbar.download')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-dark hover:text-accent transition-colors"
          >
            <span className="font-bold">{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>
          
          <button 
            className="text-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => 
                link.isRoute ? (
                  <Link 
                    key={link.href} 
                    to={link.href} 
                    className="text-dark hover:text-accent py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className="text-dark hover:text-accent py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
              <button className="bg-accent text-white px-6 py-3 rounded-full font-medium text-center w-full">
                {t('navbar.download')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
