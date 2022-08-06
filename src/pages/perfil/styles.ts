import { TextFieldProps } from 'components/TextField'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Name = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    //min-width: 300px;
    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.xlarge};
    `}
  `}
`

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`
export const Content = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.greaterThan('medium')`
    justify-content: start;
  `}
`

export const Subtitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    flex-direction: column;
    padding: 0 ${theme.spacings.small};
    ${media.greaterThan('medium')`
     flex-direction: row;
    `}

    a {
      cursor: pointer;
    }
  `}
`
export const DiseaseNormal = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 75%;
    text-align: center;
    padding: 15px;
    color: ${theme.colors.white};
    border-radius: 15px;
    background-color: ${theme.colors.normal};
  `}
`

export const Disease = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary.base};
  `}
`

export default styled.div``
