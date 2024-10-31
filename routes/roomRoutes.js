const express = require("express");
const router = express.Router();

const Room = require("../models/room");

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.post("/getallroomsID", async (req, res) => {
  try {
    const { roomid } = req.body; // Get roomid from the request body
    let rooms;

    if (roomid) {
      rooms = await Room.findById(roomid);
    } else {
      rooms = await Room.find({});
    }

    if (!rooms) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
