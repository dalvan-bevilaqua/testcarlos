import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Name = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.xlarge};
    `}
  `}
`

export const LastAccess = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    place-content: center;
    grid-gap: 4px;
    grid-auto-flow: column;
    margin-bottom: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      place-content: start;
    `}
  `}
`

export const Plans = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.xxsmall};
    place-content: center;
    grid-template-columns: 1fr;
    ${media.greaterThan('large')`
      grid-template-columns: repeat(3, 1fr);
    `}
    ${media.lessThan('medium')`
      margin: ${theme.spacings.small} 0;
    `}
  `}
`
