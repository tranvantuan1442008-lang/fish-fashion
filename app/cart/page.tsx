"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("cart");

    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  const removeItem = (index: number) => {
    const newCart = [...cart];

    newCart.splice(index, 1);

    setCart(newCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );
    window.dispatchEvent(
  new Event("cartUpdated")
);
  };
const increaseQuantity = (index: number) => {
  const newCart = [...cart];

  newCart[index].quantity =
    (newCart[index].quantity || 1) + 1;

  setCart(newCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(newCart)
  );
  window.dispatchEvent(
  new Event("cartUpdated")
);
};

const decreaseQuantity = (index: number) => {
  const newCart = [...cart];

  if ((newCart[index].quantity || 1) > 1) {
    newCart[index].quantity--;

    setCart(newCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );
    window.dispatchEvent(
  new Event("cartUpdated")
); 
  }
};
  const total = cart.reduce(
  (sum, item) =>
    sum + item.price * (item.quantity || 1),
  0
);

  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        🛒 Giỏ hàng của tôi
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">
          Chưa có sản phẩm nào trong giỏ hàng.
        </p>
      ) : (
        <>
          <div className="space-y-4">

            {cart.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-between
                  border
                  rounded-xl
                  p-4
                  shadow
                "
              >
                <div>
  <h2 className="font-bold">
    {item.name}
  </h2>

  <p className="text-red-500">
    {item.price.toLocaleString()}đ
  </p>

  <div className="flex items-center gap-3 mt-2">

    <button
      onClick={() =>
        decreaseQuantity(index)
      }
      className="
        bg-gray-300
        px-3
        rounded
      "
    >
      -
    </button>

    <span className="font-bold">
      {item.quantity || 1}
    </span>

    <button
      onClick={() =>
        increaseQuantity(index)
      }
      className="
        bg-gray-300
        px-3
        rounded
      "
    >
      +
    </button>

  </div>
</div>

                <button
                  onClick={() => removeItem(index)}
                  className="
                    bg-red-500
                    text-white
                    px-4
                    py-2
                    rounded-lg
                  "
                >
                  Xóa
                </button>
              </div>
            ))}

          </div>

          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">
              Tổng tiền:{" "}
              <span className="text-red-500">
                {total.toLocaleString()}đ
              </span>
            </h2>

            <Link
  href="/checkout"
  className="
    inline-block
    mt-4
    bg-green-500
    text-white
    px-6
    py-3
    rounded-xl
    font-bold
  "
>
  Thanh toán
</Link>
          </div>
        </>
      )}

    </div>
  );
}