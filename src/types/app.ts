import {
  FooterFragment,
  GlobalFragment,
  HomeFragment,
  NavItemFragment,
  SiteFragment,
  SiteLocale,
} from './_generated/graphql-types'

export interface DatoApi {
  basePage(): Promise<BasePageProps>
  homePage(): Promise<HomeFragment>
  page(slug: string): Promise<any>
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
  global?: GlobalFragment | null
  menu: Array<NavItemFragment>
  footer?: FooterFragment | null
}

export interface GlobalFields {
  // site: SiteFragment
  // global: GlobalFragment
  // menu: Array<NavItemFragment>
  // footer: FooterFragment
}

export interface CustomAppProps extends BasePageProps {
  api: DatoApi
}
