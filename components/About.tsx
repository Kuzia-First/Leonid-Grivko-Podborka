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
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Left Content Card */}
          <div className="lg:w-1/2 w-full bg-backgroundLight text-textOnLight p-8 md:p-12 rounded-2xl flex flex-col justify-center stagger-child">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight stagger-child font-serif">
              LEONID GRIVKO: где рождается русский luxury
            </h2>
            <p className="text-xl text-textSecondaryOnLight mb-8 stagger-child font-sans">
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
            <div className="stagger-child mt-auto pt-4">
                <Button size="lg" onClick={onCTAClick}>Узнать больше о производстве</Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 w-full stagger-child">
            <img 
              src="https://static.tildacdn.com/tild3163-6332-4132-b632-343166303230/photo.jpg"
              alt="Женщина в элегантном деловом платье от Leonid Grivko"
              className="rounded-2xl w-full h-full object-cover min-h-[400px] lg:min-h-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;