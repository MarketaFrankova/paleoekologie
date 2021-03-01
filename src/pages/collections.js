import React from "react";
import Paragraph from "../components/atoms/Paragraph";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/collections";
import { H2 } from "../components/atoms/Headings";
const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const data = int === "en" ? en : cz;
        return (
          <ContainerWrapper>
            <Paragraph>
              {data.description}
              <H2> {data.pollen.heading}</H2>
              {data.pollen.description}
              <H2> {data.seeds.heading}</H2>
              {data.seeds.description}
              <H2> {data.profile.heading}</H2>
              {data.profile.description}
            </Paragraph>
          </ContainerWrapper>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;
