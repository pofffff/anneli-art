import { ListSize, PageLinkFragment } from 'types'
import { StyledListItem, StyledVerticalList } from './styled-list'
import { ImageEl, Markdown } from 'components/_elements'
import { HeadingH3 } from 'components/_elements/headings/heading-h3'
import { getHref } from 'utils'

interface Props {
  items: PageLinkFragment[]
  size: ListSize
}

export const VerticalList: React.FC<Props> = ({ items, size }) => {
  return (
    <StyledVerticalList>
      {items.map((item, index) => (
        <StyledListItem
          href={getHref({
            parent: item.parent?.pageSlug,
            target: item.pageSlug,
          })}
          size={size}
          key={index}
        >
          {/* TODO maybe move to a Card */}
          <ImageEl
            sizes="350px"
            aspectRatio={'1/1'}
            image={item.image ?? null}
          />
          <HeadingH3>{item.title}</HeadingH3>
          <Markdown>{item.description}</Markdown>
        </StyledListItem>
      ))}
    </StyledVerticalList>
  )
}
