import axios from "axios";

const API_URL = "https://67f75c3342d6c71cca64d137.mockapi.io/try";

export const fetchMemberAPI = async () => {
  const options = {
    method: "GET",
    url: API_URL,
  };
  try {
    const res = await axios.request(options);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const postMemberAPI = async (payload) => {
  const options = {
    method: "POST",
    url: API_URL,
    data: payload,
  };
  try {
    const res = await axios.request(options);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const deleteMemberAPI = async (id) => {
  const options = {
    method: "DELETE",
    url: `${API_URL}/${id}`,
  };
  try {
    const res = await axios.request(options);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const putMemberAPI = async (payload) => {
  const { id, ...data } = payload;
  const options = {
    method: "PUT",
    url: `${API_URL}/${id}`,
    data: data,
  };
  try {
    const res = await axios.request(options);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
