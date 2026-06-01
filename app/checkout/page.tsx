"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

const [provinces, setProvinces] = useState<any[]>([]);
const [districts, setDistricts] = useState<any[]>([]);
const [wards, setWards] = useState<any[]>([]);

useEffect(() => {
  fetch("https://provinces.open-api.vn/api/?depth=3")
    .then((res) => res.json())
    .then((data) => {
      setProvinces(data);
    });
}, []);
const handleOrder = async () => {
  const cart = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  const res = await fetch(
    "/api/order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Khách hàng",
        phone: "0123456789",
        address: "Địa chỉ test",
        products: cart,
        total,
      }),
    }
  );

  const data = await res.json();

  if (data.success) {
    alert("🎉 Đặt hàng thành công");

    localStorage.removeItem("cart");

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  }
};
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
  onChange={(e) => {
    const code = e.target.value;

    setProvince(code);
    setDistrict("");
    setWard("");

    const selectedProvince = provinces.find(
      (p) => p.code.toString() === code
    );

    setDistricts(
      selectedProvince?.districts || []
    );

    setWards([]);
  }}
  className="w-full border p-3 rounded-lg"
>
  <option value="">
    Chọn tỉnh / thành phố
  </option>

  {provinces.map((p) => (
    <option
      key={p.code}
      value={p.code}
    >
      {p.name}
    </option>
  ))}
  </select>
{province && (
  <select
    value={district}
    onChange={(e) => {
      const code = e.target.value;

      setDistrict(code);
      setWard("");

      const selectedDistrict =
        districts.find(
          (d) => d.code.toString() === code
        );

      setWards(
        selectedDistrict?.wards || []
      );
    }}
    className="w-full border p-3 rounded-lg"
  >
    <option value="">
      Chọn quận / huyện
    </option>

    {districts.map((d) => (
      <option
        key={d.code}
        value={d.code}
      >
        {d.name}
      </option>
    ))}
  </select>
)}
        

        {district && (
  <select
    value={ward}
    onChange={(e) =>
      setWard(e.target.value)
    }
    className="w-full border p-3 rounded-lg"
  >
    <option value="">
      Chọn xã / phường
    </option>

    {wards.map((w) => (
      <option
        key={w.code}
        value={w.code}
      >
        {w.name}
      </option>
    ))}
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
  onClick={handleOrder}
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