import Markdown from 'markdown-to-jsx'
import { colors } from 'styles'
import styled from 'styled-components'

interface MarkdownProps {
  children?: string | null
}

export const StyledMarkDown = styled(Markdown)<MarkdownProps>`
  // All styled for h1, h2, h3 , p etc goers here

  max-width: 100%;
  a {
    text-decoration: none;
    text-decoration: underline;
    &:hover {
    }
  }
`
