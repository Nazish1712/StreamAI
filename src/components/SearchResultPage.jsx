import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";

const SearchResultPage = () => {
  // 1. Get search query from URL (e.g., ?search_query=react)
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  // 2. States for video list and loading indicator
  const [searchedVideos, setSearchedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 3. Fetch data whenever the query in the URL changes
  useEffect(() => {
    if (searchQuery) {
      getSearchResults();
    }
  }, [searchQuery]);

  const getSearchResults = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      setSearchedVideos(data.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
    setIsLoading(false);
  };

  // 4. Loading state screen
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 font-medium">
        Searching for "{searchQuery}"...
      </div>
    );
  }

  // 5. Render list of searched videos
  return (
    <div className="flex flex-col gap-4 p-4 max-w-5xl mx-auto w-full font-lato">
      {searchedVideos.map((video) => {
        const videoId = video.id.videoId;
        const snippet = video.snippet;

        return (
          <Link
            to={`/watch?v=${videoId}`}
            key={videoId}
            className="flex flex-col sm:flex-row gap-4 p-2 rounded-2xl hover:bg-gray-100 cursor-pointer transition-colors"
          >
            {/* Thumbnail */}
            <div className="w-full sm:w-80 aspect-video rounded-xl overflow-hidden shrink-0 bg-gray-200">
              <img
                src={snippet.thumbnails?.medium?.url}
                alt={snippet.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video Info */}
            <div className="flex flex-col gap-1">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
                {snippet.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                {snippet.channelTitle}
              </p>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                {snippet.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResultPage;