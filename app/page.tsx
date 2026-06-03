"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  const popupShown =
    sessionStorage.getItem("popupShown");

  if (!popupShown) {
    setTimeout(() => {
      setShowPopup(true);
    }, 800);
  }
}, []);
useEffect(() => {
  fetch("/api/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data.products);
    });
}, []);
  return (
    <>
  {showPopup && (
    <div className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full relative">

        <button
          onClick={() => {
  setShowPopup(false);

  sessionStorage.setItem(
    "popupShown",
    "true"
  );
}}
          className="
            absolute
            top-3
            right-3
            bg-white
            w-10
            h-10
            rounded-full
            shadow
            text-xl
          "
        >
          ✕
        </button>

        <img
          src="/fish-banner.png"
          alt=""
          className="
            w-full
            h-56
            object-cover
          "
        />

        <div className="p-6 text-center">

          <h2 className="text-3xl font-extrabold text-red-500">
            🔥 SALE HÈ 2026
          </h2>

          <p className="mt-4 text-lg">
            Giảm giá đến 50%
          </p>

          <p>🚚 Freeship toàn quốc</p>

          <p>🎁 Mua 2 tặng 1</p>

          <button
  onClick={() => {
    sessionStorage.setItem(
      "popupShown",
      "true"
    );

    setShowPopup(false);
  }}
  className="
    bg-sky-500
    text-white
    px-8
    py-3
    rounded-full
    font-bold
  "
>
  Mua ngay
</button>

        </div>

      </div>

    </div>
  )}

    <main className="bg-white">

      {/* Hero */}
      <section
        className="
          relative
          h-[85vh]
          flex
          items-center
          justify-center
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url('/fish-banner.png')",
        }}
      >
        <div
          className="
            absolute
            inset-0
            bg-black/40
          "
        />

        <div className="relative z-10 text-center px-6">
          <h1
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              text-white
            "
          >
            FISH FASHION
          </h1>

          <p
            className="
              text-white
              text-lg
              md:text-2xl
              mt-5
            "
          >
            Thời trang hiện đại dành cho giới trẻ
          </p>


          <div className="mt-8 flex justify-center">
  <Link
    href="/products"
    className="
      bg-blue-500
      hover:bg-blue-600
      text-white
      px-10
      py-4
      rounded-full
      font-bold
      text-lg
    "
  >
    Mua ngay
  </Link>
</div>
        </div>
      </section>
{/* Featured Products */}
<section className="max-w-7xl mx-auto py-10 px-6">

  <h2 className="text-4xl font-bold text-center mb-12">
    🔥 Sản phẩm nổi bật
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {products.map((product) => (
  <Link
    href={`/products/${product._id}`}
    key={product._id}
        className="
          bg-white
          rounded-3xl
          shadow-md
          hover:shadow-xl
          transition
          overflow-hidden
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-64
            object-cover
          "
        />

        <div className="p-4">

          <h3 className="font-bold">
            {product.name}
          </h3>

          <p className="text-red-500 font-bold mt-2">
            {product.price?.toLocaleString()}đ
          </p>

        </div>
      </Link>
    ))}

  </div>

  <div className="text-center mt-10">
    <Link
      href="/products"
      className="
        bg-blue-600
        text-white
        px-8
        py-3
        rounded-full
        font-bold
      "
    >
      Xem tất cả sản phẩm
    </Link>
  </div>

</section>
      {/* Categories */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Danh mục nổi bật
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-gray-100 p-8 rounded-3xl text-center">
            👕
            <h3 className="mt-3 font-bold">
              Áo Nam
            </h3>
          </div>

          <div className="bg-gray-100 p-8 rounded-3xl text-center">
            👖
            <h3 className="mt-3 font-bold">
              Quần Nam
            </h3>
          </div>

          <div className="bg-gray-100 p-8 rounded-3xl text-center">
            👗
            <h3 className="mt-3 font-bold">
              Thời Trang Nữ
            </h3>
          </div>

          <div className="bg-gray-100 p-8 rounded-3xl text-center">
            👜
            <h3 className="mt-3 font-bold">
              Phụ Kiện
            </h3>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Tại sao chọn Fish Fashion?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="font-bold text-xl">
                🚚 Giao hàng nhanh
              </h3>

              <p className="mt-3 text-gray-600">
                Ship toàn quốc, hỗ trợ kiểm tra hàng.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="font-bold text-xl">
                💎 Chất lượng cao
              </h3>

              <p className="mt-3 text-gray-600">
                Cam kết đúng hình ảnh và mô tả.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="font-bold text-xl">
                🔄 Đổi trả dễ dàng
              </h3>

              <p className="mt-3 text-gray-600">
                Hỗ trợ đổi trả khi có lỗi sản phẩm.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
</>
);
}