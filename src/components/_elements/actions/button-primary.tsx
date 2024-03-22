import { StyledButtonLink, StyledButtonPrimary } from './styled-actions'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  external?: boolean
}

export const ButtonPrimary: React.FC<Props> = ({
  children,
  href,
  onClick,
  external,
}) => {
  if (href) {
    if (external) {
      return (
        <StyledButtonLink href={href} rel="noreferrer noopener" target="_blank">
          {children}
        </StyledButtonLink>
      )
    } else {
      return <StyledButtonLink href={href}>{children}</StyledButtonLink>
    }
  } else if (onClick) {
    return (
      <StyledButtonPrimary onClick={onClick}>{children}</StyledButtonPrimary>
    )
  } else {
    return null
  }
}
