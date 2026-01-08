export default function ChannelPlaylists() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {["Liked videos", "Watch later", "My playlist"].map(
        (name, i) => (
          <div key={i}>
            <div className="h-40 bg-neutral-800 rounded-lg mb-2" />
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-neutral-400">
              Playlist
            </p>
          </div>
        )
      )}
    </div>
  );
}
