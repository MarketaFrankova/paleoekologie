import React from "react";
import styled from "styled-components";

const YoutubeVideo = ({ videoSrcURL, videoTitle, centered, ...props }) => (
  <VideoContainer centered>
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
  margin: ${(props) => (props.centered ? "0 auto" : " 5px 0 20px")};
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 500px;

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
