import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const AddMemberTable = ({ rows, handleEdit, handleDelete, loading }) => {
  const columns = [
    { field: "id", headerName: "Sl.No", width: 55 },
    { field: "pastorName", headerName: "Name", width: 70 },
    { field: "pastorDOB", headerName: "DOB", width: 90 },
    { field: "emailId", headerName: "Email", width: 100 },
    { field: "contactNo", headerName: "Phone", width: 110 },
    { field: "nativePlace", headerName: "Zone", width: 120 },
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
            <DeleteIcon color="error" />
          </IconButton>
        </>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: "100%", minWidth: "1130px" }}>
      {loading ? (
        <p
          style={{
            height: 400,
            minWidth: "1150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </p>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      )}
    </Paper>
  );
};
