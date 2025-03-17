import { useState, useEffect } from "react";
import { Modal, Paper, TextField, Button } from "@mui/material";

export const AddSubCategoryModal = ({
  open,
  handleClose,
  handleAddSubCategory,
  handleSaveEdit,
  subCategory,
}) => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [subCategoryTitle, setSubCategoryTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (subCategory) {
      setCategoryTitle(subCategory.category);
      setSubCategoryTitle(subCategory.subCategory);
      setDescription(subCategory.description);
    } else {
      setCategoryTitle("");
      setSubCategoryTitle("");
      setDescription("");
    }
  }, [subCategory]);

  const handleSubmit = () => {
    if (categoryTitle && subCategoryTitle && description) {
      if (subCategory) {
        handleSaveEdit({
          ...subCategory,
          category: categoryTitle,
          subcategory: subCategoryTitle,
          description: description,
        });
      } else {
        handleAddSubCategory(categoryTitle,subCategoryTitle, description);
      }
      setCategoryTitle("");
      setSubCategoryTitle("");
      setDescription("");
      handleClose();
    }
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
        <TextField
          fullWidth
          label="Category"
          variant="outlined"
          value={categoryTitle}
          onChange={(e) => setCategoryTitle(e.target.value)}
        />
        <TextField
          fullWidth
          label="Sub-Category"
          variant="outlined"
          value={subCategoryTitle}
          onChange={(e) => setSubCategoryTitle(e.target.value)}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          {subCategory ? "Save Changes" : "Add Sub-Category"}
        </Button>
      </Paper>
    </Modal>
  );
};
