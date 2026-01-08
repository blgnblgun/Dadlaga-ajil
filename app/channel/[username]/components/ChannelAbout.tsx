export default function ChannelAbout({ username }: { username: string }) {
  return (
    <div className="max-w-xl text-neutral-300">
      <p>
        This is the about section for {username}.
      </p>
      <p className="mt-4 text-sm text-neutral-500">
        Joined 2025
      </p>
    </div>
  );
}
