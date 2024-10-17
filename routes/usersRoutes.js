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

router.post("/register", async (req, res) => {
  const newuser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  });
  try {
    const user = await newuser.save();
    res.send("User Registered Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username, password: password });

    if (user) {
      const tempUser = {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      res.send(user);
    } else {
      return res.status(400).json({ message: "Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
