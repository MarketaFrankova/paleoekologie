import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import twitter from "../icons/twitter.svg";
import { Consumer } from "./Context";

const FooterContent = ({ footer }) => {
  return (
    <Consumer>
      {({ int }) => {
        return (
          <Container>
            <FooterSection>
              <b> {footer.addressBrno}</b>
              <div> {footer.institute}</div>
              <div> {footer.name}</div>
              <div> {footer.streetBrno}</div>
              <div> {footer.zipBrno}</div>
            </FooterSection>
            <FooterSection>
              <b> {footer.addressPruhonice}</b>
              <div> {footer.institute}</div>
              <div> {footer.name}</div>
              <div> {footer.streetPruhonice}</div>
              <div> {footer.zipPruhonice}</div>
            </FooterSection>
            <FooterSection>
              <b> {footer.contact}</b>
              <div> {footer.contactName}</div>
              <div> {footer.contactMail}</div>
              <div> {footer.contactPhone}</div>
            </FooterSection>
            <FooterSection>
              <div>
                <b> {footer.socialSites}</b>
              </div>
              <a
                href="https://twitter.com/VegetPaleo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter src={twitter} alt="twitter" />
              </a>
            </FooterSection>
          </Container>
        );
      }}
    </Consumer>
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
  line-height: 1.5;
  min-width: 255px;
  font-size: 16px;
`;

const Twitter = styled.img`
  margin-top: 5px;
  height: 40px;
  cursor: pointer;
`;
