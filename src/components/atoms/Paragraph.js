import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Paragraph = ({ children }) => {
  return <ParagraphStyled> {children} </ParagraphStyled>;
};

Paragraph.propTypes = {
  children: PropTypes.node,
};

const ParagraphStyled = styled.div`
  max-width: ${(props) => props.theme.paragraphWidth};
  margin: 1rem 2rem;
  height: 100%;
`;

export default Paragraph;
