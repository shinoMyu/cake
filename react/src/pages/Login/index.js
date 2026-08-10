// import "./index.css";

const Login = () => {
    return <div className="login-container">
        <h2 id="form-title">Sign in to CakeSite</h2>
        <form id="login-form">
            <label for="login-username">Username</label>
            <input type="text" id="login-username" name="username" required />

            <label for="login-password">Password</label>
            <input type="password" id="login-password" name="password" required />

            <button type="submit">Sign in</button>
        </form>

        <form id="register-form" className="hidden">
            <label for="register-username">Username</label>
            <input type="text" id="register-username" name="username" required />

            <label for="register-email">Email</label>
            <input type="email" id="register-email" name="email" required />

            <label for="register-password">Password</label>
            <input type="password" id="register-password" name="password" required />

            <button type="submit">Register</button>
        </form>

        <p className="toggle-link">
            <span className="toggle-text">New to CakeSite?</span>
            <button className="login-link" id="toggle-btn">Create an account</button>
        </p>
    </div>
}
export default Login;