import React from "react";
import Video from "./Video/Video";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="/Videos/video.mp4"
          channel="mans"
          description="WOW Epic TikTok Clone"
          song="99 problems but React aint one"
          likes={100}
          shares={222}
          messages={333}
        />
        <Video
          url="/Videos/video.mp4"
          channel="mans"
          description="WOW Epic TikTok Clone"
          song="99 problems but React aint one"
          likes={100}
          shares={222}
          messages={333}
        />
        <Video
          url="/Videos/video.mp4"
          channel="mans"
          description="WOW Epic TikTok Clone"
          song="99 problems but React aint one"
          likes={100}
          shares={222}
          messages={333}
        />
      </div>
    </div>
  );
}

export default App;
