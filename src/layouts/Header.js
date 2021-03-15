import React, { Fragment, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
/* 
import ImgSlider from "./ImgSlider"; */
import HeaderTop from "./HeaderTop";

import logo from "../../static/images/bu-logo.png";
import mainLogo from "../../static/images/logo.png";

//query must be inline!!! not as a variable!
const Header = ({ isIndex, generalData, int }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  return (
    <HeaderContainer>
      <HeaderTop
        generalData={generalData}
        isIndex={isIndex}
        isNavCollapsed={isNavCollapsed}
        setIsNavCollapsed={setIsNavCollapsed}
      />
      <SubContainer isNavCollapsed={isNavCollapsed}>
        <Title>
          {int === "en"
            ? "Department of Paleoecology"
            : "Oddělení paleoekologie"}
        </Title>
        <LogoLink href="https://www.ibot.cas.cz/" target="_blank">
          <Logo src={logo} alt="logo" />
        </LogoLink>

        {/*  <RightSide>  <ImgSlider imgs={imgs} /> </RightSide>*/}
      </SubContainer>
    </HeaderContainer>
  );
};

export default Header;

Header.propTypes = {
  language: PropTypes.object,
  isIndex: PropTypes.bool,
  generalData: PropTypes.object,
};

const HeaderContainer = styled.div`
  /*   position: sticky;
  top: 0;
  z-index: 99; */
`;

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.main};
  align-items: center;
`;

const LeftSide = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-family: ${(props) => props.theme.fontHeading};
  flex: 5;
  text-align: center;
  color: ${(props) => props.theme.black};
  font-size: calc(20px + 2vw);
`;

const LogoLink = styled.a`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.img`
  margin: 2% 3%;
  width: 150px;
  @media (min-width: ${(props) => props.theme.mediumDevice}) {
    margin: 30px 50px;
    width: 200px;
  }
`;

/* const MainLogo = styled.img`
  max-width: 15%;
  margin-left: 2%;
  margin-right: 8%;
  @media (max-width: 1520px) {
    max-width: 15%;
  }
`; */

/* const RightSide = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.main};
  @media (max-width: 1400px) {
    width: 100%;
  }
`; */
