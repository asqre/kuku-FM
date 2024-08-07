import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./src/config/db.js";
import audiobookRoutes from "./src/routes/audiobookRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import reviewRoutes from "./src/routes/reviewRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", audiobookRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Welcome to the Audiobook API</h1>`);
});

const PORT = process.env.FB_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
