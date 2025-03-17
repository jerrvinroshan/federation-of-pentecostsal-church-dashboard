import { useState, useEffect } from "react";
import { Modal, Paper, TextField, Button } from "@mui/material";

export const AddCategoryModal = ({
  open,
  handleClose,
  handleAddCategory,
  handleSaveEdit,
  category,
}) => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (category) {
      setCategoryTitle(category.category);
      setDescription(category.description);
    } else {
      setCategoryTitle("");
      setDescription("");
    }
  }, [category]);

  const handleSubmit = () => {
    if (categoryTitle && description) {
      if (category) {
        handleSaveEdit({
          ...category,
          category: categoryTitle,
          description: description,
        });
      } else {
        handleAddCategory(categoryTitle, description);
      }
      setCategoryTitle("");
      setDescription("");
      handleClose();
    }
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
    <Modal open={open} onClose={handleClose}>
      <Paper sx={style}>
        <h2>{category ? "Edit Category" : "Add New Category"}</h2>
        <TextField
          fullWidth
          label="Category"
          variant="outlined"
          value={categoryTitle}
          onChange={(e) => setCategoryTitle(e.target.value)}
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
          {category ? "Save Changes" : "Add Category"}
        </Button>
      </Paper>
    </Modal>
  );
};
