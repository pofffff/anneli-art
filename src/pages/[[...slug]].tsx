import { BasePageProps, PageFragment } from 'types'
import {
  GetServerSideProps,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next'

import { BlockArea } from '../components/_layout/block-area/block-area'
import { PageLayout } from 'components'
import React from 'react'
import { datoClient } from 'api'
import { ParsedUrlQuery } from 'querystring'

interface PageProps extends BasePageProps {
  page: PageFragment
}

function getSlugString(params: Params | undefined) {
  if (!params?.slug) {
    return '/'
  } else {
    return params.slug[params?.slug.length - 1]
  }
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async ({
  preview,
  locale,
  locales,
  params,
}): Promise<GetStaticPropsResult<PageProps>> => {
  try {
    const slug = getSlugString(params)
    const { getPage, getBasePage } = datoClient()
    const page = await getPage(slug)
    const { menu, footer, site, global } = await getBasePage()

    return {
      props: {
        page,
        menu,
        footer,
        site,
        // global,
      },
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const Page: NextPage<PageProps> = ({ page }) => {
  console.log({ page })
  return (
    <PageLayout
      title={page.title}
      description={page.description}
      image={page.image!}
    >
      <BlockArea blocks={page.content} />
    </PageLayout>
  )
}

export default Page
