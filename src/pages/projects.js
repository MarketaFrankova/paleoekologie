import * as React from "react";
import Paragraph from "../components/atoms/Paragraph";
import Project from "../components/projects/Project";
import {
  actualCz,
  actualEn,
  completedCz,
  completedEn,
  generalCz,
  generalEn,
} from "../content/projects";
import { Consumer } from "../layouts/Context";
import { H2 } from "../components/atoms/Headings";
const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const actual = int === "en" ? actualEn : actualCz;
        const completed = int === "en" ? completedEn : completedCz;
        const general = int === "en" ? generalEn : generalCz;
        return (
          <Paragraph>
            <H2>{int === "en" ? "Current projects" : "Aktuální projekty"}</H2>
            {actual.map((actualProject) => (
              <Project data={actualProject} general={general} />
            ))}

            <H2>
              {int === "en" ? "Completed projects" : "Dokončené projekty"}
            </H2>
            {completed.map((completedProject) => (
              <Project data={completedProject} general={general} />
            ))}
          </Paragraph>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;
