"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AccountMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const loggedIn = true;
  const username = "bilguun";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSignOut = async () => {
    await fetch("/api/auth/signout", {
      method: "POST",
    });

    router.push("/signin");
  };

  return (
    <div className="relative flex items-center gap-3" ref={ref}>
      <button onClick={() => setOpen(!open)} className="text-xl px-2">
        ⋮
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-full bg-neutral-600 flex items-center justify-center text-sm"
      >
        {username[0].toUpperCase()}
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-56 bg-[#282828] rounded-lg shadow-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-neutral-700">
            <p className="font-semibold">{username}</p>
            <p className="text-sm text-neutral-400">@{username}</p>
          </div>

          <button
            onClick={() => router.push(`/channel/${username}`)}
            className="w-full px-4 py-3 text-left hover:bg-neutral-700"
          >
            Your channel
          </button>

          <button
            onClick={handleSignOut}
            className="w-full px-4 py-3 text-left hover:bg-neutral-700"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
