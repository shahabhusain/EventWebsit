import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Layout1 = () => {
  return (
    <div className=' flex gap-4 bg-black'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Layout1