import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const AddCategoryTable = ({ rows, handleEdit, handleDelete }) => {
  const columns = [
    { field: "id", headerName: "Sl.No", width: 100 },
    { field: "category", headerName: "Category", width: 120 },
    { field: "description", headerName: "Description", width: 410 },
    {
      field: "actions",
      headerName: "Actions",
      width: 450,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon color="error"/>
          </IconButton>
        </>
      ),
    },
  ];
  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
};
