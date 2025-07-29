const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const formTitle = document.getElementById('form-title');
const toggleBtn = document.getElementById('toggle-btn');
const toggleText = document.querySelector('.toggle-text');

// error message
function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-message")) {
        error = document.createElement("div");
        error.className = "error-message";
        input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
}

function clearErrors(form) {
    const errors = form.querySelectorAll(".error-message");
    errors.forEach(function (e) { e.remove(); });
}


// Switch login/register form
function toggleForm() {
    clearErrors(loginForm);
    clearErrors(registerForm);
    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        formTitle.textContent = 'Sign in to CakeSite';
        toggleBtn.textContent = 'Create an account';
        toggleText.style.display = 'block';
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        formTitle.textContent = 'Create an account';
        toggleBtn.textContent = 'Back to Sign in';
        toggleText.style.display = 'none';
    }
}
toggleBtn.addEventListener("click", toggleForm);

// Login process
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors(loginForm);

    const username = document.getElementById("login-username");
    const password = document.getElementById("login-password");

    let valid = true;
    if (username.value.trim() === "") {
        showError(username, "Please enter your username.");
        valid = false;
    }
    if (password.value.trim() === "") {
        showError(password, "Please enter your password.");
        valid = false;
    }

    if (!valid) return;

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(u => u.username === username.value.trim());

    if (!user) {
        showError(username, "Username does not exist.");
    } else if (user.password !== password.value.trim()) {
        showError(password, "Incorrect password.");
    } else {
        alert("Login successful! Redirecting to homepage...");
        localStorage.setItem("isLoggedIn", "true");
        location.href = "index.html";
    }
});

// Register process
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors(registerForm);

    const username = document.getElementById("register-username");
    const email = document.getElementById("register-email");
    const password = document.getElementById("register-password");

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    let valid = true;

    if (username.value.trim() === "") {
        showError(username, "Please enter a username.");
        valid = false;
    } else if (storedUsers.some(u => u.username === username.value.trim())) {
        showError(username, "Username is already taken.");
        valid = false;
    }

    if (storedUsers.some(u => u.email === email.value.trim())) {
        showError(email, "Email is already registered.");
        valid = false;
    }

    if (password.value.trim() === "") {
        showError(password, "Please enter a password.");
        valid = false;
    } else if (password.value.trim().length < 6) {
        showError(password, "Password must be at least 6 characters.");
        valid = false;
    }

    if (!valid) return;

    storedUsers.push({
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim()
    });

    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert("Registration successful! You can now sign in.");
    toggleForm();
});

