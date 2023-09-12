import React from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'

const TopNav = () =>{
  return (
    <div className='max-w-[1520]mx-auto flex justify-between items-center p-4'>
     <div className='flex items-center' >
     <div className='cursor-pointer' >
            <AiOutlineMenu size={25}/>
    </div>
           
    <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Yum
    <span> Eats </span>
    </h1>
    </div>
    </div>
  )
}
  
export default TopNav
