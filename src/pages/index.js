import React from "react";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import { H2 } from "../components/atoms/Headings";
import { cz, en } from "../content/homepage";
import ImgSlider from "../layouts/ImgSlider";

const IndexPage = ({ data }) => {
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
  border-radius: 4px;
  margin-top: 2rem;

  @media (min-width: ${(props) => props.theme.largeDevice}) {
    min-width: 200px;
    margin-left: 2rem;
  }

  @media (min-width: ${(props) => props.theme.extraLargeDevice}) {
    max-width: 25%;
  }
`;

const Div = styled.div``;

const Green = styled.div`
  color: ${(props) => props.theme.darkred};
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

  @media (min-width: ${(props) => props.theme.largeDevice}) {
    flex-direction: row;
  }
`;

const MainParagraph = styled.div``;

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
