import React from 'react';
import { motion } from 'framer-motion';

const AtomCanvas = ({ isDecomposed }) => {
    // Ninona brand colors
    const colors = [
        '#aacc00', // green
        '#e6007e', // pink
        '#f39200', // orange
        '#ffed00', // yellow
        '#009fe3'  // blue
    ];

    // Single large flower size
    const size = 1000;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
            {/* Subtle radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/40" />

            {/* Single centered flower */}
            <div
                className="relative transition-all duration-1000"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: isDecomposed ? 0.4 : 0.25
                }}
            >
                {/* 5 petals forming the Ninona flower */}
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] mix-blend-screen bg-transparent"
                        style={{
                            width: `${size * 0.375}px`,
                            height: `${size * 0.875}px`,
                            borderWidth: `${size * 0.04}px`,
                            borderColor: colors[i],
                            rotate: i * 72, // 360/5 = 72 degrees
                        }}
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: (i * 72) + [0, 360, 720],
                            filter: ["blur(2px)", "blur(5px)", "blur(2px)"]
                        }}
                        transition={{
                            duration: 20 + (i * 2),
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AtomCanvas;
