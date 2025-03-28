import { Button } from "@mui/material";
import { useState } from "react";
import { Profile } from "../page/Profile";
import { useNavigate } from "react-router-dom";

export const DropDownMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();

  const Profileopen = (e) => {
    e.stopPropagation();
    setIsProfileOpen(true);
  };
  const handleClose = () => {
    setIsProfileOpen(false);
  };

  // Style CSS
  const styleBtn = {
    backgroundColor: "transparent",
    color: "#1B0303",
    textTransform: "capitalize",
    fontWeight: "400",
  };

  return (
    <div className="dropdownmenu__backgroundColor">
      <div className="dropdownmenu__container">
        <Button style={styleBtn} type="button" fullWidth onClick={Profileopen}>
          Profile
        </Button>
        <Button style={styleBtn} onClick={() => navigate("/")} fullWidth>
          Log out
        </Button>
      </div>
      {isProfileOpen && (
        <Profile isProfileOpen={isProfileOpen} handleClose={handleClose} />
      )}
    </div>
  );
};
