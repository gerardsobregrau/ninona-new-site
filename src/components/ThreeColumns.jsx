import React from 'react';
import { motion } from 'framer-motion';

const Column = ({ title, subtitle, color, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay }}
            className="flex-1 min-h-[80vh] flex flex-col items-center justify-center border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors duration-500 group relative overflow-hidden"
        >
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 bg-${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} style={{ backgroundColor: color }}></div>

            <h3 className="font-montserrat font-extrabold text-5xl md:text-6xl text-white z-10 uppercase tracking-tighter">
                {title}
            </h3>
            <p className="font-playfair font-normal text-2xl md:text-3xl text-gray-400 mt-4 z-10 italic">
                {subtitle}
            </p>

            <button className="mt-8 px-6 py-2 border border-white/30 rounded-full text-sm font-poppins uppercase tracking-widest hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                View More
            </button>
        </motion.div>
    );
};

const ThreeColumns = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col md:flex-row z-10 bg-black pt-20">
            <Column title="Ninona" subtitle="Comedia" color="#aacc00" delay={0.2} />
            <Column title="Fina" subtitle="Festivales" color="#e6007e" delay={0.4} />
            <Column title="International" subtitle="Mundial" color="#f39200" delay={0.6} />
        </div>
    );
};

export default ThreeColumns;
