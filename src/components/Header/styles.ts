import styled from 'styled-components'

export const HeaderCard = styled.div`
  width: 100%;
  height: 3.75rem;

  top: 0;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['base-1000']};

  h1 {
    font-size: 30px;

    color: ${(props) => props.theme['base-300']};
  }
`
