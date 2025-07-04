import { useState } from "react";
import { AddSubCategoryTable } from "../Dashboard/component/accounting/AddSubCategoryTable";
import { AddMenuSubCategory } from "../Dashboard/component/accounting/AddMenuSubCategory";
import { subCategoryData } from "../Dashboard/data/accountingData/subCategoryData";
import { AddSubCategoryModal } from "../Dashboard/component/accounting/modal/AddSubCategoryModal";

const AddSubCategory = () => {
   const [subCategorys, setSubCategorys] = useState(subCategoryData);
    const [openModal, setOpenModal] = useState(false);
    const [currentSubCategory, setCurrentSubCategory] = useState(null);
  
    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
      setCurrentSubCategory(null);
    };
  
    const handleAddSubCategory = (newCategory,newSubCategory, description) => {
      const newSubCategoryObj = {
        id: subCategorys.length + 1,
        category: newCategory,
        subcategory: newSubCategory,
        description: description || "No description",
      };
      setSubCategorys([...subCategorys, newSubCategoryObj]);
    };
  
    const handleEditSubCategory = (editedSubCategory) => {
      setCurrentSubCategory(editedSubCategory);
      handleOpenModal();
    };
  
    const handleSaveEdit = (editedSubCategory) => {
      setSubCategorys(
        subCategorys.map((subCategory) =>
          subCategory.id === editedSubCategory.id ? editedSubCategory : subCategory
        )
      );
      handleCloseModal();
    };
  
    const handleDeleteSubCategory = (subCategoryId) => {
      setSubCategorys(subCategorys.filter((subCategory) => subCategory.id !== subCategoryId));
    };
  return (
    <div>
      <h1>Add SubCategory</h1>
      <AddMenuSubCategory handleOpenModal={handleOpenModal}/>
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "36px",
        }}
      >
        <AddSubCategoryTable 
        rows={subCategorys} 
        handleEdit={handleEditSubCategory}
        handleDelete={handleDeleteSubCategory}/>
        <AddSubCategoryModal
         open={openModal}
         handleClose={handleCloseModal}
         handleAddSubCategory={handleAddSubCategory}
         handleSaveEdit={handleSaveEdit}
         subCategory={currentSubCategory}/>
      </div>
    </div>
  );
};
export default AddSubCategory;
