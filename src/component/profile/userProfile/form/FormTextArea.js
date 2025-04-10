import { TextareaAutosize } from "@mui/material";

export const FormTextArea = ({ field, form, errors, ...props }) => {
  return (
    <div>
      <TextareaAutosize
        {...field}
        {...props}
        minRows={4}
        style={{ minWidth: "450px", overflow: "auto", maxWidth: "450px" }}
        error={!!form.errors[field.name]}
        helperText={form.errors[field.name]}
      />
    </div>
  );
};
