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
        const imgs = data.allImageSharp.edges.map((img, index) => (
          <Img
            fluid={img.node.fluid}
            alt={imgData[`image${index + 1}`]}
            title={imgData[`image${index + 1}`]}
          />
        ));

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

export const query = graphql`
  query {
    allImageSharp(
      sort: { fields: [fluid___originalName], order: ASC }
      filter: { fluid: { src: { regex: "//forstudents/" } } }
    ) {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
