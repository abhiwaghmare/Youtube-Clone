import React from "react";

const SearchResultsCard = ({ video }) => {
  return (
    <div>
      <div key={video.id.videoId} className="p-2 m-2 shadow-lg rounded-lg flex">
        <img
          className="w-96 p-2 rounded-lg"
          alt="thumbnail"
          src={video?.snippet?.thumbnails?.high?.url}
        ></img>
        <div className="px-5">
          <h1
            className="text-xl font-sans font-bold text-ellipsis overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {video?.snippet?.title}
          </h1>
          <p className="font-bold">{video?.snippet?.channelTitle}</p>
          <p>{video?.snippet?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
