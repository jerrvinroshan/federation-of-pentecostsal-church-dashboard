import axios from "axios";
import { base_URL } from "../utils/Setting";


export const fetchMemberAPI = async () => {
  const options = {
    method: "GET",
    url: `${base_URL}/try`,
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
    url: `${base_URL}/try`,
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
    url: `${base_URL}/try/${id}`,
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
    url: `${base_URL}/try/${id}`,
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
