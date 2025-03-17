import { TextField } from "@mui/material";

export const ChurchProperty = () => {
  return (
    <div>
      <div>
        <h3>Church Property Detail</h3>
        <div style={{ display: "flex", marginTop: "28px" }}>
          <div>
            <h4>Own Property</h4>
            <div
              style={{
                display: "flex",
                gap: "40px",
                rowGap: "28px",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              <TextField size="small" label="Owner Name" />
              <TextField size="small" label="Register Date" />
              <TextField size="small" label="Any Legal Issues" />
            </div>
          </div>
          <div>
            <h4>Rental Property</h4>
            <div
              style={{
                display: "flex",
                gap: "40px",
                rowGap: "28px",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              <TextField size="small" label="Owner Name" />
              <TextField size="small" label="Register Date" />
              <TextField size="small" label="Any Legal Issues" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "36px" }}>
        <h3>Permanent Address / Address for Communication</h3>
        <div
          style={{
            display: "flex",
            columnGap: "40px",
            rowGap: "28px",
            flexWrap: "wrap",
            marginTop: "32px",
          }}
        >
          <TextField
            size="small"
            style={{ width: "220px" }}
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
        </div>
      </div>
    </div>
  );
};
