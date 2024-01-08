import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables from a .env file
dotenv.config();

// Get the MongoDB connection string from the environment variables
const DB = process.env.DB || "";

// Connect to the MongoDB database
mongoose.connect(DB);

// Log a message when connected to the MongoDB database
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

// Log a message when an error occurs while connecting to the MongoDB database
mongoose.connection.on("error", () => {
    console.log("Error connecting to MongoDB");
});