import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/ErrorHandler.js";
import AuthRoutes from "./routes/AuthRoutes.js";

const app = express();

dotenv.config();

connectDB();

app.use(cors());

app.use(express.json());

//
app.get("/api/", (req, res) => {
  res.status(201).json({ success: true, message: "Hello " });
});

// AUTH ROUTE
app.use("/api/users", AuthRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT} PORT`));
