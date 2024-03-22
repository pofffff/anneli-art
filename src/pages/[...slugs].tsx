import { BasePageProps, PageFragment } from 'types'
import { GetServerSideProps, NextPage } from 'next'

import { BlockArea } from '../components/_layout/block-area/block-area'
import { PageLayout } from 'components'
import React from 'react'
import { datoClient } from 'api'

interface Props extends BasePageProps {
  page?: PageFragment
}

export const getServerSideProps: GetServerSideProps<
  Props,
  { slugs: string[] }
> = async ({ params }) => {
  try {
    const slugs = params?.slugs || []
    const slug = slugs.join('/')
    const { getPage, getBasePage } = datoClient()
    const page = await getPage(slug)
    const { menu, footer, site, global } = await getBasePage()

    return {
      props: {
        page,
        menu,
        footer,
        site,
        global,
      },
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

const Page: NextPage<Props> = ({ page }) => {
  return (
    page && (
      <PageLayout
        title={page.title}
        description={page.description}
        image={page.image!}
      >
        <BlockArea blocks={page.content} />
      </PageLayout>
    )
  )
}

export default Page
