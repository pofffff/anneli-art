export const getBackgroundColor = (
  bgColor: string | undefined,
  lightColor: string,
  darkColor: string,
) => {
  if (!bgColor) {
    return lightColor
  }
  const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor
  const r = parseInt(color.substring(0, 2), 16)
  const g = parseInt(color.substring(2, 4), 16)
  const b = parseInt(color.substring(4, 6), 16)
  return r * 0.299 + g * 0.587 + b * 0.114 > 160 ? darkColor : lightColor
}
