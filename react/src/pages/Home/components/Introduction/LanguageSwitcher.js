import { useRef, useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import { useLanguage } from "../../../../context/LanguageContext";

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();
    const [showOptions, setShowOptions] = useState(false);

    const languageRef = useRef(null);

    const handleToggle = () => {
        setShowOptions(prev => !prev)
    }

    const handleLanguageChange = (selectedLanguage) => {
        changeLanguage(selectedLanguage);
        setShowOptions(false);
    }

    useClickOutside(languageRef, () => setShowOptions(false));

    return (
        <div className="language-switch" ref={languageRef}>
            <button className="lang-toggle" title="language" onClick={handleToggle}></button>
            {showOptions &&
                <div className="lang-options" >
                    <button
                        className={language === "en" ? "active" : ""}
                        onClick={() => handleLanguageChange("en")}>EN</button>
                    <button
                        className={language === "traditional" ? "active" : ""}
                        onClick={() => handleLanguageChange("traditional")}>繁體</button>
                    <button
                        className={language === "jp" ? "active" : ""}
                        onClick={() => handleLanguageChange("jp")}>日本語</button>
                </div>
            }
        </div>
    )
};

export default LanguageSwitcher;