import React, { useState } from 'react';
import AccordionItem from './ui/AccordionItem';

const FAQ: React.FC = () => {
    const faqData = [
        {
            question: "Как подобрать размер без личной примерки?",
            answer: "Наша система анализирует 17 параметров вашей фигуры через простой тест. Точность подбора — 98.7%. Если не подойдет, бесплатная корректировка или возврат."
        },
        {
            question: "Почему ваши цены выше масс-маркета?",
            answer: "Вы платите за 14-дневный пошив в Москве, европейские ткани и кутюрные техники. Один костюм LEONID GRIVKO заменяет 5 вещей из Zara и служит 5+ лет."
        },
        {
            question: "Как ухаживать за одеждой?",
            answer: "Все модели созданы для реальной жизни. Стирка при 30°C без потери формы. Инструкция по уходу входит в комплект."
        },
        {
            question: "Есть ли скидки для постоянных клиентов?",
            answer: "Да! После первой покупки вы получаете доступ к программе лояльности с персональными предложениями и приглашениями на закрытые показы."
        },
        {
            question: "Можно ли комбинировать образы?",
            answer: "Да! Каждый образ создан по системе \"3 в 1\". Персональный стилист покажет, как создавать 3 разных образа из одного костюма."
        },
        {
            question: "Как быстро можно получить заказ?",
            answer: "Стандартный срок — 14 дней. Экспресс-пошив за 7 дней доступен при доплате 15%."
        }
    ];
    
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 md:py-40 bg-backgroundLight text-textOnLight fade-in-section">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-20 stagger-child">
                    Ответы на главные вопросы
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div className="stagger-child" key={index}>
                            <AccordionItem
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;