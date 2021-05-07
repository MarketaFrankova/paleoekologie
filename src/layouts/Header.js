import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import HeaderTop from "./HeaderTop";
import logo from "../../static/images/bu-logo.png";

const Header = ({ isIndex, generalData, int }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  return (
    <>
      <HeaderTop
        generalData={generalData}
        isIndex={isIndex}
        isNavCollapsed={isNavCollapsed}
        setIsNavCollapsed={setIsNavCollapsed}
      />
      <SubContainer isNavCollapsed={isNavCollapsed}>
        <Inner>
          <Title>
            {int === "en"
              ? "Department of Paleoecology"
              : "Oddělení paleoekologie"}
          </Title>
          <LogoLink
            href="https://www.ibot.cas.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo src={logo} alt="logo" />
          </LogoLink>
        </Inner>
      </SubContainer>
    </>
  );
};

export default Header;

Header.propTypes = {
  language: PropTypes.object,
  isIndex: PropTypes.bool,
  generalData: PropTypes.object,
};

const SubContainer = styled.div`
  margin-top: 52px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.main};
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-family: ${(props) => props.theme.fontHeading};
  text-align: center;
  color: ${(props) => props.theme.white};
  font-size: 28px;
  @media (min-width: ${(props) => props.theme.mediumDevice}) {
    font-size: calc(20px + 2vw);
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% - 20px);
  align-items: center;

  @media (min-width: 480px) {
    padding: 0 20px;
    flex-direction: row;
    width: min(1920px, 100%);
    max-width: 1920px;
  }

  @media (min-width: 920px) {
    padding: 0 50px;
  }
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
    margin: 30px 0;
    width: 200px;
  }
`;
