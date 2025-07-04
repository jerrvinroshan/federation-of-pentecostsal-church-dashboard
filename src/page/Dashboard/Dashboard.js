import { MemberBarChart } from "./component/chart/MemberBarChart";
import { ChartPie } from "./component/chart/PieChart";
import { Donation } from "./component/Donation";
import { EventCalendar } from "./component/EventCalendar";
import { RecentMember } from "./component/member/RecentMember";
import { ZoneMap } from "./component/zone/ZoneMap";
import { Zones } from "./component/zone/Zones";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
        <div style={{display:"flex", gap:'40px', flexWrap:"wrap", marginTop:"36px"}}>
          <Zones />
          <RecentMember />
          <Donation />
          <MemberBarChart />
          <EventCalendar />
          <ZoneMap />
          <ChartPie />
        </div>
      </div>
    
  );
};

export default Dashboard;
