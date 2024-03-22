// require('swiper/css');
// require('swiper/css/navigation');`
import { Footer, Header } from 'components'

import { AppProps } from 'next/app'
import { ApplicationProvider } from 'contexts'
import { BasePageProps } from 'types'
import { Fonts } from '../fonts/fonts'
import { GlobalStyle } from 'styles'
import Head from 'next/head'

function CustomApp({ Component, pageProps }: AppProps<BasePageProps>) {
  const { footer, menu, site, global, ...restProps } = pageProps

  // const router = useRouter();
  // useEffect(() => {
  //   router.events.on('routeChangeComplete', gtmPageView);
  //   return () => {
  //     router.events.off('routeChangeComplete', gtmPageView);
  //   };
  // }, [router.events]);

  // const GTM_ID = process.env.NEXT_PUBLIC_HULTAFORS_GTM_ID || '';

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {process.env.NOINDEX === 'true' && (
          <meta name="robots" content="noindex" />
        )}
      </Head>
      <GlobalStyle />
      <ApplicationProvider
        value={{
          menu,
          global,
          site,
        }}
      >
        <Fonts />
        {menu && <Header menu={menu} />}
        <Component {...restProps} />
        {footer && <Footer footer={footer} />}
      </ApplicationProvider>
      {/* {cookieScriptUrl && (
        <Script strategy="afterInteractive" src={cookieScriptUrl} />
      )} */}
      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
      </Script> */}
    </>
  )
}

export default CustomApp
