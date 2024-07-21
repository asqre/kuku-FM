import Review from "../models/reviewModel.js";
import userModel from "../models/userModel.js";

export const getReviewsByAudioBookId = async (req, res) => {
  try {
    const { audioBookId } = req.body;

    const reviews = await Review.find({ audiobookId: audioBookId });

    res.status(200).send({
      success: true,
      message: "Reviews fetched successfully",
      data: reviews,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const submitReview = async (req, res) => {
  try {
    const { audioBookId, userId } = req.body;

    if (!audioBookId || !userId) {
      return res.status(400).send({
        success: false,
        message: "Audiobook ID and User ID are required",
      });
    }

    const user = await userModel.findById({ _id: userId });
    console.log("user", user);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const review = new Review({
      ...req.body,
      user: userId,
      audiobookId: audioBookId,
    });

    const newReview = await review.save();

    res.status(201).send({
      success: true,
      message: "Review submitted successfully",
      data: newReview,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
