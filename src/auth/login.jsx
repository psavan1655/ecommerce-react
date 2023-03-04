import React, { useContext, useState } from "react";
import "./auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const theme = useContext(ThemeContext);

  const handleChangeEmail = (event) => {
    if (event.target.value) {
      setEmail(event.target.value);
      setError("");
    } else {
      setEmail(event.target.value);
      setError("Email is required");
    }
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const payload = {
        email: email,
        password: password,
      };
      const data = await axios.post(
        "https://exommerce-express-ldrp.onrender.com/login",
        payload
      );

      localStorage.setItem("userToken", data.data.token);
      theme.setData(data.data.token);

      navigate("/dummy-user");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Enter your email"
          className="login-input"
        />
        <div>{error}</div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="Enter your password"
          className="login-input"
        />
        <button
          type="submit"
          style={{
            marginTop: "16px",
          }}
        >
          {isLoading ? "Loading ..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
