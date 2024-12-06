import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchResultsCard from "./SearchResultsCard";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const SearchResults = () => {
  const [searchResultsVideos, setSearchResultsVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  dispatch(openMenu(true));

  const getSearchResults = async () => {
    const response = await fetch(
      YOUTUBE_SEARCH_API.replace(
        "search_query",
        searchParams.get("search_query")
      )
    );
    const json = await response.json();
    setSearchResultsVideos(json.items);
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="flex flex-col">
      {searchResultsVideos?.map((video) => (
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <SearchResultsCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
