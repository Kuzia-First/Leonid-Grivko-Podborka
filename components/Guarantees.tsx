import React from 'react';
import Button from './ui/Button';

type GuaranteesProps = {
  onCTAClick: () => void;
};


const Guarantees: React.FC<GuaranteesProps> = ({ onCTAClick }) => {
  const guarantees = [
    { title: "Идеальная посадка", description: "или полный возврат денег" },
    { title: "Сохранение формы 2 года", description: "или бесплатная замена" },
    { title: "Персональный стилист", description: "6 месяцев после покупки" }
  ];

  return (
    <section className="py-24 md:py-40 bg-background text-textOnDark fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 stagger-child">
          3 гарантии, которые делают покупку безрисковой
        </h2>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-textSecondaryOnDark mb-20 stagger-child">
          Мы настолько уверены в качестве, что даем гарантии, которых нет у конкурентов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="border border-white/10 bg-black/20 p-10 sm:p-12 rounded-2xl text-center stagger-child">
              <h3 className="text-4xl font-bold text-primary mb-4 font-serif tracking-wider">0{index + 1}</h3>
              <p className="text-2xl sm:text-3xl font-semibold mb-3 font-serif text-textOnDark">{guarantee.title}</p>
              <p className="text-textSecondaryOnDark text-lg">{guarantee.description}</p>
            </div>
          ))}
        </div>
        <div className="stagger-child">
            <Button size="lg" onClick={onCTAClick}>Посмотреть все гарантии</Button>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;