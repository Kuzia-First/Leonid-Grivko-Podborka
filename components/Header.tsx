import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

type HeaderProps = {
  onCTAClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-lg border-b border-white/10 shadow-md' : 'bg-transparent pt-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <h1 
          className="text-2xl sm:text-3xl font-bold tracking-wider font-serif text-textOnDark"
          style={{textShadow: !isScrolled ? '0 1px 4px rgba(0,0,0,0.5)' : 'none'}}
        >
          LEONID GRIVKO
        </h1>
        <div className="hidden md:block">
            <Button onClick={onCTAClick} variant="outline" size="sm">Получить подборку</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;