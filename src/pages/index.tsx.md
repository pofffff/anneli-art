import { BasePageProps, HomeFragment } from 'types'
import { BlockArea, PageLayout } from 'components'
import { GetServerSideProps, NextPage } from 'next'

import { datoClient } from 'api'

export interface Props extends BasePageProps {
  page?: HomeFragment
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const { getHome, getBasePage } = datoClient()
    const page = await getHome()
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

const Index: NextPage<Props> = ({ page }) => {
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

export default Index
