import React from "react";
import styled from "styled-components";
import Paragraph from "../components/atoms/Paragraph";
import Img from "gatsby-image";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/collections";
import { H2 } from "../components/atoms/Headings";
const IndexPage = ({ data }) => {
  const imgs = [
    <Img fluid={data.image1.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image2.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image3.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image4.childImageSharp.fluid} alt="" />,
    <Img fluid={data.image5.childImageSharp.fluid} alt="" />,
  ];
  return (
    <Consumer>
      {({ int }) => {
        const data = int === "en" ? en : cz;
        return (
          <CollectionsWrapper>
            <TextWrapper>
              <div>
                {data.description}
                <H2> {data.pollen.heading}</H2>
                {data.pollen.description}
                <H2> {data.seeds.heading}</H2>
                {data.seeds.description}
                <H2> {data.profile.heading}</H2>
                {data.profile.description}
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
