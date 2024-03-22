import localFont from "next/font/local"

const fontRaleway = localFont({
  src: [
    {
      path: './Raleway/Raleway-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Raleway/Raleway-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-raleway',
})

const fontRoboto = localFont({
  src: [
    {
      path: './Roboto/Roboto-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Roboto/Roboto-Medium.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Roboto/Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto/Roboto-Black.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-roboto',
})

export const Fonts: React.FC = () => {
  return (
    <style jsx global>{`
      html,
      input,
      textarea,
      button,
      select {
        font-family: ${fontRaleway.style.fontFamily},
          ${fontRoboto.style.fontFamily}, sans-serif;
      }
    `}</style>
  )
}
