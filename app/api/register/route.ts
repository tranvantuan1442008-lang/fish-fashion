import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import User from "../../models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { name, email, phone, password } = await req.json();

    // Kiểm tra email
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return NextResponse.json(
        { success: false, message: "Email đã tồn tại!" },
        { status: 400 }
      );
    }

    // Kiểm tra số điện thoại
    const phoneExists = await User.findOne({ phone });

    if (phoneExists) {
      return NextResponse.json(
        { success: false, message: "Số điện thoại đã tồn tại!" },
        { status: 400 }
      );
    }

    // Tạo tài khoản mới
    await User.create({
      name,
      email,
      phone,
      password,
    });

    return NextResponse.json({
      success: true,
      message: "Đăng ký thành công!",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Lỗi máy chủ",
      },
      { status: 500 }
    );
  }
}