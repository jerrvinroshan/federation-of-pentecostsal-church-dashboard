import { NavBar } from "../component/NavBar";
import { SideNavBar } from "../component/SideNavBar";
import { MemberBarChart } from "../features/dashboard/component/chart/MemberBarChart";
import { ChartPie } from "../features/dashboard/component/chart/PieChart";
import { Donation } from "../features/dashboard/component/Donation";
import { EventCalendar } from "../features/dashboard/component/EventCalendar";
import { RecentMember } from "../features/dashboard/component/member/RecentMember";
import { ZoneMap } from "../features/dashboard/component/zone/ZoneMap";
import { Zones } from "../features/dashboard/component/zone/Zones";

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
