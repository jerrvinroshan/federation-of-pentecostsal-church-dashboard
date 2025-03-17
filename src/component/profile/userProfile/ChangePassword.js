import { TextField } from "@mui/material";

export const ChangePassword = () => {
  return (
    <div className="changepassword__container">
      <h2>Change Password</h2>
      <div className="input__container">
        <div className="changepassword__inputcontainer">
          <h3>Old Password</h3>
          <TextField label="Enter Old Password" size='small' style={{width:"220px"}}/>
        </div>
        <div className="changepassword__inputcontainer">
          <h3>New Password</h3>
          <div className="changepassword__newpasswordcontainer">
            <TextField label="Enter New Password" size='small' style={{width:"220px"}} />
            <TextField label="Cofirm New Password" size='small' style={{width:"220px"}} />
          </div>
        </div>
      </div>
    </div>
  );
};
