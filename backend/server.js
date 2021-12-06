import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

//
app.get("/api/", (req, res) => {
  res.status(201).json({ success: true, message: "Hello " });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT} PORT`));
