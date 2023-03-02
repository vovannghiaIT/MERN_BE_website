const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: Number,
    },
    address: {
      type: String,
    },
    roles: {
      type: Number,
    },
    orders: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    avatar: [
      {
        type: String,
      },
    ],
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

const UserModal = mongoose.model("users", UserSchema);
module.exports = UserModal;
