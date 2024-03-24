import styled from 'styled-components'
import { breakpoints, spacings } from 'styles'

interface StyledMediaProps {
  big: boolean
}
export const StyledMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const StyledInnerContainer = styled.div<StyledMediaProps>`
  ${({ big }) =>
    !big &&
    `
    height: 250px;
    `}

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    ${({ big }) =>
      !big &&
      `
    width: 400px;
    `}
  }
`
