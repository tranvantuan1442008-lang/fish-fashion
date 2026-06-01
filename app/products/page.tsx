"use client";

import { useState } from "react";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-5xl font-bold text-center text-sky-700 mb-12">
          🛍️ Sản phẩm FISH FASHION
        </h1>

        {/* Nam */}
        <h2 className="text-4xl font-bold text-sky-600 mb-6">
          👨 Thời trang Nam
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">

          <div
            onClick={() =>
              setSelectedProduct(
                selectedProduct === "ao-nam" ? "" : "ao-nam"
              )
            }
            className="relative border rounded-xl p-2 w-full bg-white shadow-md overflow-hidden cursor-pointer"
          >
            <img
              src="/nam1.jpg"
              alt="Áo thun nam"
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="font-bold mt-3">Áo thun nam</h3>
            <p className="text-red-500">199.000đ</p>

            {selectedProduct === "ao-nam" && (
              <div className="absolute inset-0 bg-black/70 text-white flex flex-col justify-end p-4">
                <h3 className="font-bold text-lg mb-2">
                  Áo thun nam
                </h3>

                <p className="text-sm mb-4">
                  Chất liệu cotton cao cấp, mềm mại và thoáng mát.
                </p>

                <button className="bg-sky-500 py-2 rounded-lg mb-2">
                  🛒 Thêm vào giỏ hàng
                </button>

                <button className="bg-red-500 py-2 rounded-lg">
                  ⚡ Mua ngay
                </button>
              </div>
            )}
          </div>

          <div
            onClick={() =>
              setSelectedProduct(
                selectedProduct === "quan-nam" ? "" : "quan-nam"
              )
            }
            className="relative border rounded-xl p-2 w-full bg-white shadow-md overflow-hidden cursor-pointer"
          >
            <img
              src="/nam2.jpg"
              alt="Quần jean nam"
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="font-bold mt-3">Quần jean nam</h3>
            <p className="text-red-500">299.000đ</p>

            {selectedProduct === "quan-nam" && (
              <div className="absolute inset-0 bg-black/70 text-white flex flex-col justify-end p-4">
                <h3 className="font-bold text-lg mb-2">
                  Quần jean nam
                </h3>

                <p className="text-sm mb-4">
                  Jean co giãn, form trẻ trung, dễ phối đồ.
                </p>

                <button className="bg-sky-500 py-2 rounded-lg mb-2">
                  🛒 Thêm vào giỏ hàng
                </button>

                <button className="bg-red-500 py-2 rounded-lg">
                  ⚡ Mua ngay
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Nữ */}
        {/* Nữ */}
<h2 className="text-4xl font-bold text-pink-600 mb-6">
  👩 Thời trang Nữ
</h2>

<div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          <div
            onClick={() =>
              setSelectedProduct(
                selectedProduct === "vay-nu" ? "" : "vay-nu"
              )
            }
            className="relative border rounded-xl p-2 w-full bg-white shadow-md overflow-hidden cursor-pointer"
          >
            <img
              src="/nu1.jpg"
              alt="Váy nữ"
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="font-bold mt-3">Váy nữ</h3>
            <p className="text-red-500">349.000đ</p>

            {selectedProduct === "vay-nu" && (
              <div className="absolute inset-0 bg-black/70 text-white flex flex-col justify-end p-4">
                <h3 className="font-bold text-lg mb-2">
                  Váy nữ
                </h3>

                <p className="text-sm mb-4">
                  Thiết kế nữ tính, phù hợp đi chơi và dự tiệc.
                </p>

                <button
  onClick={(e) => {
    e.stopPropagation();

    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    cart.push({
      name: "Áo thun nam",
      price: 199000,
    });

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Đã thêm vào giỏ hàng");
  }}
  className="bg-sky-500 py-2 rounded-lg mb-2"
>
  🛒 Thêm vào giỏ hàng
</button>

                <button className="bg-red-500 py-2 rounded-lg">
                  ⚡ Mua ngay
                </button>
              </div>
            )}
          </div>

          <div
            onClick={() =>
              setSelectedProduct(
                selectedProduct === "ao-nu" ? "" : "ao-nu"
              )
            }
            className="relative border rounded-xl p-2 w-full bg-white shadow-md overflow-hidden cursor-pointer"
          >
            <img
              src="/nu2.jpg"
              alt="Áo nữ"
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="font-bold mt-3">Áo nữ</h3>
            <p className="text-red-500">249.000đ</p>

            {selectedProduct === "ao-nu" && (
              <div className="absolute inset-0 bg-black/70 text-white flex flex-col justify-end p-4">
                <h3 className="font-bold text-lg mb-2">
                  Áo nữ
                </h3>

                <p className="text-sm mb-4">
                  Chất liệu mềm mại, kiểu dáng hiện đại.
                </p>

                <button className="bg-sky-500 py-2 rounded-lg mb-2">
                  🛒 Thêm vào giỏ hàng
                </button>

                <button className="bg-red-500 py-2 rounded-lg">
                  ⚡ Mua ngay
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}