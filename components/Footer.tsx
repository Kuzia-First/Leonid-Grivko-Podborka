import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-textSecondaryOnDark hover:text-textOnDark transition-colors">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 text-textOnDark py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div>
            <p className="font-semibold text-2xl font-serif tracking-wider">LEONID GRIVKO</p>
            <p className="text-sm text-textSecondaryOnDark mt-1 tracking-widest uppercase">Luxury Business Wear</p>
          </div>
          <div className="flex items-center space-x-6">
            <SocialIcon href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.88-1.42 6.75c-.1.49-.42.62-.82.39l-2.18-1.6-1.05 1.01c-.12.12-.22.22-.44.22l.16-2.25 4.1-3.72c.18-.16-.06-.25-.3-.1l-5.06 3.15-2.16-.68c-.48-.15-.48-.46.1-.7l8.28-3.23c.4-.16.76.1.64.58z"/></svg>
            </SocialIcon>
            <SocialIcon href="#">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/></svg>
            </SocialIcon>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-textSecondaryOnDark">
          <p>&copy; {new Date().getFullYear()} LEONID GRIVKO. Все права защищены.</p>
          <a href="#" className="underline hover:text-textOnDark transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;