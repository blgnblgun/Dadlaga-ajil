"use client";

import { useUIStore } from "@/store/ui";
import AccountMenu from "./AccountMenu";

export default function Navbar() {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);

  return (
    <header className="fixed top-0 z-50 w-full h-14 bg-[#0f0f0f] flex items-center px-4">
      <button onClick={toggleSidebar} className="text-xl mr-4">
        ☰
      </button>
      <span className="font-bold mr-6">YouTube</span>
      <div className="flex flex-1 justify-center">
        <div className="flex w-[500px]">
          <input
            placeholder="Search"
            className="flex-1 px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-l-full"
          />
          <button className="px-4 bg-neutral-800 rounded-r-full">
            🔍︎
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button>🕭</button>
        <AccountMenu />
      </div>
    </header>
  );
}
