import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div>
        <Outlet />
        
    </div>
  )
}

export default Layout