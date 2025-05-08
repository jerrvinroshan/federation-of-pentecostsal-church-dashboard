import { Modal, Paper, TextField, Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CloseIcon from '@mui/icons-material/Close';

export const AddCategoryModal = ({
  open,
  handleClose,
  handleAddCategory,
  handleSaveEdit,
  category,
}) => {
  const categorySchema = Yup.object({
    categoryTitle: Yup.string()
      .required("Enter Category")
      .min(4, "Minimum 4 letter")
      .max(50, "Maximum 50 letters"),
    description: Yup.string()
      .min(4, "Minimum 4 letter")
      .max(50, "Maximum 50 letters"),
  });

  const handleSubmit = async (values) => {
    if (category) {
      try {
        await categorySchema.validate(values, { abortEarly: false });
        handleSaveEdit({
          ...category,
          category: values.categoryTitle,
          description: values.description,
        });
        console.log("form submitted", values);
      } catch (error) {
        console.error("Validation error", error);
      }
    } else {
      try {
        await categorySchema.validate(values, { abortEarly: false });
        handleAddCategory(values.categoryTitle, values.description);
        console.log("form submitted", values);
      } catch (error) {
        console.error("Validation error", error);
      }
    }

    handleClose();
  };

  // Style CSS
  const style = {
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
  };

  return (
    <Modal open={open}>
      <Paper sx={style}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>{category ? "Edit Category" : "Add New Category"}</h2>
        <CloseIcon sx={{cursor:"pointer"}} color="error" onClick={handleClose}/></div>
        <Formik
          initialValues={{
            categoryTitle: category ? category.category : "",
            description: category ? category.description : "",
          }}
          validationSchema={categorySchema}
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
                {category ? "Save Changes" : "Add Category"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Modal>
  );
};
