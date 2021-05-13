import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { H2 } from "../../components/atoms/Headings";
import { cz, en } from "../../content/research/general";

const windowGlobal = typeof window !== "undefined" && window;

const Research = ({ int }) => (
  <StaticQuery
    query={graphql`
      query {
        wetlands: file(
          relativePath: { regex: "/research/research-wetlands.jpg/" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        historic: file(
          relativePath: { regex: "/research/research-historic.jpg/" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        algal: file(relativePath: { regex: "/research/research-algal.jpg/" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        fires: file(relativePath: { regex: "/research/research-fires.jpg/" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pollen: file(
          relativePath: {
            regex: "/research/research-pollen-sedimentation.jpg/"
          }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        landscape: file(
          relativePath: { regex: "/research/research-landscape.jpg/" }
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
      const content = int === "en" ? en : cz;
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
        <div>
          <H2>{content.heading}</H2>
          <ResearchWrapper>
            <ResearchItem to="/research-landscape/">
              <ImgWrapper active={getClass("research-landscape") === "active"}>
                <Img
                  fluid={data.landscape.childImageSharp.fluid}
                  alt={content.landscape}
                />
              </ImgWrapper>
              <ResearchFooter>{content.landscape}</ResearchFooter>
            </ResearchItem>

            <ResearchItem to="/research-historic/">
              <ImgWrapper active={getClass("research-historic") === "active"}>
                <Img
                  fluid={data.historic.childImageSharp.fluid}
                  alt={content.historic}
                />
              </ImgWrapper>
              <ResearchFooter>{content.historic}</ResearchFooter>
            </ResearchItem>

            <ResearchItem to="/research-wetlands/">
              <ImgWrapper active={getClass("research-wetlands") === "active"}>
                <Img
                  fluid={data.wetlands.childImageSharp.fluid}
                  alt={content.wetlands}
                />
              </ImgWrapper>
              <ResearchFooter>{content.wetlands}</ResearchFooter>
            </ResearchItem>

            <ResearchItem to="/research-fires/">
              <ImgWrapper active={getClass("research-fires") === "active"}>
                <Img
                  fluid={data.fires.childImageSharp.fluid}
                  alt={content.fires}
                />
              </ImgWrapper>
              <ResearchFooter>{content.fires}</ResearchFooter>
            </ResearchItem>

            <ResearchItem to="/research-pollen-sedimentation/">
              <ImgWrapper
                active={getClass("research-pollen-sedimentation") === "active"}
              >
                <Img
                  fluid={data.pollen.childImageSharp.fluid}
                  alt={content.pollenSedimentation}
                />
              </ImgWrapper>
              <ResearchFooter>{content.pollenSedimentation}</ResearchFooter>
            </ResearchItem>

            <ResearchItem to="/research-algal/">
              <ImgWrapper active={getClass("research-algal") === "active"}>
                <Img
                  fluid={data.algal.childImageSharp.fluid}
                  alt={content.algal}
                />
              </ImgWrapper>
              <ResearchFooter>{content.algal}</ResearchFooter>
            </ResearchItem>
          </ResearchWrapper>
        </div>
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
  grid-template-columns: 1fr;
  grid-gap: 10px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`;

const ResearchItem = styled(Link)`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 5px 15px #eee;
  border: 1px solid black;
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
  justify-content: center;
  flex: 1;
  border-top: 1px solid light-grey;
  background-color: white;
  padding: 10px;
  text-align: center;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  color: ${(props) => props.theme.black};
`;
