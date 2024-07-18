import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

export const getAudiobooks = async () => {
  const response = await axios.get(`${BASE_URL}/audiobooks`);
  return response.data;
};

export const getAudiobook = async (id) => {
  const response = await axios.get(`${BASE_URL}/audiobooks/${id}`);
  return response.data;
};

export const submitReview = async (id, review) => {
  const response = await axios.post(
    `${BASE_URL}/audiobooks/${id}/reviews`,
    review
  );
  return response.data;
};

export const fetchAudioBooks = async () => {
  const response = await axios.get(`${BASE_URL}/audiobooks`);
  return response.data;
};

export const fetchAudioBook = async (id) => {
  const response = await axios.get(`${BASE_URL}/audiobooks/${id}`);
  return response.data;
};

export const fetchReviews = async (id) => {
  const response = await axios.get(`${BASE_URL}/audiobooks/${id}/reviews`);
  return response.data;
};

export const postReview = async (id, review) => {
  const response = await axios.post(
    `${BASE_URL}/audiobooks/${id}/reviews`,
    review
  );
  return response.data;
};
