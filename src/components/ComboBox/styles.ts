import styled, { css } from 'styled-components'

export const Select = styled.select`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    border: 2px solid ${theme.colors.secondary.base};
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    width: 100%;
    outline: none;
    &:focus {
      border: 2px solid ${theme.colors.secondary.lighter};
    }
  `}
`

export const Option = styled.option``
