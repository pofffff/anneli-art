import { ParsedUrlQuery } from 'querystring'
import {
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
  | ContentBlockFragment
  | GalleryBlockFragment
  | HeroBlockFragment
  | ListBlockFragment
  | MediaBlockFragment
  | ShowcaseBlockFragment
  | TestimonialBlockFragment
  | PageListBlockFragment

export interface Params extends ParsedUrlQuery {
  slug: string
}
