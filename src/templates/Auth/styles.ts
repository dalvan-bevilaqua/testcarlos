import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary.darker};
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    place-content: center;
    position: relative;
    min-height: 50rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: ${theme.layers.base};
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.gray.lightest};
    padding: ${theme.spacings.xlarge} ${theme.spacings.xsmall}
      ${theme.spacings.xmedium} ${theme.spacings.xsmall};
    border-radius: ${theme.border.rounded};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    ${media.greaterThan('small')`
      width: 32rem;
    `}
  `}
`

export const InputGroup = styled.div`
  ${({ theme }) => css`
    text-align: start;
    width: 100%;
    ${media.greaterThan('small')`
      width: 28rem;
    `}
    margin: 0;
    margin-top: ${theme.spacings.small};
    display: grid;
    grid-gap: ${theme.spacings.xxsmall};
  `}
`

type ErrorMessageProps = {
  error?: boolean
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  ${({ theme, error }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.4rem;
    width: 100%;
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.tertiary.lighter};
    opacity: ${error ? 1 : 0};
    transition: all ${theme.transition.default};
  `}
`

export const ActionGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xsmall};
    width: 28rem;
    justify-content: space-between;
    align-items: center;
  `}
`

export const Copyright = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.primary.lightest};
    text-align: center;
  `}
`
