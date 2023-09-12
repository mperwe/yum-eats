import React from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'

const TopNav = () =>{
  return (
    <div className='max-w-[1520 px]mx-auto flex justify-between items-center p-4'>
     <div className='flex items-center' >
     <div className='cursor-pointer' >
            <AiOutlineMenu size={25}/>
    </div>
           
    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Yum
    <span> Eats </span>
    </h1>
    <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'> </div>
    </div>
    </div>
  )
}
  
export default TopNav
