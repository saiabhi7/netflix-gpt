import React, { useEffect, useState } from "react";
import HOME_VIDEO_DETAILS from "../utils/api-data-kalki.json";

const HomeVideoTrailer = () => {
  const [homeVideoYoutubeKey, setHomeVideoYoutubeKey] = useState();

  useEffect(() => {
    const filteredTeasers = HOME_VIDEO_DETAILS.results.filter(
      (info) => info.type === "Teaser"
    );
    setHomeVideoYoutubeKey(
      filteredTeasers?.length ? filteredTeasers[3].key : "t_E5zjFj6Ew"
    );
  }, []);

  return (
    <div className="w-screen m-0">
      <iframe
        className="md:relative w-screen h-screen aspect-video md:-z-10"
        src={
          "https://www.youtube.com/embed/" +
          homeVideoYoutubeKey +
          "?si=aDDw482f13EbqQS5?&autoplay=1&mute=1&controls=0&modestbranding=0&loop=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HomeVideoTrailer;
