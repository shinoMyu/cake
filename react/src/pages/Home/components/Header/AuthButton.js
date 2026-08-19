import { useRef, useState } from "react";
import login from "../../../../assets/image/Login.png";
import { useNavigate } from "react-router-dom"
import useClickOutside from "../../../../hooks/useClickOutside";

const AuthButton = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [showText, setShowText] = useState(false);
    const authRef = useRef(null);
    
    const handleSignOut = () => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile && !showText) {
            setShowText(true);
            return;
        }

        if (isLoggedIn) {
            localStorage.removeItem("isLoggedIn");
            setIsLoggedIn(false);
            setShowText(false);
            alert("You have been signed out.");
        } else {
            navigate("/login");
        }
    };

    useClickOutside(authRef, () => setShowText(false));

    return (
        <div className={`auth ${showText ? "show-text" : ""}`} onClick={handleSignOut} ref={authRef}>
            <div className="login-register">
                <img src={login} alt="Login/Register" />
                <span className="auth-text">
                    {isLoggedIn ? "Sign out" : "Sign in"}
                </span>
            </div>
        </div>
    )
};

export default AuthButton;