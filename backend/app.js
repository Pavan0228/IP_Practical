import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.router.js";
import hotelRouter from "./routes/Hotel.router.js";

dotenv.config();

const app = express();

// Configure CORS to allow requests from your frontend domain (localhost in your case)
app.use(cors({
    origin: "http://localhost:5173", // Replace with the Vite frontend URL
    credentials: true // Allow cookies to be sent
}));

// Middleware setup
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRouter);

// Global error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

export default app;
