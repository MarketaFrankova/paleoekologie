import React from "react";
import { Consumer } from "../layouts/Context";
import Img from "gatsby-image";
import styled from "styled-components";

import { cz, en, czImgTitles, enImgTitles } from "../content/research/fires";

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
          <Img
            fluid={data.image6.childImageSharp.fluid}
            alt={imgData.image6}
            title={imgData.image6}
          />,
          <Img
            fluid={data.image7.childImageSharp.fluid}
            alt={imgData.image7}
            title={imgData.image7}
          />,
          <Img
            fluid={data.image8.childImageSharp.fluid}
            alt={imgData.image8}
            title={imgData.image8}
          />,
        ];
        return (
          <ResearchWrapper>
            <TextWrapper>{content}</TextWrapper>
            <ImgWrapper>{imgs.map((img) => img)}</ImgWrapper>
          </ResearchWrapper>
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

const ResearchWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  flex: 2;
  margin-right: 50px;
  text-align: justify;
`;

export const query = graphql`
  query {
    image1: file(relativePath: { regex: "/research/fires/fires01.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { regex: "/research/fires/fires02.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { regex: "/research/fires/fires03.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4: file(relativePath: { regex: "/research/fires/fires04.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image5: file(relativePath: { regex: "/research/fires/fires05.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image6: file(relativePath: { regex: "/research/fires/fires06.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image7: file(relativePath: { regex: "/research/fires/fires07.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image8: file(relativePath: { regex: "/research/fires/fires08.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
