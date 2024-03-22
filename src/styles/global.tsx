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
    font-family: ${fonts.familyPrimary};
    font-size: ${fonts.size};
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.familySecondary};
  }
`

const globalStyle = css`
  html {
    min-height: 100vh;
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
