import React from 'react'
import {BsSearch, BsCamera2} from 'react-icons/bs'
import {MdOutlineCamera} from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <nav className='p-3 w-full flex justify-between items-center'>
        <div className='flex justify-between items-center cursor-pointer'>
            <BsCamera2 className='text-white' size={22}/>
            <p className='ml-3 text-purple-500 font-mono text-[.8rem] '>Photon-Gallary</p>
        </div>
        <div className='p-2 flex items-center justify-between w-[45%] bg-transparent border border-white rounded-lg'>
            <input type='text' className='px-1 outline-none w-[70%] text-white placeholder:text-white bg-transparent' placeholder='What image are you looking for?'></input>
            <BsSearch size={26} className='text-white'/>
        </div>
        <div className='cursor-pointer'>
            <MdOutlineCamera className='text-purple-600' size={26}/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
