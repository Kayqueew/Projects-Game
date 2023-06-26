import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { CardProvider } from './contexts/CardContext'
import { Router } from './Router'
import { HashRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HashRouter>
        <CardProvider>
          <Router />
        </CardProvider>
      </HashRouter>
    </ThemeProvider>
  )
}
