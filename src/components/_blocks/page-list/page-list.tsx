import { PageFragment, PageListBlockFragment } from 'types'
import { StyledOverlayList, StyledPageList } from './styled-page-list'
import { Grid } from 'components/_elements'
import { OverlayCard } from 'components/_cards'
import { getHref } from 'utils'
import { useId } from 'react'

interface Props extends PageListBlockFragment {}

export const PageList: React.FC<Props> = ({ pageType, listType }) => {
  const uid = useId()
  const list = pageType?.children
  if (!list || list.length < 1) {
    return null
  }

  const OverlayListMapper = (item, index) => {
    const { id, title, pageSlug, image, description, parent } = item
    const href = getHref({ parent: parent.pageSlug, target: pageSlug })
    console.log({ item })
    return (
      <OverlayCard
        key={`card-${id}`}
        href={href}
        image={image}
        title={title}
        description={description}
      />
    )
  }

  return (
    <StyledPageList>
      {listType === 'overlay' && (
        <Grid key={`Grid-${uid}`}>
          {list.map(OverlayListMapper)}
          <p></p>
        </Grid>
      )}
    </StyledPageList>
  )
}
