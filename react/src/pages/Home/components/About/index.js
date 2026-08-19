
import { locales } from "../../../../locales";
import { useLanguage } from "../../../../context/LanguageContext";
import "./about.css"

const About = () => {
    const { language } = useLanguage();
    const text = locales[language];

    return <section id="about">
        <h2 className={`section-title ${language}`}>
            {text.about.sectionTitle}
        </h2>
        <div className={`about-content ${language}`}>
            {text.about.paragraphs.map((paragraphs, index) => (
                <p key={index}>{paragraphs}</p>
            ))}
        </div>
    </section>
}

export default About;