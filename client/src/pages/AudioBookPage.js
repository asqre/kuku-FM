import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { fetchAudioBook, submitReview } from "../api/audiobookApi"
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

const AudioBookPage = () => {
  const { id } = useParams();
  const [audioBook, setAudioBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 0,
    review: "",
  });

  useEffect(() => {
    const getAudioBook = async () => {
      const data = await fetchAudioBook(id);
      setAudioBook(data);
      setReviews(data.reviews);
    };

    getAudioBook();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const review = await submitReview(id, newReview);
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
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{audioBook.title}</h1>
        <img
          src={audioBook.coverImage}
          alt={audioBook.title}
          className="w-full max-w-sm mb-4"
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
  );
};

export default AudioBookPage;
