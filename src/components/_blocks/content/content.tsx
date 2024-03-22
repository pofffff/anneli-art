import { ContentBlockFragment } from 'types'

interface Props extends ContentBlockFragment {}

export const Content: React.FC<Props> = ({}) => {
  return <p>Content</p>
}
