import React from "react";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import { cz, en, imgsTitleEn, imgsTitleCz } from "../content/homepage";
import { cz as czNews, en as enNews } from "../content/news";
import ImgSlider from "../layouts/ImgSlider";

const IndexPage = ({ data }) => {
  const imgs = data.uvodni.edges.map((i) => i.node.fluid);

  return (
    <Consumer>
      {({ int }) => {
        const news = int === "en" ? enNews : czNews;
        return (
          <MainPageContainer>
            <div>
              <ImgSliderWrapper>
                <ImgSlider
                  imgs={imgs}
                  titles={int === "en" ? imgsTitleEn : imgsTitleCz}
                />
              </ImgSliderWrapper>
              <div>{int === "en" ? en : cz} </div>
            </div>

          </MainPageContainer>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

const ImgSliderWrapper = styled.div`
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.largeDevice}) {
    max-width: 800px;
  }

  @media (min-width: 2200px) {
    max-width: initial;
    margin: initial;
  }
`;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  @media (min-width: ${(props) => props.theme.largeDevice}) {
    max-width: 800px;
    margin: 0 auto;
  }
  @media (min-width: ${(props) => props.theme.largeDevice}) {
    flex-direction: row;
  }
`;

export const query = graphql`
  query {
    uvodni: allImageSharp(
      sort: { fields: [fluid___originalName], order: ASC }
      filter: { fluid: { src: { regex: "/uvodni/" } } }
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
    news: allImageSharp(filter: { fluid: { src: { regex: "/news/" } } }) {
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
