import React from 'react'
import { Link } from 'react-router-dom'

const Btn = () => {
  return (
    <div>
        <Link to='/form' className=" hover:scale-[1.1] transition-all duration-200 ease-in-out bg-[#F6E9B9] text-black py-2 font-bold px-5 rounded-md b">
            Book Now
          </Link>
    </div>
  )
}

export default Btn