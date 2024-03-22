import styled, { css } from 'styled-components';

interface MobileImageProps {
  $breakpointMax?: string;
}

interface TabletImageProps {
  $breakpointMin?: string;
  $breakpointMax?: string;
}

interface DesktopImageProps {
  $breakpointMin?: string;
  $force?: boolean;
}

export const MobileImage = styled.div<MobileImageProps>`
  @media screen and (min-width: ${({ $breakpointMax }) => $breakpointMax}) {
    display: none;
  }
`;
export const TabletImage = styled.div<TabletImageProps>`
  display: none;
  @media screen and (min-width: ${({ $breakpointMin }) => $breakpointMin}) {
    display: block;
  }
  @media screen and (min-width: ${({ $breakpointMax }) => $breakpointMax}) {
    display: none;
  }
`;
export const DesktopImage = styled.div<DesktopImageProps>`
  ${({ $force, $breakpointMin }) =>
    !$force &&
    css`
      display: none;
      @media screen and (min-width: ${$breakpointMin}) {
        display: block;
      }
    `}
`;
