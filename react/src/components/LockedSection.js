import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { locales } from "../locales";
import { useEffect } from "react";

const LockedSection = () => {
    const { language } = useLanguage();
    const text = locales[language];

    const { setHighlightAuth } = useAuth();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHighlightAuth(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        const element = document.querySelector(".locked-section");

        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [setHighlightAuth]);

    return (
        <div className="locked-section">
            <p className={language}>
                {text.lockedMessage.before}{" "}
                <span className="highlight">
                    {text.lockedMessage.highlight}
                </span>{" "}
                {text.lockedMessage.after}
            </p>
        </div>
    )
};

export default LockedSection;