import { HeadingH2, ImageEl, Markdown } from 'components/_elements'
import { ShowcaseBlockFragment } from 'types'
import { StyledShowcase, StyledShowcaseContent } from './styled-showcase'
import { HeadingH3 } from 'components/_elements/headings/heading-h3'

interface Props extends ShowcaseBlockFragment {}

export const Showcase: React.FC<Props> = ({
  alignImageLeft,
  background,
  description,
  title,
  subtitle,
  image,
}) => {
  return (
    <StyledShowcase
      background={background?.hex}
      left={alignImageLeft ? true : false}
    >
      <StyledShowcaseContent>
        <HeadingH2>{title}</HeadingH2>
        <HeadingH3>{subtitle}</HeadingH3>
        <Markdown>{description}</Markdown>
      </StyledShowcaseContent>
      <ImageEl aspectRatio={'1'} image={image ?? null} />
    </StyledShowcase>
  )
}
