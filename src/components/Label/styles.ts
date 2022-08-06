import styled, { css, DefaultTheme } from 'styled-components'
import { LabelProps } from '.'

const modifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  xmedium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary.darker};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary.base};
  `,
  tertiary: (theme: DefaultTheme) => css`
    color: ${theme.colors.tertiary.base};
  `,
  gray: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray.darker};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  darkest: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray.darkest};
  `,
  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray.xdarkest};
  `,
  red: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
  `,
  isBold: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
  `
}

export const Label = styled.label<Omit<LabelProps, 'text'>>`
  ${({ theme, color, size, isBold }) => css`
    ${!!color && modifier[color](theme)}
    ${!!size && modifier[size](theme)}
    ${!!isBold && modifier.isBold(theme)}
  `}
`
