const express = require("express");
const mongoose = require("mongoose");
const postModel = require("../models/postModel");
const router = express.Router();

// FETCHING ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await postModel.find().populate("user");
    return res.json(posts);
  } catch (err) {
    return res.json({ message: err });
  }
});

// CREATING A POST
router.post("/", async (req, res) => {
  try {
    await postModel.create(req.body);
    return res.json({ message: "Post created successfully" });
  } catch (err) {
    return res.json({ message: err });
  }
});

// FETCHING A POST BY ID
router.get("/:id", async (req, res) => {
  try {
    const posts = await postModel.find({ user: req.params.id });
    return res.json(posts);
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
