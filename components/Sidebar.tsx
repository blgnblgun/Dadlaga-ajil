"use client";

import { useUIStore } from "@/store/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const open = useUIStore((s) => s.sidebarOpen);
  const pathname = usePathname();

  const [showYouMore, setShowYouMore] = useState(false);
  const [showExploreMore, setShowExploreMore] = useState(false);

  const itemClass = (active?: boolean) =>
    `flex items-center gap-3 px-3 py-2 rounded cursor-pointer text-sm
     ${active ? "bg-neutral-700" : "hover:bg-neutral-700"}`;

  const sectionTitle = (title: string) => (
    <p className="px-3 pt-4 pb-1 text-xs text-neutral-400 uppercase">
      {title}
    </p>
  );

  return (
    <aside
      className={`
        fixed top-14 left-0 h-[calc(100vh-56px)]
        bg-[#181818] z-40 overflow-y-auto
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0 w-56" : "-translate-x-56 w-56"}
      `}
    >
      <div className="p-2 space-y-1">

        <Link href="/" className={itemClass(pathname === "/")}>
          🏠︎ Home
        </Link>

        <Link href="/subscriptions" className={itemClass()}>
          📺 Subscriptions
        </Link>

        <Link href="/library" className={itemClass()}>
          🕮 Library
        </Link>

        <hr className="border-neutral-700 my-2" />

        {sectionTitle("You")}

        <Link href="/history" className={itemClass()}>
          ⏱ History
        </Link>

        <Link href="/playlists" className={itemClass()}>
          📃 Playlists
        </Link>

        <Link href="/watch-later" className={itemClass()}>
          ⏱ Watch later
        </Link>

        <Link href="/liked" className={itemClass()}>
          👍 Liked videos
        </Link>

        <Link href="/your-videos" className={itemClass()}>
          [ ▶︎ ] Your videos
        </Link>

        <button
          onClick={() => setShowYouMore(!showYouMore)}
          className={itemClass()}
        >
          ⬇ Show more
        </button>

        {showYouMore && (
          <>
            <Link href="/downloads" className={itemClass()}>
              ⬇ Downloads
            </Link>
            <Link href="/clips" className={itemClass()}>
              ✂ Clips
            </Link>
          </>
        )}

        <hr className="border-neutral-700 my-2" />

        {sectionTitle("Explore")}

        <Link href="/music" className={itemClass()}>
          ♫ Music
        </Link>

        <Link href="/live" className={itemClass()}>
          LIVE🔴 Live
        </Link>

        <Link href="/gaming" className={itemClass()}>
          🎮 Gaming
        </Link>

        <button
          onClick={() => setShowExploreMore(!showExploreMore)}
          className={itemClass()}
        >
          ⬇ Show more
        </button>

        {showExploreMore && (
          <>
            <Link href="/news" className={itemClass()}>
              📰 News
            </Link>
            <Link href="/sports" className={itemClass()}>
              🏀 Sports
            </Link>
          </>
        )}

        <hr className="border-neutral-700 my-2" />

        {sectionTitle("More from YouTube")}

        <Link href="/studio" className={itemClass()}>
          🔴 YouTube Studio
        </Link>

        <Link href="/kids" className={itemClass()}>
          🧒 YouTube Kids
        </Link>

        <hr className="border-neutral-700 my-2" />

        <Link href="/settings" className={itemClass()}>
          ⚙ Settings
        </Link>

        <Link href="/report" className={itemClass()}>
          🚩 Report history
        </Link>

        <Link href="/help" className={itemClass()}>
          ❓ Help
        </Link>

        <Link href="/feedback" className={itemClass()}>
          💬 Send feedback
        </Link>
      </div>
    </aside>
  );
}
