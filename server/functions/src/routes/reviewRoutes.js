import express from 'express';
import { getReviewsByAudioBookId, submitReview } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/get', getReviewsByAudioBookId);
router.post('/submit', submitReview);

export default router;