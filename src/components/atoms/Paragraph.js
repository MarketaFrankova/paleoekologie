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
  width: 100%;
  max-width: ${(props) => props.theme.paragraphWidth};
  padding: 1rem 2rem;
  height: 100%;
`;

export default Paragraph;
