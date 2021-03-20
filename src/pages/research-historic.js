import React, { useState } from "react";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import Paragraph from "../components/atoms/Paragraph";
/* import { H2 } from "../components/atoms/Headings"; */

import {
  cz as researchCz,
  en as researchEn,
} from "../content/research/historic";
/* import Research from "../components/homepage/Research"; */
const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => (
        <MainPageContainer>
          {/*      <Research /> */}

          <MainParagraph>
            <Paragraph>{int === "en" ? researchEn : researchCz}</Paragraph>
          </MainParagraph>
        </MainPageContainer>
      )}
    </Consumer>
  );
};

export default IndexPage;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  margin: 0 1%;

  @media (min-width: ${(props) => props.theme.smallDevice}) {
    margin: 0 2%;
  }

  @media (min-width: 720px) {
    flex-direction: row;
    margin: 0 50px;
  }
`;

const MainParagraph = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
`;
