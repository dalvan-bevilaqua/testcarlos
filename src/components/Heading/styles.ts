import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const modifier = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary.darker};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary.base};
  `,
  tertiary: (theme: DefaultTheme) => css`
    color: ${theme.colors.tertiary.base};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  xmedium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  gray: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray.darker};
  `
}

export const H1 = styled.h1<HeadingProps>`
  ${({ theme, color, size }) => css`
    ${!!color && modifier[color](theme)}
    ${!!size && modifier[size](theme)}
  `}
`
