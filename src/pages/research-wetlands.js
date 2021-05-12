import React from "react";
import { Consumer } from "../layouts/Context";
import Img from "gatsby-image";
import styled from "styled-components";

import { cz, en } from "../content/research/wetlands";

const IndexPage = ({ data }) => {
  const imgs = [
    <Img fluid={data.image1.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image2.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image3.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image4.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image5.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image6.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image7.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image8.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image9.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image10.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image11.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image12.childImageSharp.fluid} alt="" />,
  ];

  return (
    <Consumer>
      {({ int }) => (
        <ResearchWrapper>
          <TextWrapper>{int === "en" ? en : cz}</TextWrapper>
          <ImgWrapper>{imgs.map((img) => img)}</ImgWrapper>
        </ResearchWrapper>
      )}
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
    image1: file(
      relativePath: { regex: "/research/wetlands/wetlands01.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(
      relativePath: { regex: "/research/wetlands/wetlands02.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(
      relativePath: { regex: "/research/wetlands/wetlands03.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4: file(
      relativePath: { regex: "/research/wetlands/wetlands04.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image5: file(
      relativePath: { regex: "/research/wetlands/wetlands05.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image6: file(
      relativePath: { regex: "/research/wetlands/wetlands06.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image7: file(
      relativePath: { regex: "/research/wetlands/wetlands07.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image8: file(
      relativePath: { regex: "/research/wetlands/wetlands08.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image9: file(
      relativePath: { regex: "/research/wetlands/wetlands09.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image10: file(
      relativePath: { regex: "/research/wetlands/wetlands10.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image11: file(
      relativePath: { regex: "/research/wetlands/wetlands11.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image12: file(
      relativePath: { regex: "/research/wetlands/wetlands12.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
