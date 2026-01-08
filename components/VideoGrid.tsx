import VideoCard from "./VideoCard";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Video 1",
    channel: "Channel Name",
    views: "24K views",
    time: "9 days ago",
  },
  {
    id: "9bZkp7q19f0",
    title: "Video 2",
    channel: "Channel Name",
    views: "73K views",
    time: "6 days ago",
  },
  {
    id: "3tmd-ClpJxA",
    title: "Video 3",
    channel: "Channel Name",
    views: "68K views",
    time: "2 days ago",
  },
];

export default function VideoGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
      "
    >
      {videos.map((v) => (
        <VideoCard
          key={v.id}
          videoId={v.id}
          title={v.title}
          channel={v.channel}
          views={v.views}
          time={v.time}
        />
      ))}
    </div>
  );
}
