import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    blue: '#4e7cfd',
  },
  spaces: 8,
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
  }
`;

const Theme = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;