import dotenv from "dotenv";
import makeApp from "./app";

dotenv.config();
makeApp();

// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");

// dotenv.config({ path: "./.env" });

// const app = express();
// const port = process.env.PORT || 3000;

// mongoose.connect(
//   "mongodb+srv://romilmangukiya:wSW3lmWWNkLuRmUa@express.0mrdunc.mongodb.net/"
// );

// const db = mongoose.connection;

// db.on("connected", () => {
//   console.log("✅ MongoDB connected successfully!");
// });

// db.on("error", (err) => {
//   console.error("❌ MongoDB connection error:", err);
// });

// db.on("disconnected", () => {
//   console.warn("⚠️ MongoDB disconnected!");
// });

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Hello World!-get");
// });

// app.post("/", (req, res) => {
//   res.send("Hello World!-post");
// });

// app.put("/", (req, res) => {
//   res.send("Got a PUT request at /user");
// });

// app.delete("/", (req, res) => {
//   res.send("Hello World!-delete");
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port || 3001}`);
// });
