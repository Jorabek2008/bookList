import React from 'react'
import bookLogo from "../img/bookLogo.png"
import notification from "../img/notification.png"
import avatar from "../img/avatar.png"
import search from "../img/search.png"


function Navbar() {
  return (
    <div className='flex py-[12px] justify-between'>
        <div className="navbar-left flex items-center gap-[24px]">
            <img src={bookLogo} alt="" />
            <div className="flex items-center gap-[12px]">
              <img src={search} alt="" />
              <input type="text" placeholder='Search for any training you want ' className='text-white w-96 bg-transparent outline-none border-none' />
            </div>
        </div>
        <div className="navbar-right flex items-center gap-3 justify-between">
            <img className='cursor-pointer' src={notification} alt="" />
            <img className='cursor-pointer' src={avatar} alt="" />
        </div>
    </div>
  )
}

export default Navbar