const colorVars = {
  neutral1: '#f8f9fa',
  neutral2: '#b0b0b0',
  neutral3: '#4d4d4e',
  neutral4: '#000000',
  blue1: '#007bff',
  blue2: '#0056b3',
  blue3: '#004b9a',
  blue4: '#003366',
  indigo1: '#6610f2',
  indigo2: '#5a0d9d',
  indigo3: '#4d0b83',
}

export const colors = {
  backgroundPrimary: colorVars.blue1,
  backgroundPrimaryAccent: colorVars.blue2,
  backgroundSecondary: colorVars.blue3,
  backgroundSecondaryAccent: colorVars.blue4,
  backgroundTertiary: colorVars.indigo1,
  backgroundTertiaryAccent: colorVars.indigo2,
  contentPrimary: colorVars.neutral1,
  contentSecondary: colorVars.neutral2,
  contentTertiary: colorVars.neutral3,
  contentLight: colorVars.neutral1,
  contentDark: colorVars.neutral4,
}

export const sizes = {
  s: '8px',
  m: '16px',
  l: '32px',
  xl: '64px',
  xxl: '128px',
}

export const contentSpacing = {
  s: '8px',
  m: '16px',
  l: '32px',
  xl: '64px',
  xxl: '128px',
}

export const spacings = {
  containerXL: '10vw',
  containerL: '7.5vw',
  containerM: '5vw',
  containerS: '3.75vw',
  containerXS: '2.5vw',
}

export const buttonSizes = {
  verticalL: '20px',
  horizontalL: '40px',
  verticalM: '16px',
  horizontalM: '32px',
  verticalS: '12px',
  horizontalS: '24px',
}

export const gridSpacing = {
  huge: '6.25em',
  large: '4.375em',
  medium: '3.125em',
  small: '1.5em',
  xSmall: '1em',
  regular: '1.5rem',
  tiny: '0.75em',
  tinier: '0.5em',
  xxSmall: '0.25em',
}

export const boxShadow = {
  button:
    'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
}

export const fonts = {
  sizeU: 16,
  size: '16px',
  familyPrimary: "'Raleway', sans-serif", // span, p, div etc
  familySecondary: "'Roboto', sans-serif", // headings
  // familyAccent: "'Courier New', monospace",
}

export const fontSizes = {
  h1: fonts.sizeU * 2.5,
  h2: fonts.sizeU * 2,
  h3: fonts.sizeU * 1.75,
  h4: fonts.sizeU * 1.5,
  h5: fonts.sizeU * 1.25,
  h6: fonts.sizeU * 1,
  p: fonts.sizeU * 1,
  small: fonts.sizeU * 0.875,
}
// if font-size is set to 16px, then:
// $font-size-h1: $font-size-p * 2.5; // 40px
// $font-size-h2: $font-size-p * 2; // 32px
// $font-size-h3: $font-size-p * 1.75; // 28px
// $font-size-h4: $font-size-p * 1.5; // 24px
// $font-size-h5: $font-size-p * 1.25; // 20px

export const zIndex = {
  dropdown: 1000,
  modal: 2000,
  tooltip: 3000,
  header: 4000,
  overlay: 5000,
}

export const transitions = {
  fast: '0.2s',
  medium: '0.5s',
  slow: '1s',
}

export const breakpoints = {
  desktopLarge: '1440px',
  desktopLargeRaw: 1440,
  desktop: '1024px',
  desktopRaw: 1024,
  tablet: '768px',
  tabletRaw: 768,
  mobile: '480px',
  mobileRaw: 480,
  maxGridWidth: '1050px',
  maxGridWidthRaw: 1050,
} as const

export type Breakpoint = keyof typeof breakpoints
