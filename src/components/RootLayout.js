import { Outlet } from 'react-router-dom'
import NavBarPanel from './NavBarPanel'

function RootLayout() {
  return (
    <>
      <NavBarPanel />
      <main className="container mt-5">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
