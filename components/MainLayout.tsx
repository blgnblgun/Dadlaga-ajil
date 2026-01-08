"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useUIStore } from "@/store/ui";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const open = useUIStore((s) => s.sidebarOpen);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex pt-14">
        <aside
          className={`
            fixed left-0 top-14 h-[calc(100vh-56px)]
            transition-all duration-300
            ${open ? "w-56" : "w-0 overflow-hidden"}
          `}
        >
          <Sidebar />
        </aside>

        <main
          className={`
            flex-1 px-6 transition-all duration-300
            ${open ? "ml-56" : "ml-0"}
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
