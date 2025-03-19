import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";

export const BillingHistoryTable = () => {
  const columns = [
    { field: "transactionid", headerName: "Transaction ID", width: 110 },
    { field: "description", headerName: "Description", width: 100 },
    { field: "date", headerName: "Date", width: 100 },
    { field: "amount", headerName: "Amount", width: 80 },
    { field: "status", headerName: "Status", width: 80 },
    {
      field: "download",
      headerName: "Action",
      width: 550,
      renderCell: () => (
        <Link style={{display:'flex', alignItems:'center', gap:'12px'}}>
          <DownloadIcon style={{fontSize:'20px'}}/> Download
        </Link>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      transactionid: "75#fj4875",
      description: "church",
      date: "25/01/2025",
      amount: "$ 25,000",
      status: "complete",
      download: "Download",
    },
    {
      id: 2,
      transactionid: "75#fj4875",
      description: "",
      date: "",
      amount: "",
      status: "Failed",
      download: "",
    },
    {
      id: 3,
      transactionid: "75#fj4875",
      description: "",
      date: "",
      amount: "",
      status: "",
      download: "",
    },
    {
      id: 4,
      transactionid: "75#fj4875",
      description: "",
      date: "",
      amount: "",
      status: "",
      download: "",
    },
    {
      id: 5,
      transactionid: "75#fj4875",
      description: "",
      date: "",
      amount: "",
      status: "",
      download: "",
    },
    {
      id: 6,
      transactionid: "75#fj4875",
      description: "",
      date: "",
      amount: "",
      status: "",
      download: "",
    },
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <div>
      <h2>Billing History</h2>
      <Paper sx={{ height: 400, width: "100%", marginTop: "32px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};
