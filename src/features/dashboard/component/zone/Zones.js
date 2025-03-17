import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Zones = () => {
  return (
    <>
      <div className="Card__bg small">
      <div className="headingContainer">
        <h1 className="component__heading--h1">
          Zones
        </h1>
        <MoreVertIcon/>
      </div>
        <div className='list__container' style={{padding:'24px 0 0 28px'}}>
            <ul className='list__container--ul' style={{listStyle:'none', display:'flex', flexDirection:'column', gap:"8px"}}>
                <li>Nagercoil</li>
                <li>Parvathipuram</li>
                <li>Colachel</li>
                <li>Kanyakumari</li>
                <li>Killiyoor</li>
            </ul>
        </div>
      </div>
    </>
  );
};
