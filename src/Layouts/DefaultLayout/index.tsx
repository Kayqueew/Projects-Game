import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { Outlet } from 'react-router-dom'
import { SeachCard } from '../../components/SeachForm'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <SeachCard />
      <Outlet />
      <Footer />
    </div>
  )
}
