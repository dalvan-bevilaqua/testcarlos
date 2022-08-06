import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} ${theme.spacings.large};
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    svg {
      margin-right: ${theme.spacings.medium};
      color: ${theme.colors.primary.base};
      width: 3.4rem;
      height: 3.4rem;
    }
    span {
      font-size: ${theme.font.sizes.xsmall};
    }
    a {
      color: ${theme.colors.primary.base};
    }
  `}
`

export const Disease = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary.base};
  `}
`

export const DiseaseTitle = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const DiseaseDescription = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    letter-spacing: 0.1rem;
  `}
`

export const Prescription = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary.base};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    margin: 6rem 0 0 3rem;
  `}
`

export const PrescriptionDescription = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-left: 3rem;
    margin-top: 2rem;
    text-align: justify;
  `}
`

export const Formulation = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: row;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: 3rem;

    table {
      border-right: 1px solid ${theme.colors.gray.dark};
    }
  `}
`

export const FormulationInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    flex-direction: column;
    padding: 0 ${theme.spacings.small};
    ${media.greaterThan('medium')`
     flex-direction: column;
    `}

    a {
      padding: 3rem;
      height: auto;
    }
  `}
`

export default styled.div``
