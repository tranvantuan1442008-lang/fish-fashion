"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <section
  className="
    min-h-[500px]
    md:h-[650px]
    bg-cover
    bg-center
    flex
    items-center
    justify-center
    px-4
  "
  style={{
    backgroundImage: "url('/fish-banner.png')",
  }}
>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
            FISH FASHION
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Thời trang nam và nữ hiện đại
          </p>

          <Link
  href="/products"
  className="
  mt-8
  inline-block
  bg-blue-600
  text-white
  px-6
  md:px-8
  py-3
  md:py-4
  rounded-full
  text-base
  md:text-xl
"
>
  Mua ngay
</Link>
        </div>
      </section>

    </main>
  );
}