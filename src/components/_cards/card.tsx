import { Image1Fragment } from 'types'
import { SplitCard } from './split-card'
import { StyledCard } from './styled-card'

interface Props {
  title?: string
  description?: string
  image?: Image1Fragment
  href: string
  external: boolean
  shadow: boolean
  spacing: boolean
  centered: boolean
  backgroundColor?: string
  showDescription: boolean
}

export const Card: React.FC<Props> = ({
  title,
  description,
  image,
  href,
  external,
  shadow,
  spacing,
  centered,
  backgroundColor,
  showDescription,
}) => {
  return (
    <StyledCard>
      {backgroundColor && (
        <SplitCard
          backgroundColor={backgroundColor}
          title={title}
          description={description}
          image={image}
          href={href}
          external={!!external}
          spacing={spacing}
          shadow={shadow}
          showDescription={showDescription}
        />
      )}
    </StyledCard>
  )
}
