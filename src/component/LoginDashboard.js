import { Button, TextField } from "@mui/material";
import logo from "../assets/image/login-logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const LoginDashboard = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const LoginSchma = Yup.object({
    userName: Yup.string().required("Enter User Name"),
    password: Yup.string().required("Enter Password"),
  });

  const { userName, password } = loginData;
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await LoginSchma.validate(loginData, { abortEarly: false });
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setError(newErrors);
    }
    if (userName === "admin" && password === "Password@1") {
      navigate("/dashboard");
    } else {
      console.log("Invalid credentials. Please try again.");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  return (
    <div className="login__container--center">
      <div className="login__container">
        <div className="login__contentcontainer">
          <img
            src={logo}
            alt="Federation Logo"
            className="login__content--img"
          />
          <div className="contentcontainer__wrapper">
            <h1 className="contentcontainer--h1">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="contentcontainer__input-button">
                <div className="contentcontainer__input-remember">
                  <div className="contentcontainer__input">
                    <div className="input-error-container">
                      <TextField
                        size="small"
                        style={{
                          width: "320px",
                          border: "1px solid #1B0303",
                          borderRadius: "4px",
                        }}
                        label="Username"
                        name="userName"
                        onChange={handleChange}
                        value={userName}
                      />
                      {error.userName && <div className="login-error">{error.userName}</div>}
                    </div>
                    <div className="input-error-container">
                    <TextField
                      size="small"
                      style={{
                        width: "320px",
                        border: "1px solid #1B0303",
                        borderRadius: "4px",
                      }}
                      type="password"
                      label="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                    {error.password && <div className="login-error">{error.password}</div>}</div>
                  </div>
                  <div className="contentcontainer__remember">
                    <input
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "1px solid #1B0303",
                      }}
                      type="checkbox"
                      id="remember"
                    />
                    <label for="remember">Remember me</label>
                  </div>
                </div>
                <Button
                  style={{
                    color: "#EEEE00",
                    backgroundColor: "#1B0303",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
