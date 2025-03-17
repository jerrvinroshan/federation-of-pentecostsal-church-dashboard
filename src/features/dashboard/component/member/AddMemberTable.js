import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const AddMemberTable = ({ rows, handleEdit, handleDelete }) => {
  const columns = [
    { field: "id", headerName: "Sl.No", width: 55 },
    { field: "name", headerName: "Name", width: 70 },
    { field: "address", headerName: "Address", width: 90 },
    { field: "email", headerName: "Email", width: 100 },
    { field: "phone", headerName: "Phone", width: 110 },
    { field: "zone", headerName: "Zone", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 500,
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
  );
};
