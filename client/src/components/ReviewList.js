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
    return <p className="text-center opacity-45">No reviews yet</p>;
  }

  return (
    <div>
      {sortedReviews.map((review, ind) => (
        <div key={ind} className="p-4 border rounded mb-4 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold">{review.user.userName}</p>
            <p className="text-gray-500">
              {moment(review.createdAt).format("LLL")}
            </p>
          </div>
          <p className="font-bold mb-2">Rating: {renderStars(review.rating)}</p>
          <p>"{review.review}"</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
