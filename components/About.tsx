import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

type AboutProps = {
  onCTAClick: () => void;
};

const About: React.FC<AboutProps> = ({ onCTAClick }) => {
  const features = [
    "Собственное производство в Москве — контроль качества на каждом этапе",
    "Ткани от лучших фабрик Италии и Великобритании",
    "Каждый костюм проходит 14 этапов контроля",
    "Размерная сетка, созданная специально для российских женщин"
  ];

  return (
    <section className="py-24 md:py-32 bg-background fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-0">
           <div className="lg:w-1/2 lg:-mr-24 relative z-0 stagger-child">
             <img 
              src="https://static.tildacdn.com/tild3736-3739-4035-a231-656635303661/1D0BFD0BBD0B0D182D18.png"
              alt="Леонид Гривко"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 relative z-10 lg:pl-12">
            <div className="bg-backgroundLight text-textOnLight p-8 md:p-12 rounded-2xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight stagger-child">
                LEONID GRIVKO: где рождается русский luxury
              </h2>
              <p className="text-xl sm:text-2xl font-semibold text-textSecondaryOnLight mb-8 stagger-child font-sans">
                Мы не просто продаем одежду — создаем инструменты для вашего карьерного роста.
              </p>
              <div className="space-y-5 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start stagger-child">
                    <CheckIcon className="w-7 h-7 text-primary mr-5 mt-1 flex-shrink-0" />
                    <p className="text-lg text-textSecondaryOnLight">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="stagger-child">
                  <Button size="lg" onClick={onCTAClick}>Узнать больше о производстве</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;