import { FormControl, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export const PersonalDetails = () => {
  return (
    <div>
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
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Pastor Name"
          />
          <TextField size="small" style={{ width: "220px" }} label="DOB" />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Father Name"
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Mother Name"
          />

          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Native Place</InputLabel>
            <Select label="Native Place">
              <MenuItem>Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Native District</InputLabel>
            <Select label="Native District">
              <MenuItem>Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Native State</InputLabel>
            <Select label="Native State">
              <MenuItem>Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
              <MenuItem>Colcacel</MenuItem>
            </Select>
          </FormControl>

          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Native State"
          />

          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Contact NO"
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Emergency Contact No"
          />
          <TextField size="small" style={{ width: "220px" }} label="Email Id" />
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
            <Select label="Matrial Status">
              <MenuItem>Single</MenuItem>
              <MenuItem>Married</MenuItem>
            </Select>
          </FormControl>

          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Wife Name"
          />
          <TextField size="small" style={{ width: "220px" }} label="DOB" />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="First Child Name"
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Second Child Name"
          />
        </div>
      </div>
    </div>
  );
};
