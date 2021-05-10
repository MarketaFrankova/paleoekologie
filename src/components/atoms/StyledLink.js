import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const StyledLink = ({ to, children }) => (
  <Styledlink to={to}>{children}</Styledlink>
);

StyledLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  isSimpleLink: PropTypes.bool,
};

const Styledlink = styled(Link)`
  font-family: ${(props) => props.theme.fontHeading};
  color: ${(props) => props.theme.grey};
  padding: 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus,
  &.active {
    color: black;
  }
`;

export const Simplelink = styled(Link)`
  color: ${(props) => props.theme.main};
  text-decoration: none;
  cursor: pointer;
`;

export const ALink = ({ href, children }) => (
  <StyledA target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </StyledA>
);

const StyledA = styled.a`
  color: ${(props) => props.theme.main};
  cursor: pointer;
  text-decoration: none;
`;

export default StyledLink;
