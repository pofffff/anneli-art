import localFont from 'next/font/local'

// const fontRaleway = localFont({
//   src: [
//     {
//       path: './Raleway/Raleway-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './Raleway/Raleway-Bold.woff2',
//       weight: '700',
//       style: 'bold',
//     },
//   ],
//   variable: '--font-raleway',
// })

const fontCarmorant = localFont({
  src: [
    // {
    //   path: './Cormorant_Garamond/static/CormorantGaramond-Thin.ttf',
    //   weight: '100',
    //   style: 'normal',
    // },
    {
      path: './Cormorant_Garamond/CormorantGaramond-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Cormorant_Garamond/CormorantGaramond-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Cormorant_Garamond/CormorantGaramond-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './Cormorant_Garamond/CormorantGaramond-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-cormorant-garamond',
})

export const Fonts: React.FC = () => {
  return (
    <style jsx global>{`
      html,
      input,
      textarea,
      button,
      select {
        font-family: ${fontCarmorant.style.fontFamily}, sans-serif;
      }
      /* fix dehydration */
    `}</style>
  )
}
