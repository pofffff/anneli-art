import { boxShadow, buttonSizes, colors } from 'styles'
import styled, { css } from 'styled-components'

import Link from 'next/link'

const buttonStyles = css`
  cursor: pointer;
  padding: ${buttonSizes.verticalM} ${buttonSizes.horizontalM};
  display: inline-block;
  width: auto;
  align-self: start;
  border: 1px solid ${colors.backgroundPrimary};
  box-shadow: ${boxShadow.button};

  &:hover {
    background-color: ${colors.backgroundPrimaryAccent};
    border-color: ${colors.backgroundPrimaryAccent};
  }
`

export const StyledButtonLink = styled(Link)`
  ${buttonStyles}
  background-color: ${colors.backgroundPrimary};
`

export const StyledButtonPrimary = styled.button<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  ${buttonStyles}
  background-color: ${colors.backgroundPrimary};
`

export const StyledButtonSecondary = styled.button<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  ${buttonStyles}

  &:hover {
    background-color: none;
  }
`

export const StyledLink = styled(Link)``
