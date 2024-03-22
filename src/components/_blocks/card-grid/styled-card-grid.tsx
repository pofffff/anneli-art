import { contentSpacing } from 'styles'
import styled from 'styled-components'

interface StyledCardGridProps {
  blockMargin: boolean
}

export const StyledCardGrid = styled.div<StyledCardGridProps>`
  // Make sure this has the same spacing as the card
  ${({ blockMargin }) => blockMargin && `margin: ${contentSpacing.m};`}
`
