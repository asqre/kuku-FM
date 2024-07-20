import axios from "axios";
const BASE_URL = process.env.REACT_APP_API;

export const fetchAudioBooks = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/getAll`);
    return res.data.audiobooks;
  } catch (error) {
    throw error;
  }
};

export const submitReview = async (id, review) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/addReview/${id}`, review);
    return res.data;
  } catch (error) {
    throw error;
  }
}