const YOUTUBE_API_KEY = "AIzaSyD6LrVcgN4dLP2i6-KVDbelLxxlytbxwGE";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=search_query&type=video&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=VIDEO_ID&key=" + YOUTUBE_API_KEY;

