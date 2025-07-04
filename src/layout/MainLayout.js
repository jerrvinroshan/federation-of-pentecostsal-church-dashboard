import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../component/NavBar";
import { SideNavBar } from "../component/SideNavBar";
import { useEffect, useState } from "react";

export const MainLayout = () => {
  const [authToken, setAuthToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));
      if (!token) {
        navigate("/");
      } else {
        setAuthToken(token);
      }
    } catch (e) {
      console.error("Failed to parse authToken:", e);
      navigate("/");
      setAuthToken(null);
    }
  }, [navigate]);

  console.log(authToken);

  return (
    <>
      <NavBar />
      <div style={{ display: "flex", gap: "20px" }}>
        <SideNavBar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
