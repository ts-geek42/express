import { config } from "./config";

export const dbConnect = async () => {
  const mongoose = require("mongoose");

  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected!");
  });
};
