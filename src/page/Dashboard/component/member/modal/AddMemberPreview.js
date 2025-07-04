import { Box, Button, Modal, Paper } from "@mui/material";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

const AddMemberPreview = ({ open, handleCloseModal, handleEditModal }) => {
  const memberData = useSelector((state) => state.member.memberData);

  const formatDate = (dateInput) => {
    const parsedDate = dayjs(dateInput);

    if (!parsedDate.isValid()) return "-";

    return parsedDate.format("DD/MM/YYYY");
  };
  const formatYear = (dateInput) => {
    const parsedDate = dayjs(dateInput);

    if (!parsedDate.isValid()) return "-";

    return parsedDate.format("YYYY");
  };
  // Style
  const modalStyle = {
    // maxWidth: "1232px",
    position: "absolute",
    top: "10%",
    left: "0%",
    margin: "20px 40px",
    cursor: "pointer",
  };
  const modalContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "24px",
  };
  const contentContainerStyle = {
    display: "flex",
    // gap: "52px",
    padding: "24px",
    justifyContent: "space-around",
  };
  const containerStyle = {
    borderRight: "1px solid #1B0303",
    paddingRight: "48px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };
  const contentSubContainerStyle = {
    display: "flex",
    gap: "8px",
    flexDirection: "column",
  };
  const containerStyleNoBorder = {
    paddingRight: "48px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };

  const btnContainer = {
    display: "flex",
    gap: "24px",
    justifyContent: "end",
    padding: "24px",
  };

  return (
    <>
      <Modal
        open={open}
        // open={true}
        sx={modalStyle}
      >
        <Box>
          <Paper>
            <div style={modalContainerStyle}>
              <div style={headerStyle}>
                <h1 className="addMemberPreview__header">Member Perview</h1>
                <CloseIcon onClick={handleCloseModal} color="error" />
              </div>
            </div>
            <div style={contentContainerStyle}>
              <div style={containerStyle}>
                <div style={contentSubContainerStyle}>
                  <h2 className="addMemberPreview__ContentHeader">
                    Personal Detail
                  </h2>
                  <div>
                    <p className="addMemberPreview__Content">
                      <strong>Pastor Name : </strong>
                      <span>{memberData.pastorName}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Pastor DOB : </strong>
                      <span>{formatDate(memberData.pastorDOB)}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Father Name : </strong>
                      <span>{memberData.fatherName}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Mother Name : </strong>
                      <span>{memberData.motherName}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Native State : </strong>
                      <span>{memberData.nativeState}</span>
                    </p>
                    <p>
                      <strong>Native District : </strong>
                      <span>{memberData.nativeDistrict}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Native Place : </strong>
                      <span>{memberData.nativePlace}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Contact No : </strong>
                      <span>{memberData.contactNo}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Emergency Contact No : </strong>
                      <span>{memberData.emergencyContactNo}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Email : </strong>
                      <span>{memberData.emailId}</span>
                    </p>
                  </div>
                </div>
                {/* Marital Status */}
                <div style={contentSubContainerStyle}>
                  <h2 className="addMemberPreview__ContentHeader">
                    Marital Status
                  </h2>
                  <div>
                    <p className="addMemberPreview__Content">
                      <strong>Marital Status : </strong>
                      <span>{memberData.maritalStatus}</span>
                    </p>
                    {memberData.maritalStatus === "Married" && (
                      <div>
                        <p className="addMemberPreview__Content">
                          <strong>Wife Name : </strong>
                          <span>{memberData.wifeName}</span>
                        </p>
                        <p className="addMemberPreview__Content">
                          <strong>DOB : </strong>
                          <span>{formatDate(memberData.pastorWifeDOB)}</span>
                        </p>
                        <p className="addMemberPreview__Content">
                          <strong>First Child Name : </strong>
                          <span>{memberData.firstChildName}</span>
                        </p>
                        {memberData.secondChildName === "" ? null : (
                          <p className="addMemberPreview__Content">
                            <strong>Second Child Name : </strong>
                            <span>{memberData.secondChildName}</span>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Qualification */}
              <div style={containerStyle}>
                <div style={contentSubContainerStyle}>
                  <h2 className="addMemberPreview__ContentHeader">
                    Educational Qualification
                  </h2>
                  <div>
                    <p className="addMemberPreview__Content">
                      <strong>Degree : </strong>
                      <span>{memberData.collegeDegree}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Institute : </strong>
                      <span>{memberData.collegeInstitute}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Place : </strong>
                      <span>{memberData.collegePlace}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Year of Passing : </strong>
                      <span>{formatYear(memberData.collegeYearOfPassing)}</span>
                    </p>
                  </div>
                </div>
                <div style={contentSubContainerStyle}>
                  <h2 className="addMemberPreview__ContentHeader">
                    Theological Qualification
                  </h2>
                  <div>
                    <p className="addMemberPreview__Content">
                      <strong>Degree : </strong>
                      <span>{memberData.theologicalDegree}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Institute : </strong>
                      <span>{memberData.theologicalInstitute}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Place : </strong>
                      <span>{memberData.theologicalPlace}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Year of Passing : </strong>
                      <span>
                        {formatYear(memberData.theologicalYearOfPassing)}
                      </span>
                    </p>
                  </div>
                </div>
                <div style={contentSubContainerStyle}>
                  <h2 className="addMemberPreview__ContentHeader">
                    Ordination Detail
                  </h2>
                  <div>
                    <p className="addMemberPreview__Content">
                      <strong>Degree : </strong>
                      <span>{memberData.ordinationDegree}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Institute : </strong>
                      <span>{memberData.ordinationInstitute}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Place : </strong>
                      <span>{memberData.ordinationPlace}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Date : </strong>
                      <span>{formatDate(memberData.ordinationDate)}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Ministry Starting Date : </strong>
                      <span>
                        {formatDate(memberData.ordinationMinistryStartingDate)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Church Detail */}
              <div style={containerStyle}>
                <div style={contentSubContainerStyle}>
                  <h2 className="addMemberPreview__ContentHeader">
                    Church Detail
                  </h2>
                  <div>
                    <p className="addMemberPreview__Content">
                      <strong>Church Name : </strong>
                      <span>{memberData.churchName}</span>
                    </p>
                    <p>
                      <strong>Door No : </strong>
                      <span>{memberData.doorNo}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Street Name : </strong>
                      <span>{memberData.streetName}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Panchayat : </strong>
                      <span>{memberData.panchayat}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>District : </strong>
                      <span>{memberData.district}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Thaluk : </strong>
                      <span>{memberData.thaluk}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Village : </strong>
                      <span>{memberData.village}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Assembly Constituency : </strong>
                      <span>{memberData.assemblyConstituency}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Parliament Constituency : </strong>
                      <span>{memberData.parliamentConstituency}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Local Police Station : </strong>
                      <span>{memberData.localPoliceStation}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Church Website : </strong>
                      <span>{memberData.churchWebsite}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Independent / Denomination : </strong>
                      <span>{memberData.independentDenomination}</span>
                    </p>
                  </div>
                </div>
                {memberData.independentDenomination === "Denomination" && (
                  <div style={contentSubContainerStyle}>
                    <h2 className="addMemberPreview__ContentHeader">
                      Trust / Society
                    </h2>
                    <div>
                      <p className="addMemberPreview__Content">
                        <strong>Name of Denomination : </strong>
                        <span>{memberData.nameOfDenomination}</span>
                      </p>
                      <p className="addMemberPreview__Content">
                        <strong>Name of Denomination : </strong>
                        <span>{memberData.presidentDenomination}</span>
                      </p>
                      <p className="addMemberPreview__Content">
                        <strong>Head Quarters : </strong>
                        <span>{memberData.headQuarters}</span>
                      </p>
                      <p className="addMemberPreview__Content">
                        <strong>Govt.Registration No : </strong>
                        <span>{memberData.registrationNo}</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* Church Property */}
              <div style={containerStyleNoBorder}>
                <div style={contentSubContainerStyle}>
                  <h2 className="addMemberPreview__ContentHeader">
                    Church Property
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <h3 className="addMemberPreview__ContentHeader">
                        Own Property
                      </h3>
                      <p className="addMemberPreview__Content">
                        <strong>Owner Name : </strong>
                        <span>{memberData.ownerName}</span>
                      </p>
                      <p className="addMemberPreview__Content">
                        <strong>Register Date : </strong>
                        <span>{formatDate(memberData.registerDate)}</span>
                      </p>
                      <p className="addMemberPreview__Content">
                        <strong>Any Legal Issue : </strong>
                        <span>{memberData.ownLegalIssues}</span>
                      </p>
                    </div>
                    <div>
                      <h3 className="addMemberPreview__ContentHeader">
                        Rental Property
                      </h3>
                      <p className="addMemberPreview__Content">
                        <strong>Owner Name : </strong>
                        <span>{memberData.rentalownerName}</span>
                      </p>
                      <p className="addMemberPreview__Content">
                        <strong>Register Date : </strong>
                        <span>{formatDate(memberData.rentalRegisterDate)}</span>
                      </p>
                      <p className="addMemberPreview__Content">
                        <strong>Any Legal Issue : </strong>
                        <span>{memberData.rentalLegalIssues}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div style={contentSubContainerStyle}>
                  <h5
                    className="addMemberPreview__ContentHeader"
                    style={{ fontSize: "16px", maxWidth: "240px" }}
                  >
                    Permanent Address / Address for Communication
                  </h5>
                  <div>
                    <p className="addMemberPreview__Content">
                      <strong>Church Name : </strong>
                      <span>{memberData.contactChurchName}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Door No : </strong>
                      <span>{memberData.contactDoorNo}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Street Name : </strong>
                      <span>{memberData.contactStreetName}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Panchayat : </strong>
                      <span>{memberData.contactPanchayat}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>District : </strong>
                      <span>{memberData.contactDistrict}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Thaluk : </strong>
                      <span>{memberData.contactThaluk}</span>
                    </p>
                    <p className="addMemberPreview__Content">
                      <strong>Village : </strong>
                      <span>{memberData.contactVillage}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={btnContainer}>
              <Button
                variant="outlined"
                sx={{ color: "#1B0303", border: "1px solid #1B0303" }}
                onClick={() => {
                  handleEditModal();
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                sx={{ color: "yellow", backgroundColor: " #1B0303" }}
                onClick={() => {
                  handleCloseModal();
                }}
              >
                Save
              </Button>
            </div>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default AddMemberPreview;
