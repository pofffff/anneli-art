import { createGlobalStyle, css } from 'styled-components'

import { fonts } from './theme'

const fontStyles = css`
  body,
  span,
  div,
  p,
  a,
  input,
  select,
  article,
  section {
    font-size: ${fonts.size};
    margin: 0;
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`

const globalStyle = css`
  html {
    min-height: 100vh;
    width: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  #root {
    min-height: 100vh;
  }

  #__next {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`

export const GlobalStyle = createGlobalStyle`
${globalStyle}
${fontStyles}
`
