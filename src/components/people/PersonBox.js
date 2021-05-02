import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { H2 } from "../atoms/Headings";
import Img from "gatsby-image";

const PersonBox = ({ personInfo, openDetail, img }) => {
  return (
    <>
      <Box onClick={() => openDetail(personInfo.id)}>
        <ImgWrapper>
          <CircleWrapper>
            <Circle>
              {img && (
                <Img
                  fluid={img.fluid}
                  alt={personInfo.id}
                  style={{ height: "100%", maxWidth: "100%" }}
                  imgStyle={{
                    objectFit: "cover",
                  }}
                />
              )}
            </Circle>
          </CircleWrapper>
        </ImgWrapper>

        <div>
          <H2 noTop>{personInfo.name}</H2>
          <Div>{personInfo.phoneNumber}</Div>
          <Div>{personInfo.email}</Div>
        </div>
      </Box>
    </>
  );
};

export default PersonBox;

PersonBox.propTypes = {
  personInfo: PropTypes.object,
  data: PropTypes.object,
};

const Box = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1em;
  max-width: 320px;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  @media (min-width: 576px) {
    text-align: left;
    max-width: 100%;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
  }

  @media (min-width: 1280px) {
    max-width: 600px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  height: 100%;
  padding-right: 10px;
  @media (min-width: 600px) {
    padding-right: 2em;
  }
`;

const CircleWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.black};
  height: 206px;
  width: 206px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    height: 176px;
    width: 176px;
  }
  @media (min-width: 1280px) {
    height: 206px;
    width: 206px;
  }
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  @media (min-width: 1024px) {
    height: 170px;
    width: 170px;
  }
  @media (min-width: 1280px) {
    height: 200px;
    width: 200px;
  }
`;

const Div = styled.div`
  color: ${(props) => props.theme.grey};
  font-size: 16px;
`;
