import * as Yup from "yup";

export const personalValidationSchema = Yup.object({
  pastorName: Yup.string()
    .required("Name is Required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  pastorDOB: Yup.date()
    .required("Date of Birth is Required")
    .typeError("Enter DOB in MM/DD/YYYY"),
  fatherName: Yup.string()
    .required("Father Name is Required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  motherName: Yup.string()
    .required("Mother Name is Required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  nativePlace: Yup.string().required("Native Place is Required"),
  nativeDistrict: Yup.string().required("Native District is Required"),
  nativeState: Yup.string().required("Native State is Required"),
  contactNo: Yup.string()
    .required("Contact No is Required")
    .matches(/^\d{10}$/, "Contact No must be 10 digits"),
  emergencyContactNo: Yup.string()
    .required("Emergency No is Required")
    .matches(/^\d{10}$/, "Emergency No must be 10 digits"),
  emailId: Yup.string()
    .required("Email is Required")
    .email("Enter valid Email Id"),
  maritalStatus: Yup.string().required("Martial Status is Required"),
  wifeName: Yup.string()
    .test("wife-name-required", "Wife name is required", function (value) {
      const { maritalStatus } = this.parent;
      if (maritalStatus === "Married" && !value) {
        return this.createError({ message: "Wife name is required" });
      }
      return true;
    })
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  pastorWifeDOB: Yup.date()
    .test("wife-dob-required", "Date of birth is required", function (value) {
      const { maritalStatus } = this.parent;
      if (maritalStatus === "Married" && !value) {
        return this.createError({
          message: "Date of birth is required",
        });
      }
      return true;
    })
    .typeError("Enter a valid date (MM/DD/YYYY)"),
  firstChildName: Yup.string()
    .test("first-child-name-required", "Name is required", function (value) {
      const { maritalStatus } = this.parent;
      if (maritalStatus === "Married" && !value) {
        return this.createError({
          message: "Name is required",
        });
      }
      return true;
    })
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  secondChildName: Yup.string()
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
});

export const qualificationSchema = Yup.object({
  collegeDegree: Yup.string().required("Degree is Required"),
  collegeInstitute: Yup.string()
    .required("Institute is Required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  collegePlace: Yup.string()
    .required("Place is Required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  collegeYearOfPassing: Yup.string().required("Year of Passing is Required"),
  theologicalDegree: Yup.string().required("Degree is Required"),
  theologicalInstitute: Yup.string()
    .required("Institute is Required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  theologicalPlace: Yup.string()
    .required("Place is Required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  theologicalYearOfPassing: Yup.string().required(
    "Year of Passing is Required"
  ),
  ordinationDegree: Yup.string().required("Degree is Required"),
  ordinationInstitute: Yup.string()
    .required("Institute is Required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  ordinationPlace: Yup.string()
    .required("Place is Required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  ordinationDate: Yup.date()
    .typeError("Date Format MM/DD/YYYY")
    .required("Date is required"),
  ordinationMinistryStartingDate: Yup.string().required(
    "Ministry Starting Date is Required"
  ),
});

export const churchDetailSchema = Yup.object({
  churchName: Yup.string()
    .required("Church name is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  doorNo: Yup.string().required("Door No is required"),
  streetName: Yup.string()
    .required("Street Name is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  panchayat: Yup.string()
    .required("Panchayat is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  village: Yup.string()
    .required("Village is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  thaluk: Yup.string()
    .required("Thaluk is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  district: Yup.string()
    .required("District is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  assemblyConstituency: Yup.string()
    .required("Assembly Constituency is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  parliamentConstituency: Yup.string()
    .required("Parliament Constituency is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  localPoliceStation: Yup.string()
    .required("Local Police Station is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  churchWebsite: Yup.string()
    // .url("Enter Valid Website")
    .required("Church Website is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  independentDenomination: Yup.string().required("Choose one"),
  nameOfDenomination: Yup.string()
    .test(
      "denomination-name-required",
      "Denomination name is required",
      function (value) {
        const { independentDenomination } = this.parent;
        if (independentDenomination === "Denomination" && !value) {
          return this.createError({ message: "Denomination name is required" });
        }
        return true;
      }
    )
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  presidentDenomination: Yup.string()
    .test(
      "president-name-required",
      "President name is required",
      function (value) {
        const { independentDenomination } = this.parent;
        if (independentDenomination === "Denomination" && !value) {
          return this.createError({ message: "President name is required" });
        }
        return true;
      }
    )
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  headQuarters: Yup.string()
    .test(
      "head-quarters-required",
      "Head Quarters is required",
      function (value) {
        const { independentDenomination } = this.parent;
        if (independentDenomination === "Denomination" && !value) {
          return this.createError({ message: "Head Quarters is required" });
        }
        return true;
      }
    )
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  registrationNo: Yup.string()
    .test(
      "Registration-no-required",
      "Registration No is required",
      function (value) {
        const { independentDenomination } = this.parent;
        if (independentDenomination === "Denomination" && !value) {
          return this.createError({ message: "Registration No is required" });
        }
        return true;
      }
    )
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
});

export const churchPropertySchema = Yup.object({
  ownerName: Yup.string()
    .required("Owner Name required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  registerDate: Yup.date()
    .required("Register Date required")
    .typeError("Date Format MM/DD/YYYY"),
  ownLegalIssues: Yup.string()
    .required("Legal Issue required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  rentalownerName: Yup.string()
    .required("Owner Name required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  rentalRegisterDate: Yup.date()
    .required("Register Date required")
    .typeError("Date Format MM/DD/YYYY"),
  rentalLegalIssues: Yup.string()
    .required("Legal Issue required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  contactChurchName: Yup.string()
    .required("Church name is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  contactDoorNo: Yup.string().required("Door No is required"),
  conatStreetName: Yup.string()
    .required("Street Name is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  contactPanchayat: Yup.string()
    .required("Panchayat is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  contactVillage: Yup.string()
    .required("Village is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  contactThaluk: Yup.string()
    .required("Thaluk is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
  contactDistrict: Yup.string()
    .required("District is required")
    .min(4, "Minimum 4 letter")
    .max(50, "Maximum 50 letters"),
});
