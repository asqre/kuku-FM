import React from "react";
import Modal from "./common/Modal";
import StarRating from "./StarRating";

const AddRating = ({
  showRating,
  setShowRating,
  handleReviewSubmit,
  newReview,
  setNewReview,
}) => {
  const handleClose = () => {
    setShowRating(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleRatingChange = (rating) => {
    setNewReview({
      ...newReview,
      rating: rating,
    });
  };
  
  return (
    <>
      <Modal
        isVisible={showRating}
        onClose={handleClose}
        onClick={handleReviewSubmit}
      >
        <div className="p-5">
          <form onSubmit={handleReviewSubmit} className="mb-4">
            <div className="mb-4">
              <label className="block mb-2">Rating:</label>
              <StarRating rating={newReview.rating} onRatingChange={handleRatingChange} />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Review:</label>
              <textarea
                name="review"
                value={newReview.review}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="bg-red-500 text-white p-2 rounded">
              Submit Review
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddRating;
