declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react'
  export const ReactComponent: (
    props: SVGProps<SVGSVGElement> & { title?: string },
  ) => ReactElement
}
