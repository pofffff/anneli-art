import { BasePageProps, PageFragment, Params } from 'types'
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
import { getSlugString } from 'utils'

interface PageProps extends BasePageProps {
  page: PageFragment
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
    if (!page) {
      return { notFound: true }
    }
    const { menu, footer, site } = await getBasePage()

    return {
      props: {
        page,
        menu,
        footer,
        site,
      },
      revalidate: 60,
    }
  } catch (e) {
    console.error('Error in getStaticProps:', e)
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
