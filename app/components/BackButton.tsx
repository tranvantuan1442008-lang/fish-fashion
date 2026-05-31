"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Ẩn ở trang chủ
  if (pathname === "/") {
    return null;
  }

  return (
    <button
      onClick={() => router.back()}
      className="
        fixed top-4 left-4
        z-50
        bg-white
        text-sky-600
        px-3 py-2
        rounded-full
        shadow-lg
        hover:bg-sky-100
      "
    >
      ←
    </button>
  );
}