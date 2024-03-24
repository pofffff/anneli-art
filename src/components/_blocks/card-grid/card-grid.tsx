import { Card, Grid } from 'components'

import { CardGridBlockFragment } from 'types'
import { StyledCardGrid } from './styled-card-grid'
import { useId } from 'react'

interface Props extends CardGridBlockFragment {}

export const CardGrid: React.FC<Props> = ({
  spacing,
  centered,
  shadow,
  pagination,
  links,
  background,
  showDescription,
}) => {
  const uid = useId()
  const CardMapper = (link, index) => {
    const href = link?.pageSlug || link?.url
    return (
      <Card
        title={link?.title}
        description={link?.description}
        href={href}
        external={!!link?.url}
        key={`Card-${index}-${uid}`}
        image={link?.image}
        shadow={shadow}
        spacing={spacing}
        centered={centered}
        backgroundColor={background?.hex}
        showDescription={showDescription}
      />
    )
  }
  return (
    <StyledCardGrid blockMargin={spacing}>
      <Grid spacing={spacing}>{links.map(CardMapper)}</Grid>
      {/* TODO add pagination util */}
    </StyledCardGrid>
  )
}
