import React, { createContext, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const LanguageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

const translations = {
    es: {
        hero: {
            weSell: 'Vendemos',
            tickets: 'Entradas',
            subtitle: 'en 16 países diferentes',
            cta: 'DESCUBRE CÓMO LO HACEMOS',
            scroll: 'SCROLL'
        },
        columns: {
            ninona: {
                title: 'Ninona',
                subtitle: 'Comedia',
                button: 'Ver Más'
            },
            fina: {
                title: 'Fina',
                subtitle: 'Festivales',
                button: 'Ver Más'
            },
            international: {
                title: 'Internacional',
                subtitle: 'Mundial',
                button: 'Ver Más'
            }
        },
        footer: {
            copyright: 'Ninona Producciones & Management.',
            instagram: 'Instagram',
            linkedin: 'LinkedIn',
            contact: 'Contacto'
        }
    },
    en: {
        hero: {
            weSell: 'We Sell',
            tickets: 'Tickets',
            subtitle: 'in 16 different countries',
            cta: 'DISCOVER HOW WE DO IT',
            scroll: 'SCROLL'
        },
        columns: {
            ninona: {
                title: 'Ninona',
                subtitle: 'Comedy',
                button: 'View More'
            },
            fina: {
                title: 'Fina',
                subtitle: 'Festivals',
                button: 'View More'
            },
            international: {
                title: 'International',
                subtitle: 'Worldwide',
                button: 'View More'
            }
        },
        footer: {
            copyright: 'Ninona Productions & Management.',
            instagram: 'Instagram',
            linkedin: 'LinkedIn',
            contact: 'Contact'
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const params = useParams();
    const navigate = useNavigate();
    const language = params.lang || 'es';

    useEffect(() => {
        // If no language in URL, redirect to default /es
        if (!params.lang) {
            navigate('/es', { replace: true });
        }
    }, [params.lang, navigate]);

    const toggleLanguage = () => {
        const newLanguage = language === 'es' ? 'en' : 'es';
        navigate(`/${newLanguage}`);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
