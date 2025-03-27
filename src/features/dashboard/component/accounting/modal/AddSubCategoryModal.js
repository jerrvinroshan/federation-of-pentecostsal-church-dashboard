import { Modal, Paper, TextField, Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export const AddSubCategoryModal = ({
  open,
  handleClose,
  handleAddSubCategory,
  handleSaveEdit,
  subCategory,
}) => {
  const subCategorySchema = Yup.object({
    categoryTitle: Yup.string()
      .required("Enter Category")
      .min(4, "Minimum 4 letter")
      .max(50, "Maximum 50 letters"),
    subCategoryTitle: Yup.string()
      .required("Enter sub-Category")
      .min(4, "Minimum 4 letter")
      .max(50, "Maximum 50 letters"),
    description: Yup.string()
      .min(4, "Minimum 4 letter")
      .max(50, "Maximum 50 letters"),
  });

  const handleSubmit = async (values) => {
    if (subCategory) {
      try {
        await subCategorySchema.validate(values, { abortEarly: false });
        handleSaveEdit({
          ...subCategory,
          category: values.categoryTitle,
          subCategory: values.subCategoryTitle,
          description: values.description,
        });
        console.log("form submitted", values);
      } catch (error) {
        console.error("Validation error", error);
      }
    } else {
      try {
        await subCategorySchema.validate(values, { abortEarly: false });
        handleAddSubCategory(
          values.categoryTitle,
          values.subCategoryTitle,
          values.description
        );
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
        <h2>{subCategory ? "Edit Category" : "Add New Sub-Category"}</h2>
        <Formik
          initialValues={{
            categoryTitle: "",
            subCategoryTitle: "",
            description: "",
          }}
          validationSchema={subCategorySchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, errors }) => (
            <Form>
              <TextField
                fullWidth
                label="Category"
                variant="outlined"
                name="categoryTitle"
                value={values.categoryTitle}
                onChange={handleChange}
                error={Boolean(errors.categoryTitle)}
                helperText={errors.categoryTitle}
              />
              <TextField
                fullWidth
                label="Sub-Category"
                variant="outlined"
                name="subCategoryTitle"
                value={values.subCategoryTitle}
                onChange={handleChange}
                error={Boolean(errors.subCategoryTitle)}
                helperText={errors.subCategoryTitle}
                sx={{ mt: 2 }}
              />
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                name="description"
                value={values.description}
                onChange={handleChange}
                error={Boolean(errors.description)}
                helperText={errors.description}
                sx={{ mt: 2 }}
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ mt: 2 }}
              >
                {subCategory ? "Save Changes" : "Add Sub-Category"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Modal>
  );
};
