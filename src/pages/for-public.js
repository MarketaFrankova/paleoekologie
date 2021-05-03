import * as React from "react";
import Paragraph from "../components/atoms/Paragraph";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/for-public";
import { H2 } from "../components/atoms/Headings";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const data = int === "en" ? en : cz;
        return (
          <Paragraph>
            <H2>{data.eventTitle}</H2>
            <div>{data.events.map((i) => i)}</div>
            <H2>{data.documentaryTitle}</H2>
            <div>
              {data.documentaries.map((i) => (
                <>
                  <b>{i.name}</b>
                  <div>{i.description}</div>
                </>
              ))}
            </div>
            <H2>{data.popularPapersTitle}</H2>
            <div>
              {data.popularPapers.map((i) => (
                <p>{i}</p>
              ))}
            </div>
            <H2>{data.popularVideoTitle}</H2>
            <div>{data.popularVideos}</div>
          </Paragraph>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;
