import React from 'react';

const ProblemStat: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-background text-textOnDark fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          <div className="lg:w-1/2 relative z-10 lg:pr-12">
            <div className="bg-backgroundLight text-textOnLight p-8 md:p-12 rounded-2xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight stagger-child">
                8 из 10 женщин теряют доверие клиентов из-за неправильной одежды
              </h2>
              <p className="text-lg sm:text-xl text-textSecondaryOnLight leading-relaxed stagger-child">
                Исследование Moscow Business School показало: 72% переговоров проигрываются не из-за компетентности, а из-за непрофессионального вида. Ваша одежда работает за вас, даже когда вы молчите.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:-ml-24 stagger-child">
            <img 
              src="https://static.tildacdn.com/tild3430-3138-4263-a438-383135613765/9.png" 
              alt="Две женщины в одежде Leonid Grivko"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStat;