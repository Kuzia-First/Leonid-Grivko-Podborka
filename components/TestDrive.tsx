import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

type TestDriveProps = {
  onCTAClick: () => void;
};


const TestDrive: React.FC<TestDriveProps> = ({ onCTAClick }) => {
    const bullets = [
        "Бесплатная доставка с примеркой от курьера в течение 24 часов",
        "Индивидуальная корректировка пошива без доплаты",
        "Гарантия сохранения формы 2 года",
        "Персональный стилист бесплатно покажет, как комбинировать образы"
    ];

    return (
        <section className="py-24 md:py-32 bg-background text-textOnDark fade-in-section">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 stagger-child">
                    Примерьте LEONID GRIVKO без риска: гарантия идеальной посадки
                </h2>
                <p className="max-w-3xl mx-auto text-lg sm:text-xl text-textSecondaryOnDark mb-16 stagger-child">
                    Наша технология виртуальной примерки анализирует 17 параметров вашей фигуры и подбирает размер с точностью 98.7%
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto text-left mb-16">
                    {bullets.map((text, index) => (
                        <div key={index} className="flex items-start stagger-child">
                            <CheckIcon className="w-7 h-7 text-primary mr-5 mt-1 flex-shrink-0" />
                            <p className="text-lg">{text}</p>
                        </div>
                    ))}
                </div>
                <div className="stagger-child">
                    <Button size="lg" variant="primary" onClick={onCTAClick}>
                        Заказать примерку с гарантией
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TestDrive;