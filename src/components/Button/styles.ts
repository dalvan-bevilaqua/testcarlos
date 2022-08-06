import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

const buttonModifier = {
  linear: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.linear.first};
  `,
  ghost: () => css`
    background: transparent;
    border: none;
    font-weight: none;
    transition: none;
    &:hover {
      filter: none;
    }
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary.base};
    background: ${theme.colors.white};
  `,
  alert: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.alert};
  `,
  darker: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.primary.darker};
  `,
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.primary.base};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.secondary.base};
  `,
  xmedium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0.4rem ${theme.spacings.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    width: 8.5rem;
    height: 3rem;
    padding: ${theme.spacings.xxsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
    padding: 0.4rem ${theme.spacings.xxsmall};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    min-width: 10rem;
  `,
  fit: () => css`
    width: fit-content;
  `,
  isBold: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
  `,
  isFull: () => css`
    width: 100%;
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, color, size, isBold, isFull }) => css`
    border: none;
    text-align: center;
    border-radius: ${theme.border.rounded};
    cursor: pointer;
    transition: all ${theme.transition.default};
    &:hover {
      filter: brightness(0.9);
    }
    ${!!color && buttonModifier[color](theme)};
    ${!!size && buttonModifier[size](theme)};
    ${!!isBold && buttonModifier.isBold(theme)};
    ${!!isFull && buttonModifier.isFull()};
  `}
`
