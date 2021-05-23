import React from "react";
import Paragraph from "../components/atoms/Paragraph";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/news";
import styled from "styled-components";
import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  const imgsNews = data.news.edges;
  return (
    <Consumer>
      {({ int }) => {
        const news = int === "en" ? en : cz;

        return (
          <Paragraph>
            {news.map((item) => {
              const img = imgsNews.find((img) =>
                img.node.fluid.src.includes(item.photo)
              )?.node;

              return (
                <>
                  <NewsHeading id={item.id}>{item.heading}</NewsHeading>
                  <NewItem>
                    {item.photo && (
                      <ImgWrapper width={item.imgWidth}>
                        <Img
                          fluid={img.fluid}
                          alt={item.imgTitle || img.heading}
                          title={item.imgTitle}
                        />
                      </ImgWrapper>
                    )}
                    {item.content}
                  </NewItem>
                </>
              );
            })}
          </Paragraph>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;
const NewsHeading = styled.div`
  color: ${(props) => props.theme.darkred};
  font-weight: bold;
  margin-bottom: 10px;
`;
const ImgWrapper = styled.div`
  width: 100%;
  min-width: 300px;
  > div {
    width: ${(props) => props.width || "300px"};
    float: left;
    margin-right: 15px;
  }
`;
const NewItem = styled.div`
  margin-bottom: 40px;
  min-height: 220px;
`;

export const query = graphql`
  query {
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
