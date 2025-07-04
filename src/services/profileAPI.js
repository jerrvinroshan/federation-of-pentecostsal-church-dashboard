import axios from "axios";
import {base_URL} from "../utils/Setting"


export const getUserProfile = async (userName) => {
  try {
    const response = await axios.get(`${base_URL}/trial?userName=${userName}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (userName, profileData) => {
  try {
    const response = await axios.put(
      `${base_URL}/trial?userName=${userName}`,
      profileData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};
