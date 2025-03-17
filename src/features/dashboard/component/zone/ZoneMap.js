import MoreVertIcon from "@mui/icons-material/MoreVert";
import zoneMap from "../../assets/image/zonemap.svg"

export const ZoneMap = () => {
  return (
    <>
      <div className="Card__bg">
        <div className="headingContainer">
          <h1 className="component__heading--h1">Zones</h1>
          <MoreVertIcon />
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:"12px"}}>
            <img src={zoneMap} alt="" style={{width:'90%'}}/>
        </div>
      </div>
    </>
  );
};
