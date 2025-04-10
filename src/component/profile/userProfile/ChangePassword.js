import { Field } from "formik";
import { FormInputField } from "./form/FormInputField";

export const ChangePassword = ({values, handleChange}) => {
  return (
    <div className="changepassword__container">
      <h2>Change Password</h2>
      <div className="input__container">
        <div className="changepassword__inputcontainer">
          <h3>Old Password</h3>
          <Field
            label="Enter Old Password"
            name="oldPassword"
            component={FormInputField}
            type="password"
            value={values.oldPassword}
            onChange={handleChange}
          />
        </div>
        <div className="changepassword__inputcontainer">
          <h3>New Password</h3>
          <div className="changepassword__newpasswordcontainer">
            <Field
              label="Enter New Password"
              name="newPassword"
              component={FormInputField}
              type="password"
              value={values.newPassword}
              onChange={handleChange}
            />
            <Field
              label="Enter Confirm Password"
              name="confirmPassword"
              component={FormInputField}
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
