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

const fontRoboto = localFont({
  src: [
    {
      path: './Roboto_Slab/static/RobotoSlab-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Roboto_Slab/static/RobotoSlab-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Roboto_Slab/static/RobotoSlab-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto_Slab/static/RobotoSlab-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './Roboto_Slab/static/RobotoSlab-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-roboto-slab',
})

export const Fonts: React.FC = () => {
  return (
    <style jsx global>{`
      html,
      input,
      textarea,
      button,
      select {
        font-family: ${fontRoboto.style.fontFamily}, sans-serif;
      }
      /* fix dehydration */
    `}</style>
  )
}
