const mongoose = require("mongoose");

const jerrySchema = new mongoose.Schema(
  {
    password: {
      type: String,
      default: "12345678",
      required: [true, "Please add password"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Jerry = mongoose.model("Jerry", jerrySchema);
module.exports = Jerry;
