import { ButtonPrimary, HeadingH1, HeadingH2, Markdown } from 'components'
import { HeroContent, HeroContentWrapper, StyledHero } from './styled-hero'

import { HeroBlockFragment } from 'types'
import { HeroImage } from 'components/_layout'

interface Props extends HeroBlockFragment {
  priority: boolean
  index: number
}

export const Hero: React.FC<Props> = ({
  center,
  description,
  title,
  subtitle,
  contentBackground,
  ctaLabel,
  ctaLink,
  desktopImage,
  tabletImage,
  mobileImage,
  priority,
  index,
}) => {
  const isH1 = index === 0
  return (
    <StyledHero>
      <HeroImage
        mobile={mobileImage}
        tablet={tabletImage}
        desktop={desktopImage}
        priority={priority}
      />
      <HeroContentWrapper center={center}>
        <HeroContent center={center} background={contentBackground?.hex}>
          <HeadingH1 isH1={isH1}>{title}</HeadingH1>
          <HeadingH2>{subtitle}</HeadingH2>
          <Markdown>{description}</Markdown>
          {ctaLink?.pageSlug && ctaLabel && (
            <ButtonPrimary href={ctaLink.pageSlug}>{ctaLabel}</ButtonPrimary>
          )}
        </HeroContent>
      </HeroContentWrapper>
    </StyledHero>
  )
}
