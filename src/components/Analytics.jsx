import React from 'react'
import laptop from '../assets/laptop.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[400px] mx-auto my-4' src={laptop} />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBORED</p>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates, 
                    officiis enim fuga consequatur nesciunt officia voluptatum nisi incidunt, 
                    excepturi perspiciatis? Labore saepe placeat ipsam voluptas rerum ducimus, 
                    natus nostrum!
                </p>
                <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:scale-105 duration-200'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics