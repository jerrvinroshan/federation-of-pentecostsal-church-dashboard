import MoreVertIcon from "@mui/icons-material/MoreVert";
import zoneData from "../../data/zoneData/zoneData.json";

export const Zones = () => {
  return (
    <>
      <div className="Card__bg small">
        <div className="headingContainer">
          <h1 className="component__heading--h1">Zones</h1>
          <MoreVertIcon />
        </div>
        <div className="list__container" style={{ padding: "24px 0 0 28px" }}>
          <ul
            className="list__container--ul"
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {zoneData.slice(0, 5).map((zone) => (
              <li key={zone.id}>{zone.zone}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
