import React from "react";

const StarRating = ({ rating, onRatingChange }) => {
  const handleStarClick = (value) => {
    onRatingChange(value);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`cursor-pointer text-2xl ${
            value <= rating ? "text-red-500" : "text-gray-400"
          }`}
          onClick={() => handleStarClick(value)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
