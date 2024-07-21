import express from 'express';
import { getReviewsByAudioBookId, submitReview } from '../controllers/reviewController.js';

const router = express.Router();

router.get('/:id', getReviewsByAudioBookId);
router.post('/submit', submitReview);

export default router;