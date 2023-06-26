import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 20px;

  @media (max-width: 425px) {
    margin-top: 10px;
  }
`

export const CardItem = styled.div`
  width: 21.87rem;
  height: 27.5rem;
  background: ${(props) => props.theme['base-900']};
  border-radius: 6px;
  padding: 10px;
  border: 2px solid ${(props) => props.theme['base-900']};

  img {
    width: 20.62rem;
    height: 10rem;
    border-radius: 6px;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.1);
  }

  h1 {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${(props) => props.theme['base-100']};

    width: 17.6rem;
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 25px;
  }

  p {
    padding: 0 10px;
    color: ${(props) => props.theme['base-300']};

    font-family: 'Nunito';
    font-weight: 400;
    font-size: 15.5px;
    line-height: 160%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    strong {
      color: ${(props) => props.theme['base-100']};
    }
  }

  p:last-of-type {
    strong {
      color: ${(props) => props.theme['base-300']};
    }

    margin-top: 25px;
    color: ${(props) => props.theme['base-400']};
    font-size: 13.7px;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-500']};
  }

  @media (max-width: 425px) {
    width: 23.42rem;
    height: 25.62rem;
    img {
      width: 21.87rem;
    }

    h1 {
      font-size: 20px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 375px) {
    width: 20.62rem;
    img {
      width: 19rem;
    }
  }
`
