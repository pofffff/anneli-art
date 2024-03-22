export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    CardGridModelLinksField: ['LinkRecord', 'PageRecord'],
    ContentModelContentLinksField: ['LinkRecord', 'PageRecord'],
    CtaModelLinkField: ['HomeRecord', 'PageRecord'],
    FileFieldInterface: ['FileField'],
    HomeModelContentField: [
      'CardGridRecord',
      'ContentRecord',
      'GalleryRecord',
      'HeroRecord',
      'ListRecord',
      'MediaBlockRecord',
      'ShowcaseRecord',
      'TestimonialRecord',
    ],
    LinkModelLinkField: ['HomeRecord', 'PageRecord'],
    ListModelLinksField: ['LinkRecord', 'PageRecord'],
    PageModelContentField: [
      'CardGridRecord',
      'ContentRecord',
      'GalleryRecord',
      'HeroRecord',
      'ListRecord',
      'MediaBlockRecord',
      'ShowcaseRecord',
      'TestimonialRecord',
    ],
    RecordInterface: [
      'CardGridRecord',
      'ContentRecord',
      'CtaRecord',
      'FooterRecord',
      'GalleryRecord',
      'GlobalRecord',
      'HeroRecord',
      'HomeRecord',
      'LinkRecord',
      'ListRecord',
      'MediaBlockRecord',
      'NavItemRecord',
      'PageRecord',
      'ShowcaseRecord',
      'TestimonialRecord',
    ],
  },
}
export default result
