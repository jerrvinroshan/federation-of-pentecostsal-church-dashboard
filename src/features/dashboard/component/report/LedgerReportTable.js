import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const LedgerReportTable = () => {
  const columns = [
    { field: "date", headerName: "Date", width: 110 },
    { field: "debit", headerName: "Debit", width: 140 },
    { field: "credit", headerName: "Credit", width: 140 },
    { field: "total", headerName: "Total", width: 140 },
    { field: "reason", headerName: "Reason", width: 550 },
  ];

  const rows = [
    { id:1,date: '23/02/2025', debit:'25,000', credit:'30,000', total:'5,000', reason:"Mark my words"},
    { id:2,date: '23/02/2025', debit:'25,000', credit:'30,000', total:'5,000', reason:""},
    { id:3,date: '23/02/2025', debit:'25,000', credit:'30,000', total:'5,000', reason:""},
    { id:4,date: '23/02/2025', debit:'25,000', credit:'30,000', total:'5,000', reason:""},
    { id:5,date: '23/02/2025', debit:'25,000', credit:'30,000', total:'5,000', reason:""},
    { id:6,date: '23/02/2025', debit:'25,000', credit:'30,000', total:'5,000', reason:""},
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
