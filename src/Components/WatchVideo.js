import React, { useState, useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();

  const [video, setVideo] = useState({});

  const getData = async () => {
    const response = await fetch(
      YOUTUBE_VIDEO_DETAILS_API.replace("VIDEO_ID", searchParams.get("v"))
    );
    const jsonData = await response?.json();
    setVideo(jsonData?.items[0]);
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [searchParams]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });

  if (!video) return <div>Loading...</div>;
  return (
    <div className="px-5 m-5 w-full">
      <div className="flex w-full">
        <div>
          <iframe
            width="1050"
            height="500"
            style={{ borderRadius: "15px" }}
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="mt-3 mx-3 p-2 font-sans">
            <p
              className="font-bold text-2xl text-wrap"
              style={{ maxWidth: "1000px" }}
            >
              {video.snippet?.title}
            </p>
            <p className="font-bold text-lg mt-2">
              {video.snippet?.channelTitle}
            </p>
          </div>
        </div>
        <div className="mx-2 p-2 border border-black rounded-lg h-[500px] overflow-y-scroll w-full shadow-lg bg-gray-100  flex flex-col-reverse">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchVideo;
