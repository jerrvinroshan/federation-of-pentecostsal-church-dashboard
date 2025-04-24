import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
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
import AddMemberPreview from "./modal/AddMemberPreview";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, updateForm } from "../../../../store/member/personal-member-form/personalMemberSlice";
import dayjs from "dayjs";

const AddMemberProfileModal = ({ open, handleClose, handleAddMember }) => {
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
      setCurrentTab(1);
      setModalOpen(true);
      
    } else {
      console.log("Validation failed", errors);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const memberData = useSelector((state) => state.member.memberData);
  const dispatch = useDispatch()
  const handleCloseModal = ()=> {
    setModalOpen(false)
    handleAddMember()
    dispatch(resetForm())
  }
  const handleEditModal =()=>{
    setModalOpen(false)
  }

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
            <p
              className="profile__userprofile"
              style={{
                fontWeight: currentTab === 1 ? "700" : "400",
                borderBottom: currentTab === 1 ? "2px solid #1B0303" : "none",
                cursor:"pointer"
              }}
              onClick={()=>setCurrentTab(1)}
            >
              Personal Information
            </p>
            <p
              className="profile__userprofile"
              style={{
                fontWeight: currentTab === 2 ? "700" : "400",
                borderBottom: currentTab === 2 ? "2px solid #1B0303" : "none",
                cursor:"pointer"

              }}
              onClick={()=>setCurrentTab(2)}
            >
              Educational Qualification
            </p>
            <p
              className="profile__userprofile"
              style={{
                fontWeight: currentTab === 3 ? "700" : "400",
                borderBottom: currentTab === 3 ? "2px solid #1B0303" : "none",
                cursor:"pointer"

              }}
              onClick={()=>setCurrentTab(3)}
            >
              Church Detail
            </p>
            <p
              className="profile__userprofile"
              style={{
                fontWeight: currentTab === 4 ? "700" : "400",
                borderBottom: currentTab === 4 ? "2px solid #1B0303" : "none",
                cursor:"pointer"

              }}
              onClick={()=>setCurrentTab(4)}
            >
              Church Property
            </p>
          </div>
        </div>
        <Formik
          initialValues={memberData}
          enableReinitialize={true}
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
          {({ values, handleChange, validateForm,setFieldValue, errors }) => {
            const handleSyncedChange = (e) => {
              handleChange(e);
              dispatch(updateForm({ [e.target.name]: e.target.value }));
            };

            const handleSelectChange = (fieldName, value) => {
              setFieldValue(fieldName, value);
              dispatch(updateForm({ [fieldName]: value }));
            };
            
            const handleDateChange = (fieldName, value) => {
              const isoDate = value ? dayjs(value).toISOString() : null;
              const date = isoDate.split("T");
              setFieldValue(fieldName, date);
              dispatch(updateForm({ [fieldName]: date }));
            };
            
            return (
              <Form>
                {currentTab === 1 && (
                  <PersonalDetails
                    handleChange={handleSyncedChange}
                    values={values}
                    errors={errors}
                    handleDateChange={handleDateChange}
                    handleSelectChange={handleSelectChange}
                  />
                )}
                {currentTab === 2 && (
                  <Qualification
                    handleChange={handleSyncedChange}
                    values={values}
                    errors={errors}
                    handleDateChange={handleDateChange}
                  />
                )}
                {currentTab === 3 && (
                  <ChurchDetails
                    handleChange={handleSyncedChange}
                    values={values}
                    errors={errors}
                    handleDateChange={handleDateChange}
                    handleSelectChange={handleSelectChange}
                  />
                )}
                {currentTab === 4 && (
                  <ChurchProperty
                    handleChange={handleSyncedChange}
                    values={values}
                    errors={errors}
                    handleDateChange={handleDateChange}
                    handleSelectChange={handleSelectChange}
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
                      Preview
                    </Button>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
        <AddMemberPreview open={modalOpen} handleCloseModal={handleCloseModal} handleEditModal={handleEditModal}/>
      </Box>
    </Modal>
  );
};

export default AddMemberProfileModal;
