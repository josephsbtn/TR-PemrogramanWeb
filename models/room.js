const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

const roomSchema = new mongoose.Schema(
  {
    name: {
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
    },
    imageUrl: [],
    description: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timeStamp: true,
  }
);

const roomModel = mongoose.model("Room", roomSchema);
module.exports = roomModel;
