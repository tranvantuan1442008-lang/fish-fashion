"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-5xl font-bold mb-10">
        🛠️ Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <Link
          href="/admin/orders"
          className="
            p-8
            bg-blue-500
            text-white
            rounded-2xl
            text-center
            text-2xl
            font-bold
            shadow-lg
          "
        >
          📦 Quản lý đơn hàng
        </Link>

        <Link
          href="/admin/products"
          className="
            p-8
            bg-green-500
            text-white
            rounded-2xl
            text-center
            text-2xl
            font-bold
            shadow-lg
          "
        >
          🛍️ Quản lý sản phẩm
        </Link>

      </div>

    </div>
  );
}