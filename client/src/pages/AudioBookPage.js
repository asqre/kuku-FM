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
import Rating from "../components/Rating";

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
    const payload = {
      ...newReview,
      audioBookId: id,
      userId: user._id,
    };
    await submitReview(payload);
    const newReviewWithUser = {
      user: {
        _id: user._id,
        userName: user.userName,
      },
      ...newReview,
      createdAt: new Date().toISOString(),
    };
    setReviews([newReviewWithUser, ...reviews]);
    setNewReview({
      rating: 0,
      review: "",
    });

    const updatedAudioBook = await fetchAudioBookById(id);
    setAudioBook(updatedAudioBook);
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
        <div className="container mx-auto p-4 max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  src={audioBook.coverImage}
                  alt={audioBook.title}
                  className="h-48 w-full object-cover md:w-48"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {audioBook.genre}
                </div>
                <h1 className="mt-1 text-3xl font-bold text-gray-900 leading-tight">
                  {audioBook.title}
                </h1>
                <p className="mt-2 text-gray-600">By {audioBook.author}</p>
                <div className="mt-4 flex items-center">
                  <Rating rating={audioBook.rating} />
                  <span className="ml-2 text-gray-600">
                    ({audioBook.rating.toFixed(1)})
                  </span>
                </div>
                <p className="mt-4 text-gray-500">{audioBook.description}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">User Reviews</h2>
              <button
                onClick={handleShowRating}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300"
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