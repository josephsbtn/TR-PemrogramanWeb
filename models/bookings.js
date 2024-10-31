const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const bookingModel = mongoose.model("Booking", bookingSchema);
module.exports = bookingModel;
