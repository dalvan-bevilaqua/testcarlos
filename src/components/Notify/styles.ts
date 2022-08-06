import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: fit-content;
    svg {
      transition: all ${theme.transition.default};
      cursor: pointer;
      text-decoration: none;
      fill: ${theme.colors.gray.darkest};
      &:hover {
        fill: ${theme.colors.primary.base};
      }
    }
  `}
`
export const PillWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -${theme.spacings.xxsmall};
    right: -${theme.spacings.xxsmall};
  `}
`
