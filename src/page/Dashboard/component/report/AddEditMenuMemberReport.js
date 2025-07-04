import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export const AddEditMenuMemberReport = () =>{
    
    return(
        <div className="AddEditMenu">
        <Button size="small" startIcon={<AddIcon />}>Add Member Report</Button>
        <Button size="small" startIcon={<EditIcon />}>Edit Member Report</Button>
        <Button size="small" color="error" startIcon={<DeleteIcon />}>Delete</Button>
        </div>
    )
}