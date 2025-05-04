import React, { useEffect, useState } from "react";

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(" ");
  useEffect(() => {
    setTrackIndex("/music/1.mp3");
    console.log(trackIndex);
  }, []);

  return <audio src={trackIndex} autoPlay hidden />;
};

export default AudioPlayer;
