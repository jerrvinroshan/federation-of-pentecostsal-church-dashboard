import { Outlet } from "react-router-dom";
import { NavBar } from "../component/NavBar";
import { SideNavBar } from "../component/SideNavBar";

export const MainLayout = () => {
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
