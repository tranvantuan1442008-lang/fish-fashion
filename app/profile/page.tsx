"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-sky-50 p-6">

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold">
            👤 Tài khoản của tôi
          </h1>

          <p className="mt-3 text-gray-600">
            Chào mừng bạn đến với Fish Fashion
          </p>
          <div className="mt-5 border-t pt-4 space-y-2">
  <p>
    <strong>👤 Họ tên:</strong>{" "}
    {typeof window !== "undefined"
      ? localStorage.getItem("userName")
      : ""}
  </p>

  <p>
    <strong>📧 Email:</strong>{" "}
    {typeof window !== "undefined"
      ? localStorage.getItem("userEmail")
      : ""}
  </p>

  <p>
    <strong>📱 Số điện thoại:</strong>{" "}
    {typeof window !== "undefined"
      ? localStorage.getItem("userPhone")
      : ""}
  </p>
</div>
        </div>

        <div className="space-y-4">

          <Link
            href="/orders"
            className="
              block
              bg-white
              p-5
              rounded-2xl
              shadow
              font-semibold
            "
          >
            📦 Đơn hàng của tôi
          </Link>

          <Link
            href="/cart"
            className="
              block
              bg-white
              p-5
              rounded-2xl
              shadow
              font-semibold
            "
          >
            🛒 Giỏ hàng
          </Link>

          <Link
            href="/returns"
            className="
              block
              bg-white
              p-5
              rounded-2xl
              shadow
              font-semibold
            "
          >
            🔄 Đổi trả & Hoàn tiền
          </Link>

          <Link
            href="/address"
            className="
              block
              bg-white
              p-5
              rounded-2xl
              shadow
              font-semibold
            "
          >
            📍 Địa chỉ giao hàng
          </Link>

          <Link
            href="/voucher"
            className="
              block
              bg-white
              p-5
              rounded-2xl
              shadow
              font-semibold
            "
          >
            🎁 Mã giảm giá
          </Link>

          <Link
            href="/support"
            className="
              block
              bg-white
              p-5
              rounded-2xl
              shadow
              font-semibold
            "
          >
            ☎️ Hỗ trợ khách hàng
          </Link>

        </div>

        <button
          onClick={() => {
            localStorage.removeItem("isLogin");
            localStorage.removeItem("userEmail");
            window.location.href = "/";
          }}
          className="
            w-full
            mt-8
            bg-red-500
            hover:bg-red-600
            text-white
            py-4
            rounded-2xl
            font-bold
            text-lg
          "
        >
          🚪 Đăng xuất
        </button>

      </div>

    </div>
  );
}