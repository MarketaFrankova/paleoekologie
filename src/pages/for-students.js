import * as React from "react";
import { Consumer } from "../layouts/Context";
import { cz, en, czImgTitles, enImgTitles } from "../content/for-students";
import { H2 } from "../components/atoms/Headings";
import styled from "styled-components";
import Img from "gatsby-image";

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
          <Img
            fluid={data.image9.childImageSharp.fluid}
            alt={imgData.image9}
            title={imgData.image9}
          />,
        ];

        return (
          <ForStudentsWrapper>
            <TextWrapper>
              <div>
                <H2>{content.highSchoolTitle}</H2>
                <div>{content.highSchoolDescription}</div>
                <br />
                <br />
                <H2>{content.universityTitle}</H2>
                <div>{content.universityDescription}</div>
                <div>
                  {content.supervisors.map((supervisor) => (
                    <SupervisorWrapper>
                      <div>{supervisor.supervisor}</div>
                      {supervisor.theses.map((item) => (
                        <div>
                          <Name>{item.name}</Name>
                          <div>{item.description}</div>
                        </div>
                      ))}
                    </SupervisorWrapper>
                  ))}
                </div>
              </div>
            </TextWrapper>
            <ImgWrapper>{imgs.map((img) => img)}</ImgWrapper>
          </ForStudentsWrapper>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    image1: file(relativePath: { regex: "/forstudents/forstudents01.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { regex: "/forstudents/forstudents02.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { regex: "/forstudents/forstudents03.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4: file(relativePath: { regex: "/forstudents/forstudents04.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image5: file(relativePath: { regex: "/forstudents/forstudents05.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image6: file(relativePath: { regex: "/forstudents/forstudents06.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image7: file(relativePath: { regex: "/forstudents/forstudents07.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image8: file(relativePath: { regex: "/forstudents/forstudents08.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image9: file(relativePath: { regex: "/forstudents/forstudents09.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const SupervisorWrapper = styled.div`
  margin: 2rem 0;
`;

const Name = styled.div`
  font-weight: bold;
  margin: 1rem 0;
`;

const TextWrapper = styled.div`
  flex: 2;
  margin-right: 50px;
  text-align: justify;
`;

const ForStudentsWrapper = styled.div`
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
