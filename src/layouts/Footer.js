import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import twitter from "../icons/twitter.svg";
/* import facebook from "../../static/images/facebook.png";
import youtube from "../../static/images/youtube.png";
import twitter from "../../static/images/twitter.png"; */

const FooterContent = ({ footer }) => {
  return (
    <Container>
      <FooterSection>
        <div> ...patička (kontakty)</div>
        <br />
        <a href="https://twitter.com/VegetPaleo">
          <Twitter src={twitter} alt="twitter" />
        </a>
      </FooterSection>
    </Container>
  );
};

export default FooterContent;

FooterContent.propTypes = {
  language: PropTypes.object,
  footer: PropTypes.object,
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1em auto 0;
  height: 100%;
`;

const FooterSection = styled.div`
  flex: 1;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.grey};
  padding: 1em;
  text-align: center;
  line-height: 1.2;
  min-width: 255px;
  font-size: 16px;
`;

const Twitter = styled.img`
  height: 40px;
  cursor: pointer;
`;

/* 
const A = styled.a`
  color: ${(props) => props.theme.white};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const Webmaster = styled.div`
  color: black;
  font-weight: bold;
  padding-top: 1em;
`;

const Img = styled.img`
  width: 3.8em;
  padding: 0.5em;
`;

const FooterHeader = styled.div`
  color: black;
  text-decoration: underline;
  font-weight: bold;
  padding-bottom: 0.5em;
`; */
