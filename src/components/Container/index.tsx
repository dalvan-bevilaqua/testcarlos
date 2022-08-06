import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type ContainerProps = {
  size?: 'small' | 'medium'
}

const containerModifier = {
  small: (theme: DefaultTheme) => css`
    max-width: ${theme.container.small};
  `,
  medium: (theme: DefaultTheme) => css`
    max-width: ${theme.container.medium};
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, size = 'medium' }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 5rem 0;
    ${media.lessThan('large')`
      padding: 3rem ${theme.spacings.xsmall};
    `}
    ${!!size && containerModifier[size](theme)}
  `}
`
