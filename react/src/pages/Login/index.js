import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import "../../global/theme.css";
import "./login-register.css";
import FormField from "./components/FormField";
import { validateForm } from "./validation";
import FeedbackMessage from "./components/FeedbackMessage";


const Login = () => {
    const [isRegister, setIsRegister] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const toggleForm = () => {
        setIsRegister(prev => !prev);
        setMessage("");
        resetForm();
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setError({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            username: username.trim(),
            email: email.trim(),
            password: password.trim(),
        };

        const validationErrors = validateForm({
            ...formData,
            isRegister,
        });

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        if (!isRegister) {
            const user = storedUsers.find(u => u.username === formData.username);

            if (!user) {
                setError({
                    username: "Username does not exist."
                });
                return;
            }

            if (user.password !== formData.password) {
                setError({
                    password: "Incorrect password."
                });
                return;
            }

            localStorage.setItem("isLoggedIn", "true");
            setMessage("Login successful! Redirecting to homepage...");
            return;
        }

        if (storedUsers.some(u => u.username === formData.username)) {
            setError({
                username: "Username is already taken."
            });
            return;
        }

        if (storedUsers.some(u => u.email === formData.email)) {
            setError({
                email: "Email is already registered."
            });
            return;
        }

        storedUsers.push(formData);

        localStorage.setItem("users", JSON.stringify(storedUsers));
        setMessage("Registration successful! You can now sign in.");
    }

    const closeMessage = () => {
        setMessage("");

        if (!isRegister) {
            navigate("/");
            return;
        }

        setIsRegister(false);
        resetForm();
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>{isRegister ? "Create an account" : "Sign in to CakeSite"}</h2>
                <form onSubmit={handleSubmit}>
                    <FormField
                        id="username"
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={error.username}
                        required
                    />

                    {isRegister && (
                        <FormField
                            id="email"
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={error.email}
                            required
                        />
                    )}

                    <FormField
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={error.password}
                        required
                        minLength={6}
                    />

                    <button type="submit">{(!isRegister) ? "Sign in" : "Register"}</button>

                </form>

                <p className="toggle-link">
                    {(!isRegister) && (
                        <span className="toggle-text">New to CakeSite?</span>
                    )}
                    <button className="login-link" type="button" onClick={toggleForm}>
                        {isRegister ? "Back to Sign in" : "Create an account"}
                    </button>
                    <div className="back-home">
                        <Link to="/">Back to Home</Link>
                    </div>
                </p>

                <FeedbackMessage message={message} onClose={closeMessage}/>
            </div>
        </div>
    )
};

export default Login;