import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { DropDownMenu } from "./DropDownMenu";

import logo from "../assets/image/logo.svg";
import img from "../assets/image/profileppic.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="NavBar__Container">
        <img src={logo} alt="Federation Logo" />
        <div>
          <div className="Profile__Container">
            <img className="ProfilePic--img" src={img} alt="" />
            <div className="Profile__Wrapper">
              <div className="ProfileContnet__Container">
                <h2 className="ProfileContent--h2">Bosco</h2>
                <p className="ProfileContent--p">bosco@gmail.com</p>
              </div>
              <div
                style={{ position: "relative", cursor: "pointer" }}
                onClick={handleClick}
              >
                {isOpen ? (
                  <>
                    <DropDownMenu /> <KeyboardArrowUpIcon />
                  </>
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
