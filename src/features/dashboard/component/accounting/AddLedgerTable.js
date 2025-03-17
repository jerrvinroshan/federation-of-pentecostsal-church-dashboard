import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const AddLedgerTable = () => {
  const columns = [
    { field: "id", headerName: "Sl.No", width: 160 },
    { field: "date", headerName: "Date", width: 230 },
    { field: "debit", headerName: "Debit", width: 230 },
    { field: "credit", headerName: "Credit", width: 230 },
    { field: "total", headerName: "Total", width: 230 },
  ];

  const rows = [
    { id: 1, date:"25/02/2025",debit:25000,credit:10000,total: 2500, },
    { id: 2, date:"25/02/2025",debit:10000,credit:25000,total: 2500, },
    { id: 3, date:"25/02/2025",debit:10000,credit:25000,total: 2500, },
    { id: 4, date:"27/02/2025",debit:10000,credit:25000,total: 2500, },
    { id: 5, date:"27/02/2025",debit:10000,credit:25000,total: 2500, },
    { id: 6, date:"27/02/2025",debit:10000,credit:25000,total: 2500, },
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
