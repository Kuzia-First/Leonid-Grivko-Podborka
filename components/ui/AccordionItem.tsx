import React from 'react';
import ChevronDownIcon from '../icons/ChevronDownIcon';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-black/20 transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6 px-2 rounded-md hover:bg-black/5 transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl sm:text-2xl font-semibold font-sans text-textOnLight">{question}</h3>
        <ChevronDownIcon className={`w-6 h-6 text-primary flex-shrink-0 ml-4 transform transition-transform duration-500 ease-out ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pt-2 pb-6 px-2 text-textSecondaryOnLight text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;