import { DesktopImage, MobileImage, TabletImage } from './styled-hero-image'

import Image from 'next/image'
import { Image1Fragment } from 'types'
import { breakpoints } from 'styles'

export interface HeroImageProps {
  desktop?: Image1Fragment | null
  tablet?: Image1Fragment | null
  mobile?: Image1Fragment | null
  priority?: boolean
  breakpointTablet?: keyof typeof breakpoints
  breakpointDesktop?: keyof typeof breakpoints
}

const ImageElement: React.FC<{
  src: string
  base64: string
  hasPriority?: boolean
  alt: string
}> = ({ src, base64, hasPriority, alt }) => {
  if (!src || !base64) {
    return null
  }
  return (
    <Image
      src={src}
      alt={alt || 'image'}
      sizes="100vw"
      fill
      priority={hasPriority}
      placeholder="blur"
      blurDataURL={base64 || ''}
    />
  )
}

export const HeroImage: React.FC<HeroImageProps> = ({
  mobile,
  tablet,
  desktop,
  priority,
  breakpointTablet = breakpoints.tablet,
  breakpointDesktop = breakpoints.desktop,
}) => {
  if (
    !desktop?.responsiveImage &&
    !tablet?.responsiveImage &&
    !mobile?.responsiveImage
  ) {
    return null
  }
  return (
    <>
      {mobile?.responsiveImage && (
        <MobileImage
          $breakpointMax={
            tablet?.responsiveImage ? breakpointTablet : breakpointDesktop
          }
        >
          <ImageElement
            src={mobile.responsiveImage.src}
            base64={mobile.responsiveImage.base64 || ''}
            alt={mobile.alt || 'image'}
            hasPriority={priority}
          />
        </MobileImage>
      )}
      {tablet?.responsiveImage && (
        <TabletImage
          $breakpointMin={breakpointTablet}
          $breakpointMax={breakpointDesktop}
        >
          <ImageElement
            src={tablet.responsiveImage.src}
            base64={tablet.responsiveImage.base64 || ''}
            alt={tablet.alt || 'image'}
            hasPriority={false}
          />
        </TabletImage>
      )}
      {desktop?.responsiveImage && (
        <DesktopImage
          $breakpointMin={breakpointDesktop}
          $force={!mobile?.responsiveImage && !tablet?.responsiveImage}
        >
          <ImageElement
            src={desktop.responsiveImage.src}
            base64={desktop.responsiveImage.base64 || ''}
            alt={desktop.alt || 'image'}
            hasPriority={!mobile?.responsiveImage && !tablet?.responsiveImage}
          />
        </DesktopImage>
      )}
    </>
  )
}
