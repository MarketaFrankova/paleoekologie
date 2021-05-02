import React, { useState, useEffect } from "react";
import Paragraph from "../components/atoms/Paragraph";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import PersonBox from "../components/people/PersonBox";
import PersonDetail from "../components/people/PersonDetail";
import { staffCz, staffEn } from "../content/people";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";
import styled from "styled-components";
import { H3 } from "../components/atoms/Headings";

const IndexPage = ({ data, location }) => {
  const images = data.allImageSharp.edges;
  const [detailOpened, setDetailOpened] = useState(null);

  useEffect(() => {
    if (location.state?.person) {
      setDetailOpened(location.state.person);
    }
  }, []);

  return (
    <Consumer>
      {({ int }) => {
        const staffData = int === "en" ? staffEn : staffCz;
        const generalData = int === "en" ? en : cz;

        const researchers = staffData.slice(2, staffData.length);
        const head = staffData.find((person) => person.position === "head");
        const deputyHead = staffData.find(
          (person) => person.position === "deputy-head"
        );
        const opened = staffData.find((person) => person.id === detailOpened);
        if (detailOpened)
          return (
            <PersonDetail
              openDetail={setDetailOpened}
              personInfo={opened}
              img={
                images.find((img) => img.node.fluid.src.includes(opened.id))
                  ?.node
              }
            />
          );
        return (
          <>
            {detailOpened}

            <GridWrapper>
              <div>
                <H3>{generalData.people.head}</H3>
                <PersonBox
                  openDetail={setDetailOpened}
                  personInfo={head}
                  data={generalData}
                  img={
                    images.find((img) => img.node.fluid.src.includes(head.id))
                      ?.node
                  }
                />
              </div>
              <div>
                <H3>{generalData.people.deputyHead}</H3>
                <PersonBox
                  openDetail={setDetailOpened}
                  personInfo={deputyHead}
                  data={generalData}
                  img={
                    images.find((img) =>
                      img.node.fluid.src.includes(deputyHead.id)
                    )?.node
                  }
                />
              </div>

              <H3>{generalData.people.researchers}</H3>
              <div />

              {researchers.map((person) => {
                const img = images.find((img) =>
                  img.node.fluid.src.includes(person.id)
                );

                return (
                  <PersonBox
                    openDetail={setDetailOpened}
                    personInfo={person}
                    key={person.id}
                    data={generalData}
                    img={img?.node}
                  />
                );
              })}
            </GridWrapper>
          </>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

const GridWrapper = styled.div`
  padding-top: 1em;
  display: grid;
  grid-column-gap: 20px;
  min-width: 100%;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(480px, 1fr));
  }
`;

export const query = graphql`
  query {
    allImageSharp(filter: { fluid: { src: { regex: "/people_/" } } }) {
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
