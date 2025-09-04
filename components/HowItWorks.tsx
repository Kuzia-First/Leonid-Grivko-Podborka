import React from 'react';
import Button from './ui/Button';

type HowItWorksProps = {
  onCTAClick: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onCTAClick }) => {
  const steps = [
    { number: 1, text: "Проходите тест (возраст, профессия, тип фигуры, основные проблемы)" },
    { number: 2, text: "Получаете персональную подборку из 6 образов от стилиста LEONID GRIVKO" },
    { number: 3, text: "Примеряете одежду у нас в бутике или с курьером (бесплатно)" },
    { number: 4, text: "Создаете гардероб, который работает на ваш успех" }
  ];

  return (
    <section className="py-24 md:py-40 bg-backgroundLight text-textOnLight fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-24 stagger-child">
          4 простых шага к идеальному деловому гардеробу
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 space-y-12">
            {steps.map(step => (
              <div key={step.number} className="flex items-start stagger-child">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-primary/50 text-primary flex items-center justify-center font-bold text-3xl font-serif mr-8">
                  {step.number}
                </div>
                <p className="text-lg sm:text-xl text-textSecondaryOnLight mt-4">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2 stagger-child">
            <img 
              src="https://optim.tildacdn.com/tild3732-3431-4232-b963-336234663461/-/format/webp/94.png" 
              alt="Женщина в офисе в одежде Leonid Grivko" 
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="text-center mt-24 stagger-child">
          <Button size="lg" onClick={onCTAClick}>Узнайте, какие образы подойдут именно вам</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;