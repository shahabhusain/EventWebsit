import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Layout1 = () => {
  return (
    <div className=' flex justify-between w-full  bg-black h-screen'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Layout1