import { css, DefaultTheme } from 'styled-components'

export function prettyScrollBar(theme: DefaultTheme) {
  return css`
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-color: ${theme.colors.gray.base} transparent;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-clip: padding-box;
      background-color: ${theme.colors.gray.base};
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
      display: none;
    }
    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  `
}
