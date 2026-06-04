"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/order")
      .then((res) => res.json())
      .then((data) => {
        const userEmail =
  localStorage.getItem("userEmail");

const myOrders =
  (data.orders || []).filter(
    (order: any) =>
      order.email === userEmail
  );

setOrders(myOrders);
      });
  }, []);

  return (
    <div className="min-h-screen bg-sky-50 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          📦 Đơn hàng của tôi
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white p-6 rounded-2xl shadow">
            Chưa có đơn hàng nào
          </div>
        ) : (
          <div className="space-y-4">

            {orders.map((order) => (
              <div
                key={order._id}
                className="
                  bg-white
                  p-5
                  rounded-2xl
                  shadow
                "
              >
                <h2 className="font-bold">
                  Mã đơn:
                  {" "}
                  {order._id}
                </h2>

                <p className="mt-2">
                  👤 {order.name}
                </p>

                <p>
                  📱 {order.phone}
                </p>

                <p>
                  📍 {order.address}
                </p>

                <p className="mt-2">
                  💰 {order.total?.toLocaleString()}đ
                </p>

                <p
  className={`
    mt-2
    font-bold
    ${
      order.status === "🚚 Đang vận chuyển"
        ? "text-blue-500"
        : order.status === "✅ Hoàn thành"
        ? "text-green-500"
        : order.status === "❌ Đã hủy"
        ? "text-red-500"
        : "text-orange-500"
    }
  `}
>
  {order.status || "🟡 Chờ xác nhận"}
</p>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}