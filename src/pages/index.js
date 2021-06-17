import React from "react";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import { H2 } from "../components/atoms/Headings";
import { cz, en, imgsTitleEn, imgsTitleCz } from "../content/homepage";
import { cz as czNews, en as enNews } from "../content/news";
import ImgSlider from "../layouts/ImgSlider";
import Img from "gatsby-image";
import twitter from "../icons/twitter-blue.svg";

const IndexPage = ({ data }) => {
  const imgs = data.uvodni.edges.map((i) => i.node.fluid);
  const imgsNews = data.news.edges;

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

            <News>
              <Heading>
                <H2>{int === "en" ? "News" : "Aktuality"}</H2>
                <a
                  href="https://twitter.com/VegetPaleo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter src={twitter} alt="twitter" />
                </a>
              </Heading>
              {news.map((item) => {
                const img = imgsNews.find((img) =>
                  img.node.fluid.src.includes(item.photo)
                )?.node;

                return (
                  <NewItem key={item.heading}>
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
                    {item.contentShort}
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
  position: relative;
  @media (min-width: ${(props) => props.theme.largeDevice}) {
    min-width: 330px;
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
  text-align: center;
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

const Heading = styled.div`
  display: flex;
  h2 {
    flex: 1;
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

const Twitter = styled.img`
  margin-top: 15px;
  right: 25px;
  height: 40px;
  cursor: pointer;
  position: absolute;
`;
