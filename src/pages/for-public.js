import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Consumer } from "../layouts/Context";
import { cz, en, czImgTitles, enImgTitles } from "../content/for-public";
import { H2 } from "../components/atoms/Headings";

const IndexPage = ({ data }) => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? en : cz;
        const imgData = int === "en" ? enImgTitles : czImgTitles;
        const imgs = data.allImageSharp.edges.map((img, index) => (
          <Img
            fluid={img.node.fluid}
            alt={imgData[`image${index + 1}`]}
            title={imgData[`image${index + 1}`]}
          />
        ));
        return (
          <Wrapper>
            <TextWrapper>
              {content.map((item) => (
                <>
                  <H2>{item.title}</H2>
                  <div>{item.description}</div>
                  {item.descriptionArr && (
                    <div>
                      {item.descriptionArr?.map((i) => (
                        <div>{i}</div>
                      ))}
                    </div>
                  )}
                </>
              ))}
            </TextWrapper>
            <ImgWrapper>{imgs.map((img) => img)}</ImgWrapper>
          </Wrapper>
        );
      }}
    </Consumer>
  );
};

const TextWrapper = styled.div`
  flex: 2;
  margin-right: 50px;
  text-align: justify;
`;

const Wrapper = styled.div`
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

export default IndexPage;

export const query = graphql`
  query {
    allImageSharp(
      sort: { fields: [fluid___originalName], order: ASC }
      filter: { fluid: { src: { regex: "//forpublic/" } } }
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
