import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { H3 } from "../atoms/Headings";

const Project = ({ data, general }) => {
  return (
    <ProjectWrapper>
      <H3 green> {data.name}</H3>
      <div>
        <strong>{general.id}</strong>
        {data.id}
      </div>
      <div>
        <strong>{general.finance}</strong>
        {data.finance}
      </div>
      <div>
        <strong>{general.duration}</strong>
        {data.duration}
      </div>
      {data.web && (
        <div>
          <strong>{general.web}</strong>
          {data.web}
        </div>
      )}
      <div>
        <strong>{general.period}</strong>
        {data.period}
      </div>
      {data.mainResearcher && (
        <div>
          <strong>{general.mainResearcher}</strong>
          {data.mainResearcher}
        </div>
      )}
      {data.mainResearcherF && (
        <div>
          <strong>{general.mainResearcherF}</strong>
          {data.mainResearcherF}
        </div>
      )}
      {data.coResearchers && (
        <div>
          <strong>{general.coResearchers}</strong>
          {data.coResearchers}
        </div>
      )}
      {data.coResearcher && (
        <div>
          <strong>{general.coResearcher}</strong>
          {data.coResearcher}
        </div>
      )}
      {general.teamMembers && (
        <div>
          <strong>{general.teamMembers}</strong>
          {data.teamMembers}
        </div>
      )}
      <p>
        <strong>{general.description}</strong>
        {data.description}
      </p>
    </ProjectWrapper>
  );
};

export default Project;

Project.propTypes = {
  personInfo: PropTypes.object,
  openDetail: PropTypes.func,
};

const ProjectWrapper = styled.div`
  margin: 50px 0;
`;
