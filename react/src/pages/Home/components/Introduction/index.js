import introVideo from "../../../../assets/video/video.mp4";
import cover from "../../../../assets/image/cover.jpg";
import "./introduction.css"
import "./LanguageSwitcher.css"
import LanguageSwitcher from "./LanguageSwitcher";
import { locales } from "../../../../locales";
import { useLanguage } from "../../../../context/LanguageContext";

const Introduction = () => {
    const { language } = useLanguage();
    const text = locales[language];

    return <section id="introduction">
        <LanguageSwitcher />
            <h2 className={`section-title ${language}`}>
                {text.introduction.sectionTitle}
            </h2>
            <div className="intro-container">
                <div className="video-container">
                    <video id="intro-video" width="300" muted poster={cover}>
                        <source src={introVideo} type="video/mp4" />
                        Your browser doesn't support HTML video.
                    </video>                    
                    <div className="video-controls">
                        <button id="playPauseBtn" title="Play"><i className="fas fa-play"></i></button>
                        <button id="expandVideoBtn" title="Enter Fullscreen"><i className="fas fa-expand"></i></button>
                        <button id="muteBtn" title="Mute"><i className="fas fa-volume-mute"></i></button>
                        <div id="volumeControl">
                            {/* <input type="range" id="volumeSlider" min="0" max="1" step="0.01" value="1" /> */}
                          </div>
                        {/* <input type="range" id="progressBar" value="0" min="0" max="100" /> */}
                        <button id="replayBtn" title="Replay"><i className="fas fa-rotate-left"></i></button>                        
                        <button id="closeFullscreenBtn" title="Close"><i className="fas fa-times"></i></button>
                    </div>
                </div>
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