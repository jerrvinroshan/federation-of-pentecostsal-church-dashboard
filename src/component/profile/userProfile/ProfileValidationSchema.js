import * as Yup from "yup";

export const userProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters"),
  lastName: Yup.string()
    .required()
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters"),
  emailId: Yup.string()
    .email("Enter Vaild Email")
    .required("Email is required"),
  phoneNo: Yup.string()
    .required("Phone No is Required")
    .matches(/^\d{10}$/, "Contact No must be 10 digits"),
  address: Yup.string()
    .required("Enter the Address")
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters"),
  zone: Yup.string()
    .required("Enter the zone")
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters"),
});

export const settingSchema = Yup.object({
  oldPassword: Yup.string().required("Enter Old password"),
  //new password
  newPassword: Yup.string()
    .required("Enter New password")
    .min(8, "Password atleat have 8 characters")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one symbol"
    )
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
  confirmPassword: Yup.string()
    .required("Enter Confirm password")
    .oneOf([Yup.ref("newPassword")], "Password must match"),
});
