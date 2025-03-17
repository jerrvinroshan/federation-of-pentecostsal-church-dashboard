import { useState } from "react";
import { AddMemberTable } from "../features/dashboard/component/member/AddMemberTable";
import { AddMenuMember } from "../features/dashboard/component/member/AddMenuMember";
import { memberData } from "../features/dashboard/data/memberData/memberData";
import { AddMemberModal } from "../features/dashboard/component/member/AddMemberModal";

const AddMember = () => {
  const [members, setMembers] = useState(memberData);
  const [openModal, setOpenModal] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentMember(null);
  };

  const handleAddMember = (newMember, address, email, phone, zone) => {
    const newMemberObj = {
      id: members.length > 0 ? members[members.length - 1].id + 1 : 1,
      name: newMember,
      address: address,
      email: email,
      phone: phone,
      zone: zone,
    };
    setMembers([...members, newMemberObj]);
  };

  const handleEditMember = (editedMember) => {
    setCurrentMember(editedMember);
    handleOpenModal();
  };

  const handleSaveEdit = (editedMember) => {
    setMembers(
      members.map((member) =>
        member.id === editedMember.id ? editedMember : member
      )
    );
    handleCloseModal();
  };

  const handleDeleteMember = (memberId) => {
    setMembers(members.filter((member) => member.id !== memberId));
  };

  return (
    <div>
      <h1>Add Member</h1>
      <AddMenuMember handleOpenModal={handleOpenModal} />
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", marginTop: "36px" }}>
        <AddMemberTable
          rows={members} 
          handleEdit={handleEditMember}
          handleDelete={handleDeleteMember}
        />
        <AddMemberModal
          open={openModal}
          handleClose={handleCloseModal}
          handleAddMember={handleAddMember}
          handleSaveEdit={handleSaveEdit}
          member={currentMember}
        />
      </div>
    </div>
  );
};
export default AddMember;
