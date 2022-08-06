import { css, DefaultTheme } from 'styled-components'

export function normalize(theme: DefaultTheme) {
  return css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    br {
      margin-bottom: ${theme.spacings.xsmall};
    }
    ul {
      padding-left: ${theme.spacings.small};
    }
    ul,
    li {
      list-style: disc;
    }
  `
}
