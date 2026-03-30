import React from 'react'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router'
export default function Navbar() {
  return (
    <nav className='flex justify-between px-[20px] py-[10px] p- space-x-10 items-center bg-sky-400 shadow-xl'>
      <div className="logo">
         <img src={logo}  className='w-[50px] rounded-[50%] shadow-xl' />
      </div>
      <div className="nav-items flex gap-x-[40px]"  >
        <Link to="/" className='font-semibold text-white hover:text-sky-100 ' >Movies</Link>
        <Link to="/watchlist" className='font-semibold text-white hover:text-sky-100'>Watchlist</Link>
      </div>
       
        
    </nav>
  )
}
