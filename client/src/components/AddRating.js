import React from "react";
import Modal from "./common/Modal";

const AddRating = ({ showRating, setShowRating, handleReviewSubmit, newReview, setNewReview }) => {
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

  return (
    <>
      <Modal
        isVisible={showRating}
        onClose={handleClose}
        onClick={handleReviewSubmit}
      >
        <form onSubmit={handleReviewSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block mb-2">Rating:</label>
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="0">Select rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
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

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit Review
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddRating;
