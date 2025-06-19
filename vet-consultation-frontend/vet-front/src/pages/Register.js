import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axios.post("http://localhost:8084/api/auth/register", {
        email,
        password,
      });
      navigate("/"); // redirect to login
    } catch (err) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <h2 className={styles.registerTitle}>Register</h2>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleRegister} className={styles.registerForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.formInput}
              autoComplete="email"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.formInput}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className={styles.togglePassword}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={styles.registerButton}
          >
            {loading && <span className={styles.spinner}></span>}
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className={styles.loginPrompt}>
          Already have an account?{" "}
          <span
            className={styles.loginLink}
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
