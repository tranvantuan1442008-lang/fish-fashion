"use client";

import Link from "next/link";

export default function Header() {
  return (
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
          <div className="flex gap-3">

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

          </div>

        </div>

      </div>
    </header>
  );
}