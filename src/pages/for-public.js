import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
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
        const content = int === "en" ? en : cz;
        console.log(data);
        return (
          <Wrapper>
            <TextWrapper>
              <H2>{content.eventTitle}</H2>
              <div>{content.events.map((i) => i)}</div>
              <H2>{content.virtualMeadow}</H2>
              <div>{content.virtualMeadowDescription}</div>
              <H2>{content.documentaryTitle}</H2>
              <div>
                {content.documentaries.map((i) => (
                  <>
                    <strong>{i.name}</strong>
                    <div>{i.description}</div>
                  </>
                ))}
                <a
                  href="https://www.ceskatelevize.cz/porady/12935442888-zelene-plice/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img
                    fluid={data.zeleneplice.childImageSharp.fluid}
                    alt="Zelené plíce - dokument"
                    style={{ maxWidth: 500 }}
                  />
                </a>
              </div>
              <H2>{content.popularPapersTitle}</H2>
              <div>
                {content.popularPapers.map((i) => (
                  <p>{i}</p>
                ))}
              </div>
              <H2>{content.popularVideoTitle}</H2>
              <div>{content.popularVideos}</div>

              <H2>{content.excursionsTitle}</H2>
              <div>{content.excursionesDescriptions}</div>
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
    zeleneplice: file(relativePath: { regex: "/forpublic/zeleneplice.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
export default IndexPage;
