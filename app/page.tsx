import VideoGrid from "@/components/VideoGrid";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {[
          "All",
          "Music",
          "Gaming",
          "Mixes",
          "Podcasts",
          "News",
          "Live",
        ].map((c) => (
          <button
            key={c}
            className="px-4 py-1 rounded-full bg-neutral-800 text-sm whitespace-nowrap"
          >
            {c}
          </button>
        ))}
      </div>

      <VideoGrid />
    </div>
  );
}
