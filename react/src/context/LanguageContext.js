import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const LANG_KEY = "selectedLang";
const DEFAULT_LANG = "en";

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
    });

    const changeLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        localStorage.setItem(LANG_KEY, selectedLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);