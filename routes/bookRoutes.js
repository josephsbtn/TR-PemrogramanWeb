const express = require("express");
const router = express.Router();
const Booking = require("../models/bookings");

router.post("/newBookings", async (req, res) => {
  try {
    const newBook = await Booking.create(req.body);
    res.send(newBook);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
