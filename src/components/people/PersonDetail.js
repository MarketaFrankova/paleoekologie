import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { H2 } from "../atoms/Headings";
import Img from "gatsby-image";
import Paragraph from "../atoms/Paragraph";
import ContainerWrapper from "../atoms/ContainerWrapper";

const PersonDetail = ({ personInfo, openDetail, img }) => {
  return (
    <>
      <ContainerWrapper>
        <Paragraph>
          <Back>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openDetail(null)}
            >
              X
            </span>
          </Back>
          <PersonWrapper>
            <ImgWrapper>
              {img && (
                <Img
                  fluid={img.fluid}
                  alt={personInfo.id}
                  /*         style={{ height: "100%", maxWidth: "100%" }}
                imgStyle={{
                  objectFit: "cover",
                }} */
                />
              )}
            </ImgWrapper>
            <div>
              <H2 noTop>{personInfo.name}</H2>
              <Div>{personInfo.phoneNumber}</Div>
              <Div>{personInfo.email}</Div>
              {personInfo.description && <Div>{personInfo.description}</Div>}
              In progress
            </div>
          </PersonWrapper>
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

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1em;
  max-width: 320px;

  @media (min-width: 576px) {
    text-align: left;
    max-width: 500px;
    flex-direction: row;
  }
`;

const ImgWrapper = styled.div`
  min-width: 300px;
  padding-right: 10px;
  @media (min-width: 600px) {
    padding-right: 2em;
  }
`;

const Div = styled.div`
  color: ${(props) => props.theme.grey};
  font-size: 16px;
`;

const Back = styled.div`
  display: flex;
  justify-content: flex-end;
`;
