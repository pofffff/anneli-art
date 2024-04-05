import {
  CardDescription,
  CardTitle,
  ContentWrapper,
  StyledStackedCard,
} from './styled-card'

import { Image1Fragment } from 'types'
import { DynamicImage } from 'components/_elements/image/dynamic-image'
import { ImageEl } from 'components/_elements'

interface Props {
  title?: string
  description?: string
  image?: Image1Fragment
  sizes: string
  aspectRatio: string
  href: string
  external?: boolean
  showDescription?: boolean
}

export const StackedCard: React.FC<Props> = ({
  title,
  description,
  href,
  external = false,
  image,
  sizes,
  aspectRatio,

  showDescription,
}) => {
  const props = external ? { rel: 'noreferrer noopener', target: '_blank' } : {}
  return (
    <StyledStackedCard
      href={href}
      {...props}
      // spacing={spacing}
      // shadow={shadow}
      // backgroundColor={backgroundColor}
    >
      {image && (
        <ImageEl image={image} sizes={sizes} aspectRatio={aspectRatio} />
      )}
      <ContentWrapper
      // backgroundColor={backgroundColor}
      // spacing={spacing}
      // shadow={shadow}
      >
        {title && <CardTitle>{title}</CardTitle>}
        {description && showDescription && (
          <CardDescription>{description}</CardDescription>
        )}
      </ContentWrapper>
    </StyledStackedCard>
  )
}
