"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();

  const [product, setProduct] =
    useState<any>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const found =
          data.products.find(
            (p: any) =>
              p._id === params.id
          );

        setProduct(found);
      });
  }, []);

  if (!product) {
    return (
      <div className="p-10 text-center">
        Đang tải...
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-b
        from-sky-100
        to-white
        py-10
        px-4
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          bg-white
          rounded-3xl
          shadow-xl
          p-6
          md:p-10
        "
      >
        <div
          className="
            grid
            md:grid-cols-2
            gap-10
          "
        >
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full
              rounded-3xl
              object-cover
            "
          />

          <div>
            <h1
              className="
                text-3xl
                md:text-5xl
                font-bold
                text-sky-700
              "
            >
              {product.name}
            </h1>

            <p
              className="
                text-red-500
                text-3xl
                font-bold
                mt-5
              "
            >
              {product.price?.toLocaleString()}đ
            </p>

            <p
              className="
                mt-6
                text-gray-600
              "
            >
              {product.description}
            </p>

            <button
              onClick={() => {
                const cart =
                  JSON.parse(
                    localStorage.getItem(
                      "cart"
                    ) || "[]"
                  );

                cart.push({
                  ...product,
                  quantity: 1,
                });

                localStorage.setItem(
                  "cart",
                  JSON.stringify(cart)
                );

                alert(
                  "Đã thêm vào giỏ hàng"
                );
              }}
              className="
                mt-8
                bg-sky-500
                hover:bg-sky-600
                text-white
                px-8
                py-4
                rounded-2xl
                font-bold
              "
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}