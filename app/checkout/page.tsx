"use client";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        💳 Thanh toán
      </h1>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Họ và tên"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Số điện thoại"
          className="w-full border p-3 rounded-lg"
        />

        <select className="w-full border p-3 rounded-lg">
  <option>Chọn tỉnh</option>
  <option>Bắc Giang</option>
  <option>Hà Nội</option>
  <option>Hải Phòng</option>
  <option>Đà Nẵng</option>
  <option>TP Hồ Chí Minh</option>
</select>

<select className="w-full border p-3 rounded-lg">
  <option>Chọn huyện</option>
  <option>Yên Dũng</option>
  <option>Lạng Giang</option>
  <option>Việt Yên</option>
</select>

<select className="w-full border p-3 rounded-lg">
  <option>Chọn xã</option>
  <option>Nội Hoàng</option>
  <option>Tiền Phong</option>
  <option>Tân Liễu</option>
</select>

<input
  type="text"
  placeholder="Số nhà / thôn / xóm"
  className="w-full border p-3 rounded-lg"
/>

        <button
          className="
            bg-green-500
            text-white
            px-6
            py-3
            rounded-xl
            font-bold
          "
        >
          Xác nhận đặt hàng
        </button>

      </div>
    </div>
  );
}