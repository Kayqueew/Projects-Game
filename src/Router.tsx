import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
