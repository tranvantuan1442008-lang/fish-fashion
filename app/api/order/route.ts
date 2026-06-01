import { NextResponse } from "next/server";

import { connectDB } from "@/app/lib/mongodb";
import Order from "@/app/models/order";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const order = await Order.create(body);

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Lỗi tạo đơn hàng",
    });
  }
}
export async function GET() {
  await connectDB();

  const orders = await Order.find()
    .sort({ createdAt: -1 });

  return NextResponse.json({
    success: true,
    orders,
  });
}
export async function PATCH(req: Request) {
  await connectDB();

  const body = await req.json();

  const order = await Order.findByIdAndUpdate(
    body.id,
    {
      status: body.status,
    },
    {
      new: true,
    }
  );

  return NextResponse.json({
    success: true,
    order,
  });
}