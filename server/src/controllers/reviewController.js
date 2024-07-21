import Review from "../models/reviewModel.js";

export const getReviewsByAudioBookId = async (req, res) => {
  try {
    const { audioBookId } = req.params;
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
