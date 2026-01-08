"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-neutral-900 p-6 rounded w-80">
        <h1 className="text-lg mb-4">Sign in</h1>

        <input
          placeholder="Email"
          className="w-full mb-2 p-2 bg-neutral-800"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 bg-neutral-800"
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
          Sign in
        </button>

        <p className="text-sm text-center mt-4 text-gray-400">
          No account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-blue-400 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
