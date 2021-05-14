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
        <Menu
          generalData={generalData}
          isIndex={isIndex}
          closeNav={() => setIsNavCollapsed(true)}
        />
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
  position: relative;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  flex-direction: column;
  z-index: 5;
  background-color: ${(props) => props.theme.white};
  border-top: ${(props) => `1px solid ${props.theme.main}`};
  border-bottom: ${(props) => `1px solid ${props.theme.main}`};
  width: ${(props) => (props.isNavCollapsed ? 0 : "100vw")};
  overflow: hidden;
  padding-bottom: 10px;
`;

export const Icon = styled.img`
  margin-top: 3px;
  height: 30px;
`;

export const CloseIcon = styled.img`
  height: 30px;
  margin-top: 10px;
`;

const NavbarToggle = styled.div`
  cursor: pointer;
  align-self: flex-end;
  margin-right: 10px;
`;
