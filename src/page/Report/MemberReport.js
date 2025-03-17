import { AddEditMenuMemberReport } from "../../features/dashboard/component/report/AddEditMenuMemberReport";
import { MemberReportTable } from "../../features/dashboard/component/report/MemberReportTable";

const MemberReport = () => {
  return (
    <div>
      <h1>Member Report</h1>
      <AddEditMenuMemberReport/>
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "36px",
        }}
      >
        <MemberReportTable />
      </div>
    </div>
  );
};
export default MemberReport;
