import { AddEditMenuLedgerReport } from "../../features/dashboard/component/report/AddEditMenuLedgerReport";
import { LedgerReportTable } from "../../features/dashboard/component/report/LedgerReportTable";

const LedgerReport = () => {
  return (
    <div>
      <h1>Ledger Report</h1>
      <AddEditMenuLedgerReport/>
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "36px",
        }}
      >
        <LedgerReportTable />
      </div>
    </div>
  );
};
export default LedgerReport;
