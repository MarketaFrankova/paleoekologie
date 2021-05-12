import * as React from "react";
import styled from "styled-components";
import Paragraph from "../components/atoms/Paragraph";
import Img from "gatsby-image";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/for-public";
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
          <Wrapper>
            <TextWrapper>
              <H2>{data.eventTitle}</H2>
              <div>{data.events.map((i) => i)}</div>
              <H2>{data.documentaryTitle}</H2>
              <div>
                {data.documentaries.map((i) => (
                  <>
                    <b>{i.name}</b>
                    <div>{i.description}</div>
                  </>
                ))}
              </div>
              <H2>{data.popularPapersTitle}</H2>
              <div>
                {data.popularPapers.map((i) => (
                  <p>{i}</p>
                ))}
              </div>
              <H2>{data.popularVideoTitle}</H2>
              <div>{data.popularVideos}</div>
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

export const query = graphql`
  query {
    image1: file(relativePath: { regex: "/forpublic/forpublic01.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { regex: "/forpublic/forpublic02.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { regex: "/forpublic/forpublic03.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4: file(relativePath: { regex: "/forpublic/forpublic04.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image5: file(relativePath: { regex: "/forpublic/forpublic05.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
export default IndexPage;
