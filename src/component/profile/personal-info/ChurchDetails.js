import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export const ChurchDetails = () => {
  // Style CSS
  const textFieldWidth= {
    width:"220px",
  }
  return (
    <div>
      <div>
        <h2>Church Details</h2>
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
            style={textFieldWidth}
            label="Church Name"
          />
          <TextField size="small" style={{ width: "220px" }} label="Door No" />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Street Name"
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Panchayat"
          />
          <TextField size="small" style={{ width: "220px" }} label="Village" />
          <TextField size="small" style={{ width: "220px" }} label="Thaluk" />
          <TextField size="small" style={{ width: "220px" }} label="District" />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Assembly Constituency"
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Parliament Constituency"
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Local Police Station"
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Church Website"
          />
          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Independent/Denomination</InputLabel>
          <Select label="Independent/Denomination">
            <MenuItem>Independent</MenuItem>
            <MenuItem>Denomination</MenuItem>
          </Select>
          </FormControl>
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Independent / Denomination"
          />
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <h2>Trust / Society</h2>
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
            label="Name of Denomination"
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="President of Denomination"
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Head Quarters"
          />
          <TextField
            size="small"
            style={{ width: "220px" }}
            label="Govt. Registration No"
          />
        </div>
      </div>
    </div>
  );
};
