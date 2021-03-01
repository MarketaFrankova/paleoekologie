import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import menuIcon from "../icons/menu.svg";
import closeIcon from "../icons/close.svg";
import Menu from "./Menu";

const Navigation = ({
  generalData,
  isIndex,
  isNavCollapsed,
  setIsNavCollapsed,
}) => {
  const toggleMenu = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <Container isNavCollapsed={isNavCollapsed}>
      <NavbarToggle onClick={toggleMenu}>
        {!isNavCollapsed ? (
          <CloseIcon src={closeIcon} />
        ) : (
          <Icon src={menuIcon} />
        )}
      </NavbarToggle>
      <MenuWrapper isNavCollapsed={isNavCollapsed}>
        <Menu generalData={generalData} isIndex={isIndex} />
      </MenuWrapper>
    </Container>
  );
};

export default Navigation;

Navigation.propTypes = {
  isIndex: PropTypes.bool,
  generalData: PropTypes.object,
  isNavCollapsed: PropTypes.bool,
  setIsNavCollapsed: PropTypes.func,
};

export const Container = styled.ul`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  list-style: none;
  margin: 0;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 75px;
  right: 0;
  flex-direction: column;
  z-index: 2;
  background-color: ${(props) => props.theme.white};
  width: ${(props) => (props.isNavCollapsed ? 0 : "100%")};
  opacity: 0.99;
  transition: width 0.5s;
  -webkit-transition: width 0.5s;
  overflow: hidden;
  background-color: ${(props) => props.theme.terciary};
  padding-bottom: 10px;

  @media (min-width: ${(props) => props.theme.extraSmallDevice}) {
    width: ${(props) => (props.isNavCollapsed ? 0 : "300px")};
  }
`;

export const Icon = styled.img`
  height: 30px;
  &:hover {
    height: 35px;
    transition: height 0.5s;
  }
`;

export const CloseIcon = styled.img`
  height: 30px;
  margin-top: 10px;
  &:hover {
    height: 35px;
    transition: height 0.5s;
  }
`;

const NavbarToggle = styled.div`
  cursor: pointer;
  align-self: flex-end;
  margin-right: 10px;
`;
