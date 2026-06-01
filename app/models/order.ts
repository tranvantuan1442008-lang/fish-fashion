import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    address: String,

    products: [
      {
        name: String,
        price: Number,
        quantity: Number,
      },
    ],

    total: Number,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

export default
  mongoose.models.Order ||
  mongoose.model(
    "Order",
    OrderSchema
  );