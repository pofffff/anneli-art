import { ListSize, PageLinkFragment } from 'types'
import { StyledListItem, StyledVerticalList } from './styled-list'
import { ImageEl, Markdown } from 'components/_elements'
import { HeadingH3 } from 'components/_elements/headings/heading-h3'

interface Props {
  items: PageLinkFragment[]
  size: ListSize
}

export const VerticalList: React.FC<Props> = ({ items, size }) => {
  return (
    <StyledVerticalList>
      {items.map((item, index) => (
        <StyledListItem size={size} key={index}>
          {/* TODO maybe move to a Card */}
          <ImageEl aspectRatio={'3/4'} image={item.image ?? null} />
          <HeadingH3>{item.title}</HeadingH3>
          <Markdown>{item.description}</Markdown>
        </StyledListItem>
      ))}
    </StyledVerticalList>
  )
}
