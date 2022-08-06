import styled, { css, DefaultTheme } from 'styled-components'
import { normalize } from 'styles/normalize'

const wrapperColorModifier = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary.base};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary.lighter};
  `,
  tertiary: (theme: DefaultTheme) => css`
    color: ${theme.colors.tertiary.lighter};
  `,
  gray: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray.base};
  `,
  grayDark: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray.dark};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  red: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.rounded};
    -webkit-user-select: none; /* Chrome Todos / Safari Todos */
    -moz-user-select: none; /* Firefox Todos */
    -ms-user-select: none; /* IE 10+ */
    -o-user-select: none;
    user-select: none;
  `}
`

type TitleProps = {
  color: 'primary' | 'secondary' | 'tertiary' | 'gray' | 'white' | 'red'
  isOpen: boolean
}

export const Title = styled.div<TitleProps>`
  ${({ theme, isOpen, color }) => css`
    display: flex;
    justify-content: space-between;

    svg {
      width: 2.4rem;
      ${wrapperColorModifier[isOpen && !!color ? color : 'grayDark'](theme)};
    }
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray.xdarkest};
    padding-right: ${theme.spacings.medium};
    line-height: ${theme.font.height.medium};
    ${normalize(theme)}
  `}
`
