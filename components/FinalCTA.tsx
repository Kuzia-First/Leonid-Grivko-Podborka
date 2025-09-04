import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

type FinalCTAProps = {
  onCTAClick: () => void;
};

const FinalCTA: React.FC<FinalCTAProps> = ({ onCTAClick }) => {
  const bullets = [
    "Только до конца месяца: скидка 60% на первый заказ",
    "Бесплатная консультация стилиста (15 000 руб.)",
    "Гарантия идеальной посадки без риска",
    "Экспресс-пошив за 7 дней при заказе сегодня"
  ];

  return (
    <section className="py-24 md:py-32 bg-background text-textOnDark fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 stagger-child">
          Ваша карьера заслуживает идеального гардероба
        </h2>
        <p className="max-w-3xl mx-auto mb-16 text-lg sm:text-xl text-textSecondaryOnDark stagger-child">
          Не теряйте доверие клиентов из-за неправильной одежды. LEONID GRIVKO — первый в России luxury-бренд готовой женской деловой одежды с кутюрным подходом.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto text-left mb-16">
          {bullets.map((text, index) => (
            <div key={index} className="flex items-start stagger-child">
              <CheckIcon className="w-7 h-7 text-primary mr-5 mt-1 flex-shrink-0" />
              <p className="text-lg">{text}</p>
            </div>
          ))}
        </div>
        <div className="stagger-child">
            <Button size="lg" variant="primary" onClick={onCTAClick}>
              Получить подборку на год<span className="hidden sm:inline opacity-80 font-light"> → Сэкономьте 15 часов в месяц</span>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;