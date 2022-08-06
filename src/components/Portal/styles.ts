import styled, { css } from 'styled-components'

type WrapperProps = {
  isOpen?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    transition: ${theme.transition.default};
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
  `}
`
export const Head = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: ${theme.spacings.xsmall};
    svg {
      transition: all ${theme.transition.default};
      color: ${theme.colors.primary.darker};
      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`

export const Body = styled.div`
  height: 100%;
`
