import Link from 'next/link'
import styled from 'styled-components'
import { spacings } from 'styles'

export const StyledHeader = styled.div`
  /* padding: ${spacings.M}; */
  width: 100%;
  display: flex;
  max-width: ${spacings.pageMaxWidth};
  margin-left: auto;
  margin-right: auto;
  /* justify-content: center; */
  /* align-content: center; */
  /* display: flex; */
`

export const StyledTopHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block-start: ${spacings.XS};
  margin-inline: ${spacings.M};
  width: 100%;
`
export const StyledLogoLink = styled(Link)`
  align-self: baseline;
  width: 115px;
`
export const StyledHeading = styled(Link)`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  margin-block-end: ${spacings.XS};

  &:hover {
    text-decoration: none;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-inline-end: ${spacings.XL};
`

export const StyledNavItem = styled(Link)`
  padding-inline: ${spacings.XS};
`
