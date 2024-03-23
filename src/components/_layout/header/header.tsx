import { GlobalFragment, NavItemFragment, SiteFragment } from 'types'
import { StyledHeader, StyledNav, StyledNavItem } from './styled-header'
import { HeadingH3 } from 'components/_elements/headings/heading-h3'
import Logo from '../../../../public/anneli-art.svg'
interface Props {
  menu: NavItemFragment[]
  site: SiteFragment
}

export const Header: React.FC<Props> = ({ menu, site }) => {
  console.log({ site })

  return (
    <StyledHeader>
      <div>
        <Logo />
        <HeadingH3>{site.globalSeo?.siteName}</HeadingH3>
      </div>

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
