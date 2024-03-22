import Image from 'next/image'
import { Image1Fragment } from 'types'
import { StyledImage } from './styled-image'

interface ImageProps {
  image: Image1Fragment
  sizes?: string
}

export const SquareImage: React.FC<ImageProps> = ({
  image,
  sizes = 'auto',
}) => {
  const ImageElement: React.FC<{
    src: string
    base64: string
    alt: string
  }> = ({ src, base64, alt }) => {
    return src && base64 ? (
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        fill
        priority={false}
        placeholder="blur"
        blurDataURL={base64 || ''}
      />
    ) : null
  }

  if (!image) {
    return null
  }

  return (
    <StyledImage>
      <ImageElement
        src={image?.responsiveImage?.src || ''}
        base64={image?.responsiveImage?.base64 || ''}
        alt={image.alt || ''}
      />
    </StyledImage>
  )
}
