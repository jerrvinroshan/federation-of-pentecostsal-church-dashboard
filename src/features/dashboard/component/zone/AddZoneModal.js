import { useState, useEffect } from "react";
import { Modal, Paper, TextField, Button } from "@mui/material";

export const AddZoneModal = ({ open, handleClose, handleAddZone, handleSaveEdit, zone }) => {
  const [zoneName, setZoneName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (zone) {
      setZoneName(zone.zone);
      setDescription(zone.description);
    } else {
      setZoneName(""); 
      setDescription(""); 
    }
  }, [zone]);

  const handleSubmit = () => {
    if (zoneName && description) {
      if (zone) {
        handleSaveEdit({ ...zone, zone: zoneName, description: description });
      } else {
        handleAddZone(zoneName, description);
      }
      setZoneName("");
      setDescription("");
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          backgroundColor: "white",
          boxShadow: 24,
          padding: "24px",
          borderRadius: "8px",
          display:'flex',
          flexDirection:'column',
          gap:'24px'
        }}
      >
        <h2>{zone ? "Edit Zone" : "Add New Zone"}</h2>
        <TextField
          fullWidth
          label="Zone Name"
          variant="outlined"
          value={zoneName}
          onChange={(e) => setZoneName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          {zone ? "Save Changes" : "Add Zone"}
        </Button>
      </Paper>
    </Modal>
  );
};
