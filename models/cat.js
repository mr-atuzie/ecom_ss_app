const mongoose = require("mongoose");

const catSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Please add category"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", catSchema);
module.exports = Category;
