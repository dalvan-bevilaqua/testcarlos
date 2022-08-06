import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 30rem;
    width: 100%;
    height: 17rem;
    border-radius: ${theme.border.rounded};
    background: ${theme.colors.white};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
  `}
`

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3rem;
  width: 100%;
  height: 100%;
`

export const FlexColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const Icon = styled.div`
  svg {
    width: 2.4rem;
    height: 2rem;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`
export const LabelGroup = styled.div`
  ${({ theme }) => css`

  display: flex;
  align-items: center;
  justify-content: start;
  svg {
    margin-right: ${theme.spacings.xxsmall};
    width: 1.3rem;
    height: 1.7rem;
`}
`

export const Text = styled.div`
  ${({ theme }) => css`
    height: 5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.xxsmall};
    text-align: start;
  `}
`
