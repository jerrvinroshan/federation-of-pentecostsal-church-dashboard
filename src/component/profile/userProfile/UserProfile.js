import { Button, TextField } from "@mui/material";
import { userProfileData } from "../../../data/userProfileData";

import profileImg from "../../../assets/image/profileppic.png";
import { useState } from "react";

export const UserProfile = () => {
  const [firstName, setFirstName] = useState(userProfileData[0].firstName);
  const [lastName, setLastName] = useState(userProfileData[0].lastName);
  const [emailId, setEmailId] = useState(userProfileData[0].emailId);

  return (
    <div className="UserProfile__container">
      <h2>User Profile</h2>
      <div className="userprofile__contentcontainer">
        <div className="userprofile__profileimagecontainer">
          <img
            className="useProfile__profileimage--img"
            src={profileImg}
            alt="User Profile"
          />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            style={{ maxWidth: "72px", maxHeight: "30px", padding: "4px 10px" }}
          >
            Upload
          </Button>
        </div>
        <div className="userprofile__inputcontainer">
          <TextField
            style={{ width: "220px" }}
            size="small"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            style={{ width: "220px" }}
            size="small"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            style={{ width: "220px" }}
            size="small"
            label="Email Id"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <TextField style={{ width: "220px" }} size="small" label="Phone No" />
          <textarea
            style={{ minWidth: "220px", maxWidth: "220px", overflow: "auto" }}
            label="Address"
          />

          <TextField style={{ width: "220px" }} size="small" label="Zone" />
        </div>
      </div>
    </div>
  );
};
