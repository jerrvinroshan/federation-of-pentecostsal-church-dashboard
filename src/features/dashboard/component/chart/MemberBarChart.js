import { BarChart } from "@mui/x-charts";
import MoreVertIcon from "@mui/icons-material/MoreVert";


export const MemberBarChart = () => {
  return (
    <div className="Card__bg small">
      <div className="headingContainer">
        <h1 className="component__heading--h1">Member</h1>
        <MoreVertIcon />
      </div>
      <div>
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["jan", "Feb", "Mar", "Apr", "May", "jun", "jul"],
            },
          ]}
          series={[{ data: [15, 35, 57 , 87, 12, 38, 60] }]}
          width={235}
          height={200}
        />
      </div>
    </div>
  );
};
