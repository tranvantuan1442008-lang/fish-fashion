"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {

  const params = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("ID URL:", params.id);
console.log("Products:", data.products);

const found = data.products.find(
  (p: any) => String(p._id) === String(params.id)
);

console.log("Found:", found);

setProduct(found);
      });
  }, [params.id]);

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

          {/* Ảnh */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="
                w-full
                rounded-3xl
                object-cover
                shadow-lg
              "
            />
          </div>

          {/* Thông tin */}
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

            <div className="mt-6">
              <h3 className="font-bold text-lg">
                Mô tả sản phẩm
              </h3>

              <p className="text-gray-600 mt-2">
                {product.description}
              </p>
            </div>

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

                  alert("Đã thêm vào giỏ hàng");
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

      </div>

    </div>
  );
}