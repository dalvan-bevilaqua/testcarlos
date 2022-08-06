import styled, { css, DefaultTheme } from 'styled-components'
import { PillProps } from '.'

const wrapperModifier = {
  small: (theme: DefaultTheme) => css`
    height: ${theme.spacings.xsmall};
    width: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: ${theme.spacings.medium};
    width: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.large};
  `
}

export const Wrapper = styled.div<Pick<PillProps, 'size'>>`
  ${({ theme, size }) => css`
    background: ${theme.colors.alert};
    color: ${theme.colors.white};
    border: 1px solid transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.font.bold};
    ${!!size && wrapperModifier[size](theme)}
  `}
`
