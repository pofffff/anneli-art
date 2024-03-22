import { breakpoints, fontSizes } from 'styles'
import styled, { css } from 'styled-components'

interface HeadingProps {}

const baseHeadingStyle = () => {
  return css`
    @include heading-style($font-size-h1, $color-content-primary);
  `
}

export const StyledHeadingH1 = styled.h1<HeadingProps>`
  ${baseHeadingStyle}
  font-size: calc(${fontSizes.h1} - 0.5rem);

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: ${fontSizes.h1};
  }
`

export const StyledHeadingH2ASH1 = styled.h2<HeadingProps>`
  ${baseHeadingStyle}
  font-size: calc(${fontSizes.h1} - 1rem);

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: ${fontSizes.h1};
  }
`

export const StyledHeadingH2 = styled.h2<HeadingProps>`
  ${baseHeadingStyle}
  font-size: calc(${fontSizes.h2} - 0.5rem);

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: ${fontSizes.h2};
  }
`
