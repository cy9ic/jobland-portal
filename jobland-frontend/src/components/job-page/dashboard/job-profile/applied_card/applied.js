import React from 'react'
import google from "../../../../../assets/google-color-icon.svg"
export default function AppliedCard() {
  return (
    <>
    
    <div className='flex place-content-evenly py-8 bg-gray-100 rounded-xl mx-16 text-xl p-5 font-semibold'>
        <span>1.</span>
        <span className=' flex ml-12'>
            <img src={google} className='mr-3 w-8 h-8' alt="" />
            Google</span>
        <span className='pl-16'>Software Developer</span>
        <span className='mr-5'>Pending</span>
        <span className='ml-5'>Applied Date</span>
    </div>
    </>
  )
}
