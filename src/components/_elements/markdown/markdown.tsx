import { StyledMarkDown } from './styled-markdown'

interface Props {
  children?: string | null
}

export const Markdown: React.FC<Props> = ({ children }) => {
  // const preprocessMarkdown = (markdown) => markdown?.replace(/\n/g, '\n\n') ?? ''

  return (
    <StyledMarkDown options={{ forceBlock: true }}>
      {children ?? ''}
    </StyledMarkDown>
  )
}
