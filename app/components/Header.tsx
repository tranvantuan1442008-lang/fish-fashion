"use client";

import Link from "next/link";
import {
  useEffect,
  useState,
  useRef,
} from "react";

export default function Header() {

  const [isLogin, setIsLogin] = useState(false);
const [userEmail, setUserEmail] = useState("");
const [showMenu, setShowMenu] = useState(false);
const menuRef =
  useRef<HTMLDivElement>(null);
const [cartCount, setCartCount] = useState(0);
useEffect(() => {
  const login =
    localStorage.getItem("isLogin");

  const email =
    localStorage.getItem("userEmail");

  if (login === "true") {
    setIsLogin(true);
    setUserEmail(email || "");
  }
}, []);
useEffect(() => {
  const updateCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const total = cart.reduce(
      (sum: number, item: any) =>
        sum + (item.quantity || 1),
      0
    );

    setCartCount(total);
  };

  updateCart();

  window.addEventListener(
    "cartUpdated",
    updateCart
  );

  return () => {
    window.removeEventListener(
      "cartUpdated",
      updateCart
    );
  };
}, []);
useEffect(() => {
  const handleClickOutside = (
    event: MouseEvent
  ) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(
        event.target as Node
      )
    ) {
      setShowMenu(false);
    }
  };

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);
  return (
  <>
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 text-white overflow-hidden">
      <div className="animate-marquee whitespace-nowrap py-2 font-bold text-sm md:text-base">
        🔥 SALE UP TO 30% • 🚚 FREESHIP TOÀN QUỐC • 🎁 MUA 2 TẶNG 1 • 💎 HÀNG CHÍNH HÃNG • ⭐ ĐỔI TRẢ 7 NGÀY
      </div>
    </div>

    <header className="bg-sky-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="
              text-white
              text-3xl
              font-extrabold
            "
          >
            FISH
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex gap-8">

            <Link
              href="/products"
              className="text-white font-semibold hover:text-sky-200"
            >
              Sản phẩm
            </Link>

            <Link
              href="/contact"
              className="text-white font-semibold hover:text-sky-200"
            >
              Liên hệ
            </Link>

            <Link
              href="/cart"
              className="text-white font-semibold hover:text-sky-200"
            >
              Giỏ hàng
            </Link>

          </nav>

          {/* Actions */}
<div className="flex gap-3 items-center">

  <div className="relative">

  <Link
    href="/cart"
    className="
      bg-white
      text-sky-600
      px-4
      py-2
      rounded-xl
      font-bold
    "
  >
    🛒
  </Link>

  {cartCount > 0 && (
    <span
      className="
        absolute
        -top-2
        -right-2
        bg-red-500
        text-white
        text-xs
        w-6
        h-6
        rounded-full
        flex
        items-center
        justify-center
        font-bold
      "
    >
      {cartCount}
    </span>
  )}

</div>

  {!isLogin ? (
    <>
      <Link
        href="/login"
        className="text-white font-semibold"
      >
        Đăng nhập
      </Link>

      <Link
        href="/register"
        className="
          bg-white
          text-sky-600
          px-4
          py-2
          rounded-xl
          font-bold
        "
      >
        Đăng ký
      </Link>
    </>
  ) : (
   <div
  className="relative"
  ref={menuRef}
>

  <button
    onClick={() =>
      setShowMenu(!showMenu)
    }
    className="
      bg-white
      text-sky-600
      w-12
      h-12
      rounded-full
      font-bold
      text-xl
    "
  >
    👤
  </button>

  {showMenu && (
    <div
      className="
        absolute
        right-0
        mt-2
        bg-white
        rounded-xl
        shadow-xl
        w-52
        overflow-hidden
      "
    >
      <div className="p-3 border-b text-sm">
  {localStorage.getItem("userName")}
</div>

      <Link
        href="/profile"
        className="
          block
          px-4
          py-3
          hover:bg-sky-50
        "
      >
        👤 Tài khoản
      </Link>

     
      <button
        onClick={() => {
          localStorage.removeItem("isLogin");
          localStorage.removeItem("userEmail");
          window.location.href = "/";
        }}
        className="
          w-full
          text-left
          px-4
          py-3
          text-red-500
          hover:bg-red-50
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

      </div>
    </header>
</>
);
}