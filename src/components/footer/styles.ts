import styled from 'styled-components'

export const FooterBlog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 0;
  position: fixed;
  width: 90%;

  width: 100%;
  height: 3.75rem;
  margin-top: 100px;

  h1 {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
  }

  background: ${(props) => props.theme['base-1000']};
  color: ${(props) => props.theme['base-300']};
`
