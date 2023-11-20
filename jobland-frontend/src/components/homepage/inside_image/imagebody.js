import React from 'react'
import LSButton from '../lin_sup_buttons/buttons'
import { useNavigate } from 'react-router-dom'
export default function ImgBody() {
    const history = useNavigate();
  return (
    <>
    <div className="z-[99] absolute top-[30%] w-[100%] ">
        
    <ul className='flex-col text-center '>

        <li>
    <span className='text-8xl text-white  font-thin'> Discover your new job</span>
        </li>

        <li className='mt-5'>
    <span className='text-3xl text-gray-300 '>Find your perfect job or candidate now</span>
        </li>
    </ul>

    <ul className='flex w-[100%] mt-10 justify-center text-2xl gap-6'>
        <li className='flex  bg-white rounded-l-2xl' >
            <span className=' bg-white rounded-l-2xl m-4'>What job are u searching...</span>
        </li>

        <li className='flex bg-white gap-3  '>

            <span className='m-4' >
                Locations 
            </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-9 mt-5 text-green-600 font-bold h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
        </li>
        <li className='flex bg-white '>
            <span className='mt-4 px-5'>
                Categories....
            </span>
            </li>
            <li className='flex bg-green-500  px-8 text-white font-semibold rounded-r-xl'>
                <button>Search</button>
                </li>
    </ul>


    <ul className='flex w-[100%] mt-16 justify-center text-2xl gap-10 ' >
        <li>
         <LSButton text="Login Here" color="white"></LSButton>   
        </li>
        <li>
         <LSButton text="Signup Here" color="black"></LSButton>   

        </li>
    </ul>
    
        
    </div>
    
    </>
  )
}
