"use client";

import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import ShortsRow from "@/components/ShortsRow";

type Video = {
  id: number;
  title: string;
  channel: string;
  views: string;
  time: string;
};

export default function VideoGrid() {
  const [videos, setVideos] = useState<Video[]>([]);

  const generateVideos = (startId: number) =>
    Array.from({ length: 12 }).map((_, i) => ({
      id: startId + i,
      title: ` Video ${startId + i}`,
      channel: "Channel Name",
      views: `${Math.floor(Math.random() * 100)}K views`,
      time: `${Math.floor(Math.random() * 10) + 1} days ago`,
    }));

  useEffect(() => {
    setVideos(generateVideos(1));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        setVideos((prev) => [
          ...prev,
          ...generateVideos(prev.length + 1),
        ]);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video, index) => (
        <div key={video.id} className="contents">
          {index !== 0 && index % 8 === 0 && (
            <div className="col-span-full">
              <ShortsRow />
            </div>
          )}

          <VideoCard
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
          />
        </div>
      ))}
    </div>
  );
}
