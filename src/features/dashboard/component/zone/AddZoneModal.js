import { useState, useEffect } from "react";
import { Modal, Paper, TextField, Button } from "@mui/material";
import * as Yup from "yup";

export const AddZoneModal = ({
  open,
  handleClose,
  handleAddZone,
  handleSaveEdit,
  zone,
}) => {
  const [zoneData, setZoneData] = useState({
    zoneName: "",
    description: "",
  });

  const { zoneName, description } = zoneData;

  const [error, setError] = useState("");

  const zoneSchema = Yup.object({
    zoneName: Yup.string()
      .required("Enter the Zone Name")
      .min(4, "Minimum 4 lettes")
      .max(50, "Maximum 50 Letters"),
    description: Yup.string().required("Enter the Password"),
  });

  useEffect(() => {
    if (zone) {
      setZoneData({
        zoneName: zone.zone,
        description: zone.description,
      });
    } else {
      setZoneData({
        zoneName: "",
        description: "",
      });
    }
  }, [zone]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setZoneData({
      ...zoneData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (zoneName && description) {
      if (zone) {
        try {
          await zoneSchema.validate(zoneData, { abortEarly: false });
          handleSaveEdit({ ...zone, zone: zoneName, description: description });
          console.log("form submited", zoneData);
        } catch (error) {
          const newError = {};
          error.inner.forEach((err) => (newError[err.path] = err.message));
          setError(newError);
        }
      } else {
        try {
          await zoneSchema.validate(zoneData, { abortEarly: false });
          handleAddZone(zoneName, description);
          console.log("form submited", zoneData);
        } catch (error) {
          const newError = {};
          error.inner.forEach((err) => (newError[err.path] = err.message));
          setError(newError);
        }
        
      }
      setZoneData({
        zoneName: "",
        description: "",
      });
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
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <h2>{zone ? "Edit Zone" : "Add New Zone"}</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Zone Name"
            variant="outlined"
            name="zoneName"
            value={zoneName}
            onChange={handleChange}
          />
          {error.zoneName && <div>{error.zoneName}</div>}
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            name="description"
            value={description}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
            {zone ? "Save Changes" : "Add Zone"}
          </Button>
        </form>
      </Paper>
    </Modal>
  );
};
