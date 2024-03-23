import {
  CardGridBlockFragment,
  ContentBlockFragment,
  GalleryBlockFragment,
  HeroBlockFragment,
  ListBlockFragment,
  MediaBlockFragment,
  PageListBlockFragment,
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
  | PageListBlockFragment
