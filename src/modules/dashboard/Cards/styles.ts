import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    width: 100%;
    grid-gap: ${theme.spacings.xxsmall};
    margin: 0 auto;
  `}
`

type BlockBodyProps = {
  isBase?: boolean
}

export const BlockBody = styled.div<BlockBodyProps>`
  ${({ theme, isBase }) => css`
    background: ${isBase
      ? theme.colors.primary.base
      : theme.colors.primary.darker};
    border-radius: ${theme.border.radius};
    height: 12.5rem;
    width: 100%;
    min-width: 34rem;
    display: grid;
    border: 1px solid ${theme.colors.gray.base};
    grid-gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};
  `}
`

export const AboutMe = styled(BlockBody)`
  grid-template-areas:
    'a b c d'
    'e f g h';
`

export const LastExamBlock = styled(BlockBody)`
  grid-template-areas:
    'a b c'
    'd e f';
`

export const ContactBlock = styled(BlockBody)`
  ${({ theme }) => css`
    grid-template-areas: 'a b';
    grid-gap: ${theme.spacings.xsmall};
    grid-auto-flow: column;
    label {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const Situation = styled(FlexColumn)`
  button {
    margin-top: 0.4rem;
    margin-left: -0.6rem;
  }
`

export const Image = styled.div`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary.lighter};
    margin: auto 0;
    svg {
      fill: ${theme.colors.white};
      width: 3rem;
      height: 3rem;
    }

    ${media.greaterThan('large')`
      margin: auto;
    `}
  `}
`

export const UpPercent = styled(FlexBetween)`
  svg {
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 0.4rem;
    margin-top: 0.2rem;
  }
`
