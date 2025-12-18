import React, { useState, useEffect } from 'react';
import AtomCanvas from './components/AtomCanvas';
import Hero from './components/Hero';
import ThreeColumns from './components/ThreeColumns';
import Footer from './components/Footer';

function App() {
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
}

export default App;
