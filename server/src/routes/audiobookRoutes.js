import express from "express";
import { addFakerAudioBooks, addSampleAudioBooks, getAdudiobooks, getAudioBookById } from "../controllers/audiobookController.js";

const router = express.Router();

router.post("/add", addSampleAudioBooks);
router.get("/getAll", getAdudiobooks);
router.get("/getById/:id", getAudioBookById);

export default router;
