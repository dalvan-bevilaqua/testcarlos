import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputWrapper = styled.div`
  display: flex;
`

const inputModifier = {
  disabled: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray.lightest};
    pointer-events: none;
  `,
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.tertiary.lighter};
  `
}

export const Input = styled.input<TextFieldProps>`
  ${({ theme, error, disabled }) => css`
    width: 100%;
    height: 3.5rem;
    border: 1px solid transparent;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    outline: none;
    color: ${theme.colors.gray.xdarkest};
    transition: all ${theme.transition.default};

    &:focus {
      border-color: ${theme.colors.primary.base};
    }

    ${!!error && inputModifier.error(theme)}
    ${!!disabled && inputModifier.disabled(theme)}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary.base};
    margin-bottom: ${theme.spacings.xxsmall};
    margin-left: ${theme.spacings.xxsmall};
  `}
`
