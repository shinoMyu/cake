import logo from "../../../../assets/image/Logo.jpg";
import "./header.css";
import ThemeSwitcher from "./ThemeSwitcher";
import Navigation from "./Navigation";
import AuthButton from "./AuthButton";
import MusicPlayer from "./MusicPlayer";

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
                <AuthButton />
                <MusicPlayer />
                <Navigation type={"mobile"} />
            </div>
        </div>
    </header>
};

export default Header;