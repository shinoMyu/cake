export const validateUsername = (username) => {
  if (!username.trim()) {
    return "Please enter your username.";
  }
  return "";
};

export const validateEmail = (email) => {
  if (!email.trim()) {
    return "Please enter your email.";
  }
  return "";
};

export const validatePassword = (password) => {
  if (!password.trim()) {
    return "Please enter your password.";
  }
  if (password.trim().length < 6) {
    return "Password must be at least 6 characters.";
  }
  return "";
};

export const validateForm = ({
  username,
  email,
  password,
  isRegister
}) => {
  const errors = {};

  const usernameError = validateUsername(username);
  if (usernameError) {
    errors.username = usernameError;
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    errors.password = passwordError;
  }

  if (isRegister) {
    const emailError = validateEmail(email);
    if (emailError) {
      errors.email = emailError;
    }
  }

  return errors;
};