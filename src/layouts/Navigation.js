import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Menu from "./Menu";

const Navigation = ({ generalData, isIndex }) => {
  return (
    <Container>
      <Menu generalData={generalData} isIndex={isIndex} />
    </Container>
  );
};

export default Navigation;

Navigation.propTypes = {
  isIndex: PropTypes.bool,
  generalData: PropTypes.object,
};

export const Container = styled.div`
  display: flex;
  align-self: flex-end;
  list-style: none;
  margin-right: 0;
  margin-left: auto;
`;
