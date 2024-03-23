import { PageListBlockFragment } from 'types'
import { StyledPageList } from './styled-page-list'

interface Props extends PageListBlockFragment {}

export const PageList: React.FC<Props> = ({ pageType }) => {
  return <StyledPageList></StyledPageList>
}
