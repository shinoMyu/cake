import logo from "../../../../assets/image/Logo.jpg";
import login from "../../../../assets/image/Login.png";
import music from "../../../../assets/image/music_off.png";
import musicFile from "../../../../assets/audio/日々の喜び.mp3";
import "./header.css";
import ThemeSwitcher from "./ThemeSwitcher";
import Navigation from "./Navigation";

const Header = () => {
    return <header>
        <div className="header-container">
            <div className="left">
                <div className="header-logo">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <ThemeSwitcher />
            </div>
            <Navigation type={"desktop"} />
            <div className="right">
                <div className="auth" id="authBtn">
                    <div className="login-register">
                        <img src={login} alt="Login/Register" />
                        <span className="auth-text">Sign in</span>
                    </div>
                </div>
                <div className="music">
                    <button id="musicBtn" title="Music">
                        <img id="music-icon" src={music} alt="Music" />
                    </button>
                    <audio id="background-music" loop>
                        <source src={musicFile} type="audio/mp3" />
                        Your browser doesn't support HTML audio.
                    </audio>
                </div>
                <Navigation type={"mobile"} />
            </div>
        </div>
    </header>
}

export default Header;