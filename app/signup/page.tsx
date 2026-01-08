"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username, // 🔥 ШИНЭ
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Signup failed");
      return;
    }

    router.push("/signin");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-neutral-900 p-6 rounded w-80">
        <h1 className="text-lg mb-4">Sign up</h1>

        <input
          placeholder="Username"
          className="w-full mb-2 p-2 bg-neutral-800"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full mb-2 p-2 bg-neutral-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 bg-neutral-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <div className="text-red-500 text-sm mb-2">
            {error}
          </div>
        )}

        <button
          onClick={submit}
          className="w-full bg-red-600 py-2"
        >
          Create account
        </button>
      </div>
    </div>
  );
}
