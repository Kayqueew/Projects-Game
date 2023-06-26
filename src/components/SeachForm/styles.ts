import styled from 'styled-components'

export const SeachFormContainer = styled.form`
  display: flex;
  align-items: center;

  max-width: 900px;
  margin: auto;

  gap: 10px;
  padding: 0 1.5rem;

  margin-top: 5.6rem;

  input {
    flex: 1;
    height: 3.43rem;

    font-size: 18px;

    border: 0;
    border-radius: 6px;
    padding: 10px;
    outline: none;
    background: ${(props) => props.theme['base-900']};
    color: ${(props) => props.theme['base-300']};

    &::placeholder {
      color: ${(props) => props.theme['base-500']};
    }

    &:focus {
      border: 2px solid ${(props) => props.theme.blue};
    }

    &:focus::placeholder {
      color: ${(props) => props.theme['base-300']};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 5px;
    width: 6.2rem;
    height: 3.43rem;
    padding: 10px;

    background: transparent;
    border: 1px solid ${(props) => props.theme.blue};
    border-radius: 6px;
    color: ${(props) => props.theme.blue};

    cursor: pointer;

    &:not(:disabled):hover {
      background: ${(props) => props.theme.blue};
      color: white;
    }
  }

  @media (max-width: 425px) {
    display: block;
  }
`
export const Test = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
`

export const SelectGenres = styled.select`
  height: 3.43rem;
  border-radius: 6px;
  padding: 5px;

  font-family: 'Nunito';
  font-weight: 700;

  background: ${(props) => props.theme['base-1000']};
  border: 1px solid ${(props) => props.theme['base-1000']};
  color: ${(props) => props.theme['base-300']};

  outline: none;
  cursor: inherit;

  cursor: pointer;

  @media (max-width: 425px) {
    height: 2.5rem;
    margin-top: 40px;
  }
`
