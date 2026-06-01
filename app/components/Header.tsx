
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showProfile, setShowProfile] = useState(false);
const [cartCount, setCartCount] = useState(0); 

  useEffect(() => {
    const checkLogin = () => {
      const login = localStorage.getItem("isLogin");
      const email = localStorage.getItem("userEmail");
const cart = JSON.parse(
  localStorage.getItem("cart") || "[]"
);

setCartCount(cart.length);
      if (login === "true" && email) {
        setIsLogin(true);
        setUserEmail(email);
      } else {
        setIsLogin(false);
        setUserEmail("");
      }
    };

    checkLogin();

    window.addEventListener("focus", checkLogin);

    return () => {
      window.removeEventListener("focus", checkLogin);
    };
  }, []);

  return (
    <header className="border-b bg-sky-500 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 px-4 py-4">

        <h1 className="text-2xl md:text-3xl font-bold md:mr-10">
          🐟 FISH
        </h1>

        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link href="/">Nam</Link>
          <Link href="/">Nữ</Link>
          <Link href="/">Áo</Link>
          <Link href="/">Quần</Link>
          <Link href="/contact">Liên hệ</Link>
        </nav>

        <div className="flex items-center gap-3 md:ml-auto flex-wrap">

          <input
            type="text"
            placeholder="Tìm sản phẩm..."
            className="border rounded-lg px-3 py-2 text-black w-32 md:w-64"
          />

          <Link
  href="/cart"
  className="
    bg-white
    text-sky-600
    px-3
    py-2
    rounded-lg
    font-bold
  "
>
  🛒 {cartCount}
</Link>


          {!isLogin ? (
            <Link
              href="/login"
              className="border px-4 py-1 rounded-lg"
            >
              Đăng nhập
            </Link>
          ) : (
            <div className="relative">

              <div
                onClick={() => setShowProfile(!showProfile)}
                className="
                  w-10 h-10
                  rounded-full
                  bg-white
                  text-sky-600
                  flex
                  items-center
                  justify-center
                  font-bold
                  cursor-pointer
                "
              >
                {userEmail.charAt(0).toUpperCase()}
              </div>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-80 bg-white text-black rounded-xl shadow-xl p-4 z-50">

                  <p className="font-bold break-all mb-3">
                    {userEmail}
                  </p>

                  <hr className="my-2" />

                  <Link href="/profile" className="block py-2 hover:text-sky-600">
                    👤 Thông tin cá nhân
                  </Link>

                  <Link href="/address" className="block py-2 hover:text-sky-600">
                    📍 Địa chỉ
                  </Link>

                  <Link href="/payment" className="block py-2 hover:text-sky-600">
                    💳 Thông tin thanh toán
                  </Link>

                  <Link href="/security" className="block py-2 hover:text-sky-600">
                    🔒 Thiết lập bảo mật
                  </Link>

                  <Link href="/reviews" className="block py-2 hover:text-sky-600">
                    ⭐ Đánh giá sản phẩm
                  </Link>

                  <Link href="/notifications" className="block py-2 hover:text-sky-600">
                    🔔 Thông báo của tôi
                  </Link>

                  <Link href="/orders" className="block py-2 hover:text-sky-600">
                    📦 Quản lý đơn hàng
                  </Link>
<Link href="/cart" className="block py-2 hover:text-sky-600">
  🛒 Giỏ hàng của tôi
</Link>
                  <Link href="/returns" className="block py-2 hover:text-sky-600">
                    🔄 Quản lý đổi trả
                  </Link>

                  <Link href="/favorites" className="block py-2 hover:text-sky-600">
                    ❤️ Sản phẩm yêu thích
                  </Link>

                  <hr className="my-3" />

                  <button
                    onClick={() => {
                      localStorage.removeItem("isLogin");
                      localStorage.removeItem("userEmail");
                      location.href = "/";
                    }}
                    className="
                      w-full
                      border-2
                      border-red-500
                      text-red-500
                      font-bold
                      py-2
                      rounded-lg
                      hover:bg-red-500
                      hover:text-white
                    "
                  >
                    🚪 Đăng xuất
                  </button>

                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </header>
  );
}