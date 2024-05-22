import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import icon from '../../assets/icon2.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/im1.png'
import icon3 from '../../assets/im2.png'
import log from '../../assets/log.png'
import Modal from '@mui/material/Modal';
const SideBar = () => {

  const [open,setOpen] = useState(1)
  const handleClick = (index) => () => {
    setOpen(index)
  }

  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false);
  return (
   <div className=' bg-[#161C27] px-3 fixed h-[100%]'>
     <div className=''>
      <div className=' flex-col flex items-center'>
      <img className=' mt-12' src={logo} alt="" />
        <div className=' flex flex-col gap-4 mt-24'>
            <Link to='/admin/request' onClick={handleClick(1)} className={` flex items-center justify-center gap-2 ${open === 1 ? "bg-[#ffeda42d] py-3 px-16 rounded-md text-[#FFEDA4]" : " text-center"}`}> {open === 1 ? <><img src={icon1} alt="" /></> : <><img src={icon} alt="" /></>} Request </Link>
            <Link to="/admin/packages" onClick={handleClick(2)} className={` flex items-center justify-center gap-2 ${open === 2 ? "bg-[#ffeda42d] py-3 px-16 rounded-md text-[#FFEDA4]" : " text-center"}`}> {open === 1 ? <><img src={icon2} alt="" /></> : <><img src={icon3} alt="" /></>} Packages</Link>
        </div>
        <button  onClick={handleOpen} className=' bg-[#3745571A] py-3 px-6 rounded-md mt-[24rem] flex items-center justify-center gap-2 '> <img src={log} alt="" /> Log Out</button>
      </div>
        
    </div>
     <div>
     <Modal
        open={open1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=' bg-[#191f29] w-[20%] mx-auto flex flex-col items-center py-6 px-6 rounded-2xl gap-6 mt-[13rem]'>
        <h1 className='text-[22px] font-medium'>Are You Sure</h1>
        <p>you are attempting to log out</p>
        <div className=' flex items-center gap-3'>
          <button onClick={handleClose} onClose={handleClose} className=' py-3 px-6 rounded-md bg-[#161C27]'>Cancel</button>
          <button className=' py-3 px-6 rounded-md bg-[#FFEDA4] text-black'>Log Out</button>
        </div>
        </div>
      </Modal>
     </div>
   </div>
  )
}

export default SideBar