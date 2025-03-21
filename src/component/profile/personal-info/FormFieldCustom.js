import { TextField } from "@mui/material";

export const FormFieldCustom = ({ field, form, ...props }) => {
  const errorText = form.touched[field.name] && form.errors[field.name];

  return (
    <div>
      <TextField
        size="small"
        style={{ width: "220px" }}
        {...field}
        {...props}
        error={!!errorText} // Shows error if touched and there's an error
        helperText={errorText || ""} // Display error message if there is one
      />
    </div>
  );
};
