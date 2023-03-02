const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    exportdate: {
      type: String,
      required: true,
    },
    deliveryaddress: {
      type: String,
      required: true,
    },
    deliveryname: {
      type: String,
      required: true,
    },
    deliveryphone: {
      type: String,
      required: true,
    },
    deliveryemail: {
      type: String,
      required: true,
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

const OrdersModal = mongoose.model("orders", OrdersSchema);
module.exports = OrdersModal;
