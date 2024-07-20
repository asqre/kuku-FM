import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    audiobookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Audiobook",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
