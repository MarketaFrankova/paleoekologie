import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Publication = ({ children }) => {
  return <PubliStyled> {children} </PubliStyled>;
};

Publication.propTypes = {
  children: PropTypes.node,
};

const PubliStyled = styled.div`
  margin-bottom: 1rem;
`;
export default Publication;
