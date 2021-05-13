import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BreakpointProvider } from "gatsby-plugin-breakpoints";
import Header from "./Header";
import FooterContent from "./Footer";
import { IntProvider, Consumer } from "./Context";
/* import SEO from "../components/SEO"; */
import { cz, en } from "../content/general";
import "../css/typography.css";
import "../css/layout.css";
import { Helmet } from "react-helmet";
import ContainerWrapper from "../components/atoms/ContainerWrapper";

const mainTheme = {
  fontHeading: "Akrobat",
  white: "white",
  main: "#72972f", //green
  darkred: "#EB5723", //red
  black: "rgb(53, 53, 53)",
  grey: "rgb(53, 53, 53, 0.7)",
  extraSmallDevice: "360px",
  smallDevice: "480px",
  mediumDevice: "900px",
  largeDevice: "1024px",
  extraLargeDevice: "1600px",
  paragraphWidth: "1024px",
};

const GlobalStyle = createGlobalStyle`
  body {
   margin: 0;
   padding: 0;
   font-family: "sans-serif";
   line-height: 1.7;

   @media (min-width: 1920px) {
    font-size: 125%;
  }
  }
`;

export const defaultQueries = {
  xs: "(max-width: 576px)",
  sm: "(max-width: 900px)",
  md: "(max-width: 1024px)",
  l: "(max-width: 1536px)",
};

const Layout = (props) => {
  const {
    location: { pathname },
  } = props;
  const isIndex = pathname === "/";
  return (
    <IntProvider>
      <GlobalStyle />
      <BreakpointProvider queries={defaultQueries}>
        <ThemeProvider theme={mainTheme}>
          <Consumer>
            {({ int }) => (
              <Container>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>
                    {int === "en"
                      ? "Department of Paleoecology"
                      : "Oddělení paleoekologie"}
                  </title>
                </Helmet>
                {/*   <SEO /> */}
                <Header
                  isIndex={isIndex}
                  int={int}
                  generalData={int === "en" ? en : cz}
                />
                <Main>
                  <ContainerWrapper>{props.children}</ContainerWrapper>
                </Main>
                <footer>
                  <FooterContent
                    footer={int === "en" ? en.footer : cz.footer}
                  />
                </footer>
              </Container>
            )}
          </Consumer>
        </ThemeProvider>
      </BreakpointProvider>
    </IntProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  flex: 1;
  margin: 0 auto;
  width: min(1920px, 100%);
  max-width: 1920px;
`;
