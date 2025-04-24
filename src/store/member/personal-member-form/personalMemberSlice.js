import { createSlice } from "@reduxjs/toolkit";

/* const initialState = {
  personalDetail: {
    pastorName: "",
    pastorDOB: "",
    fatherName: "",
    motherName: "",
    nativeState: "",
    nativeDistrict: "",
    nativePlace: "",
    contactNo: "",
    emergencyContactNo: "",
    emailId: "",
    //MaritalStatus
    maritalStatus: "",
    wifeName: "",
    pastorWifeDOB: "",
    firstChildName: "",
    secondChildName: "",
  },
  qualification: {
    //educationalQualification
    collegeDegree: "",
    collegeInstitute: "",
    collegePlace: "",
    collegeYearOfPassing: "",
    //theologicalQualification
    theologicalDegree: "",
    theologicalInstitute: "",
    theologicalPlace: "",
    theologicalYearOfPassing: "",
    //ordinationDetail
    ordinationDegree: "",
    ordinationInstitute: "",
    ordinationPlace: "",
    ordinationDate: "",
    ordinationMinistryStartingDate: "",
  },
  churchDetail: {
    churchName: "",
    doorNo: "",
    streetName: "",
    panchayat: "",
    district: "",
    thaluk: "",
    village: "",
    assemblyConstituency: "",
    parliamentConstituency: "",
    localPoliceStation: "",
    churchWebsite: "",
    independentDenomination: "",
    //Trust / Society
    nameOfDenomination: "",
    presidentDenomination: "",
    headQuarters: "",
    registrationNo: "",
  },
  churchProperty: {
    // ownProperty
    ownerName: "",
    registerDate: "",
    ownLegalIssues: "",
    //rentalProperty
    rentalownerName: "",
    rentalRegisterDate: "",
    rentalLegalIssues: "",
    //permanentAddress/Address for Communication
    contactChurchName: "",
    contactDoorNo: "",
    conatStreetName: "",
    contactPanchayat: "",
    contactDistrict: "",
    contactThaluk: "",
    contactVillage: "",
  },
};*/

const personalMemberSlice = createSlice({
  name: "personalMember",
  initialState: {
    step: 1,
    memberData: {
      pastorName: "",
      pastorDOB: "",
      fatherName: "",
      motherName: "",
      nativeState: "",
      nativeDistrict: "",
      nativePlace: "",
      contactNo: "",
      emergencyContactNo: "",
      emailId: "",
      //MaritalStatus
      maritalStatus: "",
      wifeName: "",
      pastorWifeDOB: "",
      firstChildName: "",
      secondChildName: "",
      //educationalQualification
      collegeDegree: "",
      collegeInstitute: "",
      collegePlace: "",
      collegeYearOfPassing: "",
      //theologicalQualification
      theologicalDegree: "",
      theologicalInstitute: "",
      theologicalPlace: "",
      theologicalYearOfPassing: "",
      //ordinationDetail
      ordinationDegree: "",
      ordinationInstitute: "",
      ordinationPlace: "",
      ordinationDate: "",
      ordinationMinistryStartingDate: "",
      //churchDetail
      churchName: "",
      doorNo: "",
      streetName: "",
      panchayat: "",
      district: "",
      thaluk: "",
      village: "",
      assemblyConstituency: "",
      parliamentConstituency: "",
      localPoliceStation: "",
      churchWebsite: "",
      independentDenomination: "",
      //Trust / Society
      nameOfDenomination: "",
      presidentDenomination: "",
      headQuarters: "",
      registrationNo: "",
      //churchProperty
      // ownProperty
      ownerName: "",
      registerDate: "",
      ownLegalIssues: "",
      //rentalProperty
      rentalownerName: "",
      rentalRegisterDate: "",
      rentalLegalIssues: "",
      //permanentAddress/Address for Communication
      contactChurchName: "",
      contactDoorNo: "",
      contactStreetName: "",
      contactPanchayat: "",
      contactDistrict: "",
      contactThaluk: "",
      contactVillage: "",
    },
  },
  reducers: {
    // nextStep: (state) => {
    //   state.step += 1;
    // },
    // previousStep: (state) => {
    //   state.step -= 1;
    // },
    // resetStep: (state) => {
    //   state.step = 1;
    // },
    updateForm: (state, action) => {
      state.memberData = {
        ...state.memberData,
        ...action.payload,
      };
      sessionStorage.setItem("memberData", JSON.stringify(state.memberData));
    },
    loadForm: (state) => {
      const data = sessionStorage.getItem("memberData");
      if (data) {
        state.memberData = JSON.parse(data);
      }
    },
    resetForm: (state) => {
      state.step = 1;
      state.memberData = {
        pastorName: "",
        pastorDOB: "",
        fatherName: "",
        motherName: "",
        nativeState: "",
        nativeDistrict: "",
        nativePlace: "",
        contactNo: "",
        emergencyContactNo: "",
        emailId: "",
        //MaritalStatus
        maritalStatus: "",
        wifeName: "",
        pastorWifeDOB: "",
        firstChildName: "",
        secondChildName: "",
        //educationalQualification
        collegeDegree: "",
        collegeInstitute: "",
        collegePlace: "",
        collegeYearOfPassing: "",
        //theologicalQualification
        theologicalDegree: "",
        theologicalInstitute: "",
        theologicalPlace: "",
        theologicalYearOfPassing: "",
        //ordinationDetail
        ordinationDegree: "",
        ordinationInstitute: "",
        ordinationPlace: "",
        ordinationDate: "",
        ordinationMinistryStartingDate: "",
        //churchDetail
        churchName: "",
        doorNo: "",
        streetName: "",
        panchayat: "",
        district: "",
        thaluk: "",
        village: "",
        assemblyConstituency: "",
        parliamentConstituency: "",
        localPoliceStation: "",
        churchWebsite: "",
        independentDenomination: "",
        //Trust / Society
        nameOfDenomination: "",
        presidentDenomination: "",
        headQuarters: "",
        registrationNo: "",
        //churchProperty
        // ownProperty
        ownerName: "",
        registerDate: "",
        ownLegalIssues: "",
        //rentalProperty
        rentalownerName: "",
        rentalRegisterDate: "",
        rentalLegalIssues: "",
        //permanentAddress/Address for Communication
        contactChurchName: "",
        contactDoorNo: "",
        contactStreetName: "",
        contactPanchayat: "",
        contactDistrict: "",
        contactThaluk: "",
        contactVillage: "",
      };
    },
  },
});

export const { updateForm, resetForm } = personalMemberSlice.actions;
export default personalMemberSlice.reducer;
