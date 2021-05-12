import * as React from "react";
import Research from "../components/homepage/Research";
import { Consumer } from "../layouts/Context";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        return <Research int={int} />;
      }}
    </Consumer>
  );
};

export default IndexPage;
