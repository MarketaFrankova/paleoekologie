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

const mainTheme = {
  fontHeading: "Akrobat",
  fontClassic: "sans-serif",
  white: "white",
  main: "#7eb51b",
  terciary: "#dfc524",
  secondary: "#597723",
  black: "rgb(53, 53, 53)",
  grey: "rgb(53, 53, 53, 0.7)",
  extraSmallDevice: "360px",
  smallDevice: "480px",
  mediumDevice: "900px",
  largeDevice: "1024px",
  extraLargeDevice: "1600px",
  paragraphWidth: "865px",
};

const GlobalStyle = createGlobalStyle`
  body {
   margin: 0;
   padding: 0;
   font-family: "sans-serif";
   line-height: 1.7;
   font-size: 112.5%;

   @media (min-width: 600px) {
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
                {/*   <SEO /> */}
                <Header
                  isIndex={isIndex}
                  generalData={int === "en" ? en : cz}
                />
                <Main>{props.children}</Main>
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
  flex: 1;
`;
