const express = require("express");
const router = express.Router();
const Booking = require("../models/bookings");
const Room = require("../models/room");

// Route to create a new booking
router.post("/newBookings", async (req, res) => {
  try {
    const newBook = await Booking.create(req.body);
    res.status(201).send(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate("userid", "username email")
      .populate("roomid", "roomName capacity image");
    res.status(200).send(bookings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a booking by ID
router.delete("/deleteBookings", async (req, res) => {
  const { bookid } = req.body;
  try {
    const deletedBooking = await Booking.findByIdAndDelete(bookid);
    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).send(deletedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to find available rooms
router.post("/availableRooms", async (req, res) => {
  const { date, time } = req.body;

  try {
    const startTime = new Date(`${date}T${time}`);
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 2);

    const bookedRooms = await Booking.find({
      startDate: date,
      $and: [
        {
          $or: [
            {
              startTime: { $lte: time },
              endTime: { $gte: time },
            },
            {
              startTime: { $lte: endTime.toISOString().slice(11, 16) },
            },
          ],
        },
        {
          status: { $eq: "approved" },
        },
      ],
    }).distinct("roomid"); //distict tu ngambil unique key nya aja

    const availableRooms = await Room.find({
      _id: { $nin: bookedRooms },
    });

    res.status(200).json(availableRooms);
  } catch (error) {
    console.error("Error fetching available rooms:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/getUserBookings", async (req, res) => {
  const { userid } = req.query;
  try {
    const BookUser = await Booking.find({ userid: userid })
      .populate("userid", "username email")
      .populate("roomid", "roomName capacity image");

    res.status(200).send(BookUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getbookingsByID", async (req, res) => {
  const { bookid } = req.query;
  try {
    const booking = await Booking.findById(bookid)
      .populate("userid", "username email")
      .populate("roomid", "roomName capacity image");
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).send(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/acceptBooking", async (req, res) => {
  const { bookingId } = req.body;
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    booking.status = "approved";
    await booking.save();
    res
      .status(200)
      .json({ message: "Booking accepted successfully.", booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/rejectBooking", async (req, res) => {
  const { bookingId } = req.body;
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    booking.status = "rejected";
    await booking.save();
    res
      .status(200)
      .json({ message: "Booking accepted successfully.", booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

setInterval(async () => {
  try {
    const currentTime = new Date();

    await Booking.updateMany(
      {
        $and: [
          {
            $or: [
              { startDate: { $lt: currentTime } },
              { endDate: { $lt: currentTime } },
            ],
          },
          {
            status: { $ne: "rejected" },
          },
        ],
      },
      { $set: { status: "expired" } }
    );

    console.log("Expired bookings updated.");
  } catch (error) {
    console.error("Error updating expired bookings:", error);
  }
}, 60 * 1000);

module.exports = router;
