import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { H3 } from "../atoms/Headings";

const Project = ({ data, general }) => {
  return (
    <ProjectWrapper>
      <H3 green> {data.name}</H3>
      <div>
        <b>{general.id}</b>
        {data.id}
      </div>
      <div>
        <b>{general.finance}</b>
        {data.finance}
      </div>
      <div>
        <b>{general.duration}</b>
        {data.duration}
      </div>
      {data.web && (
        <div>
          <b>{general.web}</b>
          {data.web}
        </div>
      )}
      <div>
        <b>{general.period}</b>
        {data.period}
      </div>
      {data.mainResearcher && (
        <div>
          <b>{general.mainResearcher}</b>
          {data.mainResearcher}
        </div>
      )}
      {data.mainResearcherF && (
        <div>
          <b>{general.mainResearcherF}</b>
          {data.mainResearcherF}
        </div>
      )}
      {data.coResearchers && (
        <div>
          <b>{general.coResearchers}</b>
          {data.coResearchers}
        </div>
      )}
      {data.coResearcher && (
        <div>
          <b>{general.coResearcher}</b>
          {data.coResearcher}
        </div>
      )}
      {general.teamMembers && (
        <div>
          <b>{general.teamMembers}</b>
          {data.teamMembers}
        </div>
      )}
      <p>
        <b>{general.description}</b>
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
