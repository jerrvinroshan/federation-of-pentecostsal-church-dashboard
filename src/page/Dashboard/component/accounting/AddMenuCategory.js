import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';


export const AddMenuCategory = ({ handleOpenModal }) =>{
    
    return(
        <div className="AddEditMenu">
        <Button
          size="small"
          startIcon={<AddIcon />}
          onClick={handleOpenModal}
        >
          Add Category
        </Button>
      </div>
    )
} 