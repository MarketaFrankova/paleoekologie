import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const H2 = ({ children, noTop }) => {
  return <H2Styled noTop={noTop}> {children} </H2Styled>;
};

H2.propTypes = {
  children: PropTypes.node,
};

const H2Styled = styled.h2`
  color: ${(props) => props.theme.grey};
  margin-top: ${(props) => props.noTop && 0};
  margin-bottom: ${(props) => props.noTop && "5px"};
  border-bottom: 1px solid ${(props) => props.theme.grey};
  font-family: ${(props) => props.theme.fontHeading};
  font-variant: small-caps;
`;

export const H3 = ({ children, green }) => {
  return <H3Styled green={green}> {children} </H3Styled>;
};

H3.propTypes = {
  children: PropTypes.node,
};

const H3Styled = styled.h3`
  color: ${(props) => (props.green ? props.theme.main : props.theme.grey)};
  /*   border-bottom: 1px solid ${(props) => props.theme.grey}; */
  font-family: ${(props) => props.theme.fontHeading};
  font-variant: small-caps;
`;
