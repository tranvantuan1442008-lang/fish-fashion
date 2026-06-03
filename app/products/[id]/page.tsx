"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);

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
          </div>

        </div>
      </div>
    </div>
  );
}