import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { H2 } from "../atoms/Headings";
import researchgate from "../../images/social-researchgate.png";
import is from "../../images/social-is.png";
import personal from "../../images/personal.png";
import arrow from "../../icons/arrow.svg";

const PersonBox = ({ personInfo, data }) => {
  const [showDetail, setShowDetail] = useState(false);
  const hasDetail = !!personInfo.description;
  return (
    <>
      <Box>
        <ImgWrapper>
          {personInfo.img ? (
            <img src={personInfo.img} alt={personInfo.name} height="300px" />
          ) : (
            <div
              style={{ height: 300, width: 200, border: "1px solid black" }}
            ></div>
          )}
        </ImgWrapper>

        <BoxPart showDetail={showDetail}>
          <H2 noTop>{personInfo.name}</H2>

          {/*  <P>
              <i
                className="fa fa-envelope fa-lg"
                style={{ color: "black", marginRight: 15 }}
              />
              <span>{personInfo.email}</span>
            </P> */}
          {/*   {personInfo.phoneNumber && (
            <P>
              <i className="fa fa-phone fa-lg" style={{ marginRight: 15 }} />
              {personInfo.phoneNumber}
            </P>
          )} */}
          {/*  <P>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={personInfo.researchgate || "#"}
              >
                <img src={researchgate} alt="researchgate" height="40px" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={personInfo.is || "#"}
              >
                <img src={is} alt="is" height="40px" />
              </a>
              {personInfo.personal && (
                <a
                  style={{ marginLeft: 15 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={personInfo.personal || "#"}
                >
                  <img src={personal} alt="personal-website" height="40px" />
                </a>
              )}
            </P> */}

          {personInfo.description}

          {/*  {!showDetail && hasDetail && (
          <ArrowIcon src={arrow} onClick={() => setShowDetail(!showDetail)}>
            <i className="fa fa-arrow-down" />
            <ArrowText style={{ color: "red", cursor: "pointer" }}>
              
            </ArrowText>
          </ArrowIcon>
        )} */}
        </BoxPart>
      </Box>
      <ArrowWrapper onClick={() => setShowDetail(!showDetail)}>
        <ArrowIcon showDetail={showDetail} src={arrow} />
        {showDetail ? data.showLess : data.showMore}
      </ArrowWrapper>
    </>
  );
};

export default PersonBox;

PersonBox.propTypes = {
  personInfo: PropTypes.object,
  data: PropTypes.object,
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const BoxPart = styled.div`
  flex: 6;
  min-width: 260px;
  height: ${(props) => (props.showDetail ? "min-content" : "290px")};
  transition: transform 0.8s ease-out;
  overflow: ${(props) => !props.showDetail && "hidden"};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: ${(props) =>
      !props.showDetail &&
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))"};
    pointer-events: none;
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const ImgWrapper = styled.div`
  flex: 1;

  @media (min-width: 600px) {
    padding-right: 2em;
  }
`;

/* const P = styled.p`
  margin: 10px 0px;
`; */

const ArrowWrapper = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.grey};
  display: flex;
  justify-content: center;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.black};
  }
  @media (min-width: 600px) {
    padding-left: 285px;
  }
`;

const ArrowIcon = styled.img`
  width: 15px;
  margin-right: 8px;
  transform: ${(props) => props.showDetail && "rotate(180deg)"};
`;
