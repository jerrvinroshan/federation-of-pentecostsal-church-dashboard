import * as Yup from "yup";

export const personalValidation = Yup.object({
  pastorName: Yup.string()
    .required("Pastor Name is Required")
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters"),
  pastorDOB: Yup.string().required("Pastor Date of Birth is Required"),
  fatherName: Yup.string()
    .required("Pastor Father Name is Required")
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters"),
  motherName: Yup.string()
    .required("Pastor Mother Name is Required")
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters"),
  nativePlace: Yup.string().required("Native Place is Required"),
  nativeDistrict: Yup.string().required("Native District is Required"),
  nativeState: Yup.string().required("Native State is Required"),
  contactNo: Yup.string().required("Contact No is Required"),
  emergencyContactNo: Yup.string().required("Emergency Contact No is Required"),
  emailId: Yup.string()
    .required("Email Id is Required")
    .email("Enter valid Email Id"),
  matrialStatus: Yup.string().required("Matrial Status is Required"),
  wifeName: Yup.string()
    .required("Pastor Wife Name is Required")
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters"),
  pastorWifeDOB: Yup.string().required("DOB is Required"),
  firstChildName: Yup.string()
    .required("Pastor Name is Required")
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters"),
  secondChildName: Yup.string()
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters"),
});
