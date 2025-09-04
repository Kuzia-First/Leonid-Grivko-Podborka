import React, { useState } from 'react';
import Button from './ui/Button';
import XIcon from './icons/XIcon';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 'age',
    question: 'Ваш возраст?',
    options: ['25-34', '35-44', '45-55', '55+'],
  },
  {
    id: 'profession',
    question: 'Ваша сфера деятельности?',
    options: ['Топ-менеджер', 'Владелец бизнеса', 'Руководитель', 'Консультант'],
  },
  {
    id: 'body_type',
    question: 'Какой тип одежды вы предпочитаете для своей фигуры?',
    options: ['Приталенный силуэт', 'Свободный крой', 'Структурированный', 'Драпированный'],
  },
  {
    id: 'challenge',
    question: 'Ваша главная сложность при подборе делового гардероба?',
    options: ['Поиск идеальной посадки', 'Сочетание статусности и женственности', 'Экономия времени на шоппинг', 'Создание универсальной капсулы'],
  },
];

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const totalQuestions = questions.length;
  
  const handleReset = () => {
    // Add a delay to allow the closing animation
    const modal = document.getElementById('quiz-modal-content');
    if (modal) {
        modal.classList.remove('animate-fade-in-up');
    }
    setTimeout(() => {
        setStep(0);
        setAnswers({});
        setSubmitted(false);
        setSelectedOption(null);
        onClose();
    }, 300)
  };
  
  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedOption(answer);
    setTimeout(() => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
        if (step < totalQuestions) {
           setStep(s => s + 1);
        }
        setSelectedOption(null);
    }, 300);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(s => s - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const contactInfo = Object.fromEntries(formData.entries());
    console.log({ answers, contactInfo });
    setSubmitted(true);
  };
  
  if (!isOpen) return null;
  
  const progress = Math.round(((step) / (totalQuestions)) * 100);

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4 animate-fade-in" onClick={handleReset}>
      <div id="quiz-modal-content" className="bg-backgroundLight text-textOnLight rounded-2xl shadow-2xl w-full max-w-2xl relative p-6 sm:p-8 md:p-12 transform transition-all animate-fade-in-up" onClick={e => e.stopPropagation()}>
        <button onClick={handleReset} aria-label="Закрыть" className="absolute top-5 right-5 text-textSecondaryOnLight hover:text-primary z-10 p-2 transition-colors">
          <XIcon className="w-7 h-7" />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-serif">Спасибо!</h2>
            <p className="text-lg sm:text-xl text-textSecondaryOnLight mb-8">Ваша заявка принята. Наш стилист скоро свяжется с вами для обсуждения персональной подборки.</p>
            <Button onClick={handleReset}>Закрыть</Button>
          </div>
        ) : (
          <div>
            <div className="mb-10">
              <div className="flex justify-between items-center mb-2">
                 <p className="text-sm font-semibold text-primary tracking-wider uppercase">Шаг {step + 1} из {totalQuestions + 1}</p>
                 <p className="text-sm font-bold text-primary">{step === totalQuestions ? 100 : progress}%</p>
              </div>
              <div className="w-full bg-black/10 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{width: `${step === totalQuestions ? 100 : progress}%`}}></div>
              </div>
            </div>

            {step < totalQuestions && (
              <div className="animate-fade-in">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 font-serif">{questions[step].question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[step].options.map(option => (
                    <button 
                      key={option} 
                      onClick={() => handleAnswerSelect(questions[step].id, option)}
                      className={`w-full text-left p-5 border rounded-lg focus:outline-none transition-all duration-200 font-semibold text-lg ${selectedOption === option ? 'bg-primary text-white border-primary' : 'border-black/20 bg-surface hover:border-primary'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === totalQuestions && (
              <div className="animate-fade-in">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-serif">Получите вашу персональную подборку</h2>
                <p className="text-center text-textSecondaryOnLight mb-8 text-lg">Оставьте ваши контактные данные, и наш стилист свяжется с вами.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                   <div>
                       <label htmlFor="name" className="block text-sm font-medium text-textSecondaryOnLight mb-1">Ваше имя</label>
                       <input type="text" name="name" id="name" required className="w-full px-4 py-3 border border-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-lg bg-surface placeholder:text-textSecondaryOnLight/50" placeholder="Анастасия" />
                   </div>
                   <div>
                       <label htmlFor="phone" className="block text-sm font-medium text-textSecondaryOnLight mb-1">Телефон</label>
                       <input type="tel" name="phone" id="phone" required className="w-full px-4 py-3 border border-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-lg bg-surface placeholder:text-textSecondaryOnLight/50" placeholder="+7 (999) 123-45-67" />
                   </div>
                    <Button type="submit" size="lg" className="w-full !mt-6 !py-4" variant="primary">Получить подборку</Button>
                </form>
              </div>
            )}
            
            <div className="mt-12 pt-6 border-t border-black/10 flex justify-between items-center h-8">
              {step > 0 && step <= totalQuestions && (
                <button onClick={handleBack} className="text-base font-semibold text-textSecondaryOnLight hover:text-primary transition-colors flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Назад
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;