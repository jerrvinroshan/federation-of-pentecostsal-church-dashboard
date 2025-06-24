import { useState } from "react";
import { Button } from "@mui/material";
import { Field } from "formik";
import { FormInputField } from "./form/FormInputField";
import { FormTextArea } from "./form/FormTextArea";

import profileImg from "../../../assets/image/profileppic.png";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePic } from "../../../store/member/profileSlice";

export const UserProfile = ({ values, handleChange, errors }) => {
  const [image, setImage] = useState(profileImg);

  const profileImage = useSelector((state) => state.profile.user.profilePic);
  const dispatch = useDispatch();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="UserProfile__container">
      <h2>User Profile</h2>
      <div className="userprofile__contentcontainer">
        <div className="userprofile__profileimagecontainer">
          <img
            className="useProfile__profileimage--img"
            src={profileImage}
            alt="User Profile"
          />
          <Button
            component="label"
            variant="contained"
            style={{
              maxWidth: "72px",
              maxHeight: "30px",
              padding: "4px 10px",
            }}
          >
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </Button>
        </div>

        <form className="userprofile__inputcontainer">
          <div style={{ display: "flex", gap: "12px" }}>
            <Field
              label="First Name"
              name="firstName"
              component={FormInputField}
              value={values.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <Field
              label="Last Name"
              name="lastName"
              component={FormInputField}
              value={values.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <Field
              label="Email Id"
              name="emailId"
              component={FormInputField}
              value={values.emailId}
              onChange={handleChange}
              error={errors.emailId}
            />
            <Field
              label="Phone No"
              name="phoneNo"
              component={FormInputField}
              value={values.phoneNo}
              onChange={handleChange}
              error={errors.phoneNo}
            />
          </div>
          <Field
            label="Address"
            name="address"
            component={FormTextArea}
            value={values.address}
            onChange={handleChange}
            error={errors.address}
          />
          <Field
            label="Zone"
            name="zone"
            component={FormInputField}
            value={values.zone}
            onChange={handleChange}
            error={errors.zone}
          />
        </form>
      </div>
    </div>
  );
};
