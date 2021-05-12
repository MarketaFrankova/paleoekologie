import React from "react";
import { Consumer } from "../layouts/Context";
import Img from "gatsby-image";
import styled from "styled-components";
import { cz, en } from "../content/research/algal";

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
    image1: file(relativePath: { regex: "/research/algae/algae01.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { regex: "/research/algae/algae02.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { regex: "/research/algae/algae03.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4: file(relativePath: { regex: "/research/algae/algae04.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image5: file(relativePath: { regex: "/research/algae/algae05.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image6: file(relativePath: { regex: "/research/algae/algae06.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image7: file(relativePath: { regex: "/research/algae/algae07.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image8: file(relativePath: { regex: "/research/algae/algae08.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image9: file(relativePath: { regex: "/research/algae/algae09.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
