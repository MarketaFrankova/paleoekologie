import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Img from "gatsby-image";
import styled from "styled-components";

const Images = ({ imgs, titles }) => {
  const images = imgs.map((i, index) => (
    <React.Fragment key={index}>
      <Img key={index} fluid={i} alt={titles[index]} title={titles[index]} />
      {titles[index] && <p className="legend">{titles[index]}</p>}
    </React.Fragment>
  ));

  return (
    <SliderContainer>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        interval={7000}
      >
        {images}
      </Carousel>
    </SliderContainer>
  );
};

export default Images;

Images.propTypes = {
  imgs: PropTypes.array,
};

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;

  .control-arrow.control-next {
    z-index: 1;
  }
  p.legend {
    opacity: 0 !important;
    padding: 1px !important;
    bottom: 20px !important;
  }
  &:hover {
    p.legend {
      opacity: 0.75 !important;
    }
  }
`;
