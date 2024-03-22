import { StyledMarkDown } from './styled-markdown'

interface Props {
  children?: string | null
}

export const Markdown: React.FC<Props> = ({ children }) => {
  return (
    <StyledMarkDown options={{ forceBlock: true }}>
      {children ?? ''}
    </StyledMarkDown>
  )
}
