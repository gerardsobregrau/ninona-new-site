import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onScrollStart }) => {
    const [lang, setLang] = useState('ES');

    // Toggle language every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setLang(prev => prev === 'ES' ? 'EN' : 'ES');
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 px-4">

            {/* Main Content Container */}
            <div className="z-20 flex flex-col items-center justify-center max-w-5xl mt-10 md:mt-0 relative">

                {/* Integrated Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 md:mb-12 relative z-30"
                >
                    <img src="/ninona-logo.png" alt="Ninona Logo" className="h-16 md:h-24 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                </motion.div>

                {/* Main Claim */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center"
                >
                    <h2 className="font-montserrat font-extrabold text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white uppercase tracking-tight">
                        We Sell <br />
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#009fe3,#aacc00,#ffed00,#f39200,#e6007e)] bg-[length:200%_auto] animate-gradient-slow">
                            600,000
                        </span> <br />
                        Tickets
                    </h2>
                    <h3 className="font-playfair text-2xl md:text-4xl lg:text-5xl text-gray-300 mt-8 italic font-light">
                        in 16 different countries
                    </h3>
                </motion.div>

                {/* Dynamic CTA */}
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(230, 0, 126, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onScrollStart}
                    className="mt-16 md:mt-20 px-10 py-5 bg-black/40 backdrop-blur-md border border-white rounded-full text-white font-poppins font-bold text-sm md:text-base tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black hover:border-transparent z-30 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                    <div className="relative h-6 w-64 overflow-hidden">
                        <motion.span
                            key={lang}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center text-center"
                        >
                            {lang === 'ES' ? 'DESCUBRE CÓMO LO HACEMOS' : 'DISCOVER HOW WE DO IT'}
                        </motion.span>
                    </div>
                </motion.button>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 text-gray-500 text-xs font-poppins tracking-widest uppercase"
            >
                SCROLL
            </motion.div>
        </div>
    );
};

export default Hero;
