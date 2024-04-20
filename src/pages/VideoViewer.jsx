import { useLocation } from "react-router-dom";

function VideoViewer() {
  const { state } = useLocation();

  return (
    <div>
      <h2>{state.title}</h2>
      <video src={state.videoSrc} controls="controls" autoPlay="true" />
    </div>
  );
}

export default VideoViewer;
