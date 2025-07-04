import { useState } from "react";
import { AddCategoryTable } from "../Dashboard/component/accounting/AddCategoryTable";
import { AddMenuCategory } from "../Dashboard/component/accounting/AddMenuCategory";
import { categoryData } from "../Dashboard/data/accountingData/categoryData";
import { AddCategoryModal } from "../Dashboard/component/accounting/modal/AddCategoryModal";

const AddCategory = () => {
  const [categorys, setCategorys] = useState(categoryData);
  const [openModal, setOpenModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentCategory(null);
  };

  const handleAddCategory = (newCategory, description) => {
    const newCategoryObj = {
      id: categorys.length + 1,
      category: newCategory,
      description: description || "No description",
    };
    setCategorys([...categorys, newCategoryObj]);
  };

  const handleEditCategory = (editedCategory) => {
    setCurrentCategory(editedCategory);
    handleOpenModal();
  };

  const handleSaveEdit = (editedCategory) => {
    setCategorys(
      categorys.map((category) =>
        category.id === editedCategory.id ? editedCategory : category
      )
    );
    handleCloseModal();
  };

  const handleDeleteCategory = (categoryId) => {
    setCategorys(categorys.filter((category) => category.id !== categoryId));
  };

  return (
    <div>
      <h1>Add Category</h1>
      <AddMenuCategory handleOpenModal={handleOpenModal} />
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "36px",
        }}
      >
        <AddCategoryTable
          rows={categorys}
          handleEdit={handleEditCategory}
          handleDelete={handleDeleteCategory}
        />
        <AddCategoryModal
          open={openModal}
          handleClose={handleCloseModal}
          handleAddCategory={handleAddCategory}
          handleSaveEdit={handleSaveEdit}
          category={currentCategory}
        />
      </div>
    </div>
  );
};
export default AddCategory;
