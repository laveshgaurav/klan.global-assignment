const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const cors = require("cors");
const postModel = require("./models/postModel");
const userModel = require("./models/userModel");

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
app.get("/", (req, res) => {
  res.send("Server is running");
});
// app.use("/user", userRoutes);
// app.use("/post", postRoutes);

// FETCHING ALL POSTS
app.get("/post/", async (req, res) => {
  try {
    const posts = await postModel.find().populate("user");
    return res.json(posts);
  } catch (err) {
    return res.json({ message: err });
  }
});

// CREATING A POST
app.post("/post/", async (req, res) => {
  try {
    await postModel.create(req.body);
    return res.json({ message: "Post created successfully" });
  } catch (err) {
    return res.json({ message: err });
  }
});

// FETCHING A POST BY ID
app.get("/post/:id", async (req, res) => {
  try {
    const posts = await postModel.find({ user: req.params.id });
    return res.json(posts);
  } catch (err) {
    return res.json({ message: err });
  }
});

// FETCHING ALL USERS
app.get("/user/", async (req, res) => {
  try {
    const users = await userModel.find();
    return res.json(users);
  } catch (err) {
    return res.json({ message: err });
  }
});

// CREATING A USER
app.post("/user/", async (req, res) => {
  try {
    await userModel.create(req.body);
    return res.json({ message: "User created successfully" });
  } catch (err) {
    return res.json({ message: err });
  }
});

// FETCHING A USER BY ID
app.get("/user/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    return res.json(user);
  } catch (err) {
    return res.json({ message: err });
  }
});

// Server
const PORT = process.env.PORT || 4000;
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${PORT}`);
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
