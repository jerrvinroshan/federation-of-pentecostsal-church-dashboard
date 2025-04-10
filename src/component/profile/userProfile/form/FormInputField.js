import { TextField } from "@mui/material";

export const FormInputField = ({ field, form, errors, ...props }) => {
  return (
    <div>
      <TextField
        {...field}
        {...props}
        size="small"
        style={{ width: "220px" }}
        error={!!form.errors[field.name]}
        helperText={form.errors[field.name]}
      />
    </div>
  );
};