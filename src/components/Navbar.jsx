import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)


    const handleNav = () =>{
        setNav(prevnav => !prevnav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BUILD ON.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>About</li>
            <li className='p-4 mx-3 w-[100px] font-bold'>Sign In</li>
            <li className='p-4'><button className='bg-[#ffff] text-black rounded-md font-medium w-[150px] h-[40px] mx-auto hover:scale-105 duration-200'>Get Started</button></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-700'>Home</li>
                <li className='p-4 border-b border-gray-700'>Company</li>
                <li className='p-4 border-b border-gray-700'>Resources</li>
                <li className='p-4 border-b border-gray-700'>About</li>
                <li className='p-4'>Contacts</li> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar