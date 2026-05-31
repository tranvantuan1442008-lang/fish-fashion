import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import User from "../../models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({
      email,
      password,
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Sai email hoặc mật khẩu",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Đăng nhập thành công",
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