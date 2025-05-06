import { useEffect, useState } from "react";
import { AddMemberTable } from "../features/dashboard/component/member/AddMemberTable";
import { AddMenuMember } from "../features/dashboard/component/member/AddMenuMember";
import { memberData } from "../features/dashboard/data/memberData/memberData";
import AddMemberProfileModal from "../features/dashboard/component/member/AddMemberProfileModal";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import {
  loadForm,
  resetForm,
} from "../store/member/personal-member-form/personalMemberSlice";
import {
  deleteMemberAPI,
  fetchMemberAPI,
  postMemberAPI,
  putMemberAPI,
} from "../services/memberAPI";

const AddMember = () => {
  const [members, setMembers] = useState(memberData);
  const [openModal, setOpenModal] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  const dispatch = useDispatch();
  const handleOpenModal = () => {
    setOpenModal(true);
    dispatch(resetForm());
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentMember(null);
  };
  const newMemberData = useSelector((state) => state.member.memberData);
  const formatDate = (dateInput) => {
    const parsedDate = dayjs(dateInput);

    if (!parsedDate.isValid()) return "-";

    return parsedDate.format("DD/MM/YYYY");
  };
  const handleAddMember = () => {
    const newMember = {
      id: members.length > 0 ? members[members.length - 1].id + 1 : 1,
      pastorName: newMemberData.pastorName,
      emailId: newMemberData.emailId,
      contactNo: newMemberData.contactNo,
      pastorDOB: formatDate(newMemberData.pastorDOB),
      zone: newMemberData.nativePlace,
    };

    setMembers((prev) => [...prev, newMember]);
    handleCloseModal();
  };

  const handleEditMember = (editedMember) => {
    setCurrentMember(editedMember);
    handleOpenModal();
  };

  // const handleSaveEdit = (editedMember) => {
  //   setMembers(
  //     members.map((member) =>
  //       member.id === editedMember.id ? editedMember : member
  //     )
  //   );
  //   handleCloseModal();
  // };
  //Remove // to use handleDeleteMember
  // const handleDeleteMember = (memberId) => {
  //   setMembers(members.filter((member) => member.id !== memberId));
  // };

  // Test Axios API from MockAPI
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const handlePostAPI = async () => {
    const result = await postMemberAPI(newMemberData);
    console.log(result);
    setRefresh((prev) => !prev);
    dispatch(loadForm(result));
    handleCloseModal();
    setCurrentMember(result);
  };
  const handleDeleteMember = async (memberId) => {
    const deleteMember = await deleteMemberAPI(memberId);
    console.log(deleteMember);
    setRefresh((prev) => !prev);
  };
  const handleEdit = async (editedMember) => {
    const editSave = await putMemberAPI(editedMember);
    setCurrentMember(editSave);
    dispatch(loadForm(editSave));
    setOpenModal(true);
  };
  const handleSaveEdit = async (editedMember) => {
    const editSave = await putMemberAPI(editedMember);
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === editedMember.id ? editSave : member
      )
    );
    setRefresh((prev) => !prev);
    handleCloseModal();
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMemberAPI();
      console.log(result);
      setData(result);
      setMembers(result);
    };
    fetchData();
  }, [refresh]);
  // End
  return (
    <div>
      <h1>Add Member</h1>
      <AddMenuMember handleOpenModal={handleOpenModal} />
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "36px",
        }}
      >
        <AddMemberTable
          rows={data}
          handleEdit={handleEdit}
          handleDelete={handleDeleteMember}
        />
        <AddMemberProfileModal
          open={openModal}
          handleClose={handleCloseModal}
          handleAddMember={handlePostAPI} //change to handleAddMember if mockAPI is not using
          handleSaveEdit={handleSaveEdit}
          member={currentMember}
        />
      </div>
    </div>
  );
};
export default AddMember;
