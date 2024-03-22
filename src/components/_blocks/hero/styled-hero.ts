import { breakpoints, colors, spacings } from 'styles'

import { getTextColor } from 'utils'
import styled from 'styled-components'

export const StyledHero = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  z-index: 1;
  aspect-ratio: 3 / 4;

  @media screen and (min-width: ${breakpoints.tablet}) {
    aspect-ratio: 1 / 1;
    min-height: auto;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    aspect-ratio: 16 / 9;
  }
`

interface HeroContentWrapperProps {
  center?: boolean
}

export const HeroContentWrapper = styled.div<HeroContentWrapperProps>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ center }) =>
    center &&
    `
        align-items: center;
    `};
`
interface HeroContentProps {
  background?: string
  center?: boolean
}
export const HeroContent = styled.div<HeroContentProps>`
  max-width: 100%;
  margin: ${spacings.containerL};
  padding: ${spacings.containerS};
  display: flex;
  flex-direction: column;

  ${({ background }) => {
    if (!background) return
    const textColor = getTextColor(
      background,
      colors.contentLight,
      colors.contentDark,
    )
    return (
      background &&
      `
        background: ${background};
        color: ${textColor};
    `
    )
  }};

  ${({ center }) =>
    center &&
    `
        align-items: center;

    `};

  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 50%;
  }
`
