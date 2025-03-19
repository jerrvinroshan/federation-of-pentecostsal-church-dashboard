import { Button } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PersonalDetails } from "../../../../component/profile/personal-info/PersonalDetails";
import { Qualification } from "../../../../component/profile/personal-info/Qualification";
import { ChurchDetails } from "../../../../component/profile/personal-info/ChurchDetails";
import { ChurchProperty } from "../../../../component/profile/personal-info/ChurchProperty";


const PersonalInformation = () => {
  const [isPersonalInformation, setIsPersonalInformation] = useState(true);
  const [isEducationalQualification, setIsEducationalQualification] =
    useState(false);
  const [isChurchDetail, setIsChurchDetail] = useState(false);
  const [isChurchProperty, setIsChurchProperty] = useState(false);

  const handlePersonalInfoClick = () => {
    setIsPersonalInformation(true);
    setIsEducationalQualification(false);
    setIsChurchDetail(false);
    setIsChurchProperty(false);
  };

  const handleEducationalClick = () => {
    setIsPersonalInformation(false);
    setIsEducationalQualification(true);
    setIsChurchDetail(false);
    setIsChurchProperty(false);
  };

  const handleChurchDetailClick = () => {
    setIsPersonalInformation(false);
    setIsEducationalQualification(false);
    setIsChurchDetail((prevState) => !prevState);
    setIsChurchProperty(false);
  };

  const handleChurchPropertyClick = () => {
    setIsPersonalInformation(false);
    setIsEducationalQualification(false);
    setIsChurchDetail(false);
    setIsChurchProperty((prevState) => !prevState);
  };
  const handleClickNext = () => {
    if (isPersonalInformation) {
      setIsPersonalInformation(false);
      setIsEducationalQualification(true);
    } else if (isEducationalQualification) {
      setIsChurchDetail(true);
      setIsEducationalQualification(false);
    } else {
      setIsChurchProperty(true);
      setIsChurchDetail(false);
    }
  };

  const handleClickBack = () => {
    if (isChurchProperty) {
      setIsChurchDetail(true);
      setIsChurchProperty(false);
    } else if (isChurchDetail) {
      setIsEducationalQualification(true);
      setIsChurchDetail(false);
    } else {
      setIsPersonalInformation(true);
      setIsEducationalQualification(false);
    }
  };

  return (
    <div className="personalinfo__container">
      <div className="profile__headcontainer">
        <h1>Personal Details</h1>
        <div style={{ display: "flex", gap: "16px" }}>
          <NavLink
            onClick={handlePersonalInfoClick}
            className="profile__userprofile"
            style={{
              fontWeight: isPersonalInformation ? "700" : "400",
              borderBottom: isPersonalInformation
                ? "2px solid #1B0303"
                : "none",
            }}
          >
            Personal Information
          </NavLink>
          <NavLink
            onClick={handleEducationalClick}
            className="profile__userprofile"
            style={{
              fontWeight: isEducationalQualification ? "700" : "400",
              borderBottom: isEducationalQualification
                ? "2px solid #1B0303"
                : "none",
            }}
          >
            Educational Qualification
          </NavLink>
          <NavLink
            onClick={handleChurchDetailClick}
            className="profile__userprofile"
            style={{
              fontWeight: isChurchDetail ? "700" : "400",
              borderBottom: isChurchDetail ? "2px solid #1B0303" : "none",
            }}
          >
            Church Detail
          </NavLink>
          <NavLink
            onClick={handleChurchPropertyClick}
            className="profile__userprofile"
            style={{
              fontWeight: isChurchProperty ? "700" : "400",
              borderBottom: isChurchProperty ? "2px solid #1B0303" : "none",
            }}
          >
            Church Property
          </NavLink>
        </div>
      </div>
      <div
        style={{
          marginTop: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "56px",
        }}
      >
        {isPersonalInformation && <PersonalDetails />}
        {isEducationalQualification && <Qualification />}
        {isChurchDetail && <ChurchDetails />}
        {isChurchProperty && <ChurchProperty />}

        <div
          style={{
            display: "flex",
            gap: "52px",
            justifyContent: isPersonalInformation ? "end" : "space-between",
            marginTop: "18px",
          }}
        >
          <Button
            style={{
              border: "none",
              padding: "8px 28px",
              color: "yellow",
              backgroundColor: "#1B0303",
              borderRadius: "4px",
              display: isPersonalInformation ? "none" : "block",
            }}
            onClick={handleClickBack}
          >
            Back
          </Button>
          <Button
            style={{
              border: "none",
              padding: "8px 28px",
              color: "yellow",
              backgroundColor: "#1B0303",
              borderRadius: "4px",
            }}
            onClick={handleClickNext}
          >
            {isChurchProperty ? "Sumbit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
