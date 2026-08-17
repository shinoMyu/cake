import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../../../context/ThemeContext";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const [showOptions, setShowOptions] = useState(false);

    const themeRef = useRef(null);

    const handleToggle = () => {
        setShowOptions(prev => !prev)
    }

    const handleThemeChange = (selectedTheme) => {
        toggleTheme(selectedTheme);
        setShowOptions(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                themeRef.current &&
                !themeRef.current.contains(event.target)
            ) {
                setShowOptions(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    
    return (
        <div className="theme-switch" ref={themeRef}>
            <button className="theme-toggle" title="theme" onClick={handleToggle}></button>
            {showOptions && (
                <div className="theme-options" id="themeOptions">
                    <button className={theme === "orange" ? "active" : ""} onClick={() => handleThemeChange("orange")}>Orange</button>
                    <button className={theme === "blue" ? "active" : ""} onClick={() => handleThemeChange("blue")}>Blue</button>
                </div>
            )}
        </div>
    )
};

export default ThemeSwitcher;