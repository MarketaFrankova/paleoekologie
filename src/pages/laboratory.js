import React from "react";
import Paragraph from "../components/atoms/Paragraph";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import { Consumer } from "../layouts/Context";
import { labCz, labEn } from "../content/laboratory";
import { H2 } from "../components/atoms/Headings";
import Img from "gatsby-image";
import styled from "styled-components";

const IndexPage = ({ data }) => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? labEn : labCz;

        const imgs = [
          <Img fluid={data.image1.childImageSharp.fluid} alt="" />,
          <Img fluid={data.image2.childImageSharp.fluid} alt="" />,
          <Img fluid={data.image3.childImageSharp.fluid} alt="" />,
          <Img fluid={data.image4.childImageSharp.fluid} alt="" />,
          <Img fluid={data.image5.childImageSharp.fluid} alt="" />,
          <Img fluid={data.image6.childImageSharp.fluid} alt="" />,
        ];

        return (
          <ContainerWrapper>
            <ImgWrapper>
              {imgs[0]}
              {imgs[1]}
              {imgs[2]}
            </ImgWrapper>
            <Paragraph>
              <H2> {content.title}</H2>
              {content.description}
            </Paragraph>
            <ImgWrapper>
              {imgs[3]}
              {imgs[4]}
              {imgs[5]}
            </ImgWrapper>
            {/*  <ImgWrapperMobile>
              {imgs[0]}
              {imgs[1]}
              {imgs[2]}
              {imgs[3]}
              {imgs[4]}
              {imgs[5]}
            </ImgWrapperMobile> */}
          </ContainerWrapper>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    image1: file(relativePath: { regex: "/lab/lab1.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { regex: "/lab/lab2.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { regex: "/lab/lab3.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4: file(relativePath: { regex: "/lab/lab4.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image5: file(relativePath: { regex: "/lab/lab5.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image6: file(relativePath: { regex: "/lab/lab6.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

/* const ImgWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1400px) {
    display: none;
  }
`; */

const ImgWrapper = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: grid;
    grid-gap: 5px;
    min-width: 20vw;
    margin: 0 10px;
  }
`;
