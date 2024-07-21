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

export const submitReview = async (review) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/reviews/submit`, review);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const fetchAudioBookById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/getById/${id}`);
    return res.data.audiobook;   
  } catch (error) {
    throw error;
  }
}

export const fetchReviewsByAudioBookId = async (id) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/reviews/get`, {audioBookId: id});
    return res.data.data;
  } catch (error) {
    throw error;
  }
}