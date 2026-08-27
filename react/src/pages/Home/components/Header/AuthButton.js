import { useRef, useState } from "react";
import login from "../../../../assets/image/Login.png";
import { useNavigate } from "react-router-dom"
import useClickOutside from "../../../../hooks/useClickOutside";
import { useAuth } from "../../../../context/AuthContext";

const AuthButton = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logout, highlightAuth, setHighlightAuth } = useAuth();
    const [showText, setShowText] = useState(false);
    const [message, setMessage] = useState("");
    const authRef = useRef(null);

    const handleSignOut = () => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile && !showText) {
            setShowText(true);
            return;
        }

        if (isLoggedIn) {
            logout();
            setShowText(false);
            return;
        }

        navigate("/login");
    };

    useClickOutside(authRef, () => setShowText(false));

    return (
        <div className={`auth ${showText ? "show-text" : ""} 
        ${highlightAuth ? "highlight" : ""}`}
            onClick={handleSignOut} ref={authRef}>
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