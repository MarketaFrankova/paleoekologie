import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Consumer } from "../layouts/Context";
import { cz, en, czImgTitles, enImgTitles } from "../content/collections";
import { H2 } from "../components/atoms/Headings";
const IndexPage = ({ data }) => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? en : cz;
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
          <CollectionsWrapper>
            <TextWrapper>
              <div>
                {content.description}
                <H2> {content.pollen.heading}</H2>
                {content.pollen.description}
                <H2> {content.seeds.heading}</H2>
                {content.seeds.description}
                <H2> {content.profile.heading}</H2>
                {content.profile.description}
              </div>
            </TextWrapper>
            <ImgWrapper>{imgs}</ImgWrapper>
          </CollectionsWrapper>
        );
      }}
    </Consumer>
  );
};

const CollectionsWrapper = styled.div`
  display: flex;
`;
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

const TextWrapper = styled.div`
  flex: 2;
  margin-right: 50px;
  text-align: justify;
`;

export default IndexPage;

export const query = graphql`
  query {
    allImageSharp(
      sort: { fields: [fluid___originalName], order: ASC }
      filter: { fluid: { src: { regex: "//collections/" } } }
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
