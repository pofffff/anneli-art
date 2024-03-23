import Link from 'next/link'
import styled from 'styled-components'
import { spacings } from 'styles'

export const StyledHeader = styled.div`
  margin: ${spacings.M};
  width: 100%;
  justify-content: center;
  align-content: center;
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`

export const StyledNavItem = styled(Link)`
  padding-inline: ${spacings.XS};
`
