import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (isSignup && !formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (isSignup && formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (isSignup && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setMessage(
      isSignup
        ? "Form validated. Connect your backend to create an account."
        : "Form validated. Connect your backend to sign in.",
    );
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
    setError("");
    setMessage("");
    setShowPassword(false);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        {/* LEFT IMAGE SECTION */}
        <div className="auth-image">
          <div className="auth-image-overlay">
            <Link to="/" className="auth-brand">
              MEHRAE
              <span>COUTURE</span>
            </Link>

            <div className="auth-image-content">
              <span>THE ART OF ELEGANCE</span>

              <h1>
                Fashion That
                <br />
                Defines You.
              </h1>

              <p>
                Discover timeless collections crafted for your unique style.
              </p>
            </div>

            <div className="auth-image-footer">
              ELEGANCE • CONFIDENCE • STYLE
            </div>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="auth-form-section">
          <Link to="/" className="auth-back">
            <i className="bi bi-arrow-left"></i>
            Back to Home
          </Link>

          <div className="auth-form-wrapper">
            <div className="auth-heading">
              <span>WELCOME TO MEHRAE COUTURE</span>

              <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

              <p>
                {isSignup
                  ? "Join us and discover a world of timeless fashion."
                  : "Sign in to continue your fashion journey."}
              </p>
            </div>

            {/* LOGIN / SIGNUP TABS */}
            <div className="auth-tabs">
              <button
                type="button"
                className={!isSignup ? "active" : ""}
                onClick={() => {
                  if (isSignup) switchMode();
                }}
              >
                Login
              </button>

              <button
                type="button"
                className={isSignup ? "active" : ""}
                onClick={() => {
                  if (!isSignup) switchMode();
                }}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* NAME */}
              {isSignup && (
                <div className="auth-input-group">
                  <label htmlFor="auth-name">Full Name</label>

                  <div className="auth-input-box">
                    <i className="bi bi-person"></i>

                    <input
                      id="auth-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>
                </div>
              )}

              {/* EMAIL */}
              <div className="auth-input-group">
                <label htmlFor="auth-email">Email Address</label>

                <div className="auth-input-box">
                  <i className="bi bi-envelope"></i>

                  <input
                    id="auth-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="auth-input-group">
                <label htmlFor="auth-password">Password</label>

                <div className="auth-input-box">
                  <i className="bi bi-lock"></i>

                  <input
                    id="auth-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete={
                      isSignup ? "new-password" : "current-password"
                    }
                    required
                  />

                  <button
                    type="button"
                    className="auth-eye-btn"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    <i
                      className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                    ></i>
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              {isSignup && (
                <div className="auth-input-group">
                  <label htmlFor="auth-confirm-password">
                    Confirm Password
                  </label>

                  <div className="auth-input-box">
                    <i className="bi bi-shield-lock"></i>

                    <input
                      id="auth-confirm-password"
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      autoComplete="new-password"
                      required
                    />
                  </div>
                </div>
              )}

              {/* REMEMBER ME */}
              {!isSignup && (
                <div className="auth-options">
                  <label className="auth-remember">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              )}

              {/* ERROR MESSAGE */}
              {error && (
                <p className="auth-error" role="alert">
                  {error}
                </p>
              )}

              {/* SUCCESS MESSAGE */}
              {message && (
                <p className="auth-success" role="status">
                  {message}
                </p>
              )}

              {/* SUBMIT BUTTON */}
              <button type="submit" className="auth-submit-btn">
                {isSignup ? "CREATE ACCOUNT" : "SIGN IN"}
                <i className="bi bi-arrow-right"></i>
              </button>
            </form>

            {/* SWITCH LOGIN / SIGNUP */}
            <p className="auth-switch-text">
              {isSignup ? "Already have an account?" : "Don't have an account?"}

              <button type="button" onClick={switchMode}>
                {isSignup ? "Login" : "Sign Up"}
              </button>
            </p>

            <div className="auth-divider">
              <span>MEHRAE COUTURE</span>
            </div>

            <div className="auth-trust">
              <i className="bi bi-shield-check"></i>
              Your style. Your account. Your privacy.
            </div>
          </div>

          <p className="auth-copyright">
            © {new Date().getFullYear()} Mehrae Couture. All Rights Reserved.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
