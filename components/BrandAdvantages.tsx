import React from 'react';
import Button from './ui/Button';

type BrandAdvantagesProps = {
  onCTAClick: () => void;
};

const BrandAdvantages: React.FC<BrandAdvantagesProps> = ({ onCTAClick }) => {
  return (
    <section className="py-24 md:py-32 bg-background fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
            {/* Text Column */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 stagger-child font-serif">
                    Почему 92% клиенток возвращаются к LEONID GRIVKO
                </h2>
                <p className="text-xl sm:text-2xl text-textSecondaryOnDark mb-16 stagger-child">
                    Мы создаем не просто одежду, а инструмент для вашего карьерного роста
                </p>
                <div className="stagger-child">
                    <Button size="lg" onClick={onCTAClick}>Посмотреть как работает система "3 в 1"</Button>
                </div>
            </div>
            
            {/* Image Column */}
            <div className="lg:w-1/2 w-full stagger-child">
                <img 
                    src="https://static.tildacdn.com/tild3833-3663-4466-b330-336533383766/92.png" 
                    alt="Женщина в деловом костюме Leonid Grivko дает интервью" 
                    className="rounded-2xl w-full h-full object-cover min-h-[400px] lg:min-h-0"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAdvantages;