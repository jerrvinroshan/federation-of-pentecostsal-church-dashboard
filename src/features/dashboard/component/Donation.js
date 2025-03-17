import MoreVertIcon from "@mui/icons-material/MoreVert";

export const Donation = () => {
  return (
    <>
      <div className="Card__bg small">
        <div className="headingContainer">
          <h1 className="component__heading--h1">Donation</h1>
          <MoreVertIcon />
        </div>
        <div
          style={{
            padding: "24px 0 0 0",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems:'center'
          }}
        >
          <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
            <p>From Church</p>
            <h2 style={{fontSize:'32px'}}>₹ 25000</h2>
          </div>
          <div>
            <p>From Prayer</p>
            <h2 style={{fontSize:'32px'}}>₹ 10000</h2>
          </div>
        </div>
      </div>
    </>
  );
};
