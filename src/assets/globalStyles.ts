import { css } from "@emotion/react";

const basicLetterSpacing = -0.03;

const globalStyles = css`
  @font-face {
    src: url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");
  }

  :root {
    --header-height: 70px;
    --footer-height: 140px;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  * {
    // figma style 적용
    letter-spacing: ${basicLetterSpacing}rem;
  }

  html,
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }

    *::-webkit-scrollbar {
      display: none;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.3rem;
    color: #333;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; /* Some margin before the text */
  }

  input {
    &::placeholder {
      color: #aaa;
    }
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  a:visited,
  a:focus,
  a:active {
    text-decoration: none;
  }

  label,
  input {
    vertical-align: middle;
    font-size: inherit;
  }

  img {
    border: 0;
    vertical-align: top;
    max-width: 100%;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    width: auto;
    border-radius: 0;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    cursor: pointer;
  }

  button:focus {
    outline: 0;
  }
`;

export default globalStyles;
