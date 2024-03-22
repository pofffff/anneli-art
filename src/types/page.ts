import {
  CardGridBlockFragment,
  ContentBlockFragment,
  GalleryBlockFragment,
  HeroBlockFragment,
  ListBlockFragment,
  MediaBlockFragment,
  ShowcaseBlockFragment,
  TestimonialBlockFragment,
} from './_generated/graphql-types'

export type ContentBlock =
  | CardGridBlockFragment
  | ContentBlockFragment
  | GalleryBlockFragment
  | HeroBlockFragment
  | ListBlockFragment
  | MediaBlockFragment
  | ShowcaseBlockFragment
  | TestimonialBlockFragment
