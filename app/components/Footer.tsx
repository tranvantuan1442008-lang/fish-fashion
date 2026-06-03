export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-600 to-sky-400 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-extrabold">
              🐟 FISH FASHION
            </h2>

            <p className="mt-4 text-sky-100">
              Thời trang hiện đại, trẻ trung và năng động.
            </p>
          </div>

          {/* Danh mục */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Danh mục
            </h3>

            <ul className="space-y-2 text-sky-100">
              <li>👕 Áo Nam</li>
              <li>👖 Quần Nam</li>
              <li>👗 Thời Trang Nữ</li>
              <li>👜 Phụ Kiện</li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Hỗ trợ
            </h3>

            <ul className="space-y-2 text-sky-100">
              <li>Đổi trả sản phẩm</li>
              <li>Chính sách bảo mật</li>
              <li>Hướng dẫn mua hàng</li>
              <li>Liên hệ hỗ trợ</li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Liên hệ
            </h3>

            <ul className="space-y-2 text-sky-100">
              <li>📞 0123 456 789</li>
              <li>📧 fishfashion@gmail.com</li>
              <li>📍 Hà Nội, Việt Nam</li>
            </ul>

            <div className="flex gap-4 mt-5 text-2xl">
              <span>📘</span>
              <span>🎵</span>
              <span>📸</span>
              <span>💬</span>
            </div>
          </div>

        </div>

        <hr className="my-8 border-sky-300" />

        <div className="text-center text-sky-100">
          © 2026 Fish Fashion. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}