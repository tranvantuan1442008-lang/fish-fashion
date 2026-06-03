import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Product from "@/app/models/product";

export async function GET() {
  await connectDB();

  const products = await Product.find();

  return NextResponse.json({
    success: true,
    products,
  });
}

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const product = await Product.create({
    name: body.name,
    price: body.price,
    image: body.image,
    category: body.category,
    description: body.description,
  });

  return NextResponse.json({
    success: true,
    product,
  });
}

export async function DELETE(req: Request) {
  await connectDB();

  const body = await req.json();

  await Product.findByIdAndDelete(body.id);

  return NextResponse.json({
    success: true,
  });
}
export async function PUT(req: Request) {
  await connectDB();

  const body = await req.json();

  const product =
    await Product.findByIdAndUpdate(
      body.id,
      {
        name: body.name,
        price: body.price,
        image: body.image,
        category: body.category,
        description: body.description,
      },
      { new: true }
    );

  return NextResponse.json({
    success: true,
    product,
  });
}
