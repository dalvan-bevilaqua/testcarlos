import styled, { css, DefaultTheme } from 'styled-components'

import { HoverLinkProps } from '.'

const wrapperModifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray.darkest};
    &:hover {
      color: ${theme.colors.primary.base};
    }
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.gray.lightest};
    }
  `
}

export const Wrapper = styled.div<HoverLinkProps>`
  ${({ theme, size, color }) => css`
    a {
      cursor: pointer;
      transition: all ${theme.transition.default};
      cursor: pointer;
      text-decoration: none;

      ${!!size && wrapperModifier[size](theme)};
      ${!!color && wrapperModifier[color](theme)};
    }
  `}
`
