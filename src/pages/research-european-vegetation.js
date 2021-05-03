import React from "react";
import { Consumer } from "../layouts/Context";
import Paragraph from "../components/atoms/Paragraph";

import { cz, en } from "../content/research/european-vegetation";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => <Paragraph>{int === "en" ? en : cz}</Paragraph>}
    </Consumer>
  );
};

export default IndexPage;
