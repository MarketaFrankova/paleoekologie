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
              <iframe
                loading="lazy"
                width="330px"
                height="100%"
                src="https://syndication.twitter.com/srv/timeline-profile/screen-name/VegetPaleo?frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&originpaleoekologie.cz&maxHeight=600px&showHeader=true&showReplies=false&transparent=false&theme=light&width=330px"
                style={{ height: "100vh" }}
                frameborder="0"
                scrolling="no"
                title="test"
              ></iframe>
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

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;

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

const Twitter = styled.img`
  margin-top: 15px;
  right: 25px;
  height: 40px;
  cursor: pointer;
  position: absolute;
`;
