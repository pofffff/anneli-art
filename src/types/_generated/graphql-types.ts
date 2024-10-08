import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BooleanType: { input: any; output: any }
  CustomData: { input: any; output: any }
  DateTime: { input: any; output: any }
  FloatType: { input: any; output: any }
  IntType: { input: any; output: any }
  ItemId: { input: any; output: any }
  MetaTagAttributes: { input: any; output: any }
  UploadId: { input: any; output: any }
}

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

export type CardGridModelLinksField = LinkRecord | PageRecord

/** Block of type Card grid (card_grid) */
export type CardGridRecord = RecordInterface & {
  __typename?: 'CardGridRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  background?: Maybe<ColorField>
  centered?: Maybe<Scalars['BooleanType']['output']>
  id: Scalars['ItemId']['output']
  links: Array<CardGridModelLinksField>
  pagination?: Maybe<Scalars['BooleanType']['output']>
  shadow?: Maybe<Scalars['BooleanType']['output']>
  showDescription?: Maybe<Scalars['BooleanType']['output']>
  spacing?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type Card grid (card_grid) */
export type CardGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata'
  count: Scalars['IntType']['output']
}

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow',
}

export type ColorField = {
  __typename?: 'ColorField'
  alpha: Scalars['IntType']['output']
  blue: Scalars['IntType']['output']
  cssRgb: Scalars['String']['output']
  green: Scalars['IntType']['output']
  hex: Scalars['String']['output']
  red: Scalars['IntType']['output']
}

/** Block of type Content (content) */
export type ContentRecord = RecordInterface & {
  __typename?: 'ContentRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  center?: Maybe<Scalars['BooleanType']['output']>
  id: Scalars['ItemId']['output']
  text?: Maybe<Scalars['String']['output']>
}

/** Block of type Content (content) */
export type ContentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Content (content) */
export type ContentRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Linking fields */
export enum CtaModelFieldsReferencingPageModel {
  CtaLink = 'cta_link',
}

export type CtaModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CtaModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CtaModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  link?: InputMaybe<LinkFilter>
  title?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export type CtaModelLinkField = HomeRecord | PageRecord

export enum CtaModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

/** Record of type CTA (cta) */
export type CtaRecord = RecordInterface & {
  __typename?: 'CtaRecord'
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  link?: Maybe<CtaModelLinkField>
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** Record of type CTA (cta) */
export type CtaRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type CTA (cta) */
export type CtaRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type CTA (cta) */
export type CtaRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication',
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField'
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

/** Record of type Footer (footer) */
export type FooterRecord = RecordInterface & {
  __typename?: 'FooterRecord'
  _allCopywriteLocales?: Maybe<Array<StringMultiLocaleField>>
  _allSocialMediaTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  copywrite?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  socialMedia: Array<LinkRecord>
  socialMediaTitle?: Maybe<Scalars['String']['output']>
}

/** Record of type Footer (footer) */
export type FooterRecord_AllCopywriteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Footer (footer) */
export type FooterRecord_AllSocialMediaTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Footer (footer) */
export type FooterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Footer (footer) */
export type FooterRecordCopywriteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Footer (footer) */
export type FooterRecordSocialMediaTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Gallery (gallery) */
export type GalleryRecord = RecordInterface & {
  __typename?: 'GalleryRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  images: Array<FileField>
  spacing?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type Gallery (gallery) */
export type GalleryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Global (global) */
export type GlobalRecord = RecordInterface & {
  __typename?: 'GlobalRecord'
  _allSoldLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  sold?: Maybe<Scalars['String']['output']>
}

/** Record of type Global (global) */
export type GlobalRecord_AllSoldLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Global (global) */
export type GlobalRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Global (global) */
export type GlobalRecordSoldArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: Maybe<Scalars['String']['output']>
  fallbackSeo?: Maybe<SeoField>
  siteName?: Maybe<Scalars['String']['output']>
  titleSuffix?: Maybe<Scalars['String']['output']>
  twitterAccount?: Maybe<Scalars['String']['output']>
}

/** Block of type Hero (hero) */
export type HeroRecord = RecordInterface & {
  __typename?: 'HeroRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  center?: Maybe<Scalars['BooleanType']['output']>
  contentBackground?: Maybe<ColorField>
  ctaLabel?: Maybe<Scalars['String']['output']>
  ctaLink?: Maybe<PageRecord>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  image?: Maybe<FileField>
  subtitle?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Hero (hero) */
export type HeroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Hero (hero) */
export type HeroRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

export type HomeModelContentField =
  | ContentRecord
  | GalleryRecord
  | HeroRecord
  | ListRecord
  | MediaBlockRecord
  | ShowcaseRecord
  | TestimonialRecord

export type HomeModelContentFieldListListNonNullMultiLocaleField = {
  __typename?: 'HomeModelContentFieldListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<HomeModelContentField>
}

/** Linking fields */
export enum HomeModelFieldsReferencingPageModel {
  HomeContent = 'home_content',
  HomeContentHeroCtaLink = 'home_content__hero_ctaLink',
  HomeContentListLinks = 'home_content__list_links',
}

export type HomeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<HomeModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  description?: InputMaybe<TextFilter>
  id?: InputMaybe<ItemIdFilter>
  image?: InputMaybe<FileFilter>
  title?: InputMaybe<StringFilter>
}

export enum HomeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Home (home) */
export type HomeRecord = RecordInterface & {
  __typename?: 'HomeRecord'
  _allContentLocales?: Maybe<
    Array<HomeModelContentFieldListListNonNullMultiLocaleField>
  >
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content: Array<HomeModelContentField>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  image?: Maybe<FileField>
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Home (home) */
export type HomeRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Home (home) */
export type HomeRecord_AllDescriptionLocalesArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Record of type Home (home) */
export type HomeRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Home (home) */
export type HomeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Home (home) */
export type HomeRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Home (home) */
export type HomeRecordDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Record of type Home (home) */
export type HomeRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>
}

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width',
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid',
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v',
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp',
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsMarkTile {
  Grid = 'grid',
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start',
}

export enum ImgixParamsTxtFit {
  Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCtaAndPage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CtaModelFieldsReferencingPageModel>>
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CtaModelFieldsReferencingPageModel>>
}

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomeAndPage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomeModelFieldsReferencingPageModel>>
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomeModelFieldsReferencingPageModel>>
}

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenLinkAndPage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<LinkModelFieldsReferencingPageModel>>
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<LinkModelFieldsReferencingPageModel>>
}

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNavItemAndPage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NavItemModelFieldsReferencingPageModel>>
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NavItemModelFieldsReferencingPageModel>>
}

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndPage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingPageModel>>
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingPageModel>>
}

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCtaAndPage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCtaAndPage>
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>
}

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomeAndPage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomeAndPage>
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>
}

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenLinkAndPage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenLinkAndPage>
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>
}

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNavItemAndPage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNavItemAndPage>
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>
}

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndPage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndPage>
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>
}

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated',
}

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

/** Linking fields */
export enum LinkModelFieldsReferencingPageModel {
  LinkLink = 'link_link',
}

export type LinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<LinkModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  image?: InputMaybe<FileFilter>
  link?: InputMaybe<LinkFilter>
  title?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export type LinkModelLinkField = HomeRecord | PageRecord

export enum LinkModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

/** Record of type Link (link) */
export type LinkRecord = RecordInterface & {
  __typename?: 'LinkRecord'
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  image?: Maybe<FileField>
  link?: Maybe<LinkModelLinkField>
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** Record of type Link (link) */
export type LinkRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Link (link) */
export type LinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Link (link) */
export type LinkRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Linking locales */
export enum LinkingLocale {
  NonLocalized = '_nonLocalized',
  En = 'en',
  SvSe = 'sv_SE',
}

/** Specifies how to filter by linking locales */
export type LinkingLocalesFilter = {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn?: InputMaybe<Array<LinkingLocale>>
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn?: InputMaybe<Array<LinkingLocale>>
}

/** Block of type List (list) */
export type ListRecord = RecordInterface & {
  __typename?: 'ListRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  links: Array<PageRecord>
  listType?: Maybe<Scalars['String']['output']>
  pagination?: Maybe<Scalars['BooleanType']['output']>
  size?: Maybe<Scalars['String']['output']>
}

/** Block of type List (list) */
export type ListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by locale */
export type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>
}

/** Block of type Media (media_block) */
export type MediaBlockRecord = RecordInterface & {
  __typename?: 'MediaBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  big?: Maybe<Scalars['BooleanType']['output']>
  id: Scalars['ItemId']['output']
  image?: Maybe<FileField>
  video?: Maybe<FileField>
}

/** Block of type Media (media_block) */
export type MediaBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
}

/** Linking fields */
export enum NavItemModelFieldsReferencingPageModel {
  NavItemPageLink = 'navItem_pageLink',
}

export type NavItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavItemModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<NavItemModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  pageLink?: InputMaybe<LinkFilter>
  parent?: InputMaybe<ParentFilter>
  position?: InputMaybe<PositionFilter>
  title?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export enum NavItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

/** Record of type Nav item (nav_item) */
export type NavItemRecord = RecordInterface & {
  __typename?: 'NavItemRecord'
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  children?: Maybe<Array<Maybe<NavItemRecord>>>
  id: Scalars['ItemId']['output']
  pageLink?: Maybe<PageRecord>
  parent?: Maybe<NavItemRecord>
  position?: Maybe<Scalars['IntType']['output']>
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** Record of type Nav item (nav_item) */
export type NavItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Nav item (nav_item) */
export type NavItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Nav item (nav_item) */
export type NavItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>
}

/** Block of type Page list (page_list) */
export type PageListRecord = RecordInterface & {
  __typename?: 'PageListRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  listType?: Maybe<Scalars['String']['output']>
  pageType?: Maybe<PageRecord>
}

/** Block of type Page list (page_list) */
export type PageListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type PageModelContentField =
  | ContentRecord
  | GalleryRecord
  | HeroRecord
  | ListRecord
  | MediaBlockRecord
  | PageListRecord
  | ShowcaseRecord
  | TestimonialRecord

export type PageModelContentFieldListListNonNullMultiLocaleField = {
  __typename?: 'PageModelContentFieldListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<PageModelContentField>
}

/** Linking fields */
export enum PageModelFieldsReferencingPageModel {
  PageContent = 'page_content',
  PageContentHeroCtaLink = 'page_content__hero_ctaLink',
  PageContentListLinks = 'page_content__list_links',
  PageContentPageListPageType = 'page_content__pageList_pageType',
}

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  description?: InputMaybe<TextFilter>
  id?: InputMaybe<ItemIdFilter>
  image?: InputMaybe<FileFilter>
  pageSlug?: InputMaybe<SlugFilter>
  parent?: InputMaybe<ParentFilter>
  position?: InputMaybe<PositionFilter>
  sold?: InputMaybe<BooleanFilter>
  title?: InputMaybe<StringFilter>
}

export enum PageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SoldAsc = 'sold_ASC',
  SoldDesc = 'sold_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Page (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord'
  _allContentLocales?: Maybe<
    Array<PageModelContentFieldListListNonNullMultiLocaleField>
  >
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>
  _allReferencingCtas: Array<CtaRecord>
  /** Returns meta information regarding a record collection */
  _allReferencingCtasMeta: CollectionMetadata
  _allReferencingHomes: Array<HomeRecord>
  /** Returns meta information regarding a record collection */
  _allReferencingHomesMeta: CollectionMetadata
  _allReferencingLinks: Array<LinkRecord>
  /** Returns meta information regarding a record collection */
  _allReferencingLinksMeta: CollectionMetadata
  _allReferencingNavItems: Array<NavItemRecord>
  /** Returns meta information regarding a record collection */
  _allReferencingNavItemsMeta: CollectionMetadata
  _allReferencingPages: Array<PageRecord>
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  children?: Maybe<Array<Maybe<PageRecord>>>
  content: Array<PageModelContentField>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  image?: Maybe<FileField>
  pageSlug?: Maybe<Scalars['String']['output']>
  parent?: Maybe<PageRecord>
  position?: Maybe<Scalars['IntType']['output']>
  sold?: Maybe<Scalars['BooleanType']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Page (page) */
export type PageRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecord_AllDescriptionLocalesArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Record of type Page (page) */
export type PageRecord_AllReferencingCtasArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CtaModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CtaModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
  through?: InputMaybe<InverseRelationshipFilterBetweenCtaAndPage>
}

/** Record of type Page (page) */
export type PageRecord_AllReferencingCtasMetaArgs = {
  filter?: InputMaybe<CtaModelFilter>
  locale?: InputMaybe<SiteLocale>
  through?: InputMaybe<InverseRelationshipFilterBetweenCtaAndPage>
}

/** Record of type Page (page) */
export type PageRecord_AllReferencingHomesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<HomeModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<HomeModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndPage>
}

/** Record of type Page (page) */
export type PageRecord_AllReferencingHomesMetaArgs = {
  filter?: InputMaybe<HomeModelFilter>
  locale?: InputMaybe<SiteLocale>
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndPage>
}

/** Record of type Page (page) */
export type PageRecord_AllReferencingLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LinkModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LinkModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
  through?: InputMaybe<InverseRelationshipFilterBetweenLinkAndPage>
}

/** Record of type Page (page) */
export type PageRecord_AllReferencingLinksMetaArgs = {
  filter?: InputMaybe<LinkModelFilter>
  locale?: InputMaybe<SiteLocale>
  through?: InputMaybe<InverseRelationshipFilterBetweenLinkAndPage>
}

/** Record of type Page (page) */
export type PageRecord_AllReferencingNavItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<NavItemModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<NavItemModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
  through?: InputMaybe<InverseRelationshipFilterBetweenNavItemAndPage>
}

/** Record of type Page (page) */
export type PageRecord_AllReferencingNavItemsMetaArgs = {
  filter?: InputMaybe<NavItemModelFilter>
  locale?: InputMaybe<SiteLocale>
  through?: InputMaybe<InverseRelationshipFilterBetweenNavItemAndPage>
}

/** Record of type Page (page) */
export type PageRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndPage>
}

/** Record of type Page (page) */
export type PageRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndPage>
}

/** Record of type Page (page) */
export type PageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Page (page) */
export type PageRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Page (page) */
export type PageRecordDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Record of type Page (page) */
export type PageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by parent (tree-like collections only) */
export type ParentFilter = {
  /** Filter records children of the specified record. Value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records with a parent record or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query'
  /** Returns meta information regarding a record collection */
  _allCtasMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLinksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allNavItemsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata
  /** Returns the single instance record */
  _site: Site
  /** Returns a collection of records */
  allCtas: Array<CtaRecord>
  /** Returns a collection of records */
  allLinks: Array<LinkRecord>
  /** Returns a collection of records */
  allNavItems: Array<NavItemRecord>
  /** Returns a collection of records */
  allPages: Array<PageRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  /** Returns a specific record */
  cta?: Maybe<CtaRecord>
  /** Returns the single instance record */
  footer?: Maybe<FooterRecord>
  /** Returns the single instance record */
  global?: Maybe<GlobalRecord>
  /** Returns the single instance record */
  home?: Maybe<HomeRecord>
  /** Returns a specific record */
  link?: Maybe<LinkRecord>
  /** Returns a specific record */
  navItem?: Maybe<NavItemRecord>
  /** Returns a specific record */
  page?: Maybe<PageRecord>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
}

/** The query root for this schema */
export type Query_AllCtasMetaArgs = {
  filter?: InputMaybe<CtaModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllLinksMetaArgs = {
  filter?: InputMaybe<LinkModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllNavItemsMetaArgs = {
  filter?: InputMaybe<NavItemModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryAllCtasArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CtaModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CtaModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LinkModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LinkModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllNavItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<NavItemModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<NavItemModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryCtaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CtaModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CtaModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryGlobalArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryHomeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LinkModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryNavItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<NavItemModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<NavItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
}

export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>
}

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage'
  alt?: Maybe<Scalars['String']['output']>
  aspectRatio: Scalars['FloatType']['output']
  base64?: Maybe<Scalars['String']['output']>
  bgColor?: Maybe<Scalars['String']['output']>
  height: Scalars['IntType']['output']
  sizes: Scalars['String']['output']
  src: Scalars['String']['output']
  srcSet: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  webpSrcSet: Scalars['String']['output']
  width: Scalars['IntType']['output']
}

export type SeoField = {
  __typename?: 'SeoField'
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<FileField>
  noIndex?: Maybe<Scalars['BooleanType']['output']>
  title?: Maybe<Scalars['String']['output']>
  twitterCard?: Maybe<Scalars['String']['output']>
}

/** Block of type Showcase (showcase) */
export type ShowcaseRecord = RecordInterface & {
  __typename?: 'ShowcaseRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alignImageLeft?: Maybe<Scalars['BooleanType']['output']>
  background?: Maybe<ColorField>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  image?: Maybe<FileField>
  link: Scalars['String']['output']
  subtitle?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Showcase (showcase) */
export type ShowcaseRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Showcase (showcase) */
export type ShowcaseRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

export type Site = {
  __typename?: 'Site'
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
  locales: Array<SiteLocale>
  noIndex?: Maybe<Scalars['BooleanType']['output']>
}

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>
}

export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum SiteLocale {
  En = 'en',
  SvSe = 'sv_SE',
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>
}

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>
  pattern: Scalars['String']['input']
  regexp?: InputMaybe<Scalars['BooleanType']['input']>
}

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<Scalars['String']['output']>
}

export type Tag = {
  __typename?: 'Tag'
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>
  content?: Maybe<Scalars['String']['output']>
  tag: Scalars['String']['output']
}

/** Block of type Testimonial (testimonial) */
export type TestimonialRecord = RecordInterface & {
  __typename?: 'TestimonialRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  authorName?: Maybe<Scalars['String']['output']>
  authorTitle?: Maybe<Scalars['String']['output']>
  background?: Maybe<ColorField>
  cta?: Maybe<CtaRecord>
  id: Scalars['ItemId']['output']
  image?: Maybe<FileField>
  quote?: Maybe<Scalars['String']['output']>
}

/** Block of type Testimonial (testimonial) */
export type TestimonialRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>
}

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
}

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  _createdAt?: InputMaybe<UploadCreatedAtFilter>
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>
  alt?: InputMaybe<UploadAltFilter>
  author?: InputMaybe<UploadAuthorFilter>
  basename?: InputMaybe<UploadBasenameFilter>
  colors?: InputMaybe<UploadColorsFilter>
  copyright?: InputMaybe<UploadCopyrightFilter>
  filename?: InputMaybe<UploadFilenameFilter>
  format?: InputMaybe<UploadFormatFilter>
  height?: InputMaybe<UploadHeightFilter>
  id?: InputMaybe<UploadIdFilter>
  inUse?: InputMaybe<InUseFilter>
  md5?: InputMaybe<UploadMd5Filter>
  mimeType?: InputMaybe<UploadMimeTypeFilter>
  notes?: InputMaybe<UploadNotesFilter>
  orientation?: InputMaybe<OrientationFilter>
  resolution?: InputMaybe<ResolutionFilter>
  size?: InputMaybe<UploadSizeFilter>
  smartTags?: InputMaybe<UploadTagsFilter>
  tags?: InputMaybe<UploadTagsFilter>
  title?: InputMaybe<UploadTitleFilter>
  type?: InputMaybe<TypeFilter>
  width?: InputMaybe<UploadWidthFilter>
}

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

export type UploadVideoField = {
  __typename?: 'UploadVideoField'
  alt?: Maybe<Scalars['String']['output']>
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['Int']['output']>
  framerate?: Maybe<Scalars['Int']['output']>
  height: Scalars['IntType']['output']
  mp4Url?: Maybe<Scalars['String']['output']>
  muxAssetId: Scalars['String']['output']
  muxPlaybackId: Scalars['String']['output']
  streamingUrl: Scalars['String']['output']
  thumbhash?: Maybe<Scalars['String']['output']>
  thumbnailUrl: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  width: Scalars['IntType']['output']
}

export type UploadVideoFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type UploadVideoFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>
  res?: InputMaybe<VideoMp4Res>
}

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>
}

export type UploadVideoFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

export type FocalPoint = {
  __typename?: 'focalPoint'
  x: Scalars['FloatType']['output']
  y: Scalars['FloatType']['output']
}

export type ContentBlockFragment = {
  __typename?: 'ContentRecord'
  id: any
  center?: any | null
  text?: string | null
}

export type GalleryBlockFragment = {
  __typename?: 'GalleryRecord'
  id: any
  spacing?: any | null
  images: Array<{
    __typename?: 'FileField'
    alt?: string | null
    url: string
    width?: any | null
    height?: any | null
    format: string
    tags: Array<string>
    title?: string | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      aspectRatio: any
      base64?: string | null
      bgColor?: string | null
      height: any
      sizes: string
      src: string
      srcSet: string
      webpSrcSet: string
      width: any
    } | null
  }>
}

export type HeroBlockFragment = {
  __typename?: 'HeroRecord'
  id: any
  center?: any | null
  description?: string | null
  title?: string | null
  subtitle?: string | null
  ctaLabel?: string | null
  contentBackground?: { __typename?: 'ColorField'; hex: string } | null
  ctaLink?: { __typename?: 'PageRecord'; pageSlug?: string | null } | null
  desktopImage?: {
    __typename?: 'FileField'
    alt?: string | null
    url: string
    width?: any | null
    height?: any | null
    format: string
    tags: Array<string>
    title?: string | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      aspectRatio: any
      base64?: string | null
      bgColor?: string | null
      height: any
      sizes: string
      src: string
      srcSet: string
      webpSrcSet: string
      width: any
    } | null
  } | null
  tabletImage?: {
    __typename?: 'FileField'
    alt?: string | null
    url: string
    width?: any | null
    height?: any | null
    format: string
    tags: Array<string>
    title?: string | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      aspectRatio: any
      base64?: string | null
      bgColor?: string | null
      height: any
      sizes: string
      src: string
      srcSet: string
      webpSrcSet: string
      width: any
    } | null
  } | null
  mobileImage?: {
    __typename?: 'FileField'
    alt?: string | null
    url: string
    width?: any | null
    height?: any | null
    format: string
    tags: Array<string>
    title?: string | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      aspectRatio: any
      base64?: string | null
      bgColor?: string | null
      height: any
      sizes: string
      src: string
      srcSet: string
      webpSrcSet: string
      width: any
    } | null
  } | null
}

export type ListBlockFragment = {
  __typename?: 'ListRecord'
  id: any
  listType?: string | null
  size?: string | null
  pagination?: any | null
  links: Array<{
    __typename?: 'PageRecord'
    id: any
    title?: string | null
    description?: string | null
    sold?: any | null
    pageSlug?: string | null
    image?: {
      __typename?: 'FileField'
      alt?: string | null
      url: string
      width?: any | null
      height?: any | null
      format: string
      tags: Array<string>
      title?: string | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        aspectRatio: any
        base64?: string | null
        bgColor?: string | null
        height: any
        sizes: string
        src: string
        srcSet: string
        webpSrcSet: string
        width: any
      } | null
    } | null
    parent?: { __typename?: 'PageRecord'; pageSlug?: string | null } | null
  }>
}

export type MediaBlockFragment = {
  __typename?: 'MediaBlockRecord'
  id: any
  big?: any | null
  image?: {
    __typename?: 'FileField'
    alt?: string | null
    url: string
    width?: any | null
    height?: any | null
    format: string
    tags: Array<string>
    title?: string | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      aspectRatio: any
      base64?: string | null
      bgColor?: string | null
      height: any
      sizes: string
      src: string
      srcSet: string
      webpSrcSet: string
      width: any
    } | null
  } | null
  video?: {
    __typename?: 'FileField'
    alt?: string | null
    url: string
    title?: string | null
    video?: {
      __typename?: 'UploadVideoField'
      mp4Url?: string | null
      streamingUrl: string
      thumbnailUrl: string
      mp4Low?: string | null
    } | null
  } | null
}

export type PageListBlockFragment = {
  __typename?: 'PageListRecord'
  id: any
  listType?: string | null
  pageType?: {
    __typename?: 'PageRecord'
    pageSlug?: string | null
    title?: string | null
    children?: Array<{
      __typename?: 'PageRecord'
      id: any
      title?: string | null
      description?: string | null
      pageSlug?: string | null
      sold?: any | null
      image?: {
        __typename?: 'FileField'
        alt?: string | null
        url: string
        width?: any | null
        height?: any | null
        format: string
        tags: Array<string>
        title?: string | null
        responsiveImage?: {
          __typename?: 'ResponsiveImage'
          aspectRatio: any
          base64?: string | null
          bgColor?: string | null
          height: any
          sizes: string
          src: string
          srcSet: string
          webpSrcSet: string
          width: any
        } | null
      } | null
      parent?: { __typename?: 'PageRecord'; pageSlug?: string | null } | null
    } | null> | null
  } | null
}

export type ShowcaseBlockFragment = {
  __typename?: 'ShowcaseRecord'
  id: any
  alignImageLeft?: any | null
  description?: string | null
  title?: string | null
  subtitle?: string | null
  background?: { __typename?: 'ColorField'; hex: string } | null
  image?: {
    __typename?: 'FileField'
    alt?: string | null
    url: string
    width?: any | null
    height?: any | null
    format: string
    tags: Array<string>
    title?: string | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      aspectRatio: any
      base64?: string | null
      bgColor?: string | null
      height: any
      sizes: string
      src: string
      srcSet: string
      webpSrcSet: string
      width: any
    } | null
  } | null
}

export type TestimonialBlockFragment = {
  __typename?: 'TestimonialRecord'
  id: any
  quote?: string | null
  authorName?: string | null
  authorTitle?: string | null
  background?: { __typename?: 'ColorField'; hex: string } | null
  cta?: {
    __typename?: 'CtaRecord'
    url?: string | null
    title?: string | null
    link?:
      | { __typename?: 'HomeRecord' }
      | { __typename?: 'PageRecord'; id: any; pageSlug?: string | null }
      | null
  } | null
  image?: {
    __typename?: 'FileField'
    alt?: string | null
    url: string
    width?: any | null
    height?: any | null
    format: string
    tags: Array<string>
    title?: string | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      aspectRatio: any
      base64?: string | null
      bgColor?: string | null
      height: any
      sizes: string
      src: string
      srcSet: string
      webpSrcSet: string
      width: any
    } | null
  } | null
}

export type Image1Fragment = {
  __typename?: 'FileField'
  alt?: string | null
  url: string
  width?: any | null
  height?: any | null
  format: string
  tags: Array<string>
  title?: string | null
  responsiveImage?: {
    __typename?: 'ResponsiveImage'
    aspectRatio: any
    base64?: string | null
    bgColor?: string | null
    height: any
    sizes: string
    src: string
    srcSet: string
    webpSrcSet: string
    width: any
  } | null
}

export type Image125Fragment = {
  __typename?: 'FileField'
  alt?: string | null
  url: string
  width?: any | null
  height?: any | null
  format: string
  tags: Array<string>
  title?: string | null
  responsiveImage?: {
    __typename?: 'ResponsiveImage'
    aspectRatio: any
    base64?: string | null
    bgColor?: string | null
    height: any
    sizes: string
    src: string
    srcSet: string
    webpSrcSet: string
    width: any
  } | null
}

export type Image169Fragment = {
  __typename?: 'FileField'
  alt?: string | null
  url: string
  width?: any | null
  height?: any | null
  format: string
  tags: Array<string>
  title?: string | null
  responsiveImage?: {
    __typename?: 'ResponsiveImage'
    aspectRatio: any
    base64?: string | null
    bgColor?: string | null
    height: any
    sizes: string
    src: string
    srcSet: string
    webpSrcSet: string
    width: any
  } | null
}

export type Image34Fragment = {
  __typename?: 'FileField'
  alt?: string | null
  url: string
  width?: any | null
  height?: any | null
  format: string
  tags: Array<string>
  title?: string | null
  responsiveImage?: {
    __typename?: 'ResponsiveImage'
    aspectRatio: any
    base64?: string | null
    bgColor?: string | null
    height: any
    sizes: string
    src: string
    srcSet: string
    webpSrcSet: string
    width: any
  } | null
}

export type Image43Fragment = {
  __typename?: 'FileField'
  alt?: string | null
  url: string
  width?: any | null
  height?: any | null
  format: string
  tags: Array<string>
  title?: string | null
  responsiveImage?: {
    __typename?: 'ResponsiveImage'
    aspectRatio: any
    base64?: string | null
    bgColor?: string | null
    height: any
    sizes: string
    src: string
    srcSet: string
    webpSrcSet: string
    width: any
  } | null
}

export type ImageBaseFragment = {
  __typename?: 'FileField'
  alt?: string | null
  url: string
  width?: any | null
  height?: any | null
  format: string
  tags: Array<string>
  title?: string | null
}

export type ResponsiveImageFragment = {
  __typename?: 'ResponsiveImage'
  aspectRatio: any
  base64?: string | null
  bgColor?: string | null
  height: any
  sizes: string
  src: string
  srcSet: string
  webpSrcSet: string
  width: any
}

export type VideoFragment = {
  __typename?: 'FileField'
  alt?: string | null
  url: string
  title?: string | null
  video?: {
    __typename?: 'UploadVideoField'
    mp4Url?: string | null
    streamingUrl: string
    thumbnailUrl: string
    mp4Low?: string | null
  } | null
}

export type CtaFragment = {
  __typename?: 'CtaRecord'
  url?: string | null
  title?: string | null
  link?:
    | { __typename?: 'HomeRecord' }
    | { __typename?: 'PageRecord'; id: any; pageSlug?: string | null }
    | null
}

export type FooterFragment = {
  __typename?: 'FooterRecord'
  copywrite?: string | null
  socialMediaTitle?: string | null
  socialMedia: Array<{
    __typename?: 'LinkRecord'
    url?: string | null
    title?: string | null
    id: any
    image?: {
      __typename?: 'FileField'
      alt?: string | null
      url: string
      width?: any | null
      height?: any | null
      format: string
      tags: Array<string>
      title?: string | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        aspectRatio: any
        base64?: string | null
        bgColor?: string | null
        height: any
        sizes: string
        src: string
        srcSet: string
        webpSrcSet: string
        width: any
      } | null
    } | null
  }>
}

export type GlobalFragment = {
  __typename?: 'GlobalRecord'
  sold?: string | null
}

export type NavItemFragment = {
  __typename?: 'NavItemRecord'
  id: any
  title?: string | null
  url?: string | null
  pageLink?: {
    __typename?: 'PageRecord'
    id: any
    title?: string | null
    pageSlug?: string | null
  } | null
  children?: Array<{
    __typename?: 'NavItemRecord'
    id: any
    title?: string | null
    pageLink?: {
      __typename?: 'PageRecord'
      id: any
      title?: string | null
      pageSlug?: string | null
    } | null
    children?: Array<{
      __typename?: 'NavItemRecord'
      id: any
      title?: string | null
      pageLink?: {
        __typename?: 'PageRecord'
        id: any
        title?: string | null
        pageSlug?: string | null
      } | null
    } | null> | null
  } | null> | null
}

export type PageFragment = {
  __typename?: 'PageRecord'
  id: any
  pageSlug?: string | null
  title?: string | null
  description?: string | null
  sold?: any | null
  image?: {
    __typename?: 'FileField'
    alt?: string | null
    url: string
    width?: any | null
    height?: any | null
    format: string
    tags: Array<string>
    title?: string | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      aspectRatio: any
      base64?: string | null
      bgColor?: string | null
      height: any
      sizes: string
      src: string
      srcSet: string
      webpSrcSet: string
      width: any
    } | null
  } | null
  content: Array<
    | {
        __typename?: 'ContentRecord'
        id: any
        center?: any | null
        text?: string | null
      }
    | {
        __typename?: 'GalleryRecord'
        id: any
        spacing?: any | null
        images: Array<{
          __typename?: 'FileField'
          alt?: string | null
          url: string
          width?: any | null
          height?: any | null
          format: string
          tags: Array<string>
          title?: string | null
          responsiveImage?: {
            __typename?: 'ResponsiveImage'
            aspectRatio: any
            base64?: string | null
            bgColor?: string | null
            height: any
            sizes: string
            src: string
            srcSet: string
            webpSrcSet: string
            width: any
          } | null
        }>
      }
    | {
        __typename?: 'HeroRecord'
        id: any
        center?: any | null
        description?: string | null
        title?: string | null
        subtitle?: string | null
        ctaLabel?: string | null
        contentBackground?: { __typename?: 'ColorField'; hex: string } | null
        ctaLink?: { __typename?: 'PageRecord'; pageSlug?: string | null } | null
        desktopImage?: {
          __typename?: 'FileField'
          alt?: string | null
          url: string
          width?: any | null
          height?: any | null
          format: string
          tags: Array<string>
          title?: string | null
          responsiveImage?: {
            __typename?: 'ResponsiveImage'
            aspectRatio: any
            base64?: string | null
            bgColor?: string | null
            height: any
            sizes: string
            src: string
            srcSet: string
            webpSrcSet: string
            width: any
          } | null
        } | null
        tabletImage?: {
          __typename?: 'FileField'
          alt?: string | null
          url: string
          width?: any | null
          height?: any | null
          format: string
          tags: Array<string>
          title?: string | null
          responsiveImage?: {
            __typename?: 'ResponsiveImage'
            aspectRatio: any
            base64?: string | null
            bgColor?: string | null
            height: any
            sizes: string
            src: string
            srcSet: string
            webpSrcSet: string
            width: any
          } | null
        } | null
        mobileImage?: {
          __typename?: 'FileField'
          alt?: string | null
          url: string
          width?: any | null
          height?: any | null
          format: string
          tags: Array<string>
          title?: string | null
          responsiveImage?: {
            __typename?: 'ResponsiveImage'
            aspectRatio: any
            base64?: string | null
            bgColor?: string | null
            height: any
            sizes: string
            src: string
            srcSet: string
            webpSrcSet: string
            width: any
          } | null
        } | null
      }
    | {
        __typename?: 'ListRecord'
        id: any
        listType?: string | null
        size?: string | null
        pagination?: any | null
        links: Array<{
          __typename?: 'PageRecord'
          id: any
          title?: string | null
          description?: string | null
          sold?: any | null
          pageSlug?: string | null
          image?: {
            __typename?: 'FileField'
            alt?: string | null
            url: string
            width?: any | null
            height?: any | null
            format: string
            tags: Array<string>
            title?: string | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              aspectRatio: any
              base64?: string | null
              bgColor?: string | null
              height: any
              sizes: string
              src: string
              srcSet: string
              webpSrcSet: string
              width: any
            } | null
          } | null
          parent?: {
            __typename?: 'PageRecord'
            pageSlug?: string | null
          } | null
        }>
      }
    | {
        __typename?: 'MediaBlockRecord'
        id: any
        big?: any | null
        image?: {
          __typename?: 'FileField'
          alt?: string | null
          url: string
          width?: any | null
          height?: any | null
          format: string
          tags: Array<string>
          title?: string | null
          responsiveImage?: {
            __typename?: 'ResponsiveImage'
            aspectRatio: any
            base64?: string | null
            bgColor?: string | null
            height: any
            sizes: string
            src: string
            srcSet: string
            webpSrcSet: string
            width: any
          } | null
        } | null
        video?: {
          __typename?: 'FileField'
          alt?: string | null
          url: string
          title?: string | null
          video?: {
            __typename?: 'UploadVideoField'
            mp4Url?: string | null
            streamingUrl: string
            thumbnailUrl: string
            mp4Low?: string | null
          } | null
        } | null
      }
    | {
        __typename?: 'PageListRecord'
        id: any
        listType?: string | null
        pageType?: {
          __typename?: 'PageRecord'
          pageSlug?: string | null
          title?: string | null
          children?: Array<{
            __typename?: 'PageRecord'
            id: any
            title?: string | null
            description?: string | null
            pageSlug?: string | null
            sold?: any | null
            image?: {
              __typename?: 'FileField'
              alt?: string | null
              url: string
              width?: any | null
              height?: any | null
              format: string
              tags: Array<string>
              title?: string | null
              responsiveImage?: {
                __typename?: 'ResponsiveImage'
                aspectRatio: any
                base64?: string | null
                bgColor?: string | null
                height: any
                sizes: string
                src: string
                srcSet: string
                webpSrcSet: string
                width: any
              } | null
            } | null
            parent?: {
              __typename?: 'PageRecord'
              pageSlug?: string | null
            } | null
          } | null> | null
        } | null
      }
    | {
        __typename?: 'ShowcaseRecord'
        id: any
        alignImageLeft?: any | null
        description?: string | null
        title?: string | null
        subtitle?: string | null
        background?: { __typename?: 'ColorField'; hex: string } | null
        image?: {
          __typename?: 'FileField'
          alt?: string | null
          url: string
          width?: any | null
          height?: any | null
          format: string
          tags: Array<string>
          title?: string | null
          responsiveImage?: {
            __typename?: 'ResponsiveImage'
            aspectRatio: any
            base64?: string | null
            bgColor?: string | null
            height: any
            sizes: string
            src: string
            srcSet: string
            webpSrcSet: string
            width: any
          } | null
        } | null
      }
    | {
        __typename?: 'TestimonialRecord'
        id: any
        quote?: string | null
        authorName?: string | null
        authorTitle?: string | null
        background?: { __typename?: 'ColorField'; hex: string } | null
        cta?: {
          __typename?: 'CtaRecord'
          url?: string | null
          title?: string | null
          link?:
            | { __typename?: 'HomeRecord' }
            | { __typename?: 'PageRecord'; id: any; pageSlug?: string | null }
            | null
        } | null
        image?: {
          __typename?: 'FileField'
          alt?: string | null
          url: string
          width?: any | null
          height?: any | null
          format: string
          tags: Array<string>
          title?: string | null
          responsiveImage?: {
            __typename?: 'ResponsiveImage'
            aspectRatio: any
            base64?: string | null
            bgColor?: string | null
            height: any
            sizes: string
            src: string
            srcSet: string
            webpSrcSet: string
            width: any
          } | null
        } | null
      }
  >
}

export type SiteFragment = {
  __typename?: 'Site'
  globalSeo?: {
    __typename?: 'GlobalSeoField'
    facebookPageUrl?: string | null
    siteName?: string | null
    titleSuffix?: string | null
    twitterAccount?: string | null
    fallbackSeo?: {
      __typename?: 'SeoField'
      description?: string | null
      title?: string | null
      twitterCard?: string | null
      image?: {
        __typename?: 'FileField'
        alt?: string | null
        url: string
        width?: any | null
        height?: any | null
        format: string
        tags: Array<string>
        title?: string | null
        responsiveImage?: {
          __typename?: 'ResponsiveImage'
          aspectRatio: any
          base64?: string | null
          bgColor?: string | null
          height: any
          sizes: string
          src: string
          srcSet: string
          webpSrcSet: string
          width: any
        } | null
      } | null
    } | null
  } | null
}

export type NavLinkFragment = {
  __typename?: 'PageRecord'
  id: any
  title?: string | null
  pageSlug?: string | null
}

export type PageLinkFragment = {
  __typename?: 'PageRecord'
  id: any
  title?: string | null
  description?: string | null
  sold?: any | null
  pageSlug?: string | null
  image?: {
    __typename?: 'FileField'
    alt?: string | null
    url: string
    width?: any | null
    height?: any | null
    format: string
    tags: Array<string>
    title?: string | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      aspectRatio: any
      base64?: string | null
      bgColor?: string | null
      height: any
      sizes: string
      src: string
      srcSet: string
      webpSrcSet: string
      width: any
    } | null
  } | null
  parent?: { __typename?: 'PageRecord'; pageSlug?: string | null } | null
}

export type BasePageQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>
}>

export type BasePageQuery = {
  __typename?: 'Query'
  allNavItems: Array<{
    __typename?: 'NavItemRecord'
    id: any
    title?: string | null
    url?: string | null
    pageLink?: {
      __typename?: 'PageRecord'
      id: any
      title?: string | null
      pageSlug?: string | null
    } | null
    children?: Array<{
      __typename?: 'NavItemRecord'
      id: any
      title?: string | null
      pageLink?: {
        __typename?: 'PageRecord'
        id: any
        title?: string | null
        pageSlug?: string | null
      } | null
      children?: Array<{
        __typename?: 'NavItemRecord'
        id: any
        title?: string | null
        pageLink?: {
          __typename?: 'PageRecord'
          id: any
          title?: string | null
          pageSlug?: string | null
        } | null
      } | null> | null
    } | null> | null
  }>
  footer?: {
    __typename?: 'FooterRecord'
    copywrite?: string | null
    socialMediaTitle?: string | null
    socialMedia: Array<{
      __typename?: 'LinkRecord'
      url?: string | null
      title?: string | null
      id: any
      image?: {
        __typename?: 'FileField'
        alt?: string | null
        url: string
        width?: any | null
        height?: any | null
        format: string
        tags: Array<string>
        title?: string | null
        responsiveImage?: {
          __typename?: 'ResponsiveImage'
          aspectRatio: any
          base64?: string | null
          bgColor?: string | null
          height: any
          sizes: string
          src: string
          srcSet: string
          webpSrcSet: string
          width: any
        } | null
      } | null
    }>
  } | null
  global?: { __typename?: 'GlobalRecord'; sold?: string | null } | null
  _site: {
    __typename?: 'Site'
    globalSeo?: {
      __typename?: 'GlobalSeoField'
      facebookPageUrl?: string | null
      siteName?: string | null
      titleSuffix?: string | null
      twitterAccount?: string | null
      fallbackSeo?: {
        __typename?: 'SeoField'
        description?: string | null
        title?: string | null
        twitterCard?: string | null
        image?: {
          __typename?: 'FileField'
          alt?: string | null
          url: string
          width?: any | null
          height?: any | null
          format: string
          tags: Array<string>
          title?: string | null
          responsiveImage?: {
            __typename?: 'ResponsiveImage'
            aspectRatio: any
            base64?: string | null
            bgColor?: string | null
            height: any
            sizes: string
            src: string
            srcSet: string
            webpSrcSet: string
            width: any
          } | null
        } | null
      } | null
    } | null
  }
}

export type PageQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>
  slug: Scalars['String']['input']
}>

export type PageQuery = {
  __typename?: 'Query'
  page?: {
    __typename?: 'PageRecord'
    id: any
    pageSlug?: string | null
    title?: string | null
    description?: string | null
    sold?: any | null
    image?: {
      __typename?: 'FileField'
      alt?: string | null
      url: string
      width?: any | null
      height?: any | null
      format: string
      tags: Array<string>
      title?: string | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        aspectRatio: any
        base64?: string | null
        bgColor?: string | null
        height: any
        sizes: string
        src: string
        srcSet: string
        webpSrcSet: string
        width: any
      } | null
    } | null
    content: Array<
      | {
          __typename?: 'ContentRecord'
          id: any
          center?: any | null
          text?: string | null
        }
      | {
          __typename?: 'GalleryRecord'
          id: any
          spacing?: any | null
          images: Array<{
            __typename?: 'FileField'
            alt?: string | null
            url: string
            width?: any | null
            height?: any | null
            format: string
            tags: Array<string>
            title?: string | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              aspectRatio: any
              base64?: string | null
              bgColor?: string | null
              height: any
              sizes: string
              src: string
              srcSet: string
              webpSrcSet: string
              width: any
            } | null
          }>
        }
      | {
          __typename?: 'HeroRecord'
          id: any
          center?: any | null
          description?: string | null
          title?: string | null
          subtitle?: string | null
          ctaLabel?: string | null
          contentBackground?: { __typename?: 'ColorField'; hex: string } | null
          ctaLink?: {
            __typename?: 'PageRecord'
            pageSlug?: string | null
          } | null
          desktopImage?: {
            __typename?: 'FileField'
            alt?: string | null
            url: string
            width?: any | null
            height?: any | null
            format: string
            tags: Array<string>
            title?: string | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              aspectRatio: any
              base64?: string | null
              bgColor?: string | null
              height: any
              sizes: string
              src: string
              srcSet: string
              webpSrcSet: string
              width: any
            } | null
          } | null
          tabletImage?: {
            __typename?: 'FileField'
            alt?: string | null
            url: string
            width?: any | null
            height?: any | null
            format: string
            tags: Array<string>
            title?: string | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              aspectRatio: any
              base64?: string | null
              bgColor?: string | null
              height: any
              sizes: string
              src: string
              srcSet: string
              webpSrcSet: string
              width: any
            } | null
          } | null
          mobileImage?: {
            __typename?: 'FileField'
            alt?: string | null
            url: string
            width?: any | null
            height?: any | null
            format: string
            tags: Array<string>
            title?: string | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              aspectRatio: any
              base64?: string | null
              bgColor?: string | null
              height: any
              sizes: string
              src: string
              srcSet: string
              webpSrcSet: string
              width: any
            } | null
          } | null
        }
      | {
          __typename?: 'ListRecord'
          id: any
          listType?: string | null
          size?: string | null
          pagination?: any | null
          links: Array<{
            __typename?: 'PageRecord'
            id: any
            title?: string | null
            description?: string | null
            sold?: any | null
            pageSlug?: string | null
            image?: {
              __typename?: 'FileField'
              alt?: string | null
              url: string
              width?: any | null
              height?: any | null
              format: string
              tags: Array<string>
              title?: string | null
              responsiveImage?: {
                __typename?: 'ResponsiveImage'
                aspectRatio: any
                base64?: string | null
                bgColor?: string | null
                height: any
                sizes: string
                src: string
                srcSet: string
                webpSrcSet: string
                width: any
              } | null
            } | null
            parent?: {
              __typename?: 'PageRecord'
              pageSlug?: string | null
            } | null
          }>
        }
      | {
          __typename?: 'MediaBlockRecord'
          id: any
          big?: any | null
          image?: {
            __typename?: 'FileField'
            alt?: string | null
            url: string
            width?: any | null
            height?: any | null
            format: string
            tags: Array<string>
            title?: string | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              aspectRatio: any
              base64?: string | null
              bgColor?: string | null
              height: any
              sizes: string
              src: string
              srcSet: string
              webpSrcSet: string
              width: any
            } | null
          } | null
          video?: {
            __typename?: 'FileField'
            alt?: string | null
            url: string
            title?: string | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              streamingUrl: string
              thumbnailUrl: string
              mp4Low?: string | null
            } | null
          } | null
        }
      | {
          __typename?: 'PageListRecord'
          id: any
          listType?: string | null
          pageType?: {
            __typename?: 'PageRecord'
            pageSlug?: string | null
            title?: string | null
            children?: Array<{
              __typename?: 'PageRecord'
              id: any
              title?: string | null
              description?: string | null
              pageSlug?: string | null
              sold?: any | null
              image?: {
                __typename?: 'FileField'
                alt?: string | null
                url: string
                width?: any | null
                height?: any | null
                format: string
                tags: Array<string>
                title?: string | null
                responsiveImage?: {
                  __typename?: 'ResponsiveImage'
                  aspectRatio: any
                  base64?: string | null
                  bgColor?: string | null
                  height: any
                  sizes: string
                  src: string
                  srcSet: string
                  webpSrcSet: string
                  width: any
                } | null
              } | null
              parent?: {
                __typename?: 'PageRecord'
                pageSlug?: string | null
              } | null
            } | null> | null
          } | null
        }
      | {
          __typename?: 'ShowcaseRecord'
          id: any
          alignImageLeft?: any | null
          description?: string | null
          title?: string | null
          subtitle?: string | null
          background?: { __typename?: 'ColorField'; hex: string } | null
          image?: {
            __typename?: 'FileField'
            alt?: string | null
            url: string
            width?: any | null
            height?: any | null
            format: string
            tags: Array<string>
            title?: string | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              aspectRatio: any
              base64?: string | null
              bgColor?: string | null
              height: any
              sizes: string
              src: string
              srcSet: string
              webpSrcSet: string
              width: any
            } | null
          } | null
        }
      | {
          __typename?: 'TestimonialRecord'
          id: any
          quote?: string | null
          authorName?: string | null
          authorTitle?: string | null
          background?: { __typename?: 'ColorField'; hex: string } | null
          cta?: {
            __typename?: 'CtaRecord'
            url?: string | null
            title?: string | null
            link?:
              | { __typename?: 'HomeRecord' }
              | { __typename?: 'PageRecord'; id: any; pageSlug?: string | null }
              | null
          } | null
          image?: {
            __typename?: 'FileField'
            alt?: string | null
            url: string
            width?: any | null
            height?: any | null
            format: string
            tags: Array<string>
            title?: string | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              aspectRatio: any
              base64?: string | null
              bgColor?: string | null
              height: any
              sizes: string
              src: string
              srcSet: string
              webpSrcSet: string
              width: any
            } | null
          } | null
        }
    >
  } | null
}

export const ImageBaseFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageBaseFragment, unknown>
export const ResponsiveImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResponsiveImageFragment, unknown>
export const Image125FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image125' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '12:5',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Image125Fragment, unknown>
export const Image1FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Image1Fragment, unknown>
export const FooterFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'footer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FooterRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'copywrite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'socialMediaTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'socialMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image1' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FooterFragment, unknown>
export const GlobalFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'global' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GlobalRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'sold' } }],
      },
    },
  ],
} as unknown as DocumentNode<GlobalFragment, unknown>
export const NavLinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'navLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NavLinkFragment, unknown>
export const NavItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'navItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'NavItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'navLink' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'children' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageLink' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'navLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'children' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageLink' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'navLink' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'navLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NavItemFragment, unknown>
export const Image169FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image169' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '16:9',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Image169Fragment, unknown>
export const ContentBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'contentBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ContentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'center' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'text' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContentBlockFragment, unknown>
export const GalleryBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'galleryBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GalleryRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'spacing' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GalleryBlockFragment, unknown>
export const Image34FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image34' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '3:4',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Image34Fragment, unknown>
export const HeroBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'heroBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeroRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'center' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contentBackground' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ctaLabel' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ctaLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSlug' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'desktopImage' },
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image34' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'tabletImage' },
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image169' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'mobileImage' },
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image169' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image34' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '3:4',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image169' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '16:9',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroBlockFragment, unknown>
export const PageLinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'sold' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'parent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageLinkFragment, unknown>
export const ListBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'listBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'listType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagination' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'sold' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'parent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListBlockFragment, unknown>
export const Image43FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image43' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '4:3',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Image43Fragment, unknown>
export const VideoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'mp4Low' },
                  name: { kind: 'Name', value: 'mp4Url' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'res' },
                      value: { kind: 'EnumValue', value: 'low' },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'streamingUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoFragment, unknown>
export const MediaBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'big' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image43' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'video' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image43' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '4:3',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'mp4Low' },
                  name: { kind: 'Name', value: 'mp4Url' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'res' },
                      value: { kind: 'EnumValue', value: 'low' },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'streamingUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MediaBlockFragment, unknown>
export const ShowcaseBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'showcaseBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ShowcaseRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alignImageLeft' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'background' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ShowcaseBlockFragment, unknown>
export const CtaFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'cta' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CtaRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSlug' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CtaFragment, unknown>
export const TestimonialBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'testimonialBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TestimonialRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authorTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'background' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cta' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'cta' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'cta' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CtaRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSlug' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TestimonialBlockFragment, unknown>
export const PageListBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageListBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageType' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'children' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'image1' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSlug' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'parent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageSlug' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'sold' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'listType' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageListBlockFragment, unknown>
export const PageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'page' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image169' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'sold' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'contentBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'galleryBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'heroBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'listBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'showcaseBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'testimonialBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageListBlock' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image34' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '3:4',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image169' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '16:9',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'sold' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'parent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image43' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '4:3',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'mp4Low' },
                  name: { kind: 'Name', value: 'mp4Url' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'res' },
                      value: { kind: 'EnumValue', value: 'low' },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'streamingUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'cta' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CtaRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSlug' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'contentBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ContentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'center' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'text' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'galleryBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GalleryRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'spacing' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'heroBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeroRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'center' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contentBackground' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ctaLabel' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ctaLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSlug' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'desktopImage' },
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image34' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'tabletImage' },
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image169' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'mobileImage' },
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image169' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'listBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'listType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagination' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'big' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image43' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'video' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'showcaseBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ShowcaseRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alignImageLeft' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'background' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'testimonialBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TestimonialRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authorTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'background' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cta' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'cta' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageListBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageType' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'children' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'image1' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSlug' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'parent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageSlug' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'sold' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'listType' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFragment, unknown>
export const SiteFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'site' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Site' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'globalSeo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'facebookPageUrl' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'siteName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'titleSuffix' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'twitterAccount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fallbackSeo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'twitterCard' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'image1' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SiteFragment, unknown>
export const BasePageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BasePage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SiteLocale' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allNavItems' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'parent' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'exists' },
                            value: {
                              kind: 'StringValue',
                              value: '',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'navItem' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'footer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'footer' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'global' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'global' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_site' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'site' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'navLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'navItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'NavItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'navLink' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'children' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageLink' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'navLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'children' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageLink' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'navLink' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'footer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FooterRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'copywrite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'socialMediaTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'socialMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image1' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'global' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GlobalRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'sold' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'site' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Site' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'globalSeo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'facebookPageUrl' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'siteName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'titleSuffix' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'twitterAccount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fallbackSeo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'twitterCard' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'image1' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BasePageQuery, BasePageQueryVariables>
export const PageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Page' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SiteLocale' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'pageSlug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'page' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'imageBase' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image169' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '16:9',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'contentBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ContentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'center' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'text' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image1' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '1:1',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'galleryBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GalleryRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'spacing' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image34' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '3:4',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'heroBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeroRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'center' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contentBackground' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ctaLabel' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ctaLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSlug' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'desktopImage' },
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image34' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'tabletImage' },
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image169' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'mobileImage' },
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image169' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'sold' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'parent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'listBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'listType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagination' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image43' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'imageBase' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: { kind: 'EnumValue', value: 'en' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'imgixParams' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fit' },
                      value: { kind: 'EnumValue', value: 'crop' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'crop' },
                      value: { kind: 'EnumValue', value: 'focalpoint' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ar' },
                      value: {
                        kind: 'StringValue',
                        value: '4:3',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fm' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'q' },
                      value: { kind: 'IntValue', value: '100' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'mp4Low' },
                  name: { kind: 'Name', value: 'mp4Url' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'res' },
                      value: { kind: 'EnumValue', value: 'low' },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'streamingUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'big' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image43' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'video' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'showcaseBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ShowcaseRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alignImageLeft' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'background' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'cta' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CtaRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSlug' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'testimonialBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TestimonialRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authorTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'background' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cta' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'cta' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image1' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageListBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageType' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'children' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'image1' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageSlug' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'parent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageSlug' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'sold' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'listType' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'page' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'markdown' },
                value: { kind: 'BooleanValue', value: true },
              },
            ],
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'image169' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'sold' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'contentBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'galleryBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'heroBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'listBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'showcaseBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'testimonialBlock' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageListBlock' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageQuery, PageQueryVariables>
