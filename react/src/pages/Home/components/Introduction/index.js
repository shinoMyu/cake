import "./introduction.css"
import "./LanguageSwitcher.css"
import LanguageSwitcher from "./LanguageSwitcher";
import { locales } from "../../../../locales";
import { useLanguage } from "../../../../context/LanguageContext";
import VideoPlayer from "./VideoPlayer";

const Introduction = () => {
    const { language } = useLanguage();
    const text = locales[language];

    return <section id="introduction">
        <LanguageSwitcher />
            <h2 className={`section-title ${language}`}>
                {text.introduction.sectionTitle}
            </h2>
            <div className="intro-container">
                <VideoPlayer />
                <div className="intro-text">
                    <div className={`intro-content ${language}`}>
                        <h2>{text.introduction.title}</h2>
                        {text.introduction.paragraphs.map((paragraphs, index) => (
                            <p key={index}>{paragraphs}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
}

export default Introduction;