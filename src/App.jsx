import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import AtomCanvas from './components/AtomCanvas';
import Hero from './components/Hero';
import ThreeColumns from './components/ThreeColumns';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

const MainContent = () => {
  const [isAtomDecomposed, setIsAtomDecomposed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.2; // Trigger after 20% scroll

      if (scrollY > triggerPoint) {
        setIsAtomDecomposed(true);
      } else {
        setIsAtomDecomposed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToColumns = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-black min-h-screen w-full relative">
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Background Atom Animation Layer */}
      <AtomCanvas isDecomposed={isAtomDecomposed} />

      {/* Main Content */}
      <main className="relative z-10">
        <section className="h-screen w-full">
          <Hero onScrollStart={scrollToColumns} />
        </section>

        <section className="w-full">
          <ThreeColumns />
        </section>

        <Footer />
      </main>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/:lang" element={
        <LanguageProvider>
          <MainContent />
        </LanguageProvider>
      } />
      <Route path="/" element={<Navigate to="/es" replace />} />
    </Routes>
  );
}

export default App;
