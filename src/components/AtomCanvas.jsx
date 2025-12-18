import React from 'react';
import { motion } from 'framer-motion';

const AtomCanvas = ({ isDecomposed }) => {
    // Variants for the 3 atom rings
    const ringVariants = {
        initial: {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            transition: { duration: 1, ease: 'easeInOut' }
        },
        decomposed: (custom) => ({
            scale: 0.5,
            x: custom.x,
            y: custom.y,
            rotate: custom.rotate,
            transition: { duration: 0.8, ease: 'easeInOut' }
        })
    };

    return (
        <div className={`fixed inset-0 pointer-events-none z-0 flex items-center justify-center transition-opacity duration-1000 ${isDecomposed ? 'opacity-100' : 'opacity-40'}`}>
            <div className="relative w-[800px] h-[800px] blur-sm">
                {/* Ring 1: Green/Yellow */}
                <motion.div
                    className="absolute inset-0 border-[20px] border-ninona-green rounded-[50%] opacity-60 mix-blend-screen"
                    animate={isDecomposed ? "decomposed" : { rotate: 360, scale: [1, 1.05, 1] }}
                    variants={ringVariants}
                    custom={{ x: -400, y: 400, rotate: 45 }}
                    transition={isDecomposed ? {} : { rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
                    style={{ rotate: 0 }}
                />

                {/* Ring 2: Pink/Lilac */}
                <motion.div
                    className="absolute inset-0 border-[20px] border-ninona-pink rounded-[50%] opacity-60 mix-blend-screen"
                    animate={isDecomposed ? "decomposed" : { rotate: 360, scale: [1, 1.1, 1] }}
                    variants={ringVariants}
                    custom={{ x: 0, y: 400, rotate: -45 }}
                    transition={isDecomposed ? {} : { rotate: { duration: 25, repeat: Infinity, ease: "linear", delay: 1 }, scale: { duration: 6, repeat: Infinity } }}
                    style={{ rotate: 60 }}
                />

                {/* Ring 3: Orange/Yellow */}
                <motion.div
                    className="absolute inset-0 border-[20px] border-ninona-orange rounded-[50%] opacity-60 mix-blend-screen"
                    animate={isDecomposed ? "decomposed" : { rotate: 360, scale: [1, 1.05, 1] }}
                    variants={ringVariants}
                    custom={{ x: 400, y: 400, rotate: 90 }}
                    transition={isDecomposed ? {} : { rotate: { duration: 30, repeat: Infinity, ease: "linear", delay: 2 }, scale: { duration: 5.5, repeat: Infinity } }}
                    style={{ rotate: 120 }}
                />
            </div>
        </div>
    );
};

export default AtomCanvas;
