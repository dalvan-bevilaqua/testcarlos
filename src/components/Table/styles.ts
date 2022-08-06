import styled, { css } from 'styled-components'

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`

export const THead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const TFoot = styled.tfoot``

export const TBody = styled.tbody``

export const TR = styled.tr`
  ${({ theme }) => css`
    //color: ${theme.colors.white};
    &:hover {
      background-color: ${theme.colors.gray.lighter};
    }
    &:nth-child(odd) {
      background-color: ${theme.colors.gray.base};
      &:hover {
        background-color: ${theme.colors.gray.lighter};
      }
    }
  `}
`

export const TH = styled.th`
  text-align: left;
  padding: 16px;
`

export const TD = styled.td`
  text-align: left;
  padding: 16px;
`
