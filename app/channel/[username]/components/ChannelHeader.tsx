export default function ChannelHeader({ username }: { username: string }) {
  return (
    <div className="flex items-center gap-6 mb-8">
      <div className="w-32 h-32 rounded-full bg-neutral-800 flex items-center justify-center text-4xl">
        {username.charAt(0).toUpperCase()}
      </div>

      <div>
        <h1 className="text-3xl font-bold">{username}</h1>
        <p className="text-neutral-400">@{username}</p>
        <p className="text-neutral-400 mt-1">
          This is your channel description
        </p>

        <div className="flex gap-3 mt-4">
          <button className="px-4 py-2 bg-neutral-800 rounded-full">
            Customize channel
          </button>
          <button className="px-4 py-2 bg-neutral-800 rounded-full">
            Manage videos
          </button>
        </div>
      </div>
    </div>
  );
}
