const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
  },
  roomid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: [true, "Room ID is required"],
  },
  startDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  attendees: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "expired"],
    default: "pending",
  },
});

const bookingModel = mongoose.model("Booking", bookingSchema);
module.exports = bookingModel;
