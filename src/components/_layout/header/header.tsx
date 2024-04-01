import { NavItemFragment, SiteFragment } from 'types'
import {
  StyledHeader,
  StyledHeading,
  StyledNav,
  StyledNavItem,
  StyledTopHeader,
} from './styled-header'
import { HeadingH3 } from 'components/_elements/headings/heading-h3'
// import LogoSvg from './anneli-art.svg'
// import Link from 'next/link'

interface Props {
  menu: NavItemFragment[]
  site: SiteFragment
}

export const Header: React.FC<Props> = ({ menu, site }) => {
  return (
    <StyledHeader>
      <StyledTopHeader>
        {/* <StyledLogoLink href={'/'}>
          <LogoSvg />
        </StyledLogoLink> */}
        <StyledHeading href={'/'}>
          <HeadingH3>{site.globalSeo?.siteName}</HeadingH3>
        </StyledHeading>
      </StyledTopHeader>

      <StyledNav>
        {menu.map((item) => {
          return (
            (item?.pageLink || item?.url) && (
              <StyledNavItem key={item.id} href={`/${item.pageLink?.pageSlug}`}>
                {item.title}
              </StyledNavItem>
            )
          )
        })}
      </StyledNav>
    </StyledHeader>
  )
}
