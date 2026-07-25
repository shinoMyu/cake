import logo from "../../../../assets/image/Logo.jpg";
import login from "../../../../assets/image/Login.png";
import music from "../../../../assets/image/music_off.png";
import menu from "../../../../assets/image/menu.png";
import "./header.css";

const Header = () => {
    return <header>
        <div className="header-container" id="top">
            <div className="left">
                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="theme-switch">
                    <button className="theme-toggle" title="theme"></button>
                    <div className="theme-options" id="themeOptions">
                    <button data-theme="default">Orange</button>
                    <button data-theme="blue">Blue</button>
                    </div>
                </div>
            </div>
            <nav className="navMenu-desktop">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#introduction">Introduction</a></li>
                    <li ><a href="#products">Products</a></li>
                    <li ><a href="#about">About</a></li>
                </ul>
            </nav>
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
                        <source src="audio/日々の喜び.mp3" type="audio/mp3" />
                        Your browser doesn't support HTML audio.
                    </audio>
                </div>
                <div className="navMenu-toggle">
                    <img id="menu-toggle" src={menu} alt="menu" />
                </div>
                <div id="menu-overlay" className="menu-overlay hidden">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
}

export default Header;