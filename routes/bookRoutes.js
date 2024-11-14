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

router.get("/getallbookings", async (req, res) => {
  try {
    const book = await Booking.find({});
    res.send(book);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/getbookingsByID", async (req, res) => {
  const bookid = req.body.bookid;
  try {
    const book = await Booking.findOne({ _id: bookid });
    res.send(book);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.post;

module.exports = router;
