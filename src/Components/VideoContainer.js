import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { openMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getData = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await response?.json();
    setVideos(jsonData?.items);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
    getData();
  }, [dispatch]);

  return (
    <div className="flex p-2 flex-wrap justify-start">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
