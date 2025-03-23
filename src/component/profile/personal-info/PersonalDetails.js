import {
  FormControl,
  TextField,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import * as Yup from "yup";

export const PersonalDetails = () => {
  const [personalData, setPersonalData] = useState({
    pastorName: "",
    pastorDOB: "",
    fatherName: "",
    motherName: "",
    nativePlace: "",
    nativeDistrict: "",
    nativeState: "",
    contactNo: "",
    emergencyContactNo: "",
    emailId: "",
    matrialStatus: "",
    wifeName: "",
    pastorWifeDOB: "",
    firstChildName: "",
    secondChildName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };
  const personalValidation = Yup.object({
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
    emergencyContactNo: Yup.string().required(
      "Emergency Contact No is Required"
    ),
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
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await personalValidation.validate(personalData, { abortEarly: false });
    } catch (error) {
      const newError = {};

      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      setError(newError);
      console.log(newError);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Personal Details</h2>
        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "36px",
          }}
        >
          <div>
            <TextField
              size="small"
              style={{ width: "220px" }}
              label="Pastor Name"
              name="pastorName"
              value={personalData.pastorName}
              onChange={handleChange}
            />
            {error.pastorName && <div>{error.pastorName}</div>}
          </div>
          <div>
            <TextField
              size="small"
              style={{ width: "220px" }}
              label="DOB"
              name="pastorDOB"
              value={personalData.pastorDOB}
              onChange={handleChange}
            />
            {error.pastorDOB && <div>{error.pastorDOB}</div>}
          </div>
          <div>
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Father Name"
            name="fatherName"
            value={personalData.fatherName}
            onChange={handleChange}
          />{error.fatherName && <div>{error.fatherName}</div>}</div>
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Mother Name"
            name="motherName"
            value={personalData.motherName}
            onChange={handleChange}
          />

          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Native Place</InputLabel>
            <Select
              label="Native Place"
              name="nativePlace"
              value={personalData.nativePlace}
              onChange={handleChange}
            >
              <MenuItem value="Colcacel">Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Native District</InputLabel>
            <Select
              label="Native District"
              name="nativeDistrict"
              value={personalData.nativeDistrict}
              onChange={handleChange}
            >
              <MenuItem value="Colcacel">Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Native State</InputLabel>
            <Select
              label="Native State"
              name="nativeState"
              value={personalData.nativeState}
              onChange={handleChange}
            >
              <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
              <MenuItem>Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
            </Select>
          </FormControl>

          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Contact No"
            name="contactNo"
            value={personalData.contactNo}
            onChange={handleChange}
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Emergency Contact No"
            name="emergencyContactNo"
            value={personalData.emergencyContactNo}
            onChange={handleChange}
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Email Id"
            name="emailId"
            value={personalData.emailId}
            onChange={handleChange}
          />
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <h2>Matrial Status</h2>
        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "36px",
          }}
        >
          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Matrial Status</InputLabel>
            <Select
              label="Matrial Status"
              name="matrialStatus"
              value={personalData.matrialStatus}
              onChange={handleChange}
            >
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
            </Select>
          </FormControl>

          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Wife Name"
            name="wifeName"
            value={personalData.wifeName}
            onChange={handleChange}
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="DOB"
            name="pastorWifeDOB"
            value={personalData.pastorWifeDOB}
            onChange={handleChange}
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="First Child Name"
            name="firstChildName"
            value={personalData.firstChildName}
            onChange={handleChange}
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Second Child Name"
            name="secondChildName"
            value={personalData.secondChildName}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <button type="submit">Next</button> */}
    </form>
  );
};
