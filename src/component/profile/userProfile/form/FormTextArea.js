import { TextField } from "@mui/material";

export const FormTextArea = ({ field, form, ...props }) => {
  const error = form.touched[field.name] && Boolean(form.errors[field.name]);

  return (
    <TextField
      {...field}
      {...props}
      multiline
      minRows={2}
      fullWidth
      error={error}
      helperText={error ? form.errors[field.name] : ""}
    />
  );
};