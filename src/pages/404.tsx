import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'

import { datoClient } from 'api'
import { BasePageProps, PageFragment } from 'types'
import { BlockArea, PageLayout } from 'components'

interface PageProps extends BasePageProps {
  page: PageFragment
}

export const getStaticProps: GetStaticProps<PageProps> = async (): Promise<
  GetStaticPropsResult<PageProps>
> => {
  try {
    const { getPage, getBasePage } = datoClient()
    const page = await getPage('404')
    console.log({ page })
    const { menu, footer, site } = await getBasePage()

    return {
      props: {
        page,
        menu,
        footer,
        site,
      },
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

const Custom404: NextPage<PageProps> = ({ page }) => {
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

export default Custom404
