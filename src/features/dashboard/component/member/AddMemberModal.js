import { useEffect, useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

export const AddMemberModal = ({
  open,
  handleClose,
  handleAddMember,
  handleSaveEdit,
  member,
}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zone, setZone] = useState("");

  useEffect(() => {
    if (member) {
      setName(member.name);
      setAddress(member.address);
      setEmail(member.email);
      setPhone(member.phone);
      setZone(member.zone);
    } else {
      setName("");
      setAddress("");
      setEmail("");
      setPhone("");
      setZone("");
    }
  }, [member]);

  const handleSubmit = () => {
    if (name && address && email && phone && zone) {
      if (member) {
        handleSaveEdit({ ...member, name: name, address: address, email: email, phone: phone,  zone: zone, });
      } else {
        handleAddMember(name, address,address,email, phone, zone);
      }
      setName("");
      setAddress("");
      setEmail("");
      setPhone("");
      setZone("");
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          backgroundColor: "white",
          boxShadow: 24,
          padding: "24px",
          border: "none",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
       <h2>{zone ? "Edit Member" : "Add New Member"}</h2>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
                <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          fullWidth
          label="Zone"
          variant="outlined"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
           {member ? "Save Changes" : "Add Member"}
        </Button>
      </Box>
    </Modal>
  );
};
