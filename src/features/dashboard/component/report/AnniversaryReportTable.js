import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const AnniversaryReportTable = () => {
  const columns = [
    { field: "date", headerName: "Date", width: 110 },
    { field: "event", headerName: "Event", width: 140 },
    { field: "credit", headerName: "Credit", width: 140 },
    { field: "debit", headerName: "Debit", width: 140 },
    { field: "total", headerName: "Total", width: 550 },
  ];

  const rows = [
    {
      id: 1,
      date: "23/02/2025",
      event: "Mark my words",
      debit: "25,000",
      credit: "30,000",
      total: "5,000",
    },
    {
      id: 2,
      date: "23/02/2025",
      event: "",
      debit: "25,000",
      credit: "30,000",
      total: "5,000",
    },
    {
      id: 3,
      date: "23/02/2025",
      event: "",
      debit: "25,000",
      credit: "30,000",
      total: "5,000",
    },
    {
      id: 4,
      date: "23/02/2025",
      event: "",
      debit: "25,000",
      credit: "30,000",
      total: "5,000",
    },
    {
      id: 5,
      date: "23/02/2025",
      event: "",
      debit: "25,000",
      credit: "30,000",
      total: "5,000",
    },
    {
      id: 6,
      date: "23/02/2025",
      event: "",
      debit: "25,000",
      credit: "30,000",
      total: "5,000",
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
