import React from 'react';
import Button from './ui/Button';

type QuizCTAProps = {
  onCTAClick: () => void;
};

const QuizCTA: React.FC<QuizCTAProps> = ({ onCTAClick }) => {
  return (
    <section className="py-24 md:py-32 text-center bg-background text-textOnDark fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 stagger-child">
          Ответьте на 4 вопроса и получите подборку на год
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg sm:text-xl text-textSecondaryOnDark stagger-child">
          Наш алгоритм анализирует 17 параметров вашей фигуры и рабочих задач, чтобы создать идеальный гардероб. Проверено на 3 217 женщинах из Москвы.
        </p>
        <div className="stagger-child">
            <Button size="lg" variant="primary" onClick={onCTAClick}>
              Начать подбор за 60 секунд <span className="hidden sm:inline opacity-80 font-light">→ Получите 3 образа бесплатно</span>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default QuizCTA;