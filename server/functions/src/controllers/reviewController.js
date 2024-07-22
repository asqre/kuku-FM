import Review from "../models/reviewModel.js";
import userModel from "../models/userModel.js";
import audiobookModel from "../models/audiobookModel.js";

export const getReviewsByAudioBookId = async (req, res) => {
  try {
    const { audioBookId } = req.body;

    const reviews = await Review.find({ audiobookId: audioBookId }).populate(
      "user"
    );

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

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const review = new Review({
      ...req.body,
      user: user,
      audiobookId: audioBookId,
    });

    const newReview = await review.save();

    const audiobook = await audiobookModel.findById({ _id: audioBookId });
    const reviews = await Review.find({ audiobookId: audioBookId });
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    audiobook.rating = Number(averageRating.toFixed(1));
    await audiobook.save();

    res.status(201).send({
      success: true,
      message: "Review submitted successfully",
      data: newReview,
      updatedRating: audiobook.rating,
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
