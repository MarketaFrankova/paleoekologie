import * as React from "react";
import Paragraph from "../components/atoms/Paragraph";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import PersonBox from "../components/people/PersonBox";
import { staffCz, staffEn } from "../content/people";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const staffData = int === "en" ? staffEn : staffCz;
        const data = int === "en" ? en : cz;
        return (
          <ContainerWrapper>
            <Paragraph>
              {staffData.map((person) => (
                <PersonBox personInfo={person} key={person.id} data={data} />
              ))}
            </Paragraph>
          </ContainerWrapper>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;
