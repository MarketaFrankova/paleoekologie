import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import StyledLink from "../components/atoms/StyledLink";

const ListLink = ({ to, children, className }) => (
  <Li className={className}>
    <StyledLink to={to}>{children}</StyledLink>
  </Li>
);

ListLink.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  to: PropTypes.string,
  className: PropTypes.string,
  isSimpleLink: PropTypes.bool,
};

const windowGlobal = typeof window !== "undefined" && window;

const Menu = ({ generalData, isIndex }) => {
  const getClass = (urlIncludes) => {
    if (
      windowGlobal &&
      windowGlobal.location &&
      windowGlobal?.location?.href.includes(urlIncludes)
    ) {
      return "active";
    } else return "";
  };

  return (
    <>
      <ListLink to="/" className={isIndex ? "active" : ""}>
        {generalData.menu.menuHomepage}
      </ListLink>
      <ListLink to="/research/" className={getClass("research")}>
        {generalData.menu.menuResearch}
      </ListLink>
      <ListLink to="/people/" className={getClass("people")}>
        {generalData.menu.menuPeople}
      </ListLink>
      <ListLink to="/projects/" className={getClass("projects")}>
        {generalData.menu.menuProjects}
      </ListLink>
      <ListLink to="/publications/" className={getClass("publications")}>
        {generalData.menu.menuPublications}
      </ListLink>
      <ListLink to="/laboratory/" className={getClass("laboratory")}>
        {generalData.menu.menuLaboratory}
      </ListLink>
      <ListLink to="/collections/" className={getClass("collections")}>
        {generalData.menu.menuCollections}
      </ListLink>
      <ListLink to="/for-students/" className={getClass("for-students")}>
        {generalData.menu.menuForStudents}
      </ListLink>
      <ListLink to="/links/" className={getClass("links")}>
        {generalData.menu.menuLinks}
      </ListLink>
    </>
  );
};

export default Menu;

Menu.propTypes = {
  isIndex: PropTypes.bool,
  generalData: PropTypes.object,
};

export const Li = styled.li`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.grey};
  margin: 10px 0.5rem 5px;
  white-space: nowrap;
  font-size: 1.25rem;
  text-align: center;

  &:last-child {
    border-right: 0px;
  }
  @media (max-width: ${(props) => props.theme.mediumDevice}) {
    border: 0px;
  }
  &.active > a {
    color: black;
    font-weight: 600;
  }

  @media (min-width: ${(props) => props.theme.largeDevice}) {
    font-size: 1.5rem;
    justify-content: flex-end;
  }

  @media (min-width: ${(props) => props.theme.extraLargeDevice}) {
    font-size: 1.75rem;
  }
`;
