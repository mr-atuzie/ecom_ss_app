const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add product name"],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Please add category"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Photo = mongoose.model("Photo", photoSchema);
module.exports = Photo;
