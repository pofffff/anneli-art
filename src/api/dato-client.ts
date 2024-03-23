import {
  BasePageDocument,
  BasePageProps,
  HomeFragment,
  HomePageDocument,
  PageDocument,
  PageFragment,
  SiteLocale,
  fragmentTypes,
} from 'types'

import { config } from 'config'
import { getClient } from './apollo-client'

export const datoClient = () => {
  const client = getClient(fragmentTypes.possibleTypes)

  const getPage = async (slugStr: string): Promise<PageFragment> => {
    const slug = slugStr === '/' ? 'root' : slugStr
    console.log({ slugStr, slug })
    const { data } = await client.query({
      query: PageDocument,
      variables: {
        locale: config.DEFAULT_LANG as SiteLocale,
        slug,
      },
    })

    const { page } = data as { page: PageFragment }
    return page
  }

  const getHome = async (): Promise<HomeFragment> => {
    const { data } = await client.query({
      query: HomePageDocument,
      variables: { locale: config.DEFAULT_LANG as SiteLocale },
    })

    const { home } = data as { home: HomeFragment }
    return home
  }

  const getBasePage = async (): Promise<BasePageProps> => {
    const { data } = await client.query({
      query: BasePageDocument,
      variables: { locale: config.DEFAULT_LANG as SiteLocale },
    })

    if (!data) {
      throw new Error('Failed to fetch basePage data')
    }

    const { allNavItems, footer, _site } = data

    return { menu: allNavItems, footer, site: _site }
  }

  return { getPage, getHome, getBasePage }
}
