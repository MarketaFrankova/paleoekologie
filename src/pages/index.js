import React from "react";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import { H2 } from "../components/atoms/Headings";
import { cz, en } from "../content/homepage";
import { cz as czNews, en as enNews } from "../content/news";
import ImgSlider from "../layouts/ImgSlider";
import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  const imgs = data.uvodni.edges.map((i) => i.node.fluid);
  const imgsNews = data.news.edges;
  return (
    <Consumer>
      {({ int }) => {
        const news = int === "en" ? enNews : czNews;
        return (
          <MainPageContainer>
            <MainParagraph>
              <ImgSliderWrapper>
                <ImgSlider imgs={imgs} />
              </ImgSliderWrapper>
              <div>{int === "en" ? en : cz} </div>
            </MainParagraph>

            <News>
              <H2>{int === "en" ? "News" : "Aktuality"}</H2>
              {news.map((item) => {
                const img = imgsNews.find((img) =>
                  img.node.fluid.src.includes(item.photo)
                )?.node;

                return (
                  <NewItem>
                    <NewsHeading>{item.heading}</NewsHeading>
                    {item.photo && (
                      <Img
                        fluid={img.fluid}
                        alt={item.imgTitle || img.heading}
                        title={item.imgTitle}
                        style={{ height: "100%", maxWidth: "100%" }}
                        imgStyle={{
                          objectFit: "cover",
                        }}
                      />
                    )}
                    {item.content}
                  </NewItem>
                );
              })}
            </News>
          </MainPageContainer>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

const News = styled.div`
  max-width: 100%;
  box-shadow: 1px 2px 15px #eee;
  padding: 0 2rem 0.5rem;
  border-radius: 4px;
  margin-top: 10px;
  background-color: #e2ead5;
  text-align: justify;
  @media (min-width: ${(props) => props.theme.largeDevice}) {
    min-width: 200px;
    margin-left: 2rem;
    max-width: 33%;
  }
`;

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

const NewsHeading = styled.div`
  color: ${(props) => props.theme.darkred};
  font-weight: bold;
  margin-bottom: 10px;
`;

const NewItem = styled.div`
  margin-bottom: 30px;
`;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;

  @media (min-width: ${(props) => props.theme.largeDevice}) {
    flex-direction: row;
  }
`;

const MainParagraph = styled.div``;

export const query = graphql`
  query {
    uvodni: allImageSharp(filter: { fluid: { src: { regex: "/uvodni/" } } }) {
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
