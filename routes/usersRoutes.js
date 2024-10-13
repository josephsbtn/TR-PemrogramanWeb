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

router.post("/regisUser", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const user = await newUser.save();
    res.send("Regis Succesfull");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/loginUser", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username, password: password });
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json({ message: "Login Error" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
