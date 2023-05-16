const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const router = express.Router();

// FETCHING ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    return res.json(users);
  } catch (err) {
    return res.json({ message: err });
  }
});

// CREATING A USER
router.post("/", async (req, res) => {
  try {
    await userModel.create(req.body);
    return res.json({ message: "User created successfully" });
  } catch (err) {
    return res.json({ message: err });
  }
});

// FETCHING A USER BY ID
router.get("/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    return res.json(user);
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
