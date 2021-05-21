import React, { useState, useEffect } from "react";
import PersonBox from "../components/people/PersonBox";
import PersonDetail from "../components/people/PersonDetail";
import { staffCz, staffEn } from "../content/people";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";
import styled from "styled-components";
import { H2 } from "../components/atoms/Headings";

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

        const researchers = staffData.filter(
          (person) => person.position === "researcher"
        );

        const phd = staffData.filter((person) => person.position === "phd");

        const techadm = staffData.filter(
          (person) => person.position === "techadm"
        );
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
                <H2>{generalData.people.head}</H2>
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
                <H2>{generalData.people.deputyHead}</H2>
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
              <H2>{generalData.people.researchers}</H2>
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
              <H2>{generalData.people.phd}</H2> <div />
              {phd.map((person) => {
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
              <div />
              <H2>{generalData.people.technical}</H2> <div />
              {techadm.map((person) => {
                const img = images.find((img) =>
                  img.node.fluid.src.includes(person.id)
                );

                return (
                  <PersonBox
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
