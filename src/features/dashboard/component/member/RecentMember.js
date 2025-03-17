import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

export const RecentMember = () => {
  return (
    <>
      <div className="Card__bg small">
        <div>
          <div className="headingContainer">
            <h1 className="component__heading--h1">Recent Member</h1>
            <MoreVertIcon />
          </div>
          <div style={{display:'flex', flexDirection:'column',gap:'24px',padding: "24px 0 28px 28px" }}>
            <ol style={{paddingLeft:'28px', display:'flex', gap:'8px', flexDirection:'column'}}>
              <li>Nagercoil</li>
              <li>Parvathipuram</li>
              <li>Colachel</li>
              <li>Kanyakumari</li>
              <li>Killiyoor</li>
            </ol>
            <Link className="recent-member-link" to={"/member/add-member"}>
              View more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
