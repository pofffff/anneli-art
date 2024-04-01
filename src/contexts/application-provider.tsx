import { BasePageProps } from 'types'
import { GlobalProvider } from './global-context'

export interface ApplicationProviderProps {
  children?: React.ReactNode
  value: BasePageProps
}
// dummy
export const ApplicationProvider: React.FC<ApplicationProviderProps> = ({
  children,
  value,
}) => {
  return <GlobalProvider value={value}>{children}</GlobalProvider>
}
