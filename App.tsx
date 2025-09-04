import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import ProblemStat from './components/ProblemStat';
import QuizCTA from './components/QuizCTA';
import HowItWorks from './components/HowItWorks';
import BrandAdvantages from './components/BrandAdvantages';
import ProductShowcase from './components/ProductShowcase';
import TestDrive from './components/TestDrive';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import UrgentOffer from './components/UrgentOffer';
import TrustBadges from './components/TrustBadges';
import StylistOffer from './components/StylistOffer';
import Guarantees from './components/Guarantees';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import QuizModal from './components/QuizModal';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  useEffect(() => {
    if (isQuizOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isQuizOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.fade-in-section');
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const childrenToStagger = gsap.utils.toArray('.stagger-child', el);
        
        gsap.from(childrenToStagger, {
          opacity: 0,
          y: 50,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-background text-textOnDark font-sans overflow-x-hidden">
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
      <Header onCTAClick={openQuiz} />
      <main>
        <Hero onCTAClick={openQuiz} />
        <ProblemStat />
        <QuizCTA onCTAClick={openQuiz} />
        <HowItWorks onCTAClick={openQuiz}/>
        <BrandAdvantages onCTAClick={openQuiz}/>
        <ProductShowcase onCTAClick={openQuiz}/>
        <TestDrive onCTAClick={openQuiz}/>
        <Testimonials onCTAClick={openQuiz}/>
        <About onCTAClick={openQuiz}/>
        <FAQ />
        <UrgentOffer onCTAClick={openQuiz}/>
        <TrustBadges />
        <StylistOffer onCTAClick={openQuiz}/>
        <Guarantees onCTAClick={openQuiz}/>
        <FinalCTA onCTAClick={openQuiz} />
      </main>
      <Footer />
    </div>
  );
};

export default App;