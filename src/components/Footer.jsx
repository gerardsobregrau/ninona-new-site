import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-12 bg-black border-t border-white/10 text-center text-gray-500 font-poppins text-sm relative z-10">
            <p>&copy; {new Date().getFullYear()} Ninona Producciones & Management.</p>
            <div className="flex justify-center gap-6 mt-4">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;
