import React from 'react';
import Button from './ui/Button';

type HeroProps = {
  onCTAClick: () => void;
};

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <section 
      className="min-h-screen bg-cover bg-center flex flex-col justify-center pt-32 sm:pt-36 pb-16 text-textOnDark" 
      style={{
        backgroundImage: "linear-gradient(to top, rgba(31, 29, 29, 1) 0%, rgba(31, 29, 29, 0.4) 50%, transparent 100%), url('https://optim.tildacdn.com/tild3334-3564-4264-a134-646665666239/-/format/webp/0-min_3.png')"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center flex-grow flex flex-col justify-center">
        <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight font-serif stagger-child" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>
              ДЕЛОВЫЕ КОСТЮМЫ, КОТОРЫЕ ПОДЧЕРКИВАЮТ ВАШ СТАТУС
            </h1>
            <h2 className="text-xl sm:text-2xl font-sans font-normal text-textOnDark/80 max-w-3xl mx-auto mb-10 stagger-child" style={{textShadow: '0 1px 6px rgba(0,0,0,0.4)'}}>
              Для женщин, ценящих качество и индивидуальность.
            </h2>
            <div className="stagger-child">
                <Button size="lg" variant="primary" className="mb-12" onClick={onCTAClick}>
                  Подобрать идеальный образ
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;