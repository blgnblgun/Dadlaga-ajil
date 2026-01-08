type Props = {
  title: string;
  channel: string;
  views: string;
  time: string;
};

export default function VideoCard({
  title,
  channel,
  views,
  time,
}: Props) {
  return (
    <div className="cursor-pointer">
      <div className="w-full aspect-video bg-neutral-800 rounded-lg mb-3 flex items-center justify-center text-gray-500">
        Thumbnail
      </div>

      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full bg-neutral-700" />
        <div>
          <div className="font-semibold line-clamp-2">
            {title}
          </div>
          <div className="text-sm text-gray-400">
            {channel}
          </div>
          <div className="text-sm text-gray-400">
            {views} • {time}
          </div>
        </div>
      </div>
    </div>
  );
}
