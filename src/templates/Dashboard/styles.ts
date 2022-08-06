import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    grid-template-areas: 'a' 'b' 'c';
    grid-gap: ${theme.spacings.small};
    grid-template-rows: 3;
    grid-template-columns: 34rem;

    ${media.greaterThan('large')`
      grid-template-areas:
            "a b"
            "a b"
            "c c";
      grid-template-columns: auto 34rem;
    `}
  `}
`

export const AreaA = styled.div`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    grid-area: a;
    border-bottom: 1px solid ${theme.colors.gray.base};
    ${media.greaterThan('medium')`
      padding-bottom: ${theme.spacings.xsmall};
      text-align: start;
    `};
  `}
`

export const AreaB = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.xsmall};
    place-content: center;
    height: 100%;
    grid-area: b;
    ${media.greaterThan('medium')`
      place-content: space-between;
    `}
    ${media.between('medium', 'large')`
      padding-top: 2rem;
    `}
  `}
`

export const AreaC = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.xsmall};
    place-content: center;
    width: 100%;
    height: 100%;
    grid-area: c;
    grid-template-columns: 1fr;
    ${media.greaterThan('large')`
      grid-template-columns: repeat(3, 1fr);
    `}
  `}
`
