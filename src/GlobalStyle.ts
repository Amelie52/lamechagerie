import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: .625em;
    font-size: calc(1em * .625);
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.text.FONT_SIZE_MEDIUM};
    font-weight: 400;
    line-height: ${(props) => props.theme.text.LINE_HEIGHT};
    background-color: #FAFAFA;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${(props) => props.theme.colors.PRIMARY_TEXT};
  }

  button, a {
    cursor: pointer;
    font-size: ${(props) => props.theme.text.FONT_SIZE_MEDIUM};
    line-height: ${(props) => props.theme.text.LINE_HEIGHT};
  }

  body, button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
