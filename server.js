import "dotenv/config"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/database.js";
import router from "./routes/api.js";

const app = express();
const port = process.env.PORT || 8080; // Change to a valid port, 8080 is commonly used

app.use(cors());
app.use(express.json());
app.use('/api/v1', router);

// Connect to the database
connectDB();

// Mongoose connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("connection successful"))
  .catch((err) => console.error(err)); // Correct the error logging function

app.listen(port, () => console.log(`Server started on port ${port}`));
