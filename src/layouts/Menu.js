import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import StyledLink from "../components/atoms/StyledLink";

const ListLink = ({ to, children, className, onClick }) => (
  <Li className={className} onClick={onClick}>
    <StyledLink to={to}>
      {children}
      {JSON.stringify(onClick)}
    </StyledLink>
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

const Menu = ({ generalData, isIndex, closeNav }) => {
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
      <ListLink to="/" className={isIndex ? "active" : ""} onClick={closeNav}>
        {generalData.menu.menuHomepage}
      </ListLink>
      <ListLink
        to="/research/"
        className={getClass("research")}
        onClick={closeNav}
      >
        {generalData.menu.menuResearch}
      </ListLink>
      <ListLink to="/people/" className={getClass("people")} onClick={closeNav}>
        {generalData.menu.menuPeople}
      </ListLink>
      <ListLink
        to="/projects/"
        className={getClass("projects")}
        onClick={closeNav}
      >
        {generalData.menu.menuProjects}
      </ListLink>
      <ListLink
        to="/publications/"
        className={getClass("publications")}
        onClick={closeNav}
      >
        {generalData.menu.menuPublications}
      </ListLink>
      <ListLink
        to="/laboratory/"
        className={getClass("laboratory")}
        onClick={closeNav}
      >
        {generalData.menu.menuLaboratory}
      </ListLink>
      <ListLink
        to="/collections/"
        className={getClass("collections")}
        onClick={closeNav}
      >
        {generalData.menu.menuCollections}
      </ListLink>
      <ListLink
        to="/for-students/"
        className={getClass("for-students")}
        onClick={closeNav}
      >
        {generalData.menu.menuForStudents}
      </ListLink>
      <ListLink
        to="/for-public/"
        className={getClass("for-public")}
        onClick={closeNav}
      >
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

export const Li = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.grey};
  z-index: 999 !important;
  white-space: nowrap;
  font-size: 1.2rem;
  text-align: center;

  @media (min-width: ${(props) => props.theme.largeDevice}) {
    margin: 10px 0.5rem 5px;
  }

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
    font-size: 1.3rem;
    justify-content: flex-end;
  }
  @media (min-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.extraLargeDevice}) {
    font-size: 1.75rem;
  }
`;
