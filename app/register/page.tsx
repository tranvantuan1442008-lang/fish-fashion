"use client";

import { useState } from "react";

export default function RegisterPage() {

    const [message, setMessage] = useState("");
const [success, setSuccess] = useState(false);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-sky-600 mb-6">
          Đăng ký tài khoản
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Tạo tài khoản FISH FASHION
        </p>

        <form className="space-y-4">

          <input
           type="text"
           placeholder="Họ và tên"
           value={name}
           onChange={(e) => setName(e.target.value)}
           className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
           type="password"
           placeholder="Mật khẩu"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className="w-full border p-3 rounded-lg"
          />

          <input
           type="password"
           placeholder="Nhập lại mật khẩu"
           value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
           className="w-full border p-3 rounded-lg"
          />
          <button
  type="button"
  onClick={async () => {
  if (password !== confirmPassword) {
    setSuccess(false);
    setMessage("❌ Mật khẩu không khớp");

    setTimeout(() => {
      setMessage("");
    }, 2000);

    return;
  }

  const res = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      password,
    }),
  });

  const data = await res.json();

  setSuccess(data.success);
  setMessage(data.message);

  setTimeout(() => {
    setMessage("");
  }, 2000);
}}
  className="w-full bg-sky-600 text-white py-3 rounded-lg"
>
  Đăng ký
</button>

{message && (
  <div
    className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    px-5 py-2 rounded-lg shadow-md text-base font-medium z-50
    ${
      success
        ? "bg-green-100 text-green-700 border border-green-300"
        : "bg-red-100 text-red-700 border border-red-300"
    }`}
  >
    {message}
  </div>
)}
</form>

<p className="text-center mt-4">
  Đã có tài khoản?
</p>

<a
  href="/login"
  className="block text-center text-sky-600 font-bold mt-2"
>
  Đăng nhập
</a>

</div>
</main>
);
}