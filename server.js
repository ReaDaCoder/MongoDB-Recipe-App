import "dotenv/config"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/database.js";

const app = express();
const port = process.env.PORT || 80880

app.use(cors());
app.use(express.json);
connectDB


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connection successful")
.catch((err) =>console.err(err)
));

app.listen(port, ()=> console.log(`Server started on ${port}`))