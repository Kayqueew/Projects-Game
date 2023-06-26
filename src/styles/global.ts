import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${(props) => props.theme['base-500']};

  }

  body {
    background-color: ${(props) => props.theme['base-800']};
    -webkit-font-smoothing: antialiased;

  }

  body, input, textarea, button {
    font: 400 1rem nunito, sans-serif
  }
`
