"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
const [showToast, setShowToast] =
  useState(false);

  useEffect(() => {
    if (!params?.id) return;

    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find(
          (p: any) =>
            String(p._id) === String(params.id)
        );

        console.log("PARAM:", params.id);
        console.log("FOUND:", found);

        setProduct(found || null);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params]);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Đang tải...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <div className="grid md:grid-cols-2 gap-10">

          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-3xl shadow-lg"
          />

          <div>
            <p className="text-sky-500 font-semibold">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {product.name}
            </h1>

            <p className="text-red-500 text-3xl font-bold mt-5">
              {product.price.toLocaleString()}đ
            </p>

            <p className="mt-6 text-gray-600">
              {product.description}
            </p>
            <div className="flex gap-4 mt-10">

  <button
    onClick={() => {
      const cart = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      cart.push({
        ...product,
        quantity: 1,
      });

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );

      window.dispatchEvent(
  new Event("cartUpdated")
);

setShowToast(true);

setTimeout(() => {
  setShowToast(false);
}, 2000);
    }}
    className="
      flex-1
      bg-sky-500
      hover:bg-sky-600
      text-white
      py-4
      rounded-2xl
      font-bold
    "
  >
    🛒 Thêm vào giỏ
  </button>

  <button
    className="
      flex-1
      bg-green-500
      hover:bg-green-600
      text-white
      py-4
      rounded-2xl
      font-bold
    "
  >
    ⚡ Mua ngay
  </button>

</div>
          </div>

        </div>

      {showToast && (
        <div
          className="
            fixed
            top-5
            right-5
            bg-green-500
            text-white
            px-5
            py-3
            rounded-xl
            shadow-xl
            z-50
          "
        >
          ✅ Đã thêm vào giỏ hàng
        </div>
      )}

    </div>
  </div>
);
}