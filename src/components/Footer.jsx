import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="w-full py-12 bg-black border-t border-white/10 text-center text-gray-500 font-poppins text-sm relative z-10">
            <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
            <div className="flex justify-center gap-6 mt-4">
                <a href="#" className="hover:text-white transition-colors">{t.footer.instagram}</a>
                <a href="#" className="hover:text-white transition-colors">{t.footer.linkedin}</a>
                <a href="#" className="hover:text-white transition-colors">{t.footer.contact}</a>
            </div>
        </footer>
    );
};

export default Footer;
