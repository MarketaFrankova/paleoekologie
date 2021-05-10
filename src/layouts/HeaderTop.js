import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";
import { Consumer } from "./Context";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const FlagEN = () => (
  <Consumer>
    {({ changeToEn, int }) => {
      const isActive = int === "en";
      return (
        <Lang onClick={() => changeToEn()} active={isActive}>
          En
        </Lang>
      );
    }}
  </Consumer>
);

const FlagCZ = () => (
  <Consumer>
    {({ changeToCz, int }) => {
      const isActive = int === "cz";
      return (
        <Lang onClick={() => changeToCz()} active={isActive}>
          Cz
        </Lang>
      );
    }}
  </Consumer>
);

const HeaderTop = ({
  generalData,
  isIndex,
  isNavCollapsed,
  setIsNavCollapsed,
}) => {
  const breakpoints = useBreakpoint();
  return (
    <Container>
      <LanguageSwitcher>
        <FlagCZ /> <FlagEN />
      </LanguageSwitcher>
      {breakpoints.sm ? (
        <NavigationMobile
          generalData={generalData}
          isIndex={isIndex}
          isNavCollapsed={isNavCollapsed}
          setIsNavCollapsed={setIsNavCollapsed}
        />
      ) : (
        <Navigation generalData={generalData} isIndex={isIndex} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 1;
  border-bottom: 1px solid ${(props) => props.theme.main};
  background-color: white;
`;

const LanguageSwitcher = styled.div`
  display: flex;
  margin-left: 1rem;
  @media (min-width: ${(props) => props.theme.largeDevice}) {
    margin-left: 2rem;
  }
`;

const Lang = styled.div`
  cursor: ${(props) => (props.active ? "default" : "pointer")};
  padding: 3px;
  height: max-content;
  font-size: ${(props) => (props.active ? "1.75rem" : "1.25rem")};
  color: ${(props) => props.active && props.theme.darkred};
  &:hover {
    color: ${(props) => !props.active && props.theme.main};
  }
`;

export default HeaderTop;

HeaderTop.propTypes = {
  generalData: PropTypes.object,
  isIndex: PropTypes.bool,
};
