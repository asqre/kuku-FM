import React from "react";
import moment from "moment";

const ReviewList = ({ reviews }) => {
  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const sortedReviews = reviews.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (reviews.length === 0) {
    return <p className="text-center text-gray-500 italic">No reviews yet</p>;
  }

  return (
    <div className="space-y-4">
      {sortedReviews.map((review, ind) => (
        <div key={ind} className="bg-white shadow-md rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 space-y-2 sm:space-y-0">
            <p className="font-bold text-lg">{review.user.userName}</p>
            <p className="text-sm text-gray-500">
              {moment(review.createdAt).format("LLL")}
            </p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 mr-1">{renderStars(review.rating)}</span>
            <span className="text-sm text-gray-600">({review.rating}/5)</span>
          </div>
          <p className="text-gray-700 italic">"{review.review}"</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;