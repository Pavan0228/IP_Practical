import express from "express";
import { config } from "./config/config.js";
import mongoose from "mongoose";
import app from "./app.js"; // Import the app from app.js

// Connect to MongoDB without deprecated options
mongoose
	.connect(config.DB_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

// Start the server
app.listen(config.PORT, () =>
	console.log(`Server running on port ${config.PORT}`)
);
