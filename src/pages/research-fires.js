import React from "react";
import { Consumer } from "../layouts/Context";
import Paragraph from "../components/atoms/Paragraph";

import { cz as researchCz, en as researchEn } from "../content/research/fires";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => (
        <Paragraph>{int === "en" ? researchEn : researchCz}</Paragraph>
      )}
    </Consumer>
  );
};

export default IndexPage;
