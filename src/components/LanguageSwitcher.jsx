import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-50 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <div className="relative flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
                {/* ES Option */}
                <span
                    className={`text-xs font-poppins font-bold tracking-widest transition-all duration-300 ${language === 'es'
                        ? 'text-white scale-110'
                        : 'text-gray-500 scale-100'
                        }`}
                >
                    ES
                </span>

                {/* Separator */}
                <div className="w-px h-4 bg-white/20"></div>

                {/* EN Option */}
                <span
                    className={`text-xs font-poppins font-bold tracking-widest transition-all duration-300 ${language === 'en'
                        ? 'text-white scale-110'
                        : 'text-gray-500 scale-100'
                        }`}
                >
                    EN
                </span>

                {/* Animated indicator */}
                <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#e6007e] to-[#f39200]"
                    initial={false}
                    animate={{
                        x: language === 'es' ? 12 : 52,
                        width: 18
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
            </div>
        </motion.button>
    );
};

export default LanguageSwitcher;
