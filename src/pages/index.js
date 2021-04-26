import React, { useState } from "react";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import Paragraph from "../components/atoms/Paragraph";
import { H2 } from "../components/atoms/Headings";
import { cz, en } from "../content/homepage";
import ImgSlider from "../layouts/ImgSlider";

const IndexPage = ({ data }) => {
  console.log(data);
  const imgs = data.allImageSharp.edges.map((i) => i.node.fluid);
  return (
    <Consumer>
      {({ int }) => (
        <MainPageContainer>
          <MainParagraph>
            <Div>
              <ImgSlider imgs={imgs} />
            </Div>
            <Div>{int === "en" ? en : cz} </Div>
          </MainParagraph>

          <News>
            <H2>{int === "en" ? "News" : "Aktuality"}</H2>
            <Green>xx.xx.2021</Green>
            <NewItem>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
              id dolor. Donec vitae arcu.
            </NewItem>
            <Green>xx.xx.2021</Green>
            <NewItem>
              Donec vitae arcu. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos hymenaeos. Fusce tellus.
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.
            </NewItem>
            <Green>xx.xx.2021</Green>
            <NewItem>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
              id dolor. Donec vitae arcu.
            </NewItem>
            <Green>xx.xx.2021</Green>
            <NewItem>
              Donec vitae arcu. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos hymenaeos. Fusce tellus.
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.
            </NewItem>
          </News>
        </MainPageContainer>
      )}
    </Consumer>
  );
};

export default IndexPage;

const News = styled.div`
  max-width: 100%;
  box-shadow: 1px 2px 15px #eee;
  padding: 1rem;
  margin: 1rem 2rem;
  border-radius: 4px;

  @media (min-width: ${(props) => props.theme.mediumDevice}) {
    margin-right: 0;
    min-width: 200px;
    width: 20%;
    max-width: 400px;
  }
`;

const Div = styled.div`
  margin: 0rem 2rem;
`;

const Green = styled.div`
  color: ${(props) => props.theme.terciary};
  font-weight: bold;
`;

const NewItem = styled.div`
  margin-bottom: 10px;
`;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  margin: 0 1%;

  @media (min-width: ${(props) => props.theme.mediumDevice}) {
    flex-direction: row;
  }
`;

const MainParagraph = styled.div`
  max-width: 1200px;
  display: flex;
  /*   align-items: center; */
  flex-direction: column;
  /*   @media (min-width: ${(props) => props.theme.mediumDevice}) {
    order: 1;
  } */
`;

export const query = graphql`
  query {
    allImageSharp(filter: { fluid: { src: { regex: "/uvodn/" } } }) {
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
