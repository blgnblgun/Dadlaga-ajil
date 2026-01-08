type VideoCardProps = {
  videoId: string;
  title: string;
  channel: string;
  views: string;
  time: string;
};

export default function VideoCard({
  videoId,
  title,
  channel,
  views,
  time,
}: VideoCardProps) {
  return (
    <div className="space-y-2">
      <div className="aspect-video w-full rounded-xl overflow-hidden bg-neutral-800">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full bg-neutral-700" />

        <div>
          <h3 className="font-semibold text-sm line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-neutral-400">
            {channel}
          </p>
          <p className="text-xs text-neutral-400">
            {views} • {time}
          </p>
        </div>
      </div>
    </div>
  );
}
