import {
  FooterFragment,
  GlobalFragment,
  NavItemFragment,
  SiteFragment,
  SiteLocale,
} from './_generated/graphql-types'

export interface DatoApi {
  basePage(): Promise<BasePageProps>
  page(slug: string): Promise<any> // TODO fix any
}

export interface App {
  settings: ApiSettings
}

export interface AppSettings {
  apiSettings: ApiSettings
}

export interface ApiSettings {
  language?: SiteLocale
}

export type EnvConfig = {
  DATO_TOKEN: string
  DATO_PREVIEW: boolean
}

export type Constants = {
  APP_NAME: string
  DATO_BASE_URL: string
  DEFAULT_LANG: string
}

export interface BasePageProps {
  site: SiteFragment
  menu: Array<NavItemFragment>
  footer?: FooterFragment | null
  global?: GlobalFragment | null
}
