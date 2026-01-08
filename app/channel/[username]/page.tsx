export default async function ChannelPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-neutral-700 flex items-center justify-center text-2xl">
          {username.charAt(0).toUpperCase()}
        </div>

        <div>
          <h1 className="text-2xl font-bold">{username}</h1>
          <p className="text-neutral-400">@{username}</p>
        </div>
      </div>

      <div className="flex gap-6 border-b border-neutral-700 mb-4">
        <button className="pb-2 border-b-2 border-white">
          Home
        </button>
        <button className="pb-2 text-neutral-400">
          Videos
        </button>
        <button className="pb-2 text-neutral-400">
          About
        </button>
      </div>

      <p className="text-neutral-400">
        This is channel page content
      </p>
    </div>
  );
}
