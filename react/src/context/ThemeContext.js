import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const THEME_KEY = "selectedTheme";
const DEFAULT_THEME = "orange";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    });

    useEffect(() => {
        document.body.classList.remove(
            "theme-orange",
            "theme-blue"
        );

        document.body.classList.add(`theme-${theme}`);

        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);