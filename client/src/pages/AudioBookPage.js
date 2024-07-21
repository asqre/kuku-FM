import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import {
  fetchAudioBookById,
  fetchReviewsByAudioBookId,
  submitReview,
} from "../api/audiobookApi";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import LoginSignUp from "../components/LoginSignUp";

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
    if (!user) {
      return setShowModal(true);
    }
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
          <p className="text-lg mb-4">{audioBook.description}</p>
          <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
          <ReviewList reviews={reviews} />
          <ReviewForm
            newReview={newReview}
            setNewReview={setNewReview}
            handleReviewSubmit={handleReviewSubmit}
          />
        </div>
      </Layout>
      <LoginSignUp showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AudioBookPage;
