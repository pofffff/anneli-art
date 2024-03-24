import { ImageEl, Video } from 'components/_elements'
import { MediaBlockFragment } from 'types'
import { StyledInnerContainer, StyledMedia } from './styled-media'

interface Props extends MediaBlockFragment {}

export const Media: React.FC<Props> = ({ big, image, video }) => {
  return (
    <StyledMedia>
      <StyledInnerContainer big={!!big}>
        {image?.responsiveImage && (
          <ImageEl aspectRatio={'3/4'} image={image} />
        )}
        {video && <Video src={video.url} preload={'none'} />}
      </StyledInnerContainer>
    </StyledMedia>
  )
}
