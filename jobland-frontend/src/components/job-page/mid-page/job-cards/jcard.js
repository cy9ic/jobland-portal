import React from 'react'
import icon from "../../../../assets/google-color-icon.svg"
export default function JobCard() {
  return (
    <>
    <button>
    <div className='flex p-5 mx-10 rounded-xl py-7  border-2 hover:border-[3px] hover:border-green-300 bg-white  place-content-evenly'>
    <div className='flex ml-[-60px]'>
        <img src={icon} className='w-16 h-16 flex justify-center align-middle bg-gray-100 object-contain rounded-xl p-3' alt="" />
    </div>
    <div className='flex flex-col justify-center'>
        <span className='text-xl font-semibold'>Senior Product Designer</span>
        <span className='text-gray-400'>Google Inc.</span>
    </div>
    <div className='flex flex-col justify-center'>
        <span className='text-xl font-semibold'>Chandigarh</span>
        <span className='text-gray-400'>Location</span>
    </div>
    <div className='flex flex-col justify-center'>
        <span className='text-xl font-semibold'>15LPA to 20LPA</span>
        <span className='text-gray-400'>Salary</span>
    </div>
    </div>
    </button>
    </>
  )
}