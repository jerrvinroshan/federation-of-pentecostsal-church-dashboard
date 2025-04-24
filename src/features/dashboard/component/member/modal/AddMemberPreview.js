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
                <h1>Member Perview</h1>
                <CloseIcon onClick={handleCloseModal} />
              </div>
            </div>
            <div style={contentContainerStyle}>
              <div style={containerStyle}>
                <div style={contentSubContainerStyle}>
                  <h2>Personal Detail</h2>
                  <div>
                    <p>
                      <strong>Pastor Name : </strong>
                      <span>{memberData.pastorName}</span>
                    </p>
                    <p>
                      <strong>Pastor DOB : </strong>
                      <span>{formatDate(memberData.pastorDOB)}</span>
                    </p>
                    <p>
                      <strong>Father Name : </strong>
                      <span>{memberData.fatherName}</span>
                    </p>
                    <p>
                      <strong>Mother Name : </strong>
                      <span>{memberData.motherName}</span>
                    </p>
                    <p>
                      <strong>Native State : </strong>
                      <span>{memberData.nativeState}</span>
                    </p>
                    <p>
                      <strong>Native District : </strong>
                      <span>{memberData.nativeDistrict}</span>
                    </p>
                    <p>
                      <strong>Native Place : </strong>
                      <span>{memberData.nativePlace}</span>
                    </p>
                    <p>
                      <strong>Contact No : </strong>
                      <span>{memberData.contactNo}</span>
                    </p>
                    <p>
                      <strong>Emergency Contact No : </strong>
                      <span>{memberData.emergencyContactNo}</span>
                    </p>
                    <p>
                      <strong>Email : </strong>
                      <span>{memberData.emailId}</span>
                    </p>
                  </div>
                </div>
                {/* Marital Status */}
                <div style={contentSubContainerStyle}>
                  <h2>Marital Status</h2>
                  <div>
                    <p>
                      <strong>Marital Status : </strong>
                      <span>{memberData.maritalStatus}</span>
                    </p>
                    {memberData.maritalStatus === "Married" && (
                      <div>
                        <p>
                          <strong>Wife Name : </strong>
                          <span>{memberData.wifeName}</span>
                        </p>
                        <p>
                          <strong>DOB : </strong>
                          <span>{formatDate(memberData.pastorWifeDOB)}</span>
                        </p>
                        <p>
                          <strong>First Child Name : </strong>
                          <span>{memberData.firstChildName}</span>
                        </p>
                        {memberData.secondChildName === "" ? null : (
                          <p>
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
                  <h2>Educational Qualification</h2>
                  <div>
                    <p>
                      <strong>Degree : </strong>
                      <span>{memberData.collegeDegree}</span>
                    </p>
                    <p>
                      <strong>Institute : </strong>
                      <span>{memberData.collegeInstitute}</span>
                    </p>
                    <p>
                      <strong>Place : </strong>
                      <span>{memberData.collegePlace}</span>
                    </p>
                    <p>
                      <strong>Year of Passing : </strong>
                      <span>{formatYear(memberData.collegeYearOfPassing)}</span>
                    </p>
                  </div>
                </div>
                <div style={contentSubContainerStyle}>
                  <h2>Theological Qualification</h2>
                  <div>
                    <p>
                      <strong>Degree : </strong>
                      <span>{memberData.theologicalDegree}</span>
                    </p>
                    <p>
                      <strong>Institute : </strong>
                      <span>{memberData.theologicalInstitute}</span>
                    </p>
                    <p>
                      <strong>Place : </strong>
                      <span>{memberData.theologicalPlace}</span>
                    </p>
                    <p>
                      <strong>Year of Passing : </strong>
                      <span>
                        {formatYear(memberData.theologicalYearOfPassing)}
                      </span>
                    </p>
                  </div>
                </div>
                <div style={contentSubContainerStyle}>
                  <h2>Ordination Detail</h2>
                  <div>
                    <p>
                      <strong>Degree : </strong>
                      <span>{memberData.ordinationDegree}</span>
                    </p>
                    <p>
                      <strong>Institute : </strong>
                      <span>{memberData.ordinationInstitute}</span>
                    </p>
                    <p>
                      <strong>Place : </strong>
                      <span>{memberData.ordinationPlace}</span>
                    </p>
                    <p>
                      <strong>Date : </strong>
                      <span>{formatDate(memberData.ordinationDate)}</span>
                    </p>
                    <p>
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
                  <h2>Church Detail</h2>
                  <div>
                    <p>
                      <strong>Church Name : </strong>
                      <span>{memberData.churchName}</span>
                    </p>
                    <p>
                      <strong>Door No : </strong>
                      <span>{memberData.doorNo}</span>
                    </p>
                    <p>
                      <strong>Street Name : </strong>
                      <span>{memberData.streetName}</span>
                    </p>
                    <p>
                      <strong>Panchayat : </strong>
                      <span>{memberData.panchayat}</span>
                    </p>
                    <p>
                      <strong>District : </strong>
                      <span>{memberData.district}</span>
                    </p>
                    <p>
                      <strong>Thaluk : </strong>
                      <span>{memberData.thaluk}</span>
                    </p>
                    <p>
                      <strong>Village : </strong>
                      <span>{memberData.village}</span>
                    </p>
                    <p>
                      <strong>Assembly Constituency : </strong>
                      <span>{memberData.assemblyConstituency}</span>
                    </p>
                    <p>
                      <strong>Parliament Constituency : </strong>
                      <span>{memberData.parliamentConstituency}</span>
                    </p>
                    <p>
                      <strong>Local Police Station : </strong>
                      <span>{memberData.localPoliceStation}</span>
                    </p>
                    <p>
                      <strong>Church Website : </strong>
                      <span>{memberData.churchWebsite}</span>
                    </p>
                    <p>
                      <strong>Independent / Denomination : </strong>
                      <span>{memberData.independentDenomination}</span>
                    </p>
                  </div>
                </div>
                {memberData.independentDenomination === "Denomination" && (
                  <div style={contentSubContainerStyle}>
                    <h2>Trust / Society</h2>
                    <div>
                      <p>
                        <strong>Name of Denomination : </strong>
                        <span>{memberData.nameOfDenomination}</span>
                      </p>
                      <p>
                        <strong>Name of Denomination : </strong>
                        <span>{memberData.presidentDenomination}</span>
                      </p>
                      <p>
                        <strong>Head Quarters : </strong>
                        <span>{memberData.headQuarters}</span>
                      </p>
                      <p>
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
                  <h2>Church Property</h2>
                  <div>
                    <div>
                      <h3>Own Property</h3>
                      <p>
                        <strong>Owner Name : </strong>
                        <span>{memberData.ownerName}</span>
                      </p>
                      <p>
                        <strong>Register Date : </strong>
                        <span>{formatDate(memberData.registerDate)}</span>
                      </p>
                      <p>
                        <strong>Any Legal Issue : </strong>
                        <span>{memberData.ownLegalIssues}</span>
                      </p>
                    </div>
                    <div>
                      <h5>Rental Property</h5>
                      <p>
                        <strong>Owner Name : </strong>
                        <span>{memberData.rentalownerName}</span>
                      </p>
                      <p>
                        <strong>Register Date : </strong>
                        <span>{formatDate(memberData.rentalRegisterDate)}</span>
                      </p>
                      <p>
                        <strong>Any Legal Issue : </strong>
                        <span>{memberData.rentalLegalIssues}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div style={contentSubContainerStyle}>
                  <h5 style={{ fontSize: "16px", maxWidth: "200px" }}>
                    Permanent Address / Address for Communication
                  </h5>
                  <div>
                    <p>
                      <strong>Church Name : </strong>
                      <span>{memberData.contactChurchName}</span>
                    </p>
                    <p>
                      <strong>Door No : </strong>
                      <span>{memberData.contactDoorNo}</span>
                    </p>
                    <p>
                      <strong>Street Name : </strong>
                      <span>{memberData.contactStreetName}</span>
                    </p>
                    <p>
                      <strong>Panchayat : </strong>
                      <span>{memberData.contactPanchayat}</span>
                    </p>
                    <p>
                      <strong>District : </strong>
                      <span>{memberData.contactDistrict}</span>
                    </p>
                    <p>
                      <strong>Thaluk : </strong>
                      <span>{memberData.contactThaluk}</span>
                    </p>
                    <p>
                      <strong>Village : </strong>
                      <span>{memberData.contactVillage}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "24px",
                justifyContent: "end",
                padding: "24px",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  handleEditModal();
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
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
