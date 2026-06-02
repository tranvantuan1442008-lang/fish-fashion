"use client";

import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState("");
const [showToast, setShowToast] = useState(false);
const [message, setMessage] = useState("");
const [products, setProducts] = useState<any[]>([]);

useEffect(() => {
  fetch("/api/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data.products || []);
    });
}, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <div className="max-w-7xl mx-auto p-8">
  <h1 className="text-5xl font-bold text-center text-sky-700 mb-12">
    🛍️ Sản phẩm FISH FASHION
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  
  {products.map((product) => (
    <div
      key={product._id}
      className="
  bg-white
  rounded-2xl
  shadow-md
  hover:shadow-2xl
  transition
  overflow-hidden
"
    >
      <img
        src={product.image}
        alt={product.name}
          className="w-full h-52 object-cover"
         />
    
      <div className="p-4">
        <h3 className="font-bold">
          {product.name}
        </h3>

        <p className="text-red-500 font-bold">
          {product.price.toLocaleString()}đ
        </p>

        <p className="text-gray-500">
          {product.category}
        </p>

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

            setMessage("🛒 Đã thêm vào giỏ hàng");
            setShowToast(true);

            setTimeout(() => {
              setShowToast(false);
            }, 2000);
          }}
          className="w-full mt-3 bg-sky-500 text-white py-2 rounded-lg"
        >
          🛒 Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  ))}
</div>
{showToast && (
  <div className="fixed top-5 right-5 bg-green-500 text-white px-5 py-3 rounded-xl shadow-xl z-50">
    {message}
  </div>
)}
      </div>
    </div>
  );
}