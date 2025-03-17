import { Button, TextField } from "@mui/material";
import logo from "../assets/image/login-logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginDashboard = () => {
  const [userName, setUserName] = useState("")
  const [ password, setPassword ] = useState("")
  
  const navigate = useNavigate()

  const handleLogin = () => {
    if( userName === "admin" && password === '125448Lisjijds'){
      navigate('/dashboard')
    } else {
      console.log("Invalid credentials. Please try again.");
    }

  }
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
                  <TextField
                    size="small"
                    style={{
                      width: "320px",
                      border: "1px solid #1B0303",
                      borderRadius: "4px",
                    }}
                    label="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    required
                  />
                  <TextField
                    size="small"
                    style={{
                      width: "320px",
                      border: "1px solid #1B0303",
                      borderRadius: "4px",
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    label="Password"
                    required
                  />
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
                  /><label for='remember'>Remember me</label>
                  
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
