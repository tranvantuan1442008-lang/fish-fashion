"use client";

import { useEffect, useState } from "react";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const loadProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();

    setProducts(data.products || []);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = async () => {
  if (!name || !price) {
    alert("Vui lòng nhập tên và giá");
    return;
  }

  await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price: Number(price),
      image,
      category,
      description,
    }),
  });

  setName("");
  setPrice("");
  setImage("");
  setCategory("");
  setDescription("");

  loadProducts();
};

const deleteProduct = async (
  id: string
) => {
  const ok = confirm(
    "Bạn có chắc muốn xóa sản phẩm này?"
  );

  if (!ok) return;

  await fetch("/api/products", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  loadProducts();
};

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        🛍️ Quản lý sản phẩm
      </h1>

      <div className="border p-5 rounded-xl mb-8">

        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="number"
          placeholder="Giá sản phẩm"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="text"
          placeholder="Link ảnh"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="text"
          placeholder="Danh mục"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-3 rounded mb-3"
        />

        <textarea
          placeholder="Mô tả sản phẩm"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full border p-3 rounded mb-3"
        />

        <button
          onClick={addProduct}
          className="
            bg-green-500
            text-white
            px-6
            py-3
            rounded-xl
            font-bold
          "
        >
          ➕ Thêm sản phẩm
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-5">

        {products.map((product: any) => (
          <div
            key={product._id}
            className="border rounded-xl p-4 shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="
                w-full
                h-52
                object-cover
                rounded-lg
              "
            />

            <h2 className="font-bold mt-3">
              {product.name}
            </h2>

            <p className="text-green-600 font-bold">
              {product.price?.toLocaleString()}đ
            </p>

            <p className="text-gray-500">
              {product.category}
            </p>
            <button
  onClick={() =>
    deleteProduct(product._id)
  }
  className="
    mt-3
    bg-red-500
    hover:bg-red-600
    text-white
    px-4
    py-2
    rounded-lg
    font-bold
  "
>
  🗑️ Xóa
</button>
          </div>
        ))}

      </div>

    </div>
  );
}