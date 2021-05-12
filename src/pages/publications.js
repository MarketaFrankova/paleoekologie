import React from "react";
import Paragraph from "../components/atoms/Paragraph";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/publications";
import { H2 } from "../components/atoms/Headings";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const data = int === "en" ? en : cz;
        return (
          <Paragraph>
            {data.general}
            {data.years.map((year) => (
              <H2>{year.year}</H2>
            ))}
            {data.years.map((year) => (
              <div>{year.list}</div>
            ))}
          </Paragraph>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;
