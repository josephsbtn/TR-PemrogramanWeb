const mongoose = require("mongoose");

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
    image: [],
    description: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const roomModel = mongoose.model("Room", roomSchema);
module.exports = roomModel;
