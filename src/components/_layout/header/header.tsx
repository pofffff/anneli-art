import { NavItemFragment } from 'types'

interface Props {
  menu: NavItemFragment[]
}

export const Header: React.FC<Props> = ({ menu }) => {
  return <div>Menu</div>
}
