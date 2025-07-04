import { useState } from "react";
import { AddMenuZone } from "./Dashboard/component/zone/AddMenuZone";
import { AddZoneTable } from "./Dashboard/component/zone/AddZoneTable";
import { AddZoneModal } from "./Dashboard/component/zone/AddZoneModal";
// import { zoneData } from "./Dashboard/data/zoneData/zoneData";
import zoneData from "./Dashboard/data/zoneData/zoneData.json";
import { useDispatch } from "react-redux";
import { addZone } from "../store/zone/zoneSlice";

const AddZone = () => {
  const [zones, setZones] = useState(zoneData);
  const [openModal, setOpenModal] = useState(false);
  const [currentZone, setCurrentZone] = useState(null);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentZone(null);
  };

  const handleAddZone = (newZoneName, description) => {
    const newZoneObj = {
      id: zones.length + 1,
      zone: newZoneName,
      description: description || "",
    };
    setZones([...zones, newZoneObj]);
    dispatch(addZone([...zones, newZoneObj]));
  };
  const dispatch = useDispatch();
  const handleEditZone = (editedZone) => {
    setCurrentZone(editedZone);
    handleOpenModal();
  };

  const handleSaveEdit = (editedZone) => {
    setZones(
      zones.map((zone) => (zone.id === editedZone.id ? editedZone : zone))
    );
    handleCloseModal();
  };

  const handleDeleteZone = (zoneId) => {
    setZones(zones.filter((zone) => zone.id !== zoneId));
  };

  return (
    <div>
      <h1>Add Zone</h1>
      <AddMenuZone handleOpenModal={handleOpenModal} />
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "36px",
        }}
      >
        <AddZoneTable
          rows={zones}
          handleEdit={handleEditZone}
          handleDelete={handleDeleteZone}
        />
        <AddZoneModal
          open={openModal}
          handleClose={handleCloseModal}
          handleAddZone={handleAddZone}
          handleSaveEdit={handleSaveEdit}
          zone={currentZone}
        />
      </div>
    </div>
  );
};

export default AddZone;
