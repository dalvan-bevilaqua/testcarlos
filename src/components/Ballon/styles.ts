import styled, { css, DefaultTheme } from 'styled-components'
import { BallonProps } from '.'

const titleModifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}
const subTitleModifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `
}

const textModifier = {
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
    color: ${theme.colors.gray.darkest};
  `
}

const imageModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary.darker};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary.base};
  `,
  tertiary: (theme: DefaultTheme) => css`
    background: ${theme.colors.tertiary.base};
  `,
  gray: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray.darkest};
  `
}

export const Wrapper = styled.div<Pick<BallonProps, 'isDisabled'>>`
  ${({ theme, isDisabled }) => css`
    height: 7.5rem;
    border-radius: ${theme.border.radius};
    background: transparent;
    display: grid;
    grid-template-columns: auto 1fr;
    place-items: center;
    place-content: center;
    grid-gap: ${theme.spacings.medium};
    cursor: ${isDisabled ? 'not-allowed' : 'inherit'};
    opacity: ${isDisabled ? '0.6' : '1'};
  `}
`

export const Image = styled.div<Pick<BallonProps, 'color'>>`
  ${({ theme, color }) => css`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: ${theme.colors[color].base};
    display: flex;
    align-items: center;
    justify-content: center;

    ${!!color && imageModifier[color](theme)};
    position: relative;
    &::after {
      content: '';
      position: absolute;
    }
    svg {
      ${!!color && textModifier[color](theme)};
      fill: ${theme.colors.white};
      width: 3rem;
      height: 3rem;
    }
  `}
`

export const Border = styled.div`
  ${({ theme }) => css`
    padding: 4px;
    background: ${theme.colors.white};
    border-radius: 50% 50% 4px 50%;
    border: 1px solid ${theme.colors.gray.base};
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  text-align: start;
  flex-direction: column;
  width: 100%;
`

export const Title = styled.h1<Pick<BallonProps, 'size' | 'color'>>`
  ${({ theme, size, color }) => css`
    font-weight: ${theme.font.bold};
    ${!!color && textModifier[color](theme)};
    ${!!size && titleModifier[size](theme)}
  `}
`

export const SubTitle = styled.h2<Pick<BallonProps, 'size' | 'color'>>`
  ${({ theme, size, color }) => css`
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray.xdarkest};
    ${!!size && subTitleModifier[size](theme)}

    b {
      font-weight: ${theme.font.bold};
      ${!!color && textModifier[color](theme)};
    }
  `}
`
