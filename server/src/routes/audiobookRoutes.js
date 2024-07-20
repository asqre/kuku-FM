import express from "express";
import { addFakerAudioBooks, addSampleAudioBooks, getAdudiobooks } from "../controllers/audiobookController.js";

const router = express.Router();

router.post("/add", addSampleAudioBooks);
router.get("/getAll", getAdudiobooks);

export default router;
