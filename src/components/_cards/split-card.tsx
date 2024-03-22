import {
  CardDescription,
  CardTitle,
  ContentWrapper,
  StyledSplitCard,
} from './styled-card'

import { HeadingH2 } from 'components'
import { Image1Fragment } from 'types'
import { SquareImage } from 'components/_elements/image/square-image'

interface Props {
  backgroundColor: string
  title?: string
  description?: string
  image?: Image1Fragment
  spacing: boolean
  shadow: boolean
  href: string
  external: boolean
  showDescription: boolean
}

export const SplitCard: React.FC<Props> = ({
  backgroundColor,
  title,
  description,
  href,
  external,
  image,
  spacing,
  shadow,
  showDescription,
}) => {
  const props = external ? { rel: 'noreferrer noopener', target: '_blank' } : {}
  return (
    <StyledSplitCard
      href={href}
      {...props}
      spacing={spacing}
      shadow={shadow}
      backgroundColor={backgroundColor}
    >
      {image && <SquareImage image={image} />}
      <ContentWrapper
        backgroundColor={backgroundColor}
        spacing={spacing}
        shadow={shadow}
      >
        {title && <CardTitle>{title}</CardTitle>}
        {description && showDescription && (
          <CardDescription>{description}</CardDescription>
        )}
      </ContentWrapper>
    </StyledSplitCard>
  )
}
