import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`
export const Content = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.greaterThan('medium')`
    justify-content: start;
  `}
`

export const Subtitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 4rem;
    flex-direction: column;
    padding: 0 ${theme.spacings.small};
    ${media.greaterThan('medium')`
     flex-direction: row;
    `}

    a {
      cursor: pointer;
    }
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium};
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    svg {
      margin-right: ${theme.spacings.medium};
      color: ${theme.colors.secondary.base};
      width: 3.4rem;
      height: 3.4rem;
    }
    span {
      font-size: ${theme.font.sizes.xsmall};
    }
    a {
      color: ${theme.colors.secondary.base};
    }
  `}
`

export default styled.div``
