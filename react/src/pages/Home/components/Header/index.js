import logo from "../../../../assets/image/Logo.jpg";
import "./header.css";
import ThemeSwitcher from "./ThemeSwitcher";
import Navigation from "./Navigation";
import AuthButton from "./AuthButton";
import MusicPlayer from "./MusicPlayer";
import { Link } from "react-router-dom";

const Header = () => {
    return <header>
        <div className="header-container">
            <div className="left">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
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