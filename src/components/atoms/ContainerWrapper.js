import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContainerWrapper = ({ children }) => {
  return <Containerwrapper>{children}</Containerwrapper>;
};

export default ContainerWrapper;

const Containerwrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100%;
`;

ContainerWrapper.propTypes = {
  children: PropTypes.node,
};
