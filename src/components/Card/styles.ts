import styled, { css, DefaultTheme } from 'styled-components'
import { CardProps } from '.'

const modifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `
}

const wrapperColorModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary.base};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary.lighter};
  `,
  tertiary: (theme: DefaultTheme) => css`
    background: ${theme.colors.tertiary.lighter};
  `,
  gray: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray.base};
  `,
  white: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
  `,
  red: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
  `,
  linear: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.linear.secondary};
  `,
  normal: (theme: DefaultTheme) => css`
    color: ${theme.colors.normal};
    background: ${theme.colors.normal};
  `
}

export const Wrapper = styled.a<Pick<CardProps, 'color' | 'isDisabled'>>`
  ${({ theme, color, isDisabled }) => css`
    max-width: 34rem;
    width: 100%;
    height: 7.5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    display: grid;
    grid-template-columns: auto 1fr;
    place-items: center;
    place-content: center;
    grid-gap: ${theme.spacings.xsmall};
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
    opacity: ${isDisabled ? '0.6' : '1'};
    ${!!color && wrapperColorModifier[color](theme)};
  `}
`

const imageColorModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary.darker};
    color: ${theme.colors.primary.darker};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary.base};
    color: ${theme.colors.secondary.base};
  `,
  tertiary: (theme: DefaultTheme) => css`
    background: ${theme.colors.tertiary.base};
    color: ${theme.colors.tertiary.base};
  `,
  gray: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray.darkest};
  `,
  red: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
  `,
  white: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
  `,
  linear: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.linear.first};
  `,
  normal: (theme: DefaultTheme) => css`
    color: ${theme.colors.normal};
    background: ${theme.colors.normal};
  `
}

export const Image = styled.div<Pick<CardProps, 'color'>>`
  ${({ theme, color }) => css`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${!!color && imageColorModifier[color](theme)}

    svg {
      fill: ${theme.colors.white};
      width: 3rem;
      height: 3rem;
    }
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  text-align: start;
  flex-direction: column;
`

export const Title = styled.div<Pick<CardProps, 'size'>>`
  ${({ theme, size }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    ${!!size && modifier[size](theme)}
  `}
`

export const SubTitle = styled.div<Pick<CardProps, 'size'>>`
  ${({ theme, size }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    height: auto;
    ${!!size && modifier[size](theme)}
  `}
`

export const Info = styled.div<Pick<CardProps, 'size'>>`
  ${({ theme, size }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    height: auto;
    ${!!size && modifier[size](theme)}
  `}
`
