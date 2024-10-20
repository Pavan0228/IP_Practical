// app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.router.js";
import hotelRouter from "./routes/Hotel.router.js"; // Import the hotel routes

dotenv.config();

const app = express();
// In your index.js or app.js
app.use(cors({
    origin: "*", // Replace with your frontend URL
    credentials: true // Allow credentials (cookies)
}));


// Middleware setup
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRouter); // Use hotel routes

// Global error handling
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

export default app;
