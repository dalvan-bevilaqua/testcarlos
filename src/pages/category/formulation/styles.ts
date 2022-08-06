import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  ${media.greaterThan('medium')`
    justify-content: start;
    margin: 0;
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
  `}
`

export const Index = styled.div`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    background-color: white;
    border-radius: 50px;
    //flex-direction: column;
    padding: ${theme.spacings.medium} 1rem;
    ${media.greaterThan('medium')`
     flex-direction: row;
    `}
  `}
`

export const IndexItem = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    padding: 0 1.5rem 0 1.5rem;
    ${media.lessThan('large')`
      margin-top: 10px
    `}
  `}
`

export const IndexItemS = styled.label<Omit<{ selected: boolean }, 'text'>>`
  ${({ theme, selected }) => css`
    width: 100%;
    height: 3px;
    display: block;
    margin-top: 1rem;
    background-color: ${selected
      ? theme.colors.primary.base
      : theme.colors.gray.base};
  `}
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
export const ItemList = styled.ul`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    min-height: 40vh;
    display: grid;
    padding: ${theme.spacings.small} 0;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    place-items: center;
    place-content: center;
  `}
`
export const Item = styled.li`
  ${({ theme }) => css`
    width: 100%;
    height: 17rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.rounded};
  `}
`

export const LoadingWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-content: center;
    place-items: center;
    min-height: 20vh;
    padding: ${theme.spacings.small} 0;
    width: 100%;
  `}
`

export default styled.div``
