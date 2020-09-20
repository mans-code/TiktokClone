import React, { useRef, useState } from "react";

import ViderSidebar from "../VideoSidebar/VideoSidebar";
import VideoFooter from "../VideoFooter/VideoFooter";
import "./Video.css";

function Video({url, channel, description, song, messages, shares, likes}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={handleVideoPress}
        className="video__player"
        loop
      >
        <source src={url} type="video/mp4" />
      </video>

      <VideoFooter
        channel={shares}
        description={description}
        song={song}
      />
      <ViderSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
