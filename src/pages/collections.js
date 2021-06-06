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
        const imgs = [
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt={imgData.image1}
            title={imgData.image1}
          />,
          <Img
            fluid={data.image2.childImageSharp.fluid}
            alt={imgData.image2}
            title={imgData.image2}
          />,
          <Img
            fluid={data.image3.childImageSharp.fluid}
            alt={imgData.image3}
            title={imgData.image3}
          />,
          <Img
            fluid={data.image4.childImageSharp.fluid}
            alt={imgData.image4}
            title={imgData.image4}
          />,
          <Img
            fluid={data.image5.childImageSharp.fluid}
            alt={imgData.image5}
            title={imgData.image5}
          />,
        ];

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
            <ImgWrapper>{imgs.map((img) => img)}</ImgWrapper>
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

export const query = graphql`
  query {
    image1: file(relativePath: { regex: "/collections/collections01.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { regex: "/collections/collections02.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { regex: "/collections/collections03.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4: file(relativePath: { regex: "/collections/collections04.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image5: file(relativePath: { regex: "/collections/collections05.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
