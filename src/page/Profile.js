import { NavLink } from "react-router-dom";
import { useState } from "react";
import { UserProfile } from "../component/profile/userProfile/UserProfile";
import { ChangePassword } from "../component/profile/userProfile/ChangePassword";
import { Button, Modal, Paper } from "@mui/material";

export const Profile = ({ isProfileOpen, handleClose }) => {
  const [isUserProfile, setIsUserProfile] = useState(true);
  const [isSetting, setISetting] = useState(false);

  const handleUserProfileClick = (e) => {
    e.stopPropagation();
    setIsUserProfile(true);
    setISetting(false);
  };
  const handleSettingClick = (e) => {
    e.stopPropagation();
    setISetting(true);
    setIsUserProfile(false);
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // Style CSS
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    border: 0,
  };
  return (
    <Modal
      open={isProfileOpen}
      onClose={handleClose}
      className="profileinfo__container"
      sx={{ border: 0 }}
    >
      <Paper sx={style} onClick={handleModalClick}>
        <div className="profile__headcontainer">
          <h1>Profile</h1>
          <div style={{ display: "flex", gap: "16px" }}>
            <NavLink
              onClick={handleUserProfileClick}
              className="profile__userprofile"
              style={{
                fontWeight: isUserProfile ? "700" : "400",
                borderBottom: isUserProfile ? "2px solid #1B0303" : "none",
              }}
            >
              User Profile
            </NavLink>
            <NavLink
              onClick={handleSettingClick}
              className="profile__userprofile"
              style={{
                fontWeight: isSetting ? "700" : "400",
                borderBottom: isSetting ? "2px solid #1B0303" : "none",
              }}
            >
              Settings
            </NavLink>
          </div>
        </div>
        <div
          style={{
            marginTop: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {isUserProfile && <UserProfile />}
          {isSetting && <ChangePassword />}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0px",
            }}
          >
            <Button
              style={{
                border: "none",
                padding: "8px 28px",
                color: "yellow",
                backgroundColor: "#1B0303",
                borderRadius: "4px",
              }}
            >
              Update
            </Button>
          </div>
        </div>
      </Paper>
    </Modal>
  );
};
