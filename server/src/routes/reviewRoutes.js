import express from 'express';
import { getReviewsByAudioBookId } from '../controllers/reviewController.js';

const router = express.Router();

router.get('/:id', getReviewsByAudioBookId);

export default router;