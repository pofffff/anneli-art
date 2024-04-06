import styled from 'styled-components'
import { colors, contentSpacing } from 'styles'

export const StyledBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  margin: ${contentSpacing.m};
  border-radius: 100px;
  background-color: ${colors.colorDark};
  color: ${colors.contentLight};
  font-size: 0.75rem;
  text-transform: uppercase;
`
