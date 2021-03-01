import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const windowGlobal = typeof window !== "undefined" && window;

const Research = ({ research, setResearch }) => (
  <StaticQuery
    query={graphql`
      query {
        image1: file(
          relativePath: { regex: "/research/research-longterm.jpg/" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image2: file(
          relativePath: { regex: "/research/research-historic.jpg/" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      /* const imgs = data.images.edges.map((i) => i.node.childImageSharp.fluid); */
      console.log(data);

      const getClass = (urlIncludes) => {
        if (
          windowGlobal &&
          windowGlobal.location &&
          windowGlobal?.location?.href.includes(urlIncludes)
        ) {
          return "active";
        } else return "";
      };

      return (
        <ResearchWrapper>
          <ResearchItem to="/research-longterm/">
            <ImgWrapper active={getClass("research-longterm") === "active"}>
              <Img
                fluid={data.image1.childImageSharp.fluid}
                alt="Longerm research"
              />
            </ImgWrapper>
            <ResearchFooter>
              Dlouhodobý vývoj mokřadních ekosystémů
            </ResearchFooter>
          </ResearchItem>
          <ResearchItem to="/research-historic/">
            <ImgWrapper active={getClass("research-historic") === "active"}>
              <Img
                fluid={data.image2.childImageSharp.fluid}
                alt="Historic aspects"
              />
            </ImgWrapper>
            <ResearchFooter>
              Historické aspekty diverzity vegetace
            </ResearchFooter>
          </ResearchItem>
        </ResearchWrapper>
      );
    }}
  />
);

export default Research;

Research.propTypes = {
  research: PropTypes.string,
  setResearch: PropTypes.func,
};

const ResearchWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 10px;
`;

const ResearchItem = styled(Link)`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 15px #eee;
  flex: 1 1 auto;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    div {
      opacity: 1;
    }
  }
`;

const ImgWrapper = styled.div`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  position: relative;
  overflow: hidden;
  opacity: ${(props) => (props.active ? 1 : 0.8)};
`;

const ResearchFooter = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  border-top: 1px solid light-grey;
  background-color: white;
  padding: 10px;
  text-align: center;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  color: ${(props) => props.theme.grey};
`;
