"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <button
        onClick={() => router.back()}
        className="fixed top-4 left-4 text-3xl font-bold text-sky-600 hover:text-sky-800"
      >
        ←
      </button>

      <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl border border-sky-100">
          <h1 className="text-3xl font-bold text-center text-sky-600 mb-2">
            FISH FASHION
          </h1>
<p className="text-center text-sky-500 font-medium mt-2">
  Fashion For Everyone
</p>
          <p className="text-center text-gray-500 mb-8">
            Đăng nhập để mua sắm
          </p>

          <form className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Mật khẩu
              </label>

              <input
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <button
              type="button"
              className="
w-full
bg-sky-500
hover:bg-sky-600
text-white
py-3
rounded-xl
font-bold
transition
shadow-lg
"
              onClick={async () => {
                const res = await fetch("/api/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email,
                    password,
                  }),
                });

                const data = await res.json();
console.log(data);
                setMessage(data.message);

                if (data.success) {
  localStorage.setItem("isLogin", "true");
localStorage.setItem("userEmail", email);

if (data.user?.name) {
  localStorage.setItem(
    "userName",
    data.user.name
  );
  localStorage.setItem(
  "userPhone",
  data.user.phone
);
}

  window.location.href = "/";
}
              }}
            >
              Đăng nhập
            </button>

            {message && (
              <p className="text-center mt-3 text-red-500">
                {message}
              </p>
            )}
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-500">
              Chưa có tài khoản?
            </p>

            <a
              href="/register"
              className="text-sky-600 font-bold"
            >
              Đăng ký ngay
            </a>
          </div>

          <div className="text-center mt-4">
            <a
              href="/forgot-password"
              className="text-sky-600 hover:text-sky-800"
            >
              Lấy lại mật khẩu
            </a>
          </div>
        </div>
      </div>
    </>
  );
}