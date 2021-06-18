import React from "react";
import { Consumer } from "../layouts/Context";
import { labCz, labEn, czImgTitles, enImgTitles } from "../content/laboratory";
import { H2 } from "../components/atoms/Headings";
import Img from "gatsby-image";
import styled from "styled-components";

const IndexPage = ({ data }) => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? labEn : labCz;
        const imgData = int === "en" ? enImgTitles : czImgTitles;
        const imgs = data.allImageSharp.edges.map((img, index) => (
          <Img
            key={index}
            fluid={img.node.fluid}
            alt={imgData[`image${index + 1}`]}
            title={imgData[`image${index + 1}`]}
          />
        ));

        return (
          <LaboratoryWrapper>
            <TextWrapper>
              <H2> {content.title}</H2>
              {content.description}
            </TextWrapper>
            <ImgWrapper>{imgs}</ImgWrapper>
          </LaboratoryWrapper>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

const ImgWrapper = styled.div`
  display: none;
  @media (min-width: 920px) {
    display: block;
    flex: 1;

    img {
      margin-top: 5px;
    }
  }
  @media (min-width: 1600px) {
    min-width: 320px;
  }
`;

const LaboratoryWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  flex: 2;
  margin-right: 50px;
  text-align: justify;
`;

export const query = graphql`
  query {
    allImageSharp(
      sort: { fields: [fluid___originalName], order: ASC }
      filter: { fluid: { src: { regex: "//laboratory/" } } }
    ) {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
