import { createSlice } from "@reduxjs/toolkit";

const format = (data) => {
  return [
    { id: data.id },
    {
      // Personal Detail
      personalDetail: [
        { pastorName: data.pastorName },
        { pastorDOB: data.pastorDOB },
        { fatherName: data.fatherName },
        { motherName: data.motherName },
        { nativeState: data.nativeState },
        { nativeDistrict: data.nativeDistrict },
        { nativePlace: data.nativePlace },
        { contactNo: data.contactNo },
        { emergencyContactNo: data.emergencyContactNo },
        { emailId: data.emailId },
      ],
      //Marital Status
      maritalStatus: [
        { maritalStatus: data.maritalStatus },
        { wifeName: data.wifeName },
        { pastorWifeDOB: data.pastorWifeDOB },
        { firstChildName: data.firstChildName },
        { secondChildName: data.secondChildName },
      ],
    },
    //Qualification
    {
      //educationalQualification
      educationalQualification: [
        { collegeDegree: data.collegeDegree },
        { collegeInstitute: data.collegeInstitute },
        { collegePlace: data.collegePlace },
        { collegeYearOfPassing: data.collegeYearOfPassing },
      ],
      //theologicalQualification
      theologicalQualification: [
        { theologicalDegree: data.theologicalDegree },
        { theologicalInstitute: data.theologicalInstitute },
        { theologicalPlace: data.theologicalPlace },
        { theologicalYearOfPassing: data.theologicalYearOfPassing },
      ],
      //ordinationDetail
      ordinationDetail: [
        { ordinationDegree: data.ordinationDegree },
        { ordinationInstitute: data.ordinationInstitute },
        { ordinationPlace: data.ordinationPlace },
        { ordinationDate: data.ordinationDate },
        { ordinationMinistryStartingDate: data.ordinationMinistryStartingDate },
      ],
    },
    //churchDetail
    {
      //churchDetail
      churchDetail: [
        { churchName: data.churchName },
        { doorNo: data.doorNo },
        { streetName: data.streetName },
        { panchayat: data.panchayat },
        { district: data.district },
        { thaluk: data.thaluk },
        { village: data.village },
        { assemblyConstituency: data.assemblyConstituency },
        { parliamentConstituency: data.parliamentConstituency },
        { localPoliceStation: data.localPoliceStation },
        { churchWebsite: data.churchWebsite },
        { independentDenomination: data.independentDenomination },
      ],
      //Trust / Society
      trustSociety: [
        { nameOfDenomination: data.nameOfDenomination },
        { presidentDenomination: data.presidentDenomination },
        { headQuarters: data.headQuarters },
        { registrationNo: data.registrationNo },
      ],
    },
    //churchProperty
    {
      // ownProperty
      ownProperty: [
        { ownerName: data.ownerName },
        { registerDate: data.registerDate },
        { ownLegalIssues: data.ownLegalIssues },
      ],
      //rentalProperty
      rentalProperty: [
        { rentalownerName: data.rentalownerName },
        { rentalRegisterDate: data.rentalRegisterDate },
        { rentalLegalIssues: data.rentalLegalIssues },
      ],
      //permanentAddress/Address for Communication
      address: [
        { contactChurchName: data.contactChurchName },
        { contactDoorNo: data.contactDoorNo },
        { contactStreetName: data.contactStreetName },
        { contactPanchayat: data.contactPanchayat },
        { contactDistrict: data.contactDistrict },
        { contactThaluk: data.contactThaluk },
        { contactThaluk: data.contactThaluk },
        { contactVillage: data.contactVillage },
      ],
    },
  ];
};
const personalDetail = (data) => {
  return [
    {
      pastorName: data.pastorName,
      pastorDOB: data.pastorDOB,
      fatherName: data.fatherName,
      motherName: data.motherName,
      nativeState: data.nativeState,
      nativeDistrict: data.nativeDistrict,
      nativePlace: data.nativePlace,
      contactNo: data.contactNo,
      emergencyContactNo: data.emergencyContactNo,
      emailId: data.emailId,
    },
  ];
};

const personalMemberSlice = createSlice({
  name: "personalMember",
  initialState: {
    step: 1,
    memberData: {
      id: "",
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
    updateForm: (state, action) => {
      const sanitizeDateFields = (data) => {
        const sanitized = {};
        for (const key in data) {
          if (
            Array.isArray(data[key]) &&
            data[key].length > 0 &&
            typeof data[key][0] === "string"
          ) {
            sanitized[key] = data[key][0];
          } else {
            sanitized[key] = data[key];
          }
        }
        return sanitized;
      };

      const cleanPayload = sanitizeDateFields(action.payload);

      state.memberData = {
        ...state.memberData,
        ...cleanPayload,
      };

      sessionStorage.setItem(
        "memberData",
        JSON.stringify(format(state.memberData))
      );
      sessionStorage.setItem(
        "personalDetail",
        JSON.stringify(personalDetail(state.memberData))
      );
    },

    loadForm: (state, action) => {
      state.memberData = action.payload;
      sessionStorage.setItem(
        "memberData",
        JSON.stringify(format(state.memberData))
      );
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

export const { updateForm, resetForm, loadForm } = personalMemberSlice.actions;
export default personalMemberSlice.reducer;
