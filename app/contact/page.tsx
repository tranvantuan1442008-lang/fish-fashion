
export default function ContactPage() {
  return (
    <>
    

      <div className="min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-sky-600 mb-6">
          Liên hệ FISH FASHION
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Nội dung liên hệ"
            className="w-full border p-3 rounded-lg h-32"
          />

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-3 rounded-lg"
          >
            Gửi liên hệ
          </button>
        </form>
  <div className="mt-6 flex justify-center gap-4">

  <a
    href="https://www.facebook.com/share/1ELUvwXrwP/?mibextid=wwXIfr"
    target="_blank"
    className="w-16 h-16 flex items-center justify-center hover:scale-110 transition"
  >
    <img
      src="/facebook.png"
      alt="Facebook"
      className="w-12 h-12 rounded-full object-cover"
    />
  </a>

  <a
    href="https://www.instagram.com/shopfish.789?igsh=Nm8zcGoyMnR2dzg2&utm_source=qr"
    target="_blank"
    className="w-16 h-16 flex items-center justify-center hover:scale-110 transition"
  >
    <img
      src="/instagram.png"
      alt="Instagram"
      className="w-12 h-12 rounded-full object-cover"
    />
  </a>

  <a
    href="https://zalo.me/84964650114"
    target="_blank"
    className="w-16 h-16 flex items-center justify-center hover:scale-110 transition"
  >
    <img
      src="/zalo.png"
      alt="Zalo"
      className="w-12 h-12 rounded-full object-cover"
    />
  </a>


</div>

        </div>
      </div>
    </>
  );
}