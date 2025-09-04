import React from 'react';

const TrustBadges: React.FC = () => {
  const logos = [
    { name: "Сбербанк", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sber_logo_2020.svg/2560px-Sber_logo_2020.svg.png", alt: "Сбербанк логотип" },
    { name: "Газпромбанк", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gazprombank_Logo_2020_RUS.svg/2560px-Gazprombank_Logo_2020_RUS.svg.png", alt: "Газпромбанк логотип" },
    { name: "Яндекс", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yandex_logo_en_2021.svg/1280px-Yandex_logo_en_2021.svg.png", alt: "Яндекс логотип" },
    { name: "McKinsey", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McKinsey_%26_Company-Logo.svg/2560px-McKinsey_%26_Company-Logo.svg.png", alt: "McKinsey & Company логотип" },
    { name: "PwC", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/PricewaterhouseCoopers_Logo.svg/1280px-PricewaterhouseCoopers_Logo.svg.png", alt: "PwC логотип" },
  ];

  return (
    <section className="py-24 md:py-40 bg-backgroundLight text-textOnLight fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 stagger-child">
          Доверие топ-менеджеров 120+ компаний Москвы
        </h2>
        <p className="text-lg sm:text-xl text-textSecondaryOnLight mb-20 stagger-child">
          Нас выбирают те, кому нельзя ошибиться с имиджем
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 sm:gap-x-20 gap-y-10 mb-24 stagger-child">
          {logos.map(logo => (
            <img key={logo.name} src={logo.src} alt={logo.alt} className="h-7 sm:h-8 object-contain grayscale opacity-70" />
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-left stagger-child">
          <blockquote className="bg-surface p-10 sm:p-12 rounded-2xl border-l-8 border-primary">
            <p className="text-xl sm:text-2xl italic text-textSecondaryOnLight leading-relaxed font-serif">
              "Мы сотрудничаем с LEONID GRIVKO как с единственным поставщиком деловой одежды для наших руководителей. Качество и внимание к деталям соответствуют нашим стандартам."
            </p>
            <footer className="mt-8 font-bold text-lg text-primary font-sans">— HR-директор международного холдинга</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;