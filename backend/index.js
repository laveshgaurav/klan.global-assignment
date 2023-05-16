const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const cors = require("cors");

// Express Definitions
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Routes
app.use("/user", userRoutes);
app.use("/post", postRoutes);

// Server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
  mongoose
    .connect(
      "mongodb+srv://webmonk:webmonk@cluster0.gp38f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Connection failed", err);
    });
});
