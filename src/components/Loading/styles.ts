import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: spin 1.8s linear infinite;
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
