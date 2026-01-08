export default function ChannelHome() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Favorites
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-neutral-800 rounded-lg h-40 flex items-center justify-center text-neutral-400"
            >
              Favorite video
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Saved
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-neutral-800 rounded-lg h-40 flex items-center justify-center text-neutral-400"
            >
              Saved video
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
