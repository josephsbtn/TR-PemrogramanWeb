const express = require("express");
const router = express.Router();
const Booking = require("../models/bookings");

router.post("/", async (req, res) => {
  const { room, user, checkIn, checkOut } = req.body;
  try {
    const newBooking = await Booking.create({ room, user, checkIn, checkOut });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
