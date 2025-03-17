import { AddEditMenuAnniverReport } from "../../features/dashboard/component/report/AddEditMenuAnniverReport";
import { AnniversaryReportTable } from "../../features/dashboard/component/report/AnniversaryReportTable";

const AnniversaryReport = () => {
  return (
    <div>
      <h1>Anniversary Report</h1>
      <AddEditMenuAnniverReport/>
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "36px",
        }}
      >
        <AnniversaryReportTable />
      </div>
    </div>
  );
};
export default AnniversaryReport;
