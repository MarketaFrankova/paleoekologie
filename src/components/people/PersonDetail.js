import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { H2 } from "../atoms/Headings";
import Img from "gatsby-image";
import Paragraph from "../atoms/Paragraph";
import ContainerWrapper from "../atoms/ContainerWrapper";
import Backlink from "../atoms/Backlink";

const PersonDetail = ({ personInfo, openDetail, img }) => {
  return (
    <>
      <ContainerWrapper>
        <Paragraph>
          <Back>
            <Backlink handleClick={() => openDetail(null)} />
          </Back>
          <PersonDetailWrapper>
            <ImageWrapper>
              {img && (
                <Img
                  fluid={img.fluid}
                  alt={personInfo.id}
                  style={{ width: "320px" }}
                  imgStyle={{ width: "320px", objectFit: "contain" }}
                />
              )}
            </ImageWrapper>
            <TextWrapper>
              <H2 noTop>{personInfo.nameWithTitle}</H2>
              <Div grey>{personInfo.phoneNumber}</Div>
              <Div grey>{personInfo.email}</Div>
              {personInfo.description && <Div>{personInfo.description}</Div>}
            </TextWrapper>
          </PersonDetailWrapper>
        </Paragraph>
      </ContainerWrapper>
    </>
  );
};

export default PersonDetail;

PersonDetail.propTypes = {
  personInfo: PropTypes.object,
  openDetail: PropTypes.func,
};

const PersonDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1em;

  @media (min-width: 920px) {
    text-align: left;
    max-width: 100%;
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 920px) {
    width: 320px;
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 2em;
    margin-top: 15px;
  }
`;

const TextWrapper = styled.div`
  margin-top: 15px;
  @media (min-width: 920px) {
    margin-top: 0;
  }
`;

const Div = styled.div`
  color: ${(props) => (props.grey ? props.theme.grey : props.theme.black)};
`;

const Back = styled.div`
  display: flex;
  justify-content: flex-end;
`;
