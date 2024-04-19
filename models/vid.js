const mongoose = require("mongoose");

const vidSchema = new mongoose.Schema(
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

const Video = mongoose.model("Video", vidSchema);
module.exports = Video;
