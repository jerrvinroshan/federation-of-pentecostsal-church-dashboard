import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export const Qualification = () => {
  return (
    <div>
      <div>
        <h2>Educational Qualification</h2>
        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "36px",
          }}
        >
          <TextField size="small" label="Degree" />
          <TextField size="small" label="Institute" />
          <TextField size="small" label="Place" />
          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Year of Passing</InputLabel>
          <Select label="Year of Passing">
            <MenuItem>1972</MenuItem>
          </Select>
          </FormControl>
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <h2>Theological Qualification</h2>
        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "36px",
          }}
        >
          <TextField size="small" label="Degree" />
          <TextField size="small" label="Institute" />
          <TextField size="small" label="Place" />
          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Year of Passing</InputLabel>
          <Select label="Year of Passing">
            <MenuItem>1972</MenuItem>
          </Select>
          </FormControl>
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <h2>Ordination Detail</h2>
        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "36px",
          }}
        >
          <TextField size="small" label="Degree" />
          <TextField size="small" label="Institute" />
          <TextField size="small" label="Place" />
          <TextField size="small" label="Date" />
          <FormControl size="small" style={{ width: 220 }}>
            <InputLabel>Ministry Starting Date</InputLabel>
          <Select label="Ministry Starting Date">
            <MenuItem>1972</MenuItem>
          </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
