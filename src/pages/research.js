import * as React from "react";
import Paragraph from "../components/atoms/Paragraph";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import Research from "../components/homepage/Research";
const IndexPage = () => {
  return (
    <ContainerWrapper>
      <Research isHomepage />
    </ContainerWrapper>
  );
};

export default IndexPage;
