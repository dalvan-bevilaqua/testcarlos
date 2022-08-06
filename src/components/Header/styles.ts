import styled, { css } from 'styled-components'
import { Container as GlobalContainer } from 'components/Container'

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.white};
    display: flex;
    padding: 0 ${theme.spacings.xsmall};
  `}
`

export const Container = styled(GlobalContainer)`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`

export const Hamburger = styled.div`
  ${({ theme }) => css`
    transition: all ${theme.transition.default};
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.primary.darker};
    &:hover {
      filter: brightness(0.9);
    }
  `}
`

export const PortalContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.xsmall};
    place-items: center;
    place-content: center;
  `}
`

export const Divisor = styled.div`
  ${({ theme }) => css`
    height: 0.2rem;
    width: 100%;
    background: ${theme.colors.linear.first};
  `}
`
