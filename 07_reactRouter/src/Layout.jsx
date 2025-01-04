import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />  {/*outlet will use this format as base and add components dynamically here */}
    <Footer />
    </>
  )
}

export default Layout