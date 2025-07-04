import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const MemberReportTable = () => {
  const columns = [
    { field: "date", headerName: "Date", width: 110 },
    { field: "memberName", headerName: "Member Name", width: 140 },
    { field: "zone", headerName: "Zone", width: 140 },
    { field: "address", headerName: "Address", width: 140 },
    { field: "reason", headerName: "Reason", width: 550 },
  ];

  const rows = [
    { id:1,date: '23/02/2025', memberName:'Kumar', zone:'Nagercoil', address:'xxx,y street, Nagercoil', reason:""},
    { id:3,date: '23/02/2025', memberName:'Raja', zone:'Colcalchel', address:'xxx,y street, Nagercoil', reason:""},
    { id:4,date: '23/02/2025', memberName:'Edwin', zone:'Kollemcode', address:'xxx,y street, Nagercoil', reason:""},
    { id:5,date: '23/02/2025', memberName:'Godwin', zone:'Colachel', address:'xxx,y street, Nagercoil', reason:""},
    { id:6,date: '23/02/2025', memberName:'Mark', zone:'Kollemcode', address:'xxx,y street, Nagercoil', reason:""},
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
