import express from "express";
import {
  addSampleAudioBooks,
  getAdudiobooks,
  getAudioBookById,
} from "../controllers/audiobookController.js";

const router = express.Router();

router.post("/add", addSampleAudioBooks);
router.get("/getAll", getAdudiobooks);
router.get("/getById/:id", getAudioBookById);

export default router;
