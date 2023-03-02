const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    parent_id: {
      type: Number,
    },
    value: {
      type: String,
    },
    status: {
      type: Number,
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
    created_by: {
      type: String,
    },
    updated_by: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const CategoryModal = mongoose.model("category", CategorySchema);
module.exports = CategoryModal;
