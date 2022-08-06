import styled, { css } from 'styled-components'
import { normalize } from 'styles/normalize'

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
  isOpen: boolean
}

export const Title = styled.div<TitleProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    justify-content: space-between;

    svg {
      width: 2.4rem;
      color: ${isOpen ? theme.colors.secondary.base : theme.colors.gray.dark};
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
