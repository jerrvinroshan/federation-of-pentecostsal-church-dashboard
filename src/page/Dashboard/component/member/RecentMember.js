import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import memberData from "../../data/memberData/memberData.json";

export const RecentMember = () => {
  return (
    <>
      <div className="Card__bg small">
        <div>
          <div className="headingContainer">
            <h1 className="component__heading--h1">Recent Member</h1>
            <MoreVertIcon />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              padding: "24px 0 28px 28px",
            }}
          >
            <ol
              style={{
                paddingLeft: "28px",
                display: "flex",
                gap: "8px",
                flexDirection: "column",
              }}
            >
              {memberData.slice(0, 5).map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
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
