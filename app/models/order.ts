import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: String,
    email: String, // thêm dòng này
    phone: String,
    address: String,

    status: {
      type: String,
      default: "Chờ xác nhận",
    },

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
  mongoose.model("Order", OrderSchema);