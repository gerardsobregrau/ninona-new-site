import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const AtomCanvas = ({ isDecomposed }) => {
    // Keep the flower always formed, only animate breathing effect
    const petalVariants = (custom) => ({
        scale: [1, 1.05, 1],
        filter: ["blur(2px)", "blur(4px)", "blur(2px)"],
        transition: {
            duration: custom.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: custom.delay
        }
    });

    return (
        <div className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ${isDecomposed ? 'opacity-0' : 'opacity-40'} overflow-hidden`}>
            <div className="relative w-full h-full">
                {/* Petal 1: Green */}
                <motion.div
                    className="absolute border-ninona-green rounded-[50%] opacity-80 mix-blend-screen bg-transparent"
                    style={{
                        top: '50%',
                        left: '50%',
                        width: '100vw',
                        height: '100vh',
                        borderWidth: '3vw',
                        marginLeft: '-50vw',
                        marginTop: '-50vh',
                        rotate: 0
                    }}
                    animate={petalVariants({ duration: 4, delay: 0 })}
                />

                {/* Petal 2: Pink */}
                <motion.div
                    className="absolute border-ninona-pink rounded-[50%] opacity-80 mix-blend-screen bg-transparent"
                    style={{
                        top: '50%',
                        left: '50%',
                        width: '100vw',
                        height: '100vh',
                        borderWidth: '3vw',
                        marginLeft: '-50vw',
                        marginTop: '-50vh',
                        rotate: 72
                    }}
                    animate={petalVariants({ duration: 5, delay: 0.5 })}
                />

                {/* Petal 3: Orange */}
                <motion.div
                    className="absolute border-ninona-orange rounded-[50%] opacity-80 mix-blend-screen bg-transparent"
                    style={{
                        top: '50%',
                        left: '50%',
                        width: '100vw',
                        height: '100vh',
                        borderWidth: '3vw',
                        marginLeft: '-50vw',
                        marginTop: '-50vh',
                        rotate: 144
                    }}
                    animate={petalVariants({ duration: 4.5, delay: 1 })}
                />

                {/* Petal 4: Yellow */}
                <motion.div
                    className="absolute border-ninona-yellow rounded-[50%] opacity-80 mix-blend-screen bg-transparent"
                    style={{
                        top: '50%',
                        left: '50%',
                        width: '100vw',
                        height: '100vh',
                        borderWidth: '3vw',
                        marginLeft: '-50vw',
                        marginTop: '-50vh',
                        rotate: 216
                    }}
                    animate={petalVariants({ duration: 5.5, delay: 1.5 })}
                />

                {/* Petal 5: Blue */}
                <motion.div
                    className="absolute border-ninona-blue rounded-[50%] opacity-80 mix-blend-screen bg-transparent"
                    style={{
                        top: '50%',
                        left: '50%',
                        width: '100vw',
                        height: '100vh',
                        borderWidth: '3vw',
                        marginLeft: '-50vw',
                        marginTop: '-50vh',
                        rotate: 288
                    }}
                    animate={petalVariants({ duration: 5, delay: 2 })}
                />
            </div>
        </div>
    );
};

export default AtomCanvas;
