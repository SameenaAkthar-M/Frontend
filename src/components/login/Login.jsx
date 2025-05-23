import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signup = () => navigate("/signup");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-1-gogw.onrender.com/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      // Store user session data
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("email", email);
        localStorage.setItem("name", response.data.name);

        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;

        // Redirect based on role
        if (response.data.role === "admin") {
          window.open("https://sasen-admin.netlify.app/products", "_blank");
        } else {
          navigate("/");
          window.location.reload();
        }
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Invalid credentials. Please check email and password.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="formContainer">
        <h1 className="formHeader">Login</h1>
        <p className="formSubHeader">Login to access your account</p>

        {error && <p className="errorText">{error}</p>}

        <form className="signup-form" onSubmit={submit}>
          <div className="inputGroup">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="inputField"
            />
          </div>

          <div className="inputGroup">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="inputField"
            />
          </div>

          <button type="submit" className="submitButton">
            Login
          </button>

          <p className="orText">OR</p>

          <button type="button" className="switchButton" onClick={signup}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
