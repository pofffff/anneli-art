import { BasePageProps } from 'types'
import { createContext, useContext } from 'react'

export interface GlobalContextValue extends BasePageProps {}

export const GlobalContext = createContext<GlobalContextValue | null>(null)

export interface GlobalProviderProps {
  children?: React.ReactNode
  value: BasePageProps
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({
  children,
  value: { menu, site, global },
}) => {
  return (
    <GlobalContext.Provider value={{ menu, site, global }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobal must be used within GlobalContext')
  }
  return context
}
