import { Modal, Paper, TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";

export const AddZoneModal = ({
  open,
  handleClose,
  handleAddZone,
  handleSaveEdit,
  zone,
}) => {
  const zoneSchema = Yup.object({
    zoneName: Yup.string()
      .required("Enter the Zone Name")
      .min(4, "Minimum 4 letter")
      .max(50, "Maximum 50 letters"),
    description: Yup.string()
      .min(4, "Minimum 4 letter")
      .max(50, "Maximum 50 letters"),
  });

  const handleSubmit = async (values) => {
    if (zone) {
      try {
        await zoneSchema.validate(values, { abortEarly: false });
        handleSaveEdit({
          ...zone,
          zone: values.zoneName,
          description: values.description,
        });
        console.log("form submitted", values);
      } catch (error) {
        console.error("Validation error", error);
      }
    } else {
      try {
        await zoneSchema.validate(values, { abortEarly: false });
        handleAddZone(values.zoneName, values.description);
        console.log("form submitted", values);
      } catch (error) {
        console.error("Validation error", error);
      }
    }

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          backgroundColor: "white",
          boxShadow: 24,
          padding: "24px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <h2>{zone ? "Edit Zone" : "Add New Zone"}</h2>
        <Formik
          initialValues={{
            zoneName: zone ? zone.zone : "",
            description: zone ? zone.description : "",
          }}
          validationSchema={zoneSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <TextField
                fullWidth
                label="Zone Name"
                variant="outlined"
                name="zoneName"
                value={values.zoneName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.zoneName && Boolean(errors.zoneName)}
                helperText={touched.zoneName && errors.zoneName}
              />
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ mt: 2 }}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ mt: 2 }}
              >
                {zone ? "Save Changes" : "Add Zone"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Modal>
  );
};
