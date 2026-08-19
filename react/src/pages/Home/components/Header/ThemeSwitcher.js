import { useRef, useState } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import useClickOutside from "../../../../hooks/useClickOutside";

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

    useClickOutside(themeRef, () => setShowOptions(false));
    
    return (
        <div className="theme-switch" ref={themeRef}>
            <button className="theme-toggle" title="theme" onClick={handleToggle}></button>
            {showOptions && (
                <div className="theme-options">
                    <button className={theme === "orange" ? "active" : ""} onClick={() => handleThemeChange("orange")}>Orange</button>
                    <button className={theme === "blue" ? "active" : ""} onClick={() => handleThemeChange("blue")}>Blue</button>
                </div>
            )}
        </div>
    )
};

export default ThemeSwitcher;