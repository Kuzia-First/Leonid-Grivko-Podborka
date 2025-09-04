import React from 'react';
import Button from './ui/Button';

type StylistOfferProps = {
    onCTAClick: () => void;
};

const StylistOffer: React.FC<StylistOfferProps> = ({ onCTAClick }) => {
    return (
        <section className="py-24 md:py-32 bg-backgroundLight text-textOnLight fade-in-section">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight stagger-child">
                            Бесплатная консультация стилиста
                        </h2>
                        <p className="text-xl sm:text-2xl font-semibold text-textSecondaryOnLight mb-8 stagger-child font-sans">
                            Получите профессиональные советы от эксперта, который работает с топ-менеджерами
                        </p>
                        <p className="text-textSecondaryOnLight text-lg mb-8 leading-relaxed stagger-child">
                            Наш стилист проведет 45-минутную консультацию, где:
                        </p>
                        <ul className="list-none space-y-4 text-textSecondaryOnLight text-lg mb-10 pl-2">
                            <li className="stagger-child flex items-start"><span className="text-primary text-2xl mr-4 mt-px">◆</span>Проанализирует ваш цветотип и тип фигуры</li>
                            <li className="stagger-child flex items-start"><span className="text-primary text-2xl mr-4 mt-px">◆</span>Подберет базовые вещи для вашего гардероба</li>
                            <li className="stagger-child flex items-start"><span className="text-primary text-2xl mr-4 mt-px">◆</span>Научит комбинировать образы для разных типов встреч</li>
                            <li className="stagger-child flex items-start"><span className="text-primary text-2xl mr-4 mt-px">◆</span>Даст рекомендации по уходу за одеждой</li>
                        </ul>
                        <div className="stagger-child">
                            <Button size="lg" onClick={onCTAClick}>Забронировать консультацию</Button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 stagger-child">
                        <img 
                            src="https://static.tildacdn.com/tild3365-3866-4064-b263-363563343539/1_2_.png" 
                            alt="Стилист консультирует клиента" 
                            className="rounded-2xl w-full h-auto object-cover" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StylistOffer;