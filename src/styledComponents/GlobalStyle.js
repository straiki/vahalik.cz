import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Source Sans Pro";
    font-display: fallback;
    //noinspection CssUnknownTarget
    src: url("/fonts/SourceSansPro-Regular.ttf") format("truetype");
  }

  body {
    margin: 0;
    font-family: "Source Sans Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }

  h1 + p {
    margin-top: 0.67em;
  }

  p > a {
    margin: 16px;
  }

  a {
    color: yellowgreen;
    text-decoration: none;
  }
`;
