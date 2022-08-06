import styled, { css, DefaultTheme } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    svg {
      width: auto;
      height: 7rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, size }) => css`
    font-weight: ${theme.font.bold};

    span {
      &:first-of-type {
        color: ${theme.colors.primary.lightest};
      }
      &:last-of-type {
        color: ${theme.colors.primary.darker};
      }
    }

    ${!!size && wrapperModifier[size](theme)}
  `}
`
