import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeColor?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/Montserrat-Medium.woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/Montserrat-Bold.woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html,
    body,
    #__next {
      height: 100%;
      width: 100%;
    }
    html {
      font-size: 62.5%;
    }

    body {
      color: ${theme.colors.gray.xdarkest};
      background: ${theme.colors.gray.lightest};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    ul,
    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    label {
      cursor: inherit;
    }
  `}

`

export default GlobalStyles
