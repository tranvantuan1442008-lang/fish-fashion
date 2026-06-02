"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    console.log(username);
console.log(password);
    if (
  username.trim() === "admin" &&
  password.trim() === "123456"
) {
      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      router.push("/admin/orders");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border p-8 rounded-xl shadow w-[400px] flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🔐 Admin Login
        </h1>

        <input
          type="text"
          placeholder="Tài khoản"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleLogin}
          className="
            w-full
            bg-blue-500
            text-white
            py-3
            rounded
          "
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}