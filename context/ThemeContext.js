'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const savedTheme = document.documentElement.getAttribute('data-theme');
            if (savedTheme) {
                setTheme(savedTheme);
            }
        } else {
            console.warn('document is not defined');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', newTheme);
        } else {
            console.warn('document is not defined');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
