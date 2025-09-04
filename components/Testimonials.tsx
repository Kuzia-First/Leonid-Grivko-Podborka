import React from 'react';
import Button from './ui/Button';

type TestimonialsProps = {
  onCTAClick: () => void;
};


const Testimonials: React.FC<TestimonialsProps> = ({ onCTAClick }) => {
  const testimonials = [
    {
      benefit: "Перестала бояться важных встреч. Теперь знаю, что выгляжу на 10 баллов даже после 12-часового рабочего дня.",
      review: "За 3 месяца после покупки костюма 'Директор' заключила контракт на 45 млн. Одежда действительно работает за тебя!",
      name: "Анна, 34",
      title: "руководитель департамента в международном банке",
      link: "#"
    },
    {
      benefit: "Сэкономила 200 тыс. руб. в год на одежде. Один костюм заменяет 5 вещей из масс-маркета.",
      review: "LEONID GRIVKO — первая марка, где я не стираю костюм после каждого ношения. Сохраняет форму идеально!",
      name: "Екатерина, 38",
      title: "владелица юридической фирмы",
      link: "#"
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-backgroundLight text-textOnLight fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-24 stagger-child">
          Как LEONID GRIVKO изменил карьеру наших клиенток
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-surface p-10 sm:p-12 rounded-2xl flex flex-col stagger-child">
              <div className="relative z-10 flex flex-col h-full">
                  <p className="text-2xl sm:text-3xl font-semibold text-textOnLight mb-6 font-serif leading-snug">"{testimonial.benefit}"</p>
                  <p className="text-textSecondaryOnLight italic text-lg mb-8 flex-grow">— {testimonial.review}</p>
                  <div className="border-t border-primary/20 pt-6">
                    <p className="font-bold text-xl text-textOnLight font-sans">{testimonial.name}</p>
                    <p className="text-textSecondaryOnLight text-base">{testimonial.title}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center stagger-child">
          <Button size="lg" onClick={onCTAClick}>Посмотреть больше историй успеха</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;