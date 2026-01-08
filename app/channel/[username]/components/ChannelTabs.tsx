"use client";

import { useState } from "react";

const tabs = ["Home", "Playlists", "About"];

export default function ChannelTabs({
  onChange,
}: {
  onChange: (tab: string) => void;
}) {
  const [active, setActive] = useState("Home");

  const click = (tab: string) => {
    setActive(tab);
    onChange(tab);
  };

  return (
    <div className="flex gap-8 border-b border-neutral-800 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => click(tab)}
          className={`pb-3 ${
            active === tab
              ? "border-b-2 border-white text-white"
              : "text-neutral-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
