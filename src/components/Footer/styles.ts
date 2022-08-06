import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container as GlobalContainer } from 'components/Container'

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: 15rem;
    width: 100%;
    background: ${theme.colors.linear.first};
  `}
`
export const Container = styled(GlobalContainer)`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.greaterThan('large')`
      padding: 0;
    `}
    ${media.lessThan('medium')`
      padding: ${theme.spacings.xxsmall};
      flex-direction: column;
    `}

    span {
      font-size: ${theme.font.sizes.xxsmall};
      color: ${theme.colors.white};
    }
  `}
`

export const WavesWrapper = styled.div`
  position: relative;
`
