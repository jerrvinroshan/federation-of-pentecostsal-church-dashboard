import axios from "axios";

const API_BASE_URL = "https://67f75c3342d6c71cca64d137.mockapi.io/trial";

export const getUserProfile = async (userName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?userName=${userName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (userName, profileData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}?userName=${userName}`,
      profileData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};
