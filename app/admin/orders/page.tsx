"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/order")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        📦 Quản lý đơn hàng
      </h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border rounded-xl p-5 shadow"
          >
            <h2 className="font-bold text-xl">
              {order.name}
            </h2>

            <p>📞 {order.phone}</p>

            <p>📍 {order.address}</p>

            <p>
              💰 {order.total?.toLocaleString()}đ
            </p>
            <p
  className={
    order.status === "Hoàn thành"
      ? "text-green-500 font-bold"
      : order.status === "Đang giao"
      ? "text-blue-500 font-bold"
      : order.status === "Đã hủy"
      ? "text-red-500 font-bold"
      : "text-orange-500 font-bold"
  }
>
  📌 {order.status || "Chờ xác nhận"}
</p>
<div className="flex gap-2 mt-3">

  <button
    onClick={async () => {
      await fetch("/api/order", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: order._id,
          status: "Đang giao",
        }),
      });

      location.reload();
    }}
    className="
      bg-blue-500
      text-white
      px-3
      py-1
      rounded
    "
  >
    🚚 Đang giao
  </button>

  <button
    onClick={async () => {
      await fetch("/api/order", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: order._id,
          status: "Hoàn thành",
        }),
      });

      location.reload();
    }}
    className="
      bg-green-500
      text-white
      px-3
      py-1
      rounded
    "
  >
    ✅ Hoàn thành
  </button>

  <button
    onClick={async () => {
      await fetch("/api/order", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: order._id,
          status: "Đã hủy",
        }),
      });

      location.reload();
    }}
    className="
      bg-red-500
      text-white
      px-3
      py-1
      rounded
    "
  >
    ❌ Hủy
  </button>

</div>
<div className="mt-3">
  <p className="font-bold mb-2">
    Sản phẩm:
  </p>

  {order.products?.map(
    (item: any, index: number) => (
      <div
        key={index}
        className="flex items-center gap-3 mb-3"
      >
        <img
          src={item.image}
          alt={item.name}
          className="
            w-16
            h-16
            object-cover
            rounded-lg
            border
          "
        />

        <div>
          <p className="font-medium">
            {item.name}
          </p>

          <p>
            SL: {item.quantity || 1}
          </p>

          <p className="text-green-600 font-bold">
            {item.price?.toLocaleString()}đ
          </p>
        </div>
      </div>
    )
  )}
</div>
            <p className="text-gray-500">
              {new Date(
                order.createdAt
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}