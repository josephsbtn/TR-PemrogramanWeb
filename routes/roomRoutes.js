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
  const roomid = req.body.roomid;
  try {
    const room = await Room.findOne({ _id: roomid });
    res.send(room);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.post("/addroom", async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    res.send(newRoom);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.put("/updateRoom", async (req, res) => {
  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { _id: req.body.roomid },
      req.body
    );
    res.send(updatedRoom);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.delete("/deleteRoom", async (req, res) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(
      {
        _id: req.body.roomid,
      },
      req.body
    );
    res.send(deletedRoom);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});
module.exports = router;
