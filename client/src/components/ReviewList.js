import React from "react";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, ind) => (
        <div key={ind} className="p-4 border rounded mb-4">
          <p className="font-bold">Rating: {review.rating} Stars</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
