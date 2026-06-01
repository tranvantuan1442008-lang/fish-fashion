"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

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

        <select
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="w-full border p-3 rounded-lg"
        >
          <option value="">Chọn tỉnh</option>
          <option value="bacgiang">Bắc Giang</option>
          <option value="hanoi">Hà Nội</option>
        </select>

        {province && (
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Chọn huyện</option>
            <option value="yendung">Yên Dũng</option>
            <option value="langgiang">Lạng Giang</option>
          </select>
        )}

        {district && (
          <select
            value={ward}
            onChange={(e) => setWard(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Chọn xã</option>
            <option value="noihoang">Nội Hoàng</option>
            <option value="tienphong">Tiền Phong</option>
          </select>
        )}

        {ward && (
          <input
            type="text"
            placeholder="Số nhà / thôn / xóm"
            className="w-full border p-3 rounded-lg"
          />
        )}

        {ward && (
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
        )}

      </div>
    </div>
  );
}