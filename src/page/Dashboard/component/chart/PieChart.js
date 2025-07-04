import { PieChart } from "@mui/x-charts/PieChart";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const ChartPie = () => {
  return (
    <div className="Card__bg">
      <div className="headingContainer">
        <h1 className="component__heading--h1">
          Donation
        </h1>
        <MoreVertIcon/>
      </div>
      <div style={{paddingLeft:'34px'}}>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 15, arcLabel: "prayer" },
                { id: 1, value: 65, arcLabel: "Church" },
              ],
              arcLabel: (item) => item.arcLabel ?? "",
            },
          ]}
          width={294}
          height={200}
        />
      </div>
    </div>
  );
};
