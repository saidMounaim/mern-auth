import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();

connectDB();

//
app.get("/api/", (req, res) => {
  res.status(201).json({ success: true, message: "Hello " });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT} PORT`));
