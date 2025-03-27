import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PersonalDetails } from "../../../../component/profile/personal-info/PersonalDetails";
import { Qualification } from "../../../../component/profile/personal-info/Qualification";
import { ChurchDetails } from "../../../../component/profile/personal-info/ChurchDetails";
import { ChurchProperty } from "../../../../component/profile/personal-info/ChurchProperty";
import { Form, Formik } from "formik";
import {
  churchDetailSchema,
  churchPropertySchema,
  personalValidationSchema,
  qualificationSchema,
} from "../../../../component/profile/personal-info/ValidationSchema";

const AddMemberProfileModal = ({ open, handleClose }) => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleClickNext = async (validateForm) => {
    const errors = await validateForm();

    if (Object.keys(errors).length === 0) {
      setCurrentTab(currentTab + 1);
    } else {
      console.log("Validation failed, stay on current step:", errors);
    }
  };

  const handleClickBack = () => {
    setCurrentTab(currentTab - 1);
  };
  const handleSubmit = async (values, { validateForm }) => {
    const errors = await validateForm();
    if (Object.keys(errors).length === 0) {
      alert("finished", values);
    } else {
      console.log("Validation failed, stay on current step:", errors);
    }
  };

  return (
    <Modal
      style={{ backgroundColor: "#fcfcfc" }}
      open={open}
      onClose={handleClose}
      className="personalinfo__container"
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-28%, -50%)",
          width: 1065,
          backgroundColor: "white",
          boxShadow: 24,
          padding: "24px",
          border: "none",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div className="profile__headcontainer">
          <h1>Personal Details</h1>
          <div style={{ display: "flex", gap: "16px" }}>
            <NavLink
              className="profile__userprofile"
              style={{
                fontWeight: currentTab === 1 ? "700" : "400",
                borderBottom: currentTab === 1 ? "2px solid #1B0303" : "none",
              }}
            >
              Personal Information
            </NavLink>
            <NavLink
              className="profile__userprofile"
              style={{
                fontWeight: currentTab === 2 ? "700" : "400",
                borderBottom: currentTab === 2 ? "2px solid #1B0303" : "none",
              }}
            >
              Educational Qualification
            </NavLink>
            <NavLink
              className="profile__userprofile"
              style={{
                fontWeight: currentTab === 3 ? "700" : "400",
                borderBottom: currentTab === 3 ? "2px solid #1B0303" : "none",
              }}
            >
              Church Detail
            </NavLink>
            <NavLink
              className="profile__userprofile"
              style={{
                fontWeight: currentTab === 4 ? "700" : "400",
                borderBottom: currentTab === 4 ? "2px solid #1B0303" : "none",
              }}
            >
              Church Property
            </NavLink>
          </div>
        </div>
        <Formik
          initialValues={{
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
            maritalStatus: "",
            wifeName: "",
            pastorWifeDOB: "",
            firstChildName: "",
            secondChildName: "",
            // Tab 2
            collegeDegree: "",
            collegeInstitute: "",
            collegePlace: "",
            collegeYearOfPassing: "",
            theologicalDegree: "",
            theologicalInstitute: "",
            theologicalPlace: "",
            theologicalYearOfPassing: "",
            ordinationDegree: "",
            ordinationInstitute: "",
            ordinationPlace: "",
            ordinationDate: "",
            ordinationMinistryStartingDate: "",
            // Tab 3
            churchName: "",
            doorNo: "",
            streetName: "",
            panchayat: "",
            village: "",
            thaluk: "",
            district: "",
            assemblyConstituency: "",
            parliamentConstituency: "",
            localPoliceStation: "",
            churchWebsite: "",
            independentDenomination: "",
            nameOfDenomination: "",
            presidentDenomination: "",
            headQuarters: "",
            registrationNo: "",
            // Tab 4
            ownerName: "",
            registerDate: "",
            ownLegalIssues: "",
            rentalownerName: "",
            rentalRegisterDate: "",
            rentalLegalIssues: "",
            contactChurchName: "",
            contactDoorNo: "",
            conatStreetName: "",
            contactPanchayat: "",
            contactVillage: "",
            contactThaluk: "",
            contactDistrict: "",
          }}
          validationSchema={
            currentTab === 1
              ? personalValidationSchema
              : currentTab === 2
              ? qualificationSchema
              : currentTab === 3
              ? churchDetailSchema
              : currentTab === 4
              ? churchPropertySchema
              : null
          }
          onSubmit={handleSubmit}
          style={{
            marginTop: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
          }}
        >
          {({ values, handleChange, validateForm, errors }) => (
            <Form>
              {currentTab === 1 && (
                <PersonalDetails
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                />
              )}
              {currentTab === 2 && (
                <Qualification
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                />
              )}
              {currentTab === 3 && (
                <ChurchDetails
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                />
              )}
              {currentTab === 4 && (
                <ChurchProperty
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                />
              )}

              <div
                style={{
                  display: "flex",
                  gap: "52px",
                  justifyContent: currentTab === 1 ? "end" : "space-between",
                  marginTop: "18px",
                }}
              >
                {currentTab > 1 && (
                  <Button
                    style={{
                      border: "none",
                      padding: "8px 28px",
                      color: "yellow",
                      backgroundColor: "#1B0303",
                      borderRadius: "4px",
                    }}
                    onClick={handleClickBack}
                  >
                    Back
                  </Button>
                )}
                {currentTab < 4 && (
                  <Button
                    style={{
                      border: "none",
                      padding: "8px 28px",
                      color: "yellow",
                      backgroundColor: "#1B0303",
                      borderRadius: "4px",
                    }}
                    onClick={() => handleClickNext(validateForm)}
                  >
                    Next
                  </Button>
                )}
                {currentTab === 4 && (
                  <Button
                    style={{
                      border: "none",
                      padding: "8px 28px",
                      color: "yellow",
                      backgroundColor: "#1B0303",
                      borderRadius: "4px",
                    }}
                    type="submit"
                  >
                    Sumbit
                  </Button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default AddMemberProfileModal;
