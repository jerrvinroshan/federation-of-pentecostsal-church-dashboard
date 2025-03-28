import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const FormCustomTextField = ({ field, form, errors, ...props }) => {
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

export const FormCustomSelectField = ({
  field,
  form,
  option,
  label,
  errors,
  ...props
}) => {
  return (
    <div>
      <FormControl
        size="small"
        style={{ width: "220px" }}
        error={!!form.errors[field.name]}
      >
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
        {!!form.errors[field.name] && (
          <FormHelperText>{form.errors[field.name]}</FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

export const FormCustomDatePickerField = ({
  field,
  label,
  form,
  errors,
  ...props
}) => {
  return (
    <div style={{ width: "220px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ "& .MuiOutlinedInput-root": { height: "40px" } }}
          label={label}
          {...field}
          {...props}
          onChange={(newValue) => form.setFieldValue(field.name, newValue)}
          slotProps={{
            textField: { error: Boolean(form.errors[field.name]) },
          }}
        />
      </LocalizationProvider>
      {!!form.errors[field.name] && (
        <FormHelperText sx={{color:"#d32f2f",margin:"4px 14px 0"}}>{form.errors[field.name]}</FormHelperText>
      )}
    </div>
  );
};
