import React from "react";
import styled from "styled-components";

const YoutubeVideo = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoContainer>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </VideoContainer>
);
export default YoutubeVideo;

export const VideoContainer = styled.div`
  margin: 30px auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 800px;
  &:after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
