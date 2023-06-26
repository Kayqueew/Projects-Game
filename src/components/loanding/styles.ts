import styled from 'styled-components'

export const LoadingContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingCard = styled.div`
  border: 5px solid #f3f3f3; /* cor do border */
  border-top: 5px solid ${(props) => props.theme.blue}; /* cor do border quando em rotação */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  text-align: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
