import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    blue: '#4e7cfd',
    white: '#FFFFFF',
    black: '#242530',
    gray: '#e8ecef',
    purple: '#4e7cfd',
    red: '#e75259',
    green: '#6dd230',
  },
  spaces: 8,
  media: {
    tablet: '768px',
  }
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #f8fafb;
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