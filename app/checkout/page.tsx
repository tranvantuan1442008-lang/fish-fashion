"use client";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        💳 Thanh toán
      </h1>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Họ và tên"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Số điện thoại"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Địa chỉ giao hàng"
          className="w-full border p-3 rounded-lg"
        />

        <button
          className="
            bg-green-500
            text-white
            px-6
            py-3
            rounded-xl
            font-bold
          "
        >
          Xác nhận đặt hàng
        </button>

      </div>
    </div>
  );
}