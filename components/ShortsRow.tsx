export default function ShortsRow() {
  return (
    <div className="my-10">
      <h2 className="text-lg font-semibold mb-4">Shorts</h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="min-w-[160px] h-[280px] bg-neutral-800 rounded-lg flex items-center justify-center text-gray-500"
          >
            Short {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
