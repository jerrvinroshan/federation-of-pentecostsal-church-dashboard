import { useState } from "react";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import { userProfileData } from "../../../data/userProfileData";

import profileImg from "../../../assets/image/profileppic.png";

export const UserProfile = () => {
  const [firstName, setFirstName] = useState(userProfileData[0].firstName);
  const [lastName, setLastName] = useState(userProfileData[0].lastName);
  const [emailId, setEmailId] = useState(userProfileData[0].emailId);
  const [phoneNumber, setPhoneNumber] = useState(
    userProfileData[0].phoneNumber
  );
  const [address, setAddress] = useState(userProfileData[0].address);
  const [zone, setZone] = useState(userProfileData[0].zone);

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
        <form className="userprofile__inputcontainer">
          <div style={{ display: "flex", gap: "12px" }}>
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
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <TextField
              style={{ width: "220px" }}
              size="small"
              label="Email Id"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
            <TextField
              style={{ width: "220px" }}
              size="small"
              label="Phone No"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <TextareaAutosize
            minRows={4}
            placeholder="Address"
            style={{ minWidth: "450px", overflow: "auto", maxWidth: "450px" }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <TextField
            style={{ width: "220px" }}
            size="small"
            label="Zone"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
