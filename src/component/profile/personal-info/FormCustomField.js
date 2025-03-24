import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const FormCustomTextField = ({ field, ...props }) => {
  return (
    <div>
      <TextField
        {...field}
        {...props}
        size="small"
        style={{ width: "220px" }}
      />
    </div>
  );
};

export const FormCustomSelectField = ({
  field,
  form,
  option,
  label,
  ...props
}) => {
  return (
    <div>
      <FormControl size="small" style={{ width: "220px" }}>
        <InputLabel>{label}</InputLabel>
        <Select
          {...field}
          {...props}
          label={label}
          onChange={(e) => form.setFieldValue(field.name, e.target.value)}
        >
          {option.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
