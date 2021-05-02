import * as React from "react";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/for-students";
import { H2 } from "../components/atoms/Headings";
import styled from "styled-components";
import Paragraph from "../components/atoms/Paragraph";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const data = int === "en" ? en : cz;
        return (
          <Paragraph>
            <div>
              <H2>{data.highSchoolTitle}</H2>
              <div>{data.highSchoolDescription}</div>
              <H2>{data.universityTitle}</H2>
              <div>{data.universityDescription}</div>
              <div>
                {data.supervisors.map((supervisor) => (
                  <SupervisorWrapper>
                    <div>{supervisor.supervisor}</div>
                    {supervisor.theses.map((item) => (
                      <div>
                        <Name>{item.name}</Name>
                        <div>{item.description}</div>
                      </div>
                    ))}
                  </SupervisorWrapper>
                ))}
              </div>
            </div>
          </Paragraph>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

const SupervisorWrapper = styled.div`
  margin: 2rem 0;
`;

const Name = styled.div`
  font-weight: bold;
  margin: 1rem 0;
`;
