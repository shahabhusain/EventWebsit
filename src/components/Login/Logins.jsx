import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Logins = () => {
  return (
    <div className=' flex flex-col items-center justify-center h-screen'>
      <div className=' mx-auto bg-[#161C27] md:w-[40%] w-[90%] rounded-xl'>
        <div className=' md:px-12 px-4 py-12 flex flex-col gap-1 items-center  '>
        <img src={logo} alt="" />
        <h1 className=' text-[33px] font-bold text-[#FFEDA4]'>Welcome Back</h1>
        <p>Please Log into your account</p>
        <form className=' flex flex-col gap-2 w-full'>
            <label>E-mail Address</label>
            <input className=' border-[2px] border-[#313131] bg-[#101010] py-3 px-6 w-full' type="text" placeholder='enter email address' />
            <label>Password</label>
            <input className=' border-[2px] border-[#313131] bg-[#101010] py-3 px-6 w-full' type="text" placeholder='enter your password' />
             <Link to="/admin/request" className=' bg-[#FFEDA4] py-3 px-6 text-black rounded-md mt-4 text-center'>Login </Link>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Logins