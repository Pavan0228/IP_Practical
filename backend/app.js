import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.router.js";

// Initialize dotenv to access environment variables
dotenv.config();

const app = express();

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to handle CORS
app.use(cors());

// Middleware to parse cookies
app.use(cookieParser());

// Use routes
app.use("/api/auth", authRoutes);

// Global error handling (optional)
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

export default app;
