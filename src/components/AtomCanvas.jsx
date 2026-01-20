import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const AtomCanvas = ({ isDecomposed }) => {
    // Variants for the atom rings
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
        }),
        formed: (custom) => ({
            scale: [1, 1.05, 1],
            x: 0,
            y: 0,
            rotate: custom.initialRotate,
            filter: ["blur(2px)", "blur(4px)", "blur(2px)"],
            transition: {
                duration: custom.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: custom.delay
            }
        })
    };

    return (
        <div className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${isDecomposed ? 'opacity-100' : 'opacity-40'}`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmax] h-[100vmax]">
                {/* Petal 1: Green */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[85%] border-[3vw] max-border-[40px] border-ninona-green rounded-[50%] opacity-80 mix-blend-screen bg-transparent"
                    animate={isDecomposed ? "decomposed" : "formed"}
                    variants={ringVariants}
                    custom={{ x: -400, y: 0, rotate: 45, initialRotate: 0, duration: 4, delay: 0 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ rotate: 0 }}
                />

                {/* Petal 2: Pink */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[85%] border-[3vw] max-border-[40px] border-ninona-pink rounded-[50%] opacity-80 mix-blend-screen bg-transparent"
                    animate={isDecomposed ? "decomposed" : "formed"}
                    variants={ringVariants}
                    custom={{ x: -200, y: 0, rotate: 0, initialRotate: 36, duration: 5, delay: 0.5 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    style={{ rotate: 36 }}
                />

                {/* Petal 3: Orange */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[85%] border-[3vw] max-border-[40px] border-ninona-orange rounded-[50%] opacity-80 mix-blend-screen bg-transparent"
                    animate={isDecomposed ? "decomposed" : "formed"}
                    variants={ringVariants}
                    custom={{ x: 0, y: 0, rotate: -45, initialRotate: 72, duration: 4.5, delay: 1 }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{ rotate: 72 }}
                />

                {/* Petal 4: Yellow */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[85%] border-[3vw] max-border-[40px] border-ninona-yellow rounded-[50%] opacity-80 mix-blend-screen bg-transparent"
                    animate={isDecomposed ? "decomposed" : "formed"}
                    variants={ringVariants}
                    custom={{ x: 200, y: 0, rotate: 90, initialRotate: 108, duration: 5.5, delay: 1.5 }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    style={{ rotate: 108 }}
                />

                {/* Petal 5: Blue */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[85%] border-[3vw] max-border-[40px] border-ninona-blue rounded-[50%] opacity-80 mix-blend-screen bg-transparent"
                    animate={isDecomposed ? "decomposed" : "formed"}
                    variants={ringVariants}
                    custom={{ x: 400, y: 0, rotate: 135, initialRotate: 144, duration: 5, delay: 2 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    style={{ rotate: 144 }}
                />
            </div>
        </div>
    );
};

export default AtomCanvas;
