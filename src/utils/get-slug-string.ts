import { Params } from 'types'

export function getSlugString(params: Params | undefined) {
  if (!params?.slug) {
    return '/'
  } else {
    return params.slug[params?.slug.length - 1]
  }
}
