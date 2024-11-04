const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    statusDipinjam: {
      type: Boolean,
      required: true,
      default: false,
    },
    image: String,
    description: {
      type: String,
      required: true,
    },
    roomType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const roomModel = mongoose.model("Room", roomSchema);
module.exports = roomModel;
