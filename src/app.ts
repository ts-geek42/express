import express from "express";
import useRouter from "./web/routes";

const makeApp = () => {
  const express = require("express");
  const dotenv = require("dotenv");
  const mongoose = require("mongoose");

  dotenv.config({ path: "./.env" });

  const app = express();
  const port = process.env.PORT || 3000;

  mongoose.connect(
    "mongodb+srv://romilmangukiya:wSW3lmWWNkLuRmUa@express.0mrdunc.mongodb.net/"
  );

  const db = mongoose.connection;

  db.on("connected", () => {
    console.log("✅ MongoDB connected successfully!");
  });

  db.on("error", (err: any) => {
    console.error("❌ MongoDB connection error:", err);
  });

  db.on("disconnected", () => {
    console.warn("⚠️ MongoDB disconnected!");
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  useRouter(app);
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};
export default makeApp;
