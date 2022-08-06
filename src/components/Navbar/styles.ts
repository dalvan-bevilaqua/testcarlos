import styled, { css } from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Item = styled.li`
  ${({ theme }) => css`
    float: left;
    margin-right: ${theme.spacings.xlarge};
  `}
`
export const CallToActions = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    grid-template-columns: repeat(3, min-content);
    grid-gap: ${theme.spacings.medium};
  `}
`
