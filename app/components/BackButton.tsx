"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="fixed top-32 left-4 z-50 flex flex-col gap-3">

      {/* Về trang chủ */}
      <button
        onClick={() => router.push("/")}
        className="
          bg-white
          text-sky-600
          px-3 py-2
          rounded-full
          shadow-lg
          hover:bg-sky-100
        "
      >
        🏠
      </button>

      {/* Quay lại */}
      <button
        onClick={() => router.back()}
        className="
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

    </div>
  );
}