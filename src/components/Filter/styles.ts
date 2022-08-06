import styled, { css } from 'styled-components'
import { prettyScrollBar } from 'styles/prettyScrollBar'

type CollapsedProps = {
  isCollapsed?: boolean
  hasDropButton?: boolean
  hasScroll?: boolean
}

export const Wrapper = styled.div<CollapsedProps>`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr
    place-items: start;
    grid-gap: ${theme.spacings.medium};
    border-radius: ${theme.border.rounded};
    background: ${theme.colors.white};
    margin-top: 2rem;
    padding: ${theme.spacings.small};
    transition: ${theme.transition.default};
    height: fit-content;
    position: relative;
  `}
`

export const Grid = styled.div<CollapsedProps>`
  ${({ theme, hasScroll }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    grid-template-rows: auto;
    grid-gap: ${theme.spacings.medium};
    place-items: start;
    height: ${hasScroll ? '10rem' : 'fit-content'};
    ${hasScroll && prettyScrollBar(theme)}
  `}
`

export const ArrowIcon = styled.div<CollapsedProps>`
  ${({ theme, isCollapsed }) => css`
    color: ${theme.colors.gray.base};
    &:hover {
      color: ${theme.colors.primary.base};
    }
    transition: ${theme.transition.default};
    transform: ${isCollapsed ? 'rotate(0)' : 'rotate(180deg)'};
  `}
`

type ContentProps = {
  isActive: boolean
}

export const Content = styled.div<ContentProps>`
  ${({ theme, isActive }) => css`
    text-align: start;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    b,
    span {
      font-size: ${theme.font.sizes.xsmall};
    }

    b {
      color: ${isActive ? theme.colors.white : theme.colors.secondary.base};
    }

    span {
      color: ${isActive ? theme.colors.white : theme.colors.gray.darker};
    }
  `}
`

export const ButtonWrapper = styled.div<CollapsedProps>`
  ${({ theme, isCollapsed, hasScroll }) => css`
    position: absolute;
    right: ${theme.spacings.xsmall};

    ${!!hasScroll && !isCollapsed
      ? css`
          top: 0;
        `
      : css`
          top: ${theme.spacings.small};
        `}
  `}
`
