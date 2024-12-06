import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  return (
    <div className="w-64 h-[247px] p-2 m-5 shadow-lg rounded-md ">
      <img
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-md"
      ></img>
      <p
        className="font-bold text-ellipsis overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {snippet.title}
      </p>
      <p>{snippet.channelTitle}</p>
      <p>{statistics.viewCount}</p>
    </div>
  );
};

export default VideoCard;
