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
          <LaboratoryWrapper>
            <TextWrapper>
              <H2> {content.title}</H2>
              {content.description}
            </TextWrapper>
            <ImgWrapper>
              {imgs[0]}
              {imgs[1]}
              {imgs[2]}
              {imgs[3]}
              {imgs[4]}
              {imgs[5]}
            </ImgWrapper>
          </LaboratoryWrapper>
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
