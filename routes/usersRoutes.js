const express = require("express");
const router = express.Router();

const User = require("../models/users");

router.get("/getallusers", async (req, res) => {
  try {
    const rooms = await User.find({});
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
