import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import {
  fetchAudioBookById,
  fetchReviewsByAudioBookId,
  submitReview,
} from "../api/audiobookApi";
import ReviewList from "../components/ReviewList";
import LoginSignUp from "../components/LoginSignUp";
import AddRating from "../components/AddRating";

const AudioBookPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const [audioBook, setAudioBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 0,
    review: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showRating, setShowRating] = useState(false);

  useEffect(() => {
    const getAudioBook = async () => {
      const data = await fetchAudioBookById(id);
      setAudioBook(data);
    };

    const getReviews = async () => {
      const data = await fetchReviewsByAudioBookId(id);
      setReviews(data);
    };

    getReviews();
    getAudioBook();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...newReview,
      audioBookId: id,
      userId: user._id,
    };
    const review = await submitReview(payload);
    setReviews([...reviews, review]);
    setNewReview({
      rating: 0,
      review: "",
    });
  };

  if (!audioBook) {
    return <Layout>Loading...</Layout>;
  }

  const handleShowRating = () => {
    if (localStorage.getItem("user") === null) {
      return setShowModal(true);
    }
    setShowRating(true);
  };

  return (
    <>
      <Layout>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">{audioBook.title}</h1>
          <img
            src={audioBook.coverImage}
            alt={audioBook.title}
            className="w-full max-w-[300px] mb-4"
          />
          <p className="text-xl mb-2">Author: {audioBook.author}</p>
          <p className="text-xl mb-2">Genre: {audioBook.genre}</p>
          <p
            className="text-lg mb-4"
            style={{
              fontSize: "1rem",
              fontFamily: "sans-serif",
              fontWeight: "200",
            }}
          >
            {audioBook.description}
          </p>
          <div className="my-10">
            <div className="flex flex-row justify-between items-center my-4">
              <div className="text-xl font-light mb-4 opacity-65">
                User Reviews
              </div>
              <button
                onClick={handleShowRating}
                className="bg-red-500 text-white p-2 rounded"
              >
                Add Rating
              </button>
            </div>
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </Layout>
      <AddRating
        showRating={showRating}
        setShowRating={setShowRating}
        newReview={newReview}
        setNewReview={setNewReview}
        handleReviewSubmit={handleReviewSubmit}
      />
      <LoginSignUp showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AudioBookPage;
